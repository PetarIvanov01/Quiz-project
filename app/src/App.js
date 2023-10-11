import WindowRoot from "./styles/body/Window.style"
import { NavigationProvider } from "./context/navigation"
import Header from "./components/Header/Header"
import { Route, Routes } from 'react-router-dom'
import Main from "./components/Main/Main"
import TransitionToGame from "./components/View/TransitionComponent"
import GamePlay from "./components/View/GameComponents/Game"
import CompleteGame from "./components/View/GameFinish/CompleteGame"
import Footer from "./components/Footer/Footer"
import LoginView from "./components/View/Login/Login"
import RegsiterView from "./components/View/Register/Register"
import LeaderboardView from "./components/View/Leaderboard/LeaderboardView"

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
            <Route path="/leaderboard" element={<LeaderboardView />} />
            <Route path="/login" element={<LoginView />} />
            <Route path="/register" element={<RegsiterView />} />
          </Routes>
        </NavigationProvider>
      </WindowRoot>
      <Footer />
    </>
  )
}

