import React from 'react'

export default class IFrame extends React.Component {

    constructor(props) {
        super(props)
        this.iframeRef = React.createRef()
        this.handleMessage = this.handleMessage.bind(this)
        this.postInitialData = this.postInitialData.bind(this)
    }

    componentDidMount () {
        window.addEventListener('message', this.handleMessage)
    }

    componentWillUnmount () {
        window.removeEventListener('message', this.handleMessage)
    }

    postInitialData() {
        const message = {
            type: 'INIT_UPDATE',
            payload: { 
                data: 'token',
                name: this.props.name
            }
        }
        this.iframeRef.current.contentWindow.postMessage(message, document.location.origin)
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
        return <iframe 
            id='iframe-content'
            style={{
                width: '800px',
                height: '400px'
            }}
            src={this.props.url} 
            ref={this.iframeRef} 
            onLoad={this.postInitialData}
            />
    }
}