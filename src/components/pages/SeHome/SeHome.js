import React from 'react'
import { SeLayout } from 'components/layouts'
import { SeProgram } from 'components/modules'

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
