import Header from "./components/Header.jsx"
import Intro from "./components/Intro.jsx"
import Aboutme from "./components/Aboutme.jsx"
import Skillsandtools from "./components/Skillsandtools.jsx"
import Contact from "./components/Contact.jsx"

function App() {
  return (
    <>
    <body className="text-xl flex flex-col items-center box-border">
        <Header />
        <Intro />
        <Aboutme />
        <Skillsandtools />
        <Contact />
      </body>
    </>
  )
}

export default App
