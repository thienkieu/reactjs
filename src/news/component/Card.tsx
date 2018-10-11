import * as React from "react";
import Description from './Description';
import Media from './Media';
import Title from './Title';

export interface CardProps {
    theme: any,
}

class Card  extends React.Component<CardProps>{
    render() {
        return (
            <div>
                <Title {...this.props}/>
                <Media {...this.props}/>
                <Description {...this.props}/>
            </div>
        );
    }
}

export default Card; 
