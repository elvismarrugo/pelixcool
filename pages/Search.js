import { useState, useEffect } from 'react'; 

import BasicLayout from '../layouts/BasicLayout'
export default function Search() {
  useEffect(() => {
    document.getElementById('search-movie').focus();
    
  }, [])
  return (
    <BasicLayout className="search">
      <h1>Busqueda .....</h1>
    </BasicLayout>
  )
}
