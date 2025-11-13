import { Code2, Sparkles, Search, Wrench } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">A solo studio powered by smart tools</h2>
            <p className="text-gray-600">
              You work directly with me—no handoffs, no layers. I use modern design systems, low overhead, and automation to deliver clean, effective websites quickly and affordably.
            </p>
            <ul className="grid grid-cols-2 gap-3 text-sm text-gray-700">
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />Fast turnaround</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />Transparent pricing</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />Conversion-focused</li>
              <li className="flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-blue-600" />Ongoing support</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-black/5 p-6 bg-white">
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code2, title: 'Web Design', desc: 'Clean, fast, responsive websites built to convert.' },
                { icon: Sparkles, title: 'Branding', desc: 'Logos, colors, and style that feel like you.' },
                { icon: Search, title: 'SEO', desc: 'Practical on-page SEO and site structure.' },
                { icon: Wrench, title: 'Maintenance', desc: 'Updates, fixes, and small improvements on call.' },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="rounded-xl border border-black/5 p-4 hover:shadow-sm transition-shadow">
                  <Icon className="w-6 h-6 text-blue-600" />
                  <h3 className="mt-3 font-medium text-gray-900">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const items = [
    { title: 'Web Design', desc: 'Modern, responsive, and fast. Built for clarity and conversion.' },
    { title: 'Branding', desc: 'Simple brand systems: logo, color, typography, guidelines.' },
    { title: 'SEO', desc: 'Technical basics, clean structure, and content guidance.' },
    { title: 'Maintenance', desc: 'Keep things fresh: updates, tweaks, and small features.' },
  ]
  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-blue-50/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Services</h2>
        <p className="text-gray-600 mt-2">Straightforward packages sized for small business needs.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="group rounded-2xl border border-black/5 bg-white p-6 hover:-translate-y-1 transition-all">
              <div className="h-10 w-10 rounded-lg bg-blue-600/10 ring-1 ring-blue-600/20 grid place-items-center">
                <span className="text-blue-600 font-semibold">{it.title[0]}</span>
              </div>
              <h3 className="mt-4 font-medium text-gray-900">{it.title}</h3>
              <p className="text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Work() {
  const projects = [
    { title: 'Cafe Bloom', tag: 'Local Cafe', img: 'https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop' },
    { title: 'FitWave', tag: 'Fitness Studio', img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1600&auto=format&fit=crop' },
    { title: 'Leaf & Co', tag: 'Eco Shop', img: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop' },
  ]
  return (
    <section id="work" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Recent work</h2>
            <p className="text-gray-600 mt-2">A few quick snapshots. More on request.</p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm hover:border-gray-400">Start a project</a>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="group overflow-hidden rounded-2xl border border-black/5 bg-white">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <div className="text-sm text-gray-500">{p.tag}</div>
                <div className="font-medium text-gray-900">{p.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contact() {
  const whatsapp = 'https://wa.me/15551234567?text=Hi%20there!%20I%27d%20like%20a%20quote.'
  const email = 'mailto:studio@example.com?subject=Project%20Inquiry&body=Hi!%20I%27d%20like%20to%20start%20a%20project.'

  return (
    <section id="contact" className="py-20 bg-gradient-to-t from-white to-blue-50/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Let's build something great</h2>
        <p className="text-gray-600 mt-2">Tell me about your business and goals. I'll reply within one business day.</p>

        <form onSubmit={(e) => e.preventDefault()} className="mt-8 space-y-4 text-left">
          <div>
            <label className="block text-sm font-medium text-gray-700">Your name</label>
            <input required type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="Jane Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email or phone</label>
            <input required type="text" className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="jane@company.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Project details</label>
            <textarea required rows={4} className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600" placeholder="A few lines about your business and what you need." />
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
            <div className="flex gap-3">
              <a href={whatsapp} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-full bg-blue-600 text-white px-6 py-3 font-medium hover:bg-blue-700">Message on WhatsApp</a>
              <a href={email} className="inline-flex items-center rounded-full border border-gray-300 px-6 py-3 font-medium hover:border-gray-400">Email</a>
            </div>
            <button type="submit" className="inline-flex items-center rounded-full bg-black text-white px-6 py-3 font-medium hover:bg-gray-900">Send</button>
          </div>
        </form>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="py-10 border-t border-black/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-sm text-gray-600">© {new Date().getFullYear()} BlueStudio. All rights reserved.</div>
        <div className="flex items-center gap-4 text-sm">
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-600">Twitter/X</a>
          <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-600">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-gray-700 hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  )
}
