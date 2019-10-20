import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import SeHome from './SeHome'

const setup = () => {
  const wrapper = shallow(<SeHome />)
  return { wrapper }
}

describe('<SeHome /> component', () => {
  it('renders component', () => {
    const wrapper = setup()
    expect(wrapper).toMatchSnapshot()
  })
})
