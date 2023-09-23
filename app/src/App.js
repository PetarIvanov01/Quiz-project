import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"
import WindowRoot from "./styles/body/Window.style"
import { Route, Routes } from 'react-router-dom'
import { NavigationProvider } from "./context/navigation"
import TransitionToGame from "./components/View/TransitionComponent"
import GamePlay from "./components/View/GameComponents/Game"
import CompleteGame from "./components/View/GameFinish/CompleteGame"

export default function App() {

  return (
    <>
      <WindowRoot>
        <NavigationProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route element={<TransitionToGame />}>
              <Route path="/game/:category" element={<GamePlay />} />
            </Route>
            <Route path="/game/:category/complete" element={<CompleteGame />} />
          </Routes>
        </NavigationProvider>
      </WindowRoot>
      <Footer />
    </>
  )
}

