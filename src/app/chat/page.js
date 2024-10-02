import React from 'react'
import "../styles/chatbot.css"
import Script from 'next/script'
const page = () => {
    return (
        <>

            

            <section className="hero">
                <div className="hero-text">
                    <h1>VidurAI</h1>
                    <p>Stuck with some legal issue?<br />Here comes VidurAI, named after the most righteous diplomat of the history. Let him light your pathway with his knowledge of legals and just.</p>
                    <a href="#chatbot-section" className="btn scroll-btn">Seek his Guidance</a>
                </div>
                <div className="hero-image">
                    <img src="https://botnation.ai/site/wp-content/uploads/2024/01/legalbot.webp" alt="Smart Bot Image" />
                </div>
            </section>


            <section id="chatbot-section" className="chatbot">
                <div className="chatbot-container">
                    <h2>VidurAI</h2>
                    <div className="chat-window">
                        <div className="chat-output">

                        </div>
                        <div className="chat-input-area">
                            <input type="text" id="user-input" placeholder="Type your message..." />
                            <button id="send-btn">Send</button>
                        </div>
                    </div>
                </div>
            </section>
            <Script>
                {
                    `
                    const chatOutput = document.querySelector('.chat-output');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Function to append messages to chat window
function appendMessage(message, sender) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.classList.add(sender);
    messageElement.innerText = message;
    chatOutput.appendChild(messageElement);
    chatOutput.scrollTop = chatOutput.scrollHeight; // Scroll to the bottom
}

// Event listener for sending message
sendBtn.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        appendMessage(userMessage, 'user');
        userInput.value = ''; // Clear input field

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = "I'm here to assist you with legal advice.";
            appendMessage(aiResponse, 'bot');
        }, 1000); // Delay response for 1 second
    }
});

// GSAP Animations for smooth slide-in effect
gsap.from(".hero-text h1", { duration: 1.5, x: -100, opacity: 0 });
gsap.from(".hero-text p", { duration: 1.5, x: -100, opacity: 0, delay: 0.5 });
gsap.from(".hero-image img", { duration: 2, opacity: 0, delay: 1 });

// Smooth Scroll to Chatbot Section
document.querySelector('.scroll-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#chatbot-section').scrollIntoView({ 
        behavior: 'smooth'
    });
});

                    `
                }
            </Script>
            <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.0/gsap.min.js" />
        </>
    )
}

export default page
