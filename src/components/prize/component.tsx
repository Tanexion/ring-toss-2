import * as React from 'react';
import './styles.css';

interface Props {
  imgSrc: string;
  prizeType: string;
  onPrizeHit: (prizeType: string) => void;
}

export class Prize extends React.Component<Props> {
  render() {
    const prizeID = this.props.prizeType === 'gift' ? 'prize_gift' : 'prize_product';
    return (
      <div
        onDrop={this.handleDrop}
        onDragOver={this.handleDragover}
        id={prizeID}
      >
        <img
          className="prize"
          src={this.props.imgSrc}
          alt="prize"
        />
      </div>
    );
  }

  handleDrop = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
    this.props.onPrizeHit(event.currentTarget.id);
  }

  handleDragover = (event: React.DragEvent<HTMLElement>) => {
    event.preventDefault();
  }
}