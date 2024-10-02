
import React from 'react'
import "../styles/opinion.css"
const page = () => {
  return (
    <>
    <header className="opinion-header">
        <h1>Voice Your Thoughts</h1>
        <p>Let your voice be heard! Share your opinion about any law or case the government seeks public input on.</p>
    </header>

    <main>
        <section className="opinion-form-section">
            <h2>Choose a Law</h2>
            <form className="opinion-form" id="opinionForm">
                <label for="law-select">Select a Law/Case:</label>
                <select id="law-select" name="law" required>
                    <option value="" disabled selected>Select a law</option>
                    <option value="New Amendment on Education">New Amendment on Education</option>
                    <option value="Cybersecurity Law Proposal">Cybersecurity Law Proposal</option>
                    <option value="Environmental Protection Act">Environmental Protection Act</option>
                    <option value="Data Privacy Bill">Data Privacy Bill</option>
                    <option value="Other">Other (Enter below)</option>
                </select>

              

                <label for="opinion">Your Opinion:</label>
                <textarea id="opinion" name="opinion" placeholder="Write your opinion here..." required></textarea>

                <button type="submit">Submit Opinion</button>
            </form>
        </section>
    </main>

    <footer>
        <h3>&copy; 2024 Public Opinion Platform. All Rights Reserved.</h3>
    </footer>

  
    </>
  )
}

export default page
