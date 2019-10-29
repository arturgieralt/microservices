import React from 'react'

export default class App extends React.Component {

    componentDidMount () {
        window.addEventListener('message', console.log)
    }

    render(){
        return 'First try'
    }
}