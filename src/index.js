import React from "react"
import ReactDOM from "react-dom"
import { CountdownCircleTimer } from "react-countdown-circle-timer"

import "./styles.css"

function App() {
  return (
    <div className='App'>
      <div className='timer-wrapper'>
        <CountdownCircleTimer
          isPlaying
          size={720}
          duration={12}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10]}
          strokeWidth={24}
          onComplete={() => ({ shouldRepeat: true, delay: 1 })}>
          {({ remainingTime }) => <h1>{remainingTime}</h1>}
        </CountdownCircleTimer>
      </div>
    </div>
  )
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)
