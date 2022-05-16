import React, { useContext } from 'react';
import './logo.scss';
import { AppContext } from '../../config/app.config';
import logoSrc from '../../static/images/logo.svg';

function Logo (props: any) {

    const { appConfig } = useContext(AppContext);

    return <div className="Logo">
        <div className="Logo__image-wrapper">
            { props.withBackground && <div className="Logo__underlay"/> }
            <img src={ logoSrc } className='Logo__image' alt="Yeti logo"/>
        </div>
        { props.withLink && <a href="/" className="Logo__brand-link" aria-label="Home">{ appConfig.name }</a> }
    </div>;
}

export default Logo;
