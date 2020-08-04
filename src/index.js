import React from 'react'
import ReactDOM from 'react-dom'
import {Button} from 'antd'

const App = () => (<div>
    hello react!
    <Button>ok</Button>
</div>)

ReactDOM.render(<App></App>, document.getElementById('container'))
