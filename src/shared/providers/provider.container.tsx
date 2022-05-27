import React from 'react';
import { FC, ComponentProps } from 'react';

/**
 * Combines several wrapping components(context providers most often) into
 * a single functional component to avoid 'nesting explosion'.
 * @param components - providers, HOC, etc...
 */
export const createProvidersContainer = (...components: FC[]): FC => {
    return components.reduce(
        (AccumulatedComponents, CurrentComponent) => {
            return ({ children }: ComponentProps<FC>): JSX.Element => {
                return (
                    <AccumulatedComponents>
                        <CurrentComponent>{ children }</CurrentComponent>
                    </AccumulatedComponents>
                );
            };
        },
        ({ children }) => <>{ children }</>,
    );
};
