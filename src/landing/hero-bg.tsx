import { useCallback } from 'react';
import Particles from 'react-tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';
import * as React from 'react';
import './hero-bg.module.scss';
import {yetiMainTheme} from '../theme/theme';

const particlesConfig: ISourceOptions = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: 'repulse',
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    style: {
        position: 'absolute',
    },
    particles: {
        color: {
            value: yetiMainTheme.palette.background.default,
        },
        links: {
            color: yetiMainTheme.palette.secondary.main,
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: 'none',
            enable: true,
            outModes: {
                default: 'bounce',
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 1000,
            },
            value: 40,
        },
        opacity: {
            value: 0.3,
        },
        shape: {
            type: 'circle',
        },
    },
    detectRetina: true,
};


function HeroBg () {

    const ref = useCallback(async (engine: Engine): Promise<void> => {
        await loadLinksPreset(engine);
    }, []);

    return <Particles id="hero-particles" init={ref} options={ particlesConfig }/>;
}

export default HeroBg;
