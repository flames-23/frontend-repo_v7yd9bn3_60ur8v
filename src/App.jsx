import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Services, Work, Contact, Footer } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
