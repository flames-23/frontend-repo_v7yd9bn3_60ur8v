import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-blue-50" />
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-blue-200 blur-3xl opacity-40" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-black/10 blur-3xl opacity-30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <span className="inline-flex items-center text-xs uppercase tracking-widest text-blue-600 font-semibold">Solo studio • Modern web</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-gray-900">
            Affordable websites and branding for ambitious small businesses
          </h1>
          <p className="text-lg text-gray-600 max-w-xl">
            One person. Smart tools. Big results. I design and build fast, polished sites and simple brand systems that help you look sharp and convert.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#contact" className="inline-flex items-center rounded-full bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700 transition-colors">
              Get a Quote
            </a>
            <a href="#work" className="inline-flex items-center rounded-full border border-gray-300 text-gray-900 px-6 py-3 font-medium hover:border-gray-400">
              See Work
            </a>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" />
        </div>
      </div>
    </section>
  )
}
