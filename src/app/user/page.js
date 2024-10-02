"use client";
import Script from 'next/script'
import React, { useEffect, useRef } from 'react'
import "../styles/user.css"
import {
    Chart,          // Import the Chart class
    LineController, // Import the line controller
    LineElement,    // Import line element
    PointElement,   // Import point element
    LinearScale,    // Import linear scale
    Title,          // Import title for the chart
    CategoryScale,  // Import category scale for x-axis labels
    Tooltip,        // Import tooltip for interactivity
    Legend          // Import legend for labeling datasets
} from "chart.js";

// Register the components
const dailyActivity = [
    1, 0, 2, 1, 3, 2, 0, 1, 2, 3, 2, 1, 0, 0, 2, 3, 2, 1, 0, 1, 2, 3, 1, 2, 0, 3, 2, 1, 0, 2,
    1, 3, 0, 2, 1, 3, 2, 1, 0, 1, 2, 3, 2, 0, 3, 1, 2, 1, 0, 3, 1, 2, 2, 1, 3, 2, 1, 0, 1, 2, 3
];
const favorites = [
    { title: "Favorite Question Title 1", description: "Description about the question." },
    { title: "Favorite PYQ Title 1", description: "Description about the PYQ." },
    { title: "Favorite Topic Title 1", description: "Description about the learning topic." },
    { title: "Favorite Case Study Title 1", description: "Description about the case study." },
];
Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip, Legend);
const page = () => {
    const chartRef = useRef(null);
    const HeatRef = useRef(null)

    useEffect(() => {
        function revealFavoritesOnScroll() {
            const favItems = document.querySelectorAll('.fav-item');
    
            favItems.forEach(item => {
                const itemPosition = item.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
    
                if (itemPosition < windowHeight - 100) {
                    item.classList.add('show');
                }
            });
        }
    
        window.addEventListener('scroll', revealFavoritesOnScroll);

        const ctx = chartRef.current.getContext("2d");

        const contestRatings = [1200, 1250, 1300, 1350, 1250, 1400, 1450, 1500, 1550, 1600];
        const contestLabels = ['Contest 1', 'Contest 2', 'Contest 3', 'Contest 4', 'Contest 5', 'Contest 6', 'Contest 7', 'Contest 8', 'Contest 9', 'Contest 10'];

        const ratingChart = new Chart(ctx, {
            type: 'line', // Can be 'bar' for bar chart
            data: {
                labels: contestLabels,
                datasets: [{
                    label: 'User Rating',
                    data: contestRatings,
                    backgroundColor: 'rgba(0, 123, 255, 0.2)',
                    borderColor: 'rgba(0, 123, 255, 1)',
                    borderWidth: 2,
                    fill: true,
                    tension: 0.3,
                    pointBackgroundColor: '#007bff',
                    pointRadius: 5
                }]
            },
            options: {
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Contests'
                        }
                    },
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Rating'
                        },
                        ticks: {
                            stepSize: 50
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    }
                }
            }
        })



        
            const statsCards = document.querySelectorAll('.stat-card');

            statsCards.forEach(card => {
                card.addEventListener('mouseover', () => {
                    card.style.backgroundColor = '#e0e0e0';
                });

                card.addEventListener('mouseout', () => {
                    card.style.backgroundColor = '#f7f7f7';
                });

            // Adjust percentage and colors dynamically if needed
            const progressBar = document.querySelector('.circular-progress');
            const progressValue = document.querySelector('.progress-value');

            let percentage = 75; // Set the progress percentage here
            let caseStudiesSolved = 101; // Set the solved case study number here

            progressValue.textContent = caseStudiesSolved;
            progressBar.style.background = `conic-gradient(#ff5722 0% ${percentage}%, #e0e0e0 ${percentage}% 100%)`;

            // Generate the heatmap






         

            


            // Example favorites data


            // Render the favorites
            
            

        });


        const progressBar = document.querySelector('.circular-progress');
        const progressValue = document.querySelector('.progress-value');
        let caseStudiesSolved = 101; // Starting case study value
        let percentage = 75; // Progress percentage to fill

        let counter = 0;
        let fillProgress = setInterval(() => {
            if (counter === caseStudiesSolved) {
                clearInterval(fillProgress);
            } else {
                counter++;
                progressValue.textContent = counter;
                progressBar.style.background = `conic-gradient(#ff5722 0% ${percentage}%, #e0e0e0 ${percentage}% 100%)`;
            }
        }, 30);


        // Simulate page loading when navigating between sections
        function showLoading() {
            document.getElementById('loading').style.display = 'block';
        }

        function hideLoading() {
            document.getElementById('loading').style.display = 'none';
        }

        // Show loader on page load or navigation
       
        showLoading();
        setTimeout(hideLoading, 2000);
        function launchConfetti() {
            const confettiColors = ['#ffca28', '#ff5722', '#29b6f6', '#66bb6a'];
            const confettiAmount = 150;

            for (let i = 0; i < confettiAmount; i++) {
                let confetti = document.createElement('div');
                confetti.classList.add('confetti');
                document.body.appendChild(confetti);

                confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
                confetti.style.left = `${Math.random() * window.innerWidth}px`;
                confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
            }
        }

        // Call this function when a user earns a new badge
        launchConfetti();

        // Function to reveal elements on scroll


        // Add scroll event listener



        const pBar = document.querySelector('.circular-progress');
        const progressVal = document.querySelector('.progress-value');
        let caseStudiesSolve = 101; // Case studies solved (can be dynamic)
        let percentag = 75; // Target percentage to fill
        let currentProgress = 0; // Start at 0

        let fProgress = setInterval(() => {
            currentProgress++;
            progressVal.textContent = currentProgress;

            pBar.style.background = `conic-gradient(
                    #ff5722 0% ${currentProgress}%,
                    #e0e0e0 ${currentProgress}% 100%)`;

            if (currentProgress >= percentag) {
                clearInterval(fProgress);
            }
        }, 30); //

        

        const progressBar1 = document.querySelector('.circular-progress');
        const progressValue1 = document.querySelector('.progress-value');
        let targetPercentage = 75; // Example: 75% filled
        let currentProgres = 0;

        let fillProgress1 = setInterval(() => {
            currentProgres++;
            progressValue1.textContent = currentProgres;

            progressBar1.style.background = `conic-gradient(
                    #ff5722 0% ${currentProgres}%,
                    #e0e0e0 ${currentProgres}% 100%)`;

            if (currentProgres >= targetPercentage) {
                clearInterval(fillProgress1);
            }
        }, 30)
        return () => {
            ratingChart.destroy();
        };
    }, [])




    return (
        <>
            <div id="loading">
                <div className="spinner"></div>
                <p>Loading, please wait...</p>
            </div>



            <section className="profile-section">
                <div className="profile-header">
                    <div className="profile-img">
                        <img src="Screenshot 2024-09-19 102514.png" alt="User Avatar" />
                    </div>
                    <div className="profile-info">
                        <h2>John Goodfellow</h2>
                        <p>Aware Citizen</p>
                    </div>
                </div>

                <div className="stats">
                    <div className="circular-container">
                        <div className="circular-progress">
                            <div className="progress-value">101</div>
                        </div>
                        <div className="progress-label">Case Studies Solved</div>
                    </div>


                    <div className="stat-card">
                        <img src="fire.gif" alt="Daily Streak Icon" className="card-icon" />
                        <h3>51</h3>
                        <p>Day Streak</p>
                    </div>


                    <div className="stat-card">
                        <img src="exp.gif" alt="Total EXP Icon" className="card-icon" />

                        <h3>10236</h3>
                        <p>Total EXP</p>
                    </div>


                    <div className="stat-card">
                        <img src="coin.gif" alt="Legal Coins Icon" className="card-icon" />
                        <h3>1001</h3>
                        <p>Legal Coins</p>
                    </div>
                </div>

                <div className="user-details">
                    <p><strong>Username:</strong> JohnGoodfellow404</p>
                    <p><strong>Joined:</strong> August 2023</p>
                    <p><strong>Interested in:</strong> Human Rights, Labor Laws, Land Laws</p>
                    <p><strong>Friends:</strong> 21</p>
                </div>

                <div className="submission-chart">
                    <h4>Submissions in the Last Year</h4>
                    <div className="heatmap-container">
                        <div className="heatmap-div">

                            <div className="heatmap-section">
                                <h2>User Activity Heatmap</h2>
                                <div className='heatmap'>

                                    {
                                        dailyActivity.map((activity, index) => {


                                            if (activity === 0) {
                                                return <div className='no-activity' key={index} />

                                            } else if (activity === 1) {
                                                return <div className='low-activity' key={index} />

                                            } else if (activity === 2) {
                                                return <div className='medium-activity' key={index} />

                                            } else if (activity === 3) {
                                                return <div className='high-activity' key={index} />

                                            }

                                        })
                                    }


                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="statistics">
                    <div className="contest-stats">
                        <h4>Contest Statistics</h4>
                        <p><strong>Number of Contests:</strong> 151</p>
                        <p><strong>Highest Rating:</strong> 1669</p>
                        <p><strong>Current Rating:</strong> 1501</p>
                        <p><strong>Average Rating Improvement:</strong> 49</p>
                        <p><strong>Improvement Rate:</strong> 72%</p>
                    </div>
                    <div className="learning-stats">
                        <h4>Learning Statistics</h4>
                        <p><strong>Number of Modules Learned:</strong> 151</p>
                        <p><strong>Average Learning Time/Day:</strong> 18 minutes</p>
                        <p><strong>Learning Rate:</strong> 45%</p>
                    </div>
                </div>

                <div className="rating-section">
                    <h2>User Rating Progress</h2>
                    <canvas ref={chartRef}></canvas>
                </div>

                <div className="achievements-section">
                    <h2>User Achievements</h2>
                    <div className="badges-container">

                        <div className="badge">
                            <img src="https://static.vecteezy.com/system/resources/previews/010/577/201/non_2x/premium-quality-achievement-badge-icon-logo-illustration-certificate-symbol-template-for-graphic-and-web-design-collection-free-vector.jpg" alt="Achievement 1 Badge" />
                            <p>Master of Laws</p>
                        </div>
                        <div className="badge">
                            <img src="https://img.freepik.com/premium-vector/badge-featuring-star-with-ribbon-wrapped-around-it-creating-simple-elegant-design-capturing-essence-machine-learning-algorithms_585735-34886.jpg" alt="Achievement 2 Badge" />
                            <p>Top Contributor</p>
                        </div>
                        <div className="badge">
                            <img src="https://static.vecteezy.com/system/resources/previews/029/205/239/original/ribbon-badge-achievement-badge-2d-color-illustrations-png.png" alt="Achievement 3 Badge" />
                            <p>Consistent Learner</p>
                        </div>

                    </div>
                </div>

                <div className="favorites-section">

                    <div className="favorites-category pyqs">
                        <h2>Previous Year Questions (PYQs)</h2>
                        <div className="favorites-grid">
                            <div className="fav-card">
                                <div className="fav-card-inner">
                                    <div className="fav-card-front">
                                        <h3>CLAT 2022</h3>
                                    </div>
                                    <div className="fav-card-back">
                                        <p>Important PYQs for CLAT 2022.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="fav-card">
                                <div className="fav-card-inner">
                                    <div className="fav-card-front">
                                        <h3>LSAT 2021</h3>
                                    </div>
                                    <div className="fav-card-back">
                                        <p>Critical reasoning questions from LSAT 2021.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="favorites-category topics">
                        <h2>Topics</h2>
                        <div className="favorites-grid">
                            <div className="fav-item">
                                <h3>Contract Law</h3>
                                <p>Key topics in contract law, including breach of contract and remedies.</p>
                            </div>
                            <div className="fav-item">
                                <h3>Torts</h3>
                                <p>Important concepts in tort law, including negligence and liabilities.</p>
                            </div>
                        </div>
                    </div>


                    <div className="favorites-category case-studies">
                        <h2>Case Studies</h2>
                        <div className="favorites-grid">
                            <div className="fav-card">
                                <div className="fav-card-inner">
                                    <div className="fav-card-front">
                                        <h3>Case Study: Vishakha v. State of Rajasthan</h3>
                                    </div>
                                    <div className="fav-card-back">
                                        <p>Legal arguments and implications of the landmark ruling providing transparency and safeguard against sexual harassment of women in workplace.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="fav-card">
                                <div className="fav-card-inner">
                                    <div className="fav-card-front">
                                        <h3>Case Study: Kesavananda Bharti v. State of Kerala</h3>
                                    </div>
                                    <div className="fav-card-back">
                                        <p>The foundation of doctrine of basic structure of the Indian Constitution.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default page
