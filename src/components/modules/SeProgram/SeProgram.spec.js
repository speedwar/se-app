import React from 'react'
import { shallow } from 'enzyme'
import 'jest-styled-components'
import SeProgram from './SeProgram'

const defaultProps = {
  title: 'Programs',
}

const setup = (partialProps) => {
  const props = {
    ...defaultProps,
    ...partialProps,
  }
  const wrapper = shallow(<SeProgram { ... props } />)
  return { wrapper, props }
}

describe('<SeProgram /> component', () => {
  it('renders component with props', () => {
    const wrapper = setup({
      title: 'Now On'
    })
    expect(wrapper).toMatchSnapshot()
    expect(wrapper.props.title).toEqual('Now On')
  })
})
