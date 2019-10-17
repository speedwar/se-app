import React from 'react'
import SeHeader from './SeHeader'
import SeFooter from './SeFooter'

const SeLayout = ({children}) => (
  <>
    <SeHeader />
    <main className="l-main">
      {children}
    </main>
    <SeFooter />
  </>
);

export default SeLayout;
