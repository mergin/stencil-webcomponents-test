import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

/*
 * bundles
 * This config is rarely needed as Stencil handles this automatically behind the scenes.
 */
export const config: Config = {
    namespace: 'TestComponents',
    bundles: [
        { components: ['my-component', 'my-embedded-component'] },
        { components: ['my-component-2'] }
    ],
    outputTargets: [
        { type: 'dist' },
        { type: 'docs' },
        {
            type: 'www',
            serviceWorker: null // disable service workers
        }
    ],
    plugins: [
        sass()
    ]
};
