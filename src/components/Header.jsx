import React, { useState } from "react";
import imgLogo from "../assets/images/iv_logo.svg";
import styled from "styled-components";
import GlobalStyle from "../styles/GlobalStyle";

const StyledHeader = styled.header`
font-family: 'pretendard';
position: fixed;
top: 0;
left: 50%;
transform: translateX(-50%);
z-index: var(--header_index);
width: 100%;
max-width: 100vw;
height: var(--header);
display: flex;
align-items: center;
background: rgba(39, 39, 39, 0.5);
border-bottom: 1px solid var(--gray1);
color: var(--white, #fff);

  .header-wrapper {
    display: flex;
    padding: 0 4.2rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;

    .menu-container {
      display: flex;
      align-items: center;

      > p {
        margin-right: 5px;
        font-size: 14px;
        font-weight: var(--fw_medium);
        transition: var(--trans_time);
      }

      > .menu-btn {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 26px;
        height: 26px;
        padding: 4px 2px;

        > span {
          display: block;
          width: 100%;
          border-bottom: 1px solid var(--white, #fff);

          &:nth-child(2) {
            width: 80%;
          }
        }
      }
    }
  }

  h1 {
    font-size: 2rem;
    font-weight: var(--fw_medium);
    text-transform: capitalize;
  }


`;

function Header() {
  return (
    <>
      <GlobalStyle />
      <StyledHeader className="header-container">
        <div className="header-wrapper">
          <a href="/">
            <img src={imgLogo} alt="" />
          </a>
          <h1 className="header-comment">Request</h1>
          <div className="menu-container">
            <p>MENU</p>
            <button className="menu-btn">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </StyledHeader>
    </>
  );
}

export default Header;
