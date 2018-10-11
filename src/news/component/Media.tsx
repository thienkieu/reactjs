import * as React from "react";
import Img from './Img';
import Video from './Video';

export interface CardProps {
    theme: any,
    media: any,
}

class Card  extends React.Component<CardProps>{
    renderImage() {
        if (this.props.media.type === 'img') {
            return <Img {...this.props}/>;
        }
    }
    
    renderVideo() {
        if (this.props.media.type === 'video') {
            return <Video {...this.props}/>
        }
    }

    render() {
        return (
            <div>
                {this.renderImage()}
                {this.renderVideo()}
            </div>
        );
    }
}

export default Card; 