import React, { Component } from 'react'
import Coin from './Coin';

class CoinFlip extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            randCoin : null,
            flips    : 0,
            heads    : 0,
            tails    : 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    flipCoin() {
        const coins = ['heads', 'tails'];
        let randCoin = Math.floor(Math.random() * coins.length);
        randCoin = coins[randCoin];

        this.changeState(randCoin);
    }

    changeState(randCoin) {
        this.setState(current => (
            {
                randCoin : randCoin,
                flips : current.flips + 1,
                heads : current.heads + (randCoin === 'heads' ? 1 : 0),
                tails : current.tails + (randCoin === 'tails' ? 1 : 0),
            }));
    }

    handleClick(e) {
        this.flipCoin();
    }

    render() {
        
        
        return (
            <div>
                <h1>Coin Flip</h1>
                {this.state.randCoin && <Coin coin={this.state.randCoin} />}
                
                <button onClick={this.handleClick}>Click here to flip</button>
                <p>Out of {this.state.flips} flips, there have been {this.state.heads} heads and {this.state.tails}.</p>
            </div>
        )
    }
}

export default CoinFlip
