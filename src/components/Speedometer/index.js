// Write your code here
import {Components} from 'react'

import './index.css'

class Speedometer extends Components {
  state = {count: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onDecrement = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          className="image"
          alt="speedometer"
        />
        <h1>The Speed is{count}mph</h1>
        <p>Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button className="button1" onClick={this.onIncrement}>
            Accelerate
          </button>
          <button className="button2" onClick={this.onDecrement}>
            Apply Breaks
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
