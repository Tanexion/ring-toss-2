import * as React from 'react';
// @ts-ignore
import ring from '../../assets/images/ring.png';
// @ts-ignore
import ringDrag from '../../assets/images/ring_draggable.png';
import './styles.css';

interface Props {
  reportMiss: () => void;
  canToss: boolean;
}

export class Ring extends React.Component<Props> {
  render() {
    if (!this.props.canToss) {
      return null;
    }

    return (
      <div
        className="ring"
        onDragStart={this.handleDrag}
        onDragEnd={this.handleDragEnd}
        draggable={true}
      >
        <img
          className="ring__wrapper"
          src={ring}
          alt="toss ring"
        />
      </div>
    );
  }

  handleDrag = (event: React.DragEvent<HTMLElement>) => {
    const img = new Image(); 
    img.src = ringDrag;
    event.dataTransfer.dropEffect = 'link'; 
    event.dataTransfer.setDragImage(img, 25, 25);
  }

  handleDragEnd = (event: React.DragEvent<HTMLElement>) => {
    if (event.dataTransfer.dropEffect === 'none') {
      this.props.reportMiss();
    }
  }
}