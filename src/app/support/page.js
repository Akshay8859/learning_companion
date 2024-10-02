
import React from 'react'
import "../styles/support.css"
const Support = () => {
  return (
    <>
    <header className="support-header">
        <h1>Support & Help Center</h1>
        <p>We’re here to help with any questions or issues you may have!</p>
        <div className="search-bar">
            <input type="text" placeholder="Search your query here..." />
            <button type="button">Search</button>
        </div>
    </header>

    <main>
        <section className="faq-section">
            <h2>Frequently Asked Questions</h2>
            <ul className="faq-list">
                <li><a href="#">How do I register for the contest?</a></li>
                <li><a href="#">How can I submit my review/opinion?</a></li>
                <li><a href="#">How do I ask the AI a question?</a></li>
                <li><a href="#">How is the leaderboard calculated?</a></li>
                <li><a href="#">What do the virtual coins and badges represent?</a></li>
            </ul>
        </section>

        <section className="support-categories">
            <h2>Support Categories</h2>
            <div className="category-grid">
                <div className="category-item">
                    <h3>General Help</h3>
                    <p>Get assistance with using the platform and general inquiries.</p>
                    <a href="#">Explore General Help</a>
                </div>
                <div className="category-item">
                    <h3>Users FAQs</h3>
                    <p>Common questions about contests, leaderboards, and more.</p>
                    <a href="#">Explore Student FAQs</a>
                </div>
             
                <div className="category-item">
                    <h3>Technical Issues</h3> 
                    <p>Troubleshoot problems like login issues or page errors.</p>
                    <a href="#">Explore Technical Issues</a>
                </div>
                <div className="category-item">
                    <h3>Legal Resources</h3>
                    <p>Get access to legal documents and additional reading material.</p>
                    <a href="#">Explore Legal Resources</a>
                </div>
            </div>
        </section>
    </main>

 

    <footer>
        <p><span style={{fontWeight:'bold'}}>&copy;</span> 2024 Constitution Learning Platform. All Rights Reserved.</p>
    </footer>
    
    </>
  )
}

export default Support
