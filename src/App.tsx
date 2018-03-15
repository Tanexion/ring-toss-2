import * as React from 'react';
// @ts-ignore
import * as logo from './assets/images/logo.png';
// @ts-ignore
import { Ring } from './components/ring';
// @ts-ignore
import { PrizeGrid } from './components/prize-grid';
// @ts-ignore
import { Result } from './components/result';
// @ts-ignore
import ring from './assets/images/ring.png';
import './App.css';

interface Props {}

interface State {
  isTossing: boolean;
  isShowingResult: boolean;
  prizeWon: string;
  canToss: boolean;
  remainingTries: number;
}

class App extends React.Component<Props, State> {
  public state: State = {
    isTossing: true,
    isShowingResult: false,
    prizeWon: 'none',
    canToss: true,
    remainingTries: 3,
  };

  public render() {
    // @ts-ignore
    let resultSection = null;
    if (this.state.prizeWon !== 'none') {
      resultSection = (
        <div className="App__result">
          <Result
            resultType={this.state.prizeWon}
            dismissResult={this.dismissResult}
          />
        </div>
      );
    }
    return (
      <div className="App">
        {resultSection}
        <div className="App__logo-wrapper">
          <img
            className="App__logo"
            src={logo}
            alt="app logo"
          />
        </div>
        <PrizeGrid onPrizeHit={this.handlePrizeHit} />
        <Ring
          reportMiss={this.handleMiss}
          canToss={this.state.canToss}
        />
        <div className="App__tries-wrapper">
          <img
            className="App__tries-img"
            src={ring}
            alt="tries remaining"
          />
          <p className="App__tries-text">{`X ${this.state.remainingTries}`}</p>
        </div>
      </div>
    );
  }

  private dismissResult = () => {
    this.setState({ prizeWon: 'none' });
  }

  private handlePrizeHit = (prizeType: string) => {
    if (prizeType === 'prize_gift') {
      this.setState({
        prizeWon: 'gift',
        canToss: false
      });
    } else {
      this.setState({
        prizeWon: 'product',
        canToss: false
      });
    }
  }

  private handleMiss = () => {
    const newTryAmount = this.state.remainingTries - 1;
    const canToss = newTryAmount >= 1;
    this.setState({
      prizeWon: 'miss',
      remainingTries: newTryAmount,
      canToss,
    });
  }
}

export default App;
