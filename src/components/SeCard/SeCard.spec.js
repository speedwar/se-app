import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import SeCard from './SeCard'

import imgTile from 'assets/images/tile.jpg'
import imgLogo from 'assets/images/logo.png'

const defaultProps = {
  title: 'Home Shopping',
  provider: 'Seven Cook',
  imgTile: imgTile,
  imgLogo: imgLogo,
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
      title: 'Home and Away',
      provider: 'Seven',
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props.title).toEqual('Home and Away')
    expect(wrapper.props.provider).toEqual('Seven')
  })

  it('renders component with styles', () => {
    const wrapper = renderer.create(<SeCard { ...defaultProps } />).toJSON()
    expect(wrapper).toMatchSnapshot()
    expect(wrapper).toHaveStyleRule('position', expect.stringContaining('relative'))
  })
})
