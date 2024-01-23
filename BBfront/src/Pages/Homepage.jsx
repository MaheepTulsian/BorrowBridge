import React from 'react'
import "./Homepage.css"
import asset1 from '../assets/hero_section_img.svg'
import asset2 from '../assets/feature_section_img.svg'
import asset3 from '../assets/action_img1.jpg'
import asset4 from '../assets/action_img2.jpg'
import asset5 from '../assets/action_img3.jpg'

const Homepage = () => {
  
  return (
    <>
    <div class="hero-section">
        <div class="hero-left flex-center">
            <h1 class="hero-left-heading">Creating a Micro-Investment Platform for Growth Story of India</h1>
            <p class="hero-left-content">
                Welcome to BorrowBridge, the decentralized lending platform that
                connects borrowers and investors globally. Experience transparent and
                direct peer-to-peer interactions, fostering financial inclusivity and trust
                in the lending ecosystem.
            </p>
            <div class="hero-left-btn flex-center">
                <button class="quick-link">Learn More</button>
                <button class="quick-link">Sign Up</button>
            </div>
            
        </div>
        <div class="hero-right flex-center">
            <img src={asset1} alt="img"/>
        </div>
    </div>

    <div class="feature-section">
        <div class="feature-left flex-center">
            <img src={asset2} alt=""/>
        </div>
        <div class="feature-right flex-center">
            <h1 class="feature-right-heading">Facilitating peer-to-peer Connections</h1>
            <p class="feature-right-content">
                BorrowBridge utilizes blockchain technology to create a transparent and secure
                lending platform. By directly connecting borrowers and investors, we foster
                financial inclusivity and trust in the lending ecosystem.
            </p>
            
            <h1 class="feature-right-heading">Efficient and Secure Transactions</h1>
            <p class="feature-right-content">
                With BorrowBridge, borrowers and investors can enjoy efficient and secure
                transactions. Our platform leverages blockchain technology to ensure
                transparency and trust in every interaction.
            </p>
            <h1 class="feature-right-heading">Flexible Loan Options</h1>
            <p class="feature-right-content">
                At BorrowBridge, we offer borrowers a range of flexible loan options. Whether
                you need a short-term loan or a long-term financing solution, our platform can
                connect you with the right investors.
            </p>
        </div>
    </div>
    
    <div class="action-section">
        <div class="action-heading">
            <h1>Discover How Borrowers and Investors Connect on BorrowBridge</h1>
        </div>
        <div class="action-content">
            <section>
                <img src={asset3} alt=""/>
                <h1>Seamless Interaction for Borrowers and Investors</h1>
                <p>BorrowBridge offers a seamless platform for borrowers and investors to connect and engage. Borrowers have the ability to create loan requests, specifying their desired terms and conditions, while investors can browse these requests and make informed decisions.</p>
            </section>
    
            <section>
                <img src={asset4} alt=""/>
                <h1>Easy Loan Request Creation and Investment Opportunities</h1>
                <p>With BorrowBridge, borrowers have the ability to effortlessly generate loan requests, specifying details such as loan amount, interest rate, and repayment terms. Subsequently, investors can peruse these requests and make selections.</p>
            </section>
    
            <section>
                <img src={asset5} alt=""/>
                <h1>Transparent and Secure Peer-to-Peer Lending Experience</h1>
                <p>BorrowBridge ensures transparency and security in the lending process through the utilization of blockchain technology. All transactions and interactions between borrowers and investors are securely recorded on the blockchain, thereby providing a high level of accountability.</p>
            </section>
        </div>
    </div>


    <div class="cta flex-center">
        <h1>Join our lending platform today!</h1>
        <p>Experience transparent and direct peer-to-peer lending with BorrowBridge.</p>
        <button class="cta-btn">Join now</button>
    </div>

    <div class="faq flex-center">
        <h1>FAQ</h1>
        <p>Find answers to common questions about decentralized lending and the BorrowBridge platform.</p>

        <div class="faq-question">
            <div class="faq-question-heading">
                <h3>How does BorrowBridge work?</h3>
                <p>+</p>
            </div>
            <div class="faq-answer">
                <p>
                    BorrowBridge leverages blockchain technology to connect borrowers and investors directly,
                    eliminating the need for traditional intermediaries. It provides a transparent and secure platform for
                    peer-to-peer lending, fostering financial inclusivity and trust in the lending ecosystem.
                </p>
            </div>
        </div>

        <div class="faq-question">
            <div class="faq-question-heading">
                <h3>What are the benefits?</h3>
                <p>+</p>
            </div>
            <div class="faq-answer">
                <p>
                    By using BorrowBridge, borrowers can access loans at competitive rates and investors can earn
                    attractive returns. The platform offers global connectivity, fast and efficient transactions, and
                    increased transparency in the lending process.
                </p>
            </div>
        </div>

        <div class="faq-question">
            <div class="faq-question-heading">
                <h3>Is my data secure?</h3>
                <p>+</p>
            </div>
            <div class="faq-answer">
                <p>
                    Yes, BorrowBridge prioritizes the security and privacy of user data. The platform utilizes advanced
                    encryption and decentralized storage to ensure the protection of personal and financial information.
                </p>
            </div>
        </div>

        <div class="faq-question">
            <div class="faq-question-heading">
                <h3>How can I join?</h3>
                <p>+</p>
            </div>
            <div class="faq-answer">
                <p>
                    Joining BorrowBridge is easy. Simply sign up on our website, complete the verification process, and
                    start exploring the opportunities for lending or investing.
                </p>
            </div>
        </div>

        <div class="faq-question">
            <div class="faq-question-heading">
                <h3>What are the fees?</h3>
                <p>+</p>
            </div>
            <div class="faq-answer">
                <p>
                    BorrowBridge charges a small fee for loan origination and servicing. The exact fees depend on the loan
                    amount and duration. Detailed information about fees can be found on our website.
                </p>
            </div>
        </div>

    </div>
    </>
    // document.addEventListener('DOMContentLoaded', function () {
    //     const faqQuestions = document.querySelectorAll('.faq-question .faq-question-heading');
    
    //     faqQuestions.forEach(function (question) {
    //         question.addEventListener('click', function () {
    //             this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'block' ? 'none' : 'block';
    //         });
    //     });
    //   });
  )
}

export default Homepage