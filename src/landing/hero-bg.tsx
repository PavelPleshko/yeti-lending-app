import { useCallback, useMemo } from 'react';
import * as React from 'react';
import Particles from 'react-tsparticles';
import type { Engine, ISourceOptions } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';
import { useAppTheme } from '../theme';

import { ThemeVariables } from '../theme/theme.types';
import { useThemeVars } from '../theme/hooks/use-theme-vars';

const getParticlesConfig = (linksColor: string, particlesColor: string): ISourceOptions => {
    return {
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
                value: particlesColor,
            },
            links: {
                color: linksColor,
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
};


function HeroBg () {

    const { currentTheme } = useAppTheme();
    const themeVars = useThemeVars(currentTheme);

    const particlesConfig = useMemo(() => {
        if (themeVars) {
            return getParticlesConfig(
                themeVars[ThemeVariables.textColorBody2],
                themeVars[ThemeVariables.textColorNormal],
            );
        }
        return null;
    }, [ themeVars ]);

    const ref = useCallback(async (engine: Engine): Promise<void> => {
        await loadLinksPreset(engine);
    }, [ particlesConfig ]);

    return particlesConfig ? <Particles id="hero-particles" init={ ref } options={ particlesConfig }/> : null;
}

export default HeroBg;
