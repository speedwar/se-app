import React from 'react'
import { SeLayout } from 'layouts'
import { SeProgram } from 'components'

const Content = () => (
  <>
    <SeProgram title="Programs" />
  </>
)

const SeHome = () => (
  <SeLayout>
    <Content />
  </SeLayout>
)

export default SeHome
