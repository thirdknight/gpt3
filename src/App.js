import React from 'react';
import { Blog, Features, Footer, Header, Possibility, WhatGPT3} from './containers';
import { Brand, CTA, Navbar } from './components';
import styles from './App.module.css';

const App = () => {
  return(
    <div className='App'>
      <div className={styles.gradientBg}>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App