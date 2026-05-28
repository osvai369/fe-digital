import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { Redis } from "@upstash/redis";

const dataDir = process.env.VERCEL ? "/tmp" : path.join(process.cwd(), "data");
const counterFile = path.join(dataDir, "visits.txt");
const redisCounterKey = "visits:home";
const redisRestUrl = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const redisRestToken = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

const hasRedisCredentials = Boolean(
  redisRestUrl && redisRestToken,
);

const redis = hasRedisCredentials
  ? new Redis({
      url: redisRestUrl as string,
      token: redisRestToken as string,
    })
  : null;

let writeQueue: Promise<number> = Promise.resolve(0);

async function ensureCounterFile() {
  await mkdir(dataDir, { recursive: true });

  try {
    await readFile(counterFile, "utf8");
  } catch {
    await writeFile(counterFile, "0", "utf8");
  }
}

async function readCounterValue() {
  const rawValue = await readFile(counterFile, "utf8");
  const parsed = Number.parseInt(rawValue.trim(), 10);

  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

async function incrementWithRedis() {
  if (!redis) {
    return null;
  }

  try {
    const nextValue = await redis.incr(redisCounterKey);
    return typeof nextValue === "number" ? nextValue : Number(nextValue);
  } catch {
    return null;
  }
}

export async function incrementAndGetVisits() {
  const redisValue = await incrementWithRedis();
  if (typeof redisValue === "number" && Number.isFinite(redisValue)) {
    return redisValue;
  }

  writeQueue = writeQueue.then(async () => {
    await ensureCounterFile();
    const currentValue = await readCounterValue();
    const nextValue = currentValue + 1;
    await writeFile(counterFile, String(nextValue), "utf8");
    return nextValue;
  });

  return await writeQueue;
}