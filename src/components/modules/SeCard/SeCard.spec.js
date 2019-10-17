import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import SeCard from './SeCard'

describe('<SeCard /> component', () => {
  it('renders component with props', () => {
    const wrapper = shallow(<SeCard />)
    expect(wrapper).toMatchSnapshot()
  })

  it('renders component with styles', () => {
    const tree = renderer.create(<SeCard />).toJSON()
    expect(tree).toMatchSnapshot()
    expect(tree).toHaveStyleRule('position', expect.stringContaining('relative'))
    expect(tree).toHaveStyleRule('width', '315px')
    expect(tree).not.toHaveStyleRule('margin')
    expect(tree).not.toHaveStyleRule('padding')
  })
})
