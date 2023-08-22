// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {tossCount: 0, result: true, headsCount: 0, tailsCount: 0}

  onClickToss = () => {
    const randomNum = Math.ceil(Math.random() * 10)
    if (randomNum % 2 === 0) {
      this.setState(prevState => ({
        headsCount: prevState.headsCount + 1,
        result: true,
      }))
    } else {
      this.setState(prevState => ({
        tailsCount: prevState.tailsCount + 1,
        result: false,
      }))
    }

    this.setState(prevState => ({
      tossCount: prevState.tossCount + 1,
    }))
  }

  render() {
    const {tossCount, result, headsCount, tailsCount} = this.state
    const coinResult = result
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
    return (
      <div className="bg-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="toss-heading">Heads (or) Tails</p>
          <img src={coinResult} className="coin-img" alt="toss result" />
          <button type="button" className="button" onClick={this.onClickToss}>
            Toss Coin
          </button>
          <div className="results-container">
            <p className="result">Total: {tossCount}</p>
            <p className="result">Heads: {headsCount}</p>
            <p className="result">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
