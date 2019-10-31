import React from 'react';
import IFrame from './Iframe';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, mount } from 'enzyme'

Enzyme.configure({ adapter: new Adapter() });

const props = { 
    name: 'name',
    url: 'url'
}
describe('IFrame component', () => {

    it('should register message listener on mount', () => {
        const map = {}
        window.addEventListener = jest.fn((event, cb) => {
            map[event] = cb;
        })

        const component = shallow(<IFrame {...props} />)
        expect(map).toHaveProperty('message', expect.any(Function))
    })

    it('should unregister message listener on unmount', () => {
        
        window.removeEventListener = jest.fn()
        const component = shallow(<IFrame {...props} />)

        component.unmount()

        expect(window.removeEventListener).toHaveBeenCalledWith('message', expect.any(Function))
    })

    it('should post initial data when iFrame is loaded', () => {
        
        const component = shallow(<IFrame {...props} />)
        const instance =  component.instance()

        const postMessage = jest.fn()

        instance.iframeRef.current = {
          contentWindow: {
            postMessage,
            addEventListener: jest.fn()
          }
        }

        component.find('iframe').prop('onLoad')()

        expect(postMessage).toBeCalledTimes(1)
        expect(postMessage).toHaveBeenCalledWith({
            "payload": {"data": "token"}, 
            "type": "INIT_UPDATE"}, 
            "http://localhost"
        )
    })
})