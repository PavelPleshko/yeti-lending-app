declare module '*.svg' {
    import * as React from 'react';

    export const ReactComponent: React.FunctionComponent<React.SVGProps<
        SVGSVGElement
        > & { title?: string }>;

    const src: string;
    export default src;
}

declare module '*.scss' {
    const content: {[className: string]: string};
    export = content;
}

declare module '!!raw-loader!*' {
    const content: string;
    export default content;
}
