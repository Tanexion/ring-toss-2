// @ts-ignore
import gift from '../../assets/images/gift.png';
// @ts-ignore
import product2 from '../../assets/images/product2.png';
// @ts-ignore
import product3 from '../../assets/images/product3.png';
// @ts-ignore
import product4 from '../../assets/images/product4.png';
// @ts-ignore
import product5 from '../../assets/images/product5.png';
// @ts-ignore
import product6 from '../../assets/images/product6.png';
// @ts-ignore
import product7 from '../../assets/images/product7.png';
import * as React from 'react';
// @ts-ignore
import { Prize } from '../prize';
import './styles.css';

interface Props {
  onPrizeHit: (prizeType: string) => void;
}

export class PrizeGrid extends React.Component<Props> {
  public render() {
    return (
      <div className="prize-grid">
        <div className="prize-grid__gift">
          <Prize
            imgSrc={gift}
            prizeType="gift" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__gift2">
          <Prize
            imgSrc={gift}
            prizeType="gift" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__gift3">
          <Prize
            imgSrc={gift}
            prizeType="gift" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__product2">
          <Prize
            imgSrc={product2}
            prizeType="product" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__product3">
          <Prize
            imgSrc={product3}
            prizeType="product" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__product4">
          <Prize
            imgSrc={product4}
            prizeType="product" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__product5">
          <Prize
            imgSrc={product5}
            prizeType="product" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__product6">
          <Prize
            imgSrc={product6}
            prizeType="product" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__product8">
          <Prize
            imgSrc={product6}
            prizeType="product" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
        <div className="prize-grid__product7">
          <Prize
            imgSrc={product7}
            prizeType="product" 
            onPrizeHit={this.props.onPrizeHit}
          />
        </div>
      </div>
    );
  }
}
