import { Button, Grid } from '@mui/material';
import * as React from 'react';
import Logo from '../../shared/logo/logo';
import './footer.scss';

function Footer () {

    return <div className="Footer">
        <Grid container spacing={ 3 }>
            <Grid item xs={ 2 }>
                <div className="Footer__logo-section">
                    <Logo withBackground withLink/>
                </div>
            </Grid>

            <Grid item xs={ 2 }>
                <div className="Footer__info-section">
                    <label id="protocol-links-label">
                        Protocol
                    </label>
                    <ul aria-labelledby="protocol-links-label">
                        <li>
                            <a href="/" target="_blank">Documentation</a>
                        </li>
                        <li>
                            <a href="/" target="_blank">Yeti token</a>
                        </li>
                        <li>
                            <a href="/" target="_blank">For developers</a>
                        </li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={ 2 }>
                <div className="Footer__info-section">
                    <label id="protocol-links-label">
                        Quick links
                    </label>
                    <ul aria-labelledby="protocol-links-label">
                        <li>
                            <a href="/" target="_blank">Pools</a>
                        </li>
                        <li>
                            <a href="/" target="_blank">Asset prices</a>
                        </li>
                    </ul>
                </div>
            </Grid>

            <Grid item xs={ 2 }>
                <div className="Footer__info-section">
                    <label id="protocol-links-label">
                        Community
                    </label>
                    <ul aria-labelledby="protocol-links-label">
                        <li>
                            <a href="/" target="_blank">Github</a>
                        </li>
                        <li>
                            <a href="/" target="_blank">Discord</a>
                        </li>
                    </ul>
                </div>
            </Grid>

            <Grid item>
                <div className="Footer__action-section">
                    <Button variant="contained" color="secondary" href="/app">Go to app</Button>
                </div>
            </Grid>
        </Grid>
    </div>;
}

export default Footer;
