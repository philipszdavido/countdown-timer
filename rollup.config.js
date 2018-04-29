import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

import postcss from 'rollup-plugin-postcss'
import postcssModules from 'postcss-modules'

//const cssExportMap = {}

const config = {
    input: 'src/countdown.js',
    external: ['react'],
    plugins: [
        postcss({
            extract:true,
            plugins: []
            /*plugins: [
                postcssModules({
                    getJSON(id,exportTokens) {
                        cssExportMap[id] = exportTokens
                    }
                })
            ],
            getExportNamed: false,
            getExport(id) {
                return cssExportMap[id]
            },
            extract: 'dist/styles.css'*/
        }),
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
    output: {
        format: 'umd',
        name: 'countdown',
        globals: {
            react: "React"
        }
    }
}
export default config