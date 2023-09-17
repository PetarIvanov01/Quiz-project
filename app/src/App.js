import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import WindowRoot from "./styles/body/Window.style"
import { Route, Routes } from 'react-router-dom'
import GamePlay from "./components/View/Game"
import { NavigationProvider } from "./context/navigation"

export default function App() {

  return (
    <>
      <WindowRoot>
        <NavigationProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/game" element={<GamePlay />} />
          </Routes>
        </NavigationProvider>
      </WindowRoot>
      <Footer />
    </>
  )
}

