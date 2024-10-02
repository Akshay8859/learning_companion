
"use client"
import { useRef } from "react"
import "../styles/header.css"
import Script from 'next/script'

const Header = () => {
  const refer = useRef(null)
  const toggleMenu = () => {

    refer.current.classList.toggle("open-menu");
    
  }
  return (
    <>
      <div className='heading'>
        <div className=" log"></div>
        <nav class="navigation">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/GamesPage" class="active">Games</a>
          <a href="/blog">Blog</a>
          <a href="/support">Support</a>
          <a href="/chat" class="active">Chat</a>
          <a href="/learn">Learn</a>
          <a href='/history'>History</a>
          <a href="/opinion">Opinion</a>
          <a href="/practice" class="active">Practice</a>

          
          <div class="profile">
            <img src="/avatar.png" class="user-pic" onClick={toggleMenu} />
            <div class="sub-menu-wrap" ref={refer} id="subMenu">
              <div class="sub-menu">
                <div class="user-info">
                  <img src="/avatar.png" />
                  <h3>John Goodfellow</h3>
                </div>
                <hr />
                <a href="/user" class="sub-menu-link">
                  <img src="/profile.png" />
                  <p>View Profile</p>
                  <span></span>
                </a>
                <a href="/settings" class="sub-menu-link">
                  <img src="/setting.png" />
                  <p>Settings & Privacy</p>
                  <span></span>
                </a>
                <a href="/support" class="sub-menu-link">
                  <img src="/help.png" />
                  <p>Help & Support</p>
                  <span></span>
                </a>
                <a href="#" class="sub-menu-link">
                  <img src="/logout.png" />
                  <p>Logout</p>
                  <span></span>
                </a>
              </div>
            </div>
          </div>

        </nav>

      </div>

      <Script >
        {
          `
 
   `
        }
      </Script>
    </>
  )
}

export default Header
