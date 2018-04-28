import uglify from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel'

const config = {
    input: 'src/countdown.js',
    external: ['react'],
    plugins: [
        babel({
            exclude: "node_modules/**"
        }),
        uglify()
    ],
    output: {
        format: 'umd',
        name: 'countdown'
    }
}
export default config