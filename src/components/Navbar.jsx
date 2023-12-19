/* eslint-disable react/no-unknown-property */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Logo from '../assets/logo.svg';
import Menu from '../assets/menu.svg';
// import './Navbar.css';

const navbarStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 3.25rem;
  /* padding: 1.5rem; */
  display: grid;
  grid-template-columns: 1fr 640px 1fr;
  align-items: center;

  .logo {
    width: 6.25rem;
    cursor: pointer;
    margin-left: 1.5rem;
  }
  .main {
    justify-content: center;
  }
  ul {
    margin-right: 1.5rem;
    list-style: none;
    display: flex;

    li {
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 600;
      margin: 0 0.625rem;
      cursor: pointer;
    }
  }
  .right {
    display: flex;
    align-items: center;
    justify-self: end;
    padding: 1rem;
    .menu {
      width: 1.125rem;
      margin-left: 0.5rem;
      cursor: pointer;
      margin-right: 1.5rem;
    }
  }
  .scroll-indicator {
    position: absolute;
    width: 1.5rem;
    bottom: 5vh;
    animation: float 1.5s ease-in-out infinite;
  }

  @keyframes float {
    0% {
      transform: translate(-50%, -40%);
    }
    30% {
      transform: translate(-50%, -20%);
    }
    60% {
      transform: translate(-50%, -50%);
    }
    80% {
      transform: translate(-50%, -40%);
    }
    100% {
      transform: translate(-50%, -40%);
    }
  }
`;

export default function Navbar() {
  return (
    <nav className='nav' css={navbarStyles}>
      {/* <nav className='nav'> */}
      <img src={Logo} alt='Tesla Logo' className='logo' />
      <ul className='main'>
        <li>Model S</li>
        <li>Model 3</li>
        <li>Model X</li>
        <li>Model Y</li>
        <li>Solar Roof</li>
        <li>Solar Panels</li>
      </ul>
      <div className='right'>
        <ul className='main'>
          <li>Shop</li>
          <li>Tesla Account</li>
        </ul>
        <img src={Menu} alt='Menu' className='menu' />
      </div>
    </nav>
  );
}
