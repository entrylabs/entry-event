import babel from 'rollup-plugin-babel';
import { terser } from 'rollup-plugin-terser';

export default {
    input: 'index.js',
    plugins: [babel(), terser()],
    output: {
        file: './dist/index.js',
        format: 'es',
        freeze: false,
        exports: 'named', // "named", "default"
        name: 'EntryEvent', // if format is "umd" or "iife"
        interop: false,
        sourcemap: true,
    },
};
