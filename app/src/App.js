import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import WindowRoot from "./styles/body/Window.style"

export default function App() {

  return (
    <>
      <WindowRoot>
        <Header/>
        <Main/>
      </WindowRoot>
      <Footer/>
    </>
  )
}

