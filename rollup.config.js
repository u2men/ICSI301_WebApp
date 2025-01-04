// rollup.config.js
import terser from '@rollup/plugin-terser';

export default {
    input: './lib/appp.js',
    output: [
        {
            file: 'bundled.js',
            format: 'es'
        },
        {
            file: 'bundled.min.js',
            format: 'es',
            plugins: [terser()]
        }
    ],
    treeshake: {
        preset: 'smallest'
    }
};