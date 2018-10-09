import * as React from "react";
import * as coreCss from '../../core.scss';
import * as headerCss from './header.scss';

export const Header = () => {
    return (
        <header className={coreCss.header} >
            <div className={coreCss.sectionContent}>This is header</div>
        </header>
    );
}