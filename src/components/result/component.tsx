import * as React from 'react';
// @ts-ignore
import miss from '../../assets/images/miss.png';
// @ts-ignore
import win_gift from '../../assets/images/win_gift.png';
// @ts-ignore
import win_product from '../../assets/images/win_product.png';
import './styles.css';

interface Props {
  resultType: string;
  dismissResult: () => void;
}

export class Result extends React.Component<Props> {
  render() {
    let src = miss;
    if (this.props.resultType === 'gift') {
      src = win_gift;
    } else if (this.props.resultType === 'product') {
      src = win_product;
    } else {
      src = miss;
    }
    return (
      <div className="result">
        <img
          className="result__image"
          src={src}
          onClick={this.props.dismissResult}
          alt="result screen"
        />
      </div>
    );
  }
}