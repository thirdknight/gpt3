import React from 'react';
import { useState } from 'react';
import styles from './navbar.module.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';


const Navbar = () => {

  const Menu = () => (
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
  )
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className={styles.gpt3Navbar}>
      <div className={styles.gpt3NavbarLinks}>
        <div className={styles.gpt3NavbarLinksLogo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={styles.gpt3NavbarLinksContainer}>
          <Menu />
        </div>
      </div>
      <div className={styles.gpt3NavbarSign}>
          <p>Sign in</p>
          <button type='button'>Sign up</button>
        </div>
      <div className={styles.gpt3NavbarMenu}> 
        {toggleMenu
          ? <RiCloseLine color="#fff" size="27" onClick={()=> setToggleMenu(false)} />
          : <RiMenu3Line color= "#fff" size="27" onClick={()=> setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className={`${styles.gpt3NavbarMenuContainer} ${styles.scaleUpCenter}`}>
            <div className={styles.gpt3NavbarMenuContainerLinks}>
              <Menu />      
            </div>
            <div className={styles.gpt3NavbarMenuContainerLinksSign}>
              <p>Sign in</p>
              <button type='button'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;