import React from 'react'
import "../styles/history.css"
import Script from 'next/script'
const page = () => {
  return (
    <>
      <div className='main'>

        <div className='first'>
          <div className="making-constitution">
            <h2>MAKING OF OUR CONSTITUTION</h2>
          </div>
          <div className=' second'>


            <div className="container">

              <div className="section law article-17">
                <h3>Article 17: Abolition of Untouchability</h3>
                <div className="arrow">→</div>
              </div>
              <div className="section law workplace-harassment">
                <h3>The Sexual Harassment of Women at Workplace Act, 2013</h3>
                <div className="arrow">→</div>
              </div>
              <div className="section law dowry-prohibition">
                <h3>The Dowry Prohibition Act, 1961</h3>
                <div className="arrow">→</div>
              </div>
              <div className="section law hindu-marriage">
                <h3>The Hindu Marriage Act, 1955</h3>
                <div className="arrow">→</div>
              </div>
              <div className="section law rti-act">
                <h3>The Right to Information (RTI) Act, 2005</h3>
                <div className="arrow">→</div>
              </div>
              <div className="section law sc-st-act">
                <h3>The SC/ST (Prevention of Atrocities) Act, 1989</h3>
                <div className="arrow">→</div>
              </div>
              <div className="section law maternity-benefit">
                <h3>The Maternity Benefit Act, 1961</h3>
                <div className="arrow">→</div>
              </div>

              <div className="section law juvenile-justice">
                <h3>The Juvenile Justice (Care and Protection of Children) Act, 2015</h3>
                <div className="arrow">→</div>
              </div>
              <div className="section law nrega">
                <h3>Mahatma Gandhi National Rural Employment Guarantee Act, 2005 (MGNREGA)</h3>
                <div className="arrow">→</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Script >
        {
          `
        document.querySelectorAll('.read-more').forEach(button => {
    button.addEventListener('click', () => {
      alert("Detailed story coming soon!");
    });
  });`
        }
      </Script>
    </>
  )
}

export default page
