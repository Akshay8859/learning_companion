import React from 'react'
import "../styles/game.css"
import Script from 'next/script'
const page = () => {
  return (
    <>

    <section>
      <div className="mini-games-section">
        <h1 className="section-title">Mini Games</h1>
        <p className="section-description">
          Explore fun and engaging mini games that help you learn while playing.
          Compete, have fun, and improve your skills!
        </p>
        <div className="game-grid">
        
          <div className=" game-card">
            <div className="game-icon">
              <img src="snake.jpg" alt="Snake & Ladder" />
            </div>
            <h3 className="game-title">Snake & Ladder</h3>
            <p className="game-description">
              A fun twist on the classNameic game. Answer questions correctly to
              move forward. Can you reach the top?
            </p>
            <a href="#" className="play-btn">Play Now</a>
          </div>

        
          <div className="game-card">
            <div className="game-icon">
              <img src="cards.jpg" alt="Card Game" />
            </div>
            <h3 className="game-title">Constitutional Cards</h3>
            <p className="game-description">
              Match constitutional terms and cases. Improve your memory while
              learning key concepts!
            </p>
            <a href="#" className="play-btn">Play Now</a>
          </div>

        
          <div className="game-card">
            <div className="game-icon">
              <img src="quiz.jpg" alt="Quiz" />
            </div>
            <h3 className="game-title">Rapid Quiz</h3>
            <p className="game-description">
              Test your knowledge with quick quizzes! The faster you answer, the
              more points you earn.
            </p>
            <a href="#" className="play-btn">Play Now</a>
          </div>

         
          <div className="game-card">
            <div className="game-icon">
              <img src="puzzle.jpg" alt="Puzzle" />
            </div>
            <h3 className="game-title">Puzzle Challenge</h3>
            <p className="game-description">
              Solve constitutional puzzles. Piece together the parts to reveal
              important amendments.
            </p>
            <a href="#" className="play-btn">Play Now</a>
          </div>
        </div>
      </div>
    </section>

    <section className="contest-section">
        <div className="contest-content">
          <h1 className="section-title">Join Our Latest Contests!</h1>
          <p className="section-description">
            Compete with other players and put your skills to the test. Win exciting rewards by participating in our latest contests!
          </p>
          <a href="/contests/contest-page.html" className="contest-btn">Go to Contests</a>
        </div>
    </section>

    <footer>
      <p>&copy; 2024 GameZone. All rights reserved.</p>
    </footer>
    <Script 
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"
    >

    </Script>
    </>
  )
}

export default page
