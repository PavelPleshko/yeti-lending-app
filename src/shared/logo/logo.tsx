import React from 'react';
import './logo.scss';
import logoSrc from '../../static/images/logo.svg';

function Logo (props: any) {

    return <div className="Logo">
        { props.withBackground && <div className="Logo__underlay"/> }
        <img src={ logoSrc } className='Logo__image' alt="Yeti logo"/>
    </div>;
}

export default Logo;
