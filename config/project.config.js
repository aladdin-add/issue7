module.exports = {
    webpackConfig: {
        externals: {
            'react': 'window.React',
            'react-dom': 'window.ReactDOM'
        },
    }
}