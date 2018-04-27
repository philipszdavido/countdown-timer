import uglify from 'rollup-plugin-uglify'

const config = {
    input: 'src/countdown.js',
    external: ['react'],
    plugins: [
        uglify()
    ],
    output: {
        format: 'umd',
        name: 'countdown'
    }
}
export default config