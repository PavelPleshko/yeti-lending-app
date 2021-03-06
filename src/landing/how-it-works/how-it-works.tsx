import { Grid } from '@mui/material';
import React from 'react';

import hiwChoosePoolImg from '../../static/images/hiw-choose-pool.svg';
import hiwDepositImg from '../../static/images/hiw-deposit.svg';
import hiwGetYieldsImg from '../../static/images/hiw-get-yields.svg';
import './how-it-works.scss';


const steps = [
    {
        title: 'Choose the pool',
        description: `There are pools that are native to Yeti protocol as well as external. Yeti tries to maximize your yields by
        providing most up-to-date data from other protocols and help you make a decision.`,
        image: hiwChoosePoolImg,
    },
    {
        title: 'Provide liquidity',
        description: `Deposit your funds in one of the pools. 
      You will get the equal amount of YTokens which will be a proof of ownership over the underlying asset`,
        image: hiwDepositImg,
    },
    {
        title: 'Get yields',
        description: `Once your funds are in a certain pool you will see your balance grow. 
      This growth depends on utilization of the pool by borrowers and your share in total deposits in this pool.`,
        image: hiwGetYieldsImg,
    },
];

function HowItWorks (): JSX.Element {

    return <div className="Steps__container">
        { steps.map((step, i) => {
            const isEven = i % 2 === 0;
            const isFirst = i === 0;
            const isLast = i === steps.length - 1;

            const content = (
                <Grid className="Step__content" item sm={ 12 } md={ 4 }>
                    <h3 className="Step__content-title">{ step.title }</h3>
                    <p className="Step__content-description">
                        { step.description }
                    </p>
                </Grid>
            );
            const image = (
                <Grid className="Step__image" item sm={ 12 } md={ 4 }>
                    <img src={ step.image } width="100%" height="100%" alt=""/>
                </Grid>
            );

            return <Grid className="Step" container component="section" direction="row" key={ i }>

                { isEven ? image : content }

                <Grid className={['Step__count', isFirst ? `Step__count--first` : '', isLast ? 'Step__count--last' : ''].join(' ')}
                      alignItems="center" justifyContent="center" item sm={false} md={ 2 }>
                    <span className="Step__count-leading-bar" />
                    <span className="Step__count-point">{ i + 1 }</span>
                    <span className="Step__count-trailing-bar" />
                </Grid>

                { isEven ? content : image }

            </Grid>;
        }) }
    </div>;
}


export default HowItWorks;
