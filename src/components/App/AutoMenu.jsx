
import React from 'react'
import { Link } from 'react-router-dom'
import MenuItem from '../antd/Menu/MenuItem'

const AutoMenu = () => [
  <MenuItem key='Goods-0'>
      <Link to='/Goods'>Goods</Link>
  </MenuItem>, <MenuItem key='News-1'>
                                                                         <Link to='/News'>News</Link>
                                                                     </MenuItem>
]
export default AutoMenu
