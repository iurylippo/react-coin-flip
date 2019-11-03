import React, { Component } from 'react';
import coinHeads from './assets/images/heads.jpg';
import coinTails from './assets/images/tails.jpg';
import './Coin.css';

class Coin extends Component {
    static defaultProps = {
        coin : 'heads'
    }
    render() {
        let coin = '';
        this.props.coin === 'heads' ?  coin = coinHeads : coin = coinTails; 
        return (
            <div>
                <img className="Coin-img" src={coin} alt={this.props.coin}/>
            </div>
        )
    }
}

export default Coin
