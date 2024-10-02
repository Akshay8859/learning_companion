import React from 'react'
import "../styles/learn.css"
import Script from 'next/script'
import Link from 'next/link'
const page = () => {
  return (
    <>
        <header>
        <h1>Learn the Constitution</h1>
        <p>Empower yourself with the rights, duties, and laws that shape our nation.</p>
    </header>

    <section className="flashcard-section">
        <h2>Learning Modules</h2>
        <div className="flashcard-container">
           
            <div className="flashcard rights">
                <a href="/learn/details">
                    <h2>Fundamental Rights</h2>
                    <div className="front">
                    </div>
                    <div className="back">
                        <p>Explore the basic human rights guaranteed to all citizens, including the Right to Equality, Freedom, and Religion.</p>
                    </div>
                </a>
            </div>

          
            <div className="flashcard duties">
                <a href="u.html">
                    <h2>Fundamental Duties</h2>
                    <div className="front">
                    </div>
                    <div className="back">
                        <p>Learn about the moral obligations of all citizens that uphold the unity and integrity of India.</p>
                    </div>
                </a>
            </div>

            
            <div className="flashcard preamble">
                <a href="u.html">
                    <h2>Constitutional Preamble</h2>
                    <div className="front">
                    </div>
                    <div className="back">
                        <p>Understand the guiding principles outlined in the Preamble, including the values of Sovereignty, Secularism, and Democracy.</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

   <div className="cases">
    <h2>Important Legal Cases</h2>
   </div>
    <section className="flashcard-section">
        <div className="flashcard-container">
           
            <div className="flashcard kesavananda">
                <a href="u.html">
                    <h2>Kesavananda Bharati Case</h2>
                    <div className="front">
                    </div>
                    <div className="back">
                        <p>Dive into the case that established the Basic Structure Doctrine, preserving key principles of the Constitution.</p>
                    </div>
                </a>
            </div>

            
            <div className="flashcard vishakha">
                <a href="u.html">
                    <h2>Vishakha Case</h2>
                    <div className="front">
                    </div>
                    <div className="back">
                        <p>Discover the landmark case that created the 'Visakha Guidelines' to prevent sexual harassment in the workplace.</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <footer>
        <p>Constitutional knowledge is a fundamental pillar of democracy. Stay informed about your rights and duties as a citizen.</p> 
        <p>Learn more by engaging with these flashcards and expand your understanding of key legal cases.</p>
        <h3>&copy; 2024 Constitution Learning Platform | Promoting Legal Literacy</h3>
    </footer>
    <Script>
        {
            `document.querySelectorAll('.flashcard').forEach(card => {
    card.addEventListener('click', function () {
        this.classList.toggle('flipped');
    });
});`
        }
    </Script>
    
    </>
  )
}

export default page
