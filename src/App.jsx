import Background from "./Components/Background.jsx"
import Foreground from "./Components/Foreground.jsx"
import Header from "./Components/Header.jsx"
function App() {
  return (
    <>
      <div className="h-screen w-screen relative">
      <Background />
      <Foreground />
      <Header />
      </div>
    </>
  )
}

export default App
