import * as React from "react";

export interface DescriptionProps {
    theme: any,
    description: string,
}

class Description  extends React.Component<DescriptionProps>{
    render() {
        return (
            <div>
                {this.props.description}
            </div>
        );
    }
}

export default Description; 