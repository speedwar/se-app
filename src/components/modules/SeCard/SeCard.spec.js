import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
// import ShallowRenderer from 'react-test-renderer/shallow'
import 'jest-styled-components'
import SeCard from './SeCard'


const defaultProps = {
  title: 'Home Shopping',
}

const setup = (partialProps) => {
  const props = {
    ...defaultProps,
    ...partialProps,
  }
  const wrapper = shallow(<SeCard { ... props } />)
  return { wrapper, props }
}

describe('<SeCard /> component', () => {
  it('renders component with props', () => {
    const wrapper = setup({
      title: 'Home and Away'
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props.title).toEqual('Home and Away')
  })

  it('renders component with styles', () => {
    const wrapper = renderer.create(<SeCard { ...defaultProps } />).toJSON()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('position', expect.stringContaining('relative'))
    expect(wrapper).toHaveStyleRule('width', '315px')
    expect(wrapper).not.toHaveStyleRule('margin')
    expect(wrapper).not.toHaveStyleRule('padding')
  })
})
