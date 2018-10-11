import * as React from "react";

export interface TitleProps {
    theme: any,
    title: string,
}

class Title  extends React.Component<TitleProps>{
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
            </div>
        );
    }
}

export default Title; 