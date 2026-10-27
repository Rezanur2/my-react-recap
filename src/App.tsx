import FilterSection from "./components/FilterSection"
import JobsSection from "./components/JobsSection"
import Navbar from "./components/Navbar"

function App() {

  return ( 
    <div className="mx-auto">
      <Navbar />
      <FilterSection />
      <JobsSection />
    </div>
  )
}

export default App
