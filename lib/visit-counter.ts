import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const dataDir = path.join(process.cwd(), "data");
const counterFile = path.join(dataDir, "visits.txt");

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

export function incrementAndGetVisits() {
  writeQueue = writeQueue.then(async () => {
    await ensureCounterFile();
    const currentValue = await readCounterValue();
    const nextValue = currentValue + 1;
    await writeFile(counterFile, String(nextValue), "utf8");
    return nextValue;
  });

  return writeQueue;
}