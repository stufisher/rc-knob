import React from 'react'
import { shallow } from 'enzyme'
import { Pointer } from '../src/Pointer'

describe('Pointer', () => {
    it('renders correct with type rect', () => {
        const component = shallow(
            <Pointer
                type="rect"
                width={5}
                height={2}
                angleOffset={220}
                angleRange={90}
                percentage={50}
                radius={50}
                center={10}
                color="red"
                className="someClassName"
                value={0}
                size={10}
            />
        )
        expect(component).toMatchSnapshot()
    })
    it('renders correct with type circle', () => {
        const component = shallow(
            <Pointer
                type="circle"
                width={5}
                angleOffset={220}
                angleRange={90}
                percentage={50}
                radius={50}
                center={10}
                color="red"
                className="someClassName"
                value={0}
                size={10}
            />
        )
        expect(component).toMatchSnapshot()
    })

    it('renders correct with a child as pointer', () => {
        const CustomPointer = ({ width }: { width:number }) => <circle r={`${width}`} />
        const component = shallow(
            <Pointer
                width={5}
                angleOffset={220}
                angleRange={90}
                percentage={50}
                radius={50}
                center={10}
                color="red"
                className="someClassName"
                value={0}
                size={10}
            >
                <CustomPointer width={0} />
            </Pointer>
        )
        expect(component).toMatchSnapshot()
    })
})
