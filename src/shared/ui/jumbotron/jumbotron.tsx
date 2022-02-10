import * as React from 'react';
import "./jumbotron.scss";


function Jumbotron (props: any) {


    return (
        <div className="Jumbotron">
            {props.children}
        </div>
    );
}

export default Jumbotron;
