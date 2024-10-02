"use client";
import Script from "next/script";
import "./styles/home.css"
import { useRef } from "react";


export default function Home() {
  const refer = useRef(null)
  const toggleMenu = () => {

    refer.current.classList.toggle("open-menu");

  }
  return (
    <>

      <header>
        <div className="log"></div>
        <nav className="navigation">
          <a href="/" className="active">Home</a>
          <a href="/about">About</a>
          <a href="/learn">Learn</a>
          <a href="/blog">Blog</a>

          <a href="/history">History</a>
          <a href="/GamesPage">Games</a>
          <a href="/opinion">Opinion</a>
          

        </nav>
        <section class="profile">
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
          </section>
      </header>
      <section className="parallax">
        <img src="hill1.png" id="hill1" />
        <img src="hill2.png" id="hill2" />
        <img src="hill3.png" id="hill3" />
        <img src="hill4.png" id="hill4" />
        <img src="hill5.png" id="hill5" />
        <img src="tree.png" id="tree" />
        <div id="text">
          <h2>Legal Hub</h2>
          <p>We are team of talented designers making websites with Gamified UI</p>
          <a href="/login" className="login-button">Get Started</a>
        </div>
        <img src="leaf.png" id="leaf" />
        <img src="plant.png" id="plant" />
      </section>

      <section className="sec">
        <h2>Latest News Updates</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fuga vero obcaecati quis, tempora similique id quas expedita necessitatibus rem dolorum qui dolor dolorem atque, aperiam itaque beatae rerum soluta? Exercitationem reiciendis id quas ex dolorum enim ipsam totam! Ab illo modi, reprehenderit dolorem officia consectetur eaque ipsum nobis commodi odit nulla officiis aliquam a quidem. Aspernatur, sit eum esse odit voluptas quod culpa officia incidunt soluta consequuntur velit asperiores vero ad fuga. Libero dignissimos in blanditiis non cumque minima. Recusandae suscipit rerum sit quibusdam soluta ex accusamus maxime sint, inventore et nam mollitia minus labore voluptatem deserunt voluptas minima modi ad eligendi beatae repudiandae dolore! Laborum deserunt illo est consequuntur laboriosam non excepturi, et doloremque aliquid suscipit ipsum, quibusdam iste velit, amet necessitatibus sed? Nisi nostrum veritatis odio!<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fuga vero obcaecati quis, tempora similique id quas expedita necessitatibus rem dolorum qui dolor dolorem atque, aperiam itaque beatae rerum soluta? Exercitationem reiciendis id quas ex dolorum enim ipsam totam! Ab illo modi, reprehenderit dolorem officia consectetur eaque ipsum nobis commodi odit nulla officiis aliquam a quidem. Aspernatur, sit eum esse odit voluptas quod culpa officia incidunt soluta consequuntur velit asperiores vero ad fuga. Libero dignissimos in blanditiis non cumque minima. Recusandae suscipit rerum sit quibusdam soluta ex accusamus maxime sint, inventore et nam mollitia minus labore voluptatem deserunt voluptas minima modi ad eligendi beatae repudiandae dolore! Laborum deserunt illo est consequuntur laboriosam non excepturi, et doloremque aliquid suscipit ipsum, quibusdam iste velit, amet necessitatibus sed? Nisi nostrum veritatis odio!<br /><br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis fuga vero obcaecati quis, tempora similique id quas expedita necessitatibus rem dolorum qui dolor dolorem atque, aperiam itaque beatae rerum soluta? Exercitationem reiciendis id quas ex dolorum enim ipsam totam! Ab illo modi, reprehenderit dolorem officia consectetur eaque ipsum nobis commodi odit nulla officiis aliquam a quidem. Aspernatur, sit eum esse odit voluptas quod culpa officia incidunt soluta consequuntur velit asperiores vero ad fuga. Libero dignissimos in blanditiis non cumque minima. Recusandae suscipit rerum sit quibusdam soluta ex accusamus maxime sint, inventore et nam mollitia minus labore voluptatem deserunt voluptas minima modi ad eligendi beatae repudiandae dolore! Laborum deserunt illo est consequuntur laboriosam non excepturi, et doloremque aliquid suscipit ipsum, quibusdam iste velit, amet necessitatibus sed? Nisi nostrum veritatis odio!<br /><br />
        </p>
      </section>

      <section className="chatbot">
        <h2>Chatbot</h2>
        <hr className="section-line" />
        <p>Chat with our AI-driven Legal Advisor or get assistance with any questions you have.</p>
        <a href="/chat" className="chatbot-button">Enter Chatbot Room</a>
      </section>

      <footer className="end">
        <p>© 2024 GameZone. All rights reserved.</p>
      </footer>
      <Script>
        {
          `
        let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';

});
        `
        }
      </Script>
    </>
  );
}
