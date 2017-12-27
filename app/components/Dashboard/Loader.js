import React from 'react'
import { BarLoader } from 'react-spinners'

import './styles.sass'

const Loader = () => (
  <div className="jampp__Dashboard__Loader">
    <BarLoader
      color="#fff"
      width={300}
      height={2}
    />
  </div>
)

export default Loader
