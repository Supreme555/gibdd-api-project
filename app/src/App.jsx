import React, { useState, useEffect } from 'react'
import GibddComp from './components/GibddComp'
import styles from './assets/App.module.css'
function App() {

  return (
    <div className={styles.main}>
      <GibddComp />
    </div>
  )
}

export default App
