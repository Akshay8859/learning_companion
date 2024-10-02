
import "../styles/practice.css"
export default function Home() {
  return (
    <>
    <header>
        <h1>Mock Test for Law Students</h1>
        <p>Prepare for CLAT, AILET, LSAT</p>
    </header>

    <div className="exam-sections">
        <section className="exam-card">
            <h2>CLAT Mock Exam</h2>
            <p>The CLAT (Common Law Admission Test) is an entrance exam for top law schools in India. Test your skills and improve your chances with our CLAT mock exams.</p>
            <button className="start-btn">Start CLAT Exam</button>
        </section>

        <section className="exam-card">
            <h2>AILET Mock Exam</h2>
            <p>The AILET (All India Law Entrance Test) is for admission to prestigious law universities. Prepare efficiently with our AILET mock exams.</p>
            <button className="start-btn">Start AILET Exam</button>
        </section>

        <section className="exam-card">
            <h2>LSAT Mock Exam</h2>
            <p>LSAT (Law School Admission Test) is a global exam for law schools. Take our LSAT mock exams to get ready for this challenging test.</p>
            <button className="start-btn">Start LSAT Exam</button>
        </section>
    </div>
    </>
  );
}
