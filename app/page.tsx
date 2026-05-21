export default function Home() {
  return (
    <main className="bg-white text-gray-900">

      {/* HERO */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 text-center">

        <div className="mb-8">
          <img
            src="/logo.png"
            alt="FE DIGITAL"
            className="w-52 mx-auto"
          />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight max-w-5xl">
          Rollos y cintas para máquinas registradoras
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl">
          Soluciones confiables en rollos térmicos, bond y cintas para negocios y puntos de venta.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">

          <a
            href="https://wa.me/529844088162"
            target="_blank"
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-full transition"
          >
            Cotizar por WhatsApp
          </a>

          <a
            href="#productos"
            className="border border-gray-300 hover:border-gray-500 px-8 py-4 rounded-full transition"
          >
            Ver productos
          </a>

        </div>

      </section>

      {/* PRODUCTOS */}
      <section
        id="productos"
        className="py-28 px-6 max-w-7xl mx-auto"
      >

        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold">
            Productos
          </h2>

          <p className="mt-4 text-gray-600">
            Calidad y compatibilidad para negocios de todos los tamaños.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border rounded-3xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">
              Rollos Térmicos
            </h3>

            <p className="text-gray-600">
              Ideales para puntos de venta, tickets y comprobantes de compra.
            </p>
          </div>

          <div className="border rounded-3xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">
              Rollos Bond
            </h3>

            <p className="text-gray-600">
              Compatibles con impresoras tradicionales y sistemas administrativos.
            </p>
          </div>

          <div className="border rounded-3xl p-8 hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold mb-4">
              Cintas
            </h3>

            <p className="text-gray-600">
              Cintas de impresión para diferentes modelos de máquinas registradoras.
            </p>
          </div>

        </div>

      </section>

      {/* BENEFICIOS */}
      <section className="bg-gray-50 py-28 px-6">

        <div className="max-w-6xl mx-auto">

          <div className="text-center mb-16">

            <h2 className="text-4xl font-bold">
              ¿Por qué FE DIGITAL?
            </h2>

          </div>

          <div className="grid md:grid-cols-4 gap-8">

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Calidad consistente
              </h3>

              <p className="text-gray-600">
                Materiales confiables para impresión clara y duradera.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Entrega confiable
              </h3>

              <p className="text-gray-600">
                Atención rápida y seguimiento puntual de pedidos.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Compatibilidad garantizada
              </h3>

              <p className="text-gray-600">
                Productos compatibles con múltiples equipos y marcas.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-xl mb-3">
                Atención personalizada
              </h3>

              <p className="text-gray-600">
                Soporte directo para encontrar la solución adecuada.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* COBERTURA */}
      <section className="py-28 px-6">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8">
            Cobertura
          </h2>

          <div className="flex flex-wrap justify-center gap-4 text-lg">

            <span className="border px-6 py-3 rounded-full">
              Ciudad de México
            </span>

            <span className="border px-6 py-3 rounded-full">
              Estado de México
            </span>

            <span className="border px-6 py-3 rounded-full">
              Querétaro
            </span>

            <span className="border px-6 py-3 rounded-full">
              Jalisco
            </span>

            <span className="border px-6 py-3 rounded-full">
              Quintana Roo
            </span>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-blue-700 text-white py-24 px-6 text-center">

        <h2 className="text-4xl font-bold">
          Solicita una cotización
        </h2>

        <p className="mt-4 text-blue-100">
          Atención rápida por WhatsApp.
        </p>

        <a
          href="https://wa.me/529844088162"
          target="_blank"
          className="inline-block mt-10 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition"
        >
          Contactar ahora
        </a>

      </section>

      {/* FOOTER */}
      <footer className="py-12 px-6 border-t">

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-6">

          <div>
            <h3 className="font-bold text-xl">
              FE DIGITAL
            </h3>

            <p className="text-gray-600 mt-2">
              Rollos y cintas para máquinas registradoras
            </p>
          </div>

          <div className="text-gray-600">
            <p>+52 1 984 408 8162</p>
            <p>coraojitos1@hotmail.com</p>
          </div>

        </div>

      </footer>

    </main>
  )
}