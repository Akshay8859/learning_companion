

import "../styles/blog.css"
export default function Home() {
  return (
    <>
    <header>
        <h1>Law and Constitution Updates</h1>
        <p>Your source for the latest articles, news, and facts on law and the constitution</p>
    </header>

    <div className="blog-section">
        <article className="blog-card">
            <h2>New Amendments in the Constitution</h2>
            <p>Stay updated on the recent amendments to the constitution and their implications. Read the latest analysis.</p>
            <span className="date">Published on: September 25, 2024</span>
        </article>

        <article className="blog-card">
            <h2>Lawyer’s Day 2024: Celebrating the Legal Profession</h2>
            <p>In honor of Lawyer’s Day, this article explores the role of lawyers in upholding justice and ensuring the rule of law.</p>
            <span className="date">Published on: September 20, 2024</span>
        </article>

        <article className="blog-card">
            <h2>Understanding Human Rights in India</h2>
            <p>What are human rights according to the Indian Constitution? Explore the framework and recent debates around human rights protection.</p>
            <span className="date">Published on: September 15, 2024</span>
        </article>

        <article className="blog-card">
            <h2>Fact: Did You Know?</h2>
            <p>India has the longest written constitution of any sovereign nation in the world, with 448 articles in 25 parts and 12 schedules.</p>
            <span className="date">Published on: September 10, 2024</span>
        </article>
    </div>
    </>
  );
}
