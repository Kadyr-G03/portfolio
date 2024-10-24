import Header from "./components/Header.jsx"
import Intro from "./components/Intro.jsx"
import Gallery from "./components/Gallery.jsx"
import Aboutme from "./components/Aboutme.jsx"
import Skillsandtools from "./components/Skillsandtools.jsx"
import Contact from "./components/Contact.jsx"
import Nav from "./components/Nav.jsx"

function App() {
  return (
    <>
    <body className="text-xl flex flex-col items-center box-border">
        <Header />
        <Intro />
        <Gallery />
        <Aboutme />
        <Skillsandtools />
        <Contact />
        <Nav />
      </body>
    </>
  )
}

export default App
