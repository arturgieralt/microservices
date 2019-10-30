import React from 'react'

export default class IFrame extends React.Component {

    constructor(props) {
        super(props)
        this.handleMessage = this.handleMessage.bind(this)

    }

    componentDidMount () {
        window.addEventListener('message', this.handleMessage)
    }

    componentWillUnmount () {
        window.removeEventListener('message', this.handleMessage)
    }
    
    handleMessage(event) {
        const { data } = event
        if (data.type === 'URL_CHANGE') {
            this.handleUrlChange(data.payload)
        }
    }

    handleUrlChange (newRelativePath) {
        const currentLocation = window.location.toString()
        const newLocation = currentLocation.split(this.props.name)[0] + 
        this.props.name + 
        newRelativePath
        
        if (currentLocation !== newLocation) {
          window.history.replaceState(window.history.state, document.title, newLocation)
        }
      }

    
    
    render () {
        return <iframe src={this.props.url} />
    }
}