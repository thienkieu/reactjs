import * as React from "react";
import { withTheme } from 'libs/index';

interface Props {
}

class Sticky extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
    }
    
    handleScroll(event: any){
        if (window.pageYOffset > this.stickyOffset){
            this.element.current.classList.add('sticky');
        } else {
            this.element.current.classList.remove('sticky');
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
        this.stickyOffset = this.element.current.offsetTop;
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        let style = {
            minHeight: '70px',
            background: 'gray',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '15px',
            paddingRight: '15px',
            justifyContent: 'center',
        };

        return (
            <div style={style} ref={this.element}>this is sticky header</div>
        );
    }

    private element = React.createRef<HTMLDivElement>();
    private stickyOffset = 0;
};

export default withTheme(Sticky);