import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './dsc.css';
import businessLogo from './business logo.jpeg';
import smileLogo from './smile logo.jpeg';
import starLogo from './star logo.jpeg';

function numberToLetter(num) {
    let ascii = ('a'.charCodeAt(0)) + num;
    return String.fromCharCode(ascii);
}

function FAQItem(props) {
    const [activated, toggle] = useState(false);

    return (
        <div className={'accordion__item' + (activated ? ' accordion__item--active' : '')}>
            <button className="accordion__btn"
                onClick={() => {
                    toggle(!activated);
                }}>
                <span className="accordion__caption" > {numberToLetter(props.number) + '. ' + props.ques}</span>
                <span className="accordion__icon"><i className="fa fa-plus"></i></span>
            </button>

            <div className="accordion__content">
                <p >{props.answer}</p>
            </div>
        </div>);
}

function Header() {
    return (<>
        <div className="application" style={
            {
                display: 'flex',
                marginTop: '0rem',
            }}>
            <div className="header-left-content">
                <h1>Digital Signature Certificate</h1> <br />
                <p>In today’s world, physical signatures are tough to come by, so why wait? Keep your work going by having a DSC and being able to sign from anywhere.</p><br />

                <br />
                <ul>
                    <li> <img src={businessLogo} alt="" /> <b>Business Served</b></li>
                    <li> <img src={starLogo} alt="" /> <b>9.6/10 Unfiltered Customer ratings</b></li>
                    <li> <img src={smileLogo} alt="" /> <b>Satisfaction or Money Back Guarntee</b></li>
                </ul>
            </div>

            <div className="header-right-content">
                <form action="">
                    <input type="text" name="" placeholder="Full Name" required /> <br />
                    <input type="email" name="" placeholder="Email ID" required /> <br />
                    <input type="tel" name="" placeholder="Phone No." required /> <br />
                    <button type="submit"> <a href="#">Request a Callback</a></button>
                </form>
            </div>
        </div>

        <div className="top-footer">
            <p>Our Digital Signature Certificate Packages Start From ₹1,999/- All-Inclusive</p>
            <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
        </div>

        <div className="dsc-info">
            <h1 className="heading">What Is A Digital Signature Certificate (DSC)?</h1>
            <div className="boxx1">
                <span>Form CSR-1 is for the ‘Registration of Entities for undertaking CSR Activities’. All entities planning CSR
                    projects must submit this form to the MCA portal.</span>
                <ul id="list">
                    <li className="arroww1">Digital Signature Certificates (DSC) are the digital substitute (i.e. electronic format) of
                        physical or paper certificates that proves as a source to authenticate the identity of the signer of a
                        document
                        or the sender of a message, and also assure that the original content of the document or statement that has
                        been sent is unchanged.</li>
                    <li className="arroww1"> Hence, a digital certificate is also presented electronically to ensure one’s identity to
                        access information or services or to sign particular documents which are done digitally.</li>
                </ul>
            </div>
        </div>
    </>);

}


function DSC() {
    TabTitle('Digital Signature Certificate - medsysconsultancy.com');

    return (<>
        <Header />


        <section className="main-content">
            <div className="left" id="lefty" >
                <div id="activeTableContentaa">
                    <h1>Table Of Contents</h1>
                    <hr />
                    <Scrollspy currentClassName="content-scroll-view" items={[
                        'content-overview',
                        'content',
                        'content-dsc-class',
                        'content-docs',
                        'content-process',
                        'content-help',
                        'content-faq',
                    ]}>
                        <li> <a className="tabanchor" href="#overview" >Why Is It Required</a></li>
                        <li> <a className="tabanchor" href="#importance">Where Can The DSC Be Used?</a></li>
                        <li> <a className="tabanchor" href="#laws">Classes Of DSC </a></li>
                        <li> <a className="tabanchor" href="#documents">Documents Required</a></li>
                        <li> <a className="tabanchor" href="#process">Process Flow</a></li>
                        <li> <a className="tabanchor" href="#help">How Will We Help You?</a></li>
                        <li> <a className="tabanchor" href="#faq" >FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>

                <button type="submit" id="contact"><a href="#contactus"><b style={{ color: 'white' }}> CONTACT US </b></a></button>
            </div>


            <div className="right1 necessity" style={{fontSize:'1rem'}}>
                <div className="ICI" id="content-overview">
                    <h1 id="overview">Why Is It Required?</h1>
                    <br />

                    <ul>

                        <li>To authenticate your identity electronically as the sender of the message</li>
                        <li>To encrypt your data such that only the intended recipient can access it</li>
                        <li>To equip your online transactions with a high level of security</li>
                        <li>To ensure complete privacy of the information exchanged using a DSC</li>
                        <li>To assure the recipient that the information has not been changed in transit</li>
                        <li>To reduce the cost and time of signing the hard copy documents physically and scanning them to send them
                            via Email</li>
                    </ul>
                    <p id="importance"></p>
                </div>
                <br /><br />

                <div className="ICI necessity" id="content">
                    <h1>Where Can The DSC Be Used?</h1>
                    <br />

                    <ul>

                        <li>To communicate digitally signed and encrypted documents and emails</li>
                        <li>For carrying out protected web-based transactions, or to recognize other associates of web-based
                            transactions</li>
                        <li>In e-Tendering, eProcurement, MCA (e-filing), Income Tax (e-filing income tax returns) Applications and
                            also in many other applications</li>
                        <li>For signing important documents in MS Word, MS Excel and PDF formats</li>
                    </ul>
                    <p id="laws"></p>
                </div>
                <div className="plc">
                    <p>Related Read:Income Tax Returns (ITR) AY 2021-22: Which ITR Form Should You File?</p>
                    <button type="submit" className="button"> <a href="">CLICK HERE</a></button>
                </div>

                <br /><br />
                <div className="ICI necessity" id="content-dsc-class">
                    <h1>Classes Of DSC </h1>
                    <br />
                    <p>DSC consist of three classes and each class is differentiated as per the level of security:</p>
                    <ul>

                        <br />
                        <h3>Class I</h3>
                        <p>These DSCs furnish to the purpose where the risk is minimal. The class I signature is stored in the
                            software.
                            However, this only verifies the Name and E-mail ID of an individual and hence it can be used by Companies
                        </p>
                        <br />
                        <h3>Class II</h3>
                        <p>These DSCs are used to sign documents containing moderate risk. The class II signature is installed on a
                            hardware cryptographic device.
                            This class of DSC is required by Companies for filing Income tax returns</p>
                        <br />
                        <h3>Class III</h3>
                        <p>These DSCs are the highest and most secure form of DSC and used where the data Compromise risk is at the
                            extreme level.
                            For obtaining Class III DSCs, the person himself has to appear before the certifying authority (CA). In
                            this class also, the signature is installed in a hardware cryptographic device</p>
                    </ul>
                    <p id="documents">An individual or entity who intends to participate in Online auctions or apply for e-Tenders
                        requires Class III DSC.</p>
                </div>
                <br /><br />


                <div className="ICI necessity" id="content-docs">
                    <h1>Documents Required</h1>
                    <br />

                    <ul>
                        <h3>Identity Proof</h3>
                        <li>Applicant’s PAN card</li>
                        <li>Driving License</li>
                        <li>Passport</li>
                        <li>Post office ID Card</li>
                        <li>Bank A/c Passbook with attached photograph and duly signed by an individual and attested by concerned
                            bank officials</li>
                        <li>Photo identity card issued by the Ministry of Home Affairs of Centre/State Governments</li>
                        <li>Any Government-issued photo ID card bearing the signatures of the individual</li>
                    </ul><br />
                    <ul>
                        <h3>Address Proof (Any one)</h3>
                        <li>Aadhar Card</li>
                        <li>Voter ID Card</li>
                        <li>Driving License (DL)/Registration Certificate (RC)</li>
                        <li>Electricity Bill (Not older than 3 Months)</li>
                        <li>Water Bill (Not older than 3 Months).</li>
                        <li>Property Tax/ Corporation/ Municipal Corporation Receipt</li>
                        <li>Latest Bank Statement signed by the bank (Not older than 3 Months)</li>
                        <li id="process">VAT Tax/Service Tax/Sales Tax registration certificate</li>
                    </ul>
                </div>
                <br /><br />
                <div className="ICI necessity" id="content-process">
                    <h1>Process Flow</h1>
                    <br />
                    <p> Digital Signature Certificates application procedure comprises of three Stages:</p><br />

                    <p>Stage 1 – Filling up of application</p>

                    <p>Stage 2 – Payment / Document Submission</p>

                    <p>Stage 3 – Download of the certificate</p>
                    <ul>

                        <h3>
                            <li>Stage 1 - Filling The Application</li>
                        </h3>
                        <p>Online Digital Signature Certificate application will be required to be filled based on the usage type,
                            user Type, Certificate class etc</p>
                        <h3>
                            <li>Stage 2 - Payment/Document Submission</li>
                        </h3>
                        <p>At this stage, after filling up the online application, payment will be made using payment gateway.
                            Further, the documents can be submitted either making a courier to
                            e-Mudhra or selecting a “Pick-up at doorstep” service (subject to availability of the facility in your
                            city/town)</p>
                        <h3>
                            <li>Stage 3 - Download Certificate</li>
                        </h3>
                        <p id="help">After successful verification of the documents, an Email containing certificate download
                            credentials will be received.
                            Using such credentials, a digital signature certificate (DSC) will be downloaded onto the token or browser
                        </p>
                    </ul>

                </div>

                <br /><br />
                <div className="ICI necessity" id="content-help">
                    <h1>How Will We Help You?</h1>
                    <br />

                    <ul>

                        <li>Submit a service request by clicking here</li>
                        <li>Our expert team will contact you to know your requirement and with a simple checklist</li>
                        <li>Fill in the checklist</li>
                        <li>Submit the documents</li>
                        <li>Our expert team will verify the documents</li>
                        <li>Application for DSC will be filed with the authority</li>
                        <li>DSC granted</li><br />
                        <p id="faq">Throughout the process, our dedicated manager will keep you updated on the progress of the
                            application</p>
                    </ul>
                </div>
                <br /><br />
                <div className="faq" id="content-faq">
                    <h1>FAQs</h1>
                    <br /><br />


                    <FAQItem number={0} ques="Is a digital signature legally valid?"
                        answer="Yes, the Information Technology Act of 2000 in India has provided legal validity to the use of digital signature." />
                    <FAQItem number={1} ques="How long will it take for the application to be
                        processed?"
                        answer="DSC issuance would require approximately 5 business days from the date of applying/application
                        for DSC." />
                    <FAQItem number={2} ques="Why do I need to submit the documents for obtaining DSC?"
                        answer="A Digital Signature Certificate holds almost the same importance in the digital world as your
                        Passport or PAN card holds in the physical world.
                        Therefore, all data displayed on your Digital Signature Certificate needs to be verified before
                        issuing the certificate." />
                    <FAQItem number={3} ques="Can a person hold two digital signatures, say one for personal
                      use and another one for office use?"
                        answer="Yes, a person can hold two Digital Signature Certificates (DSC) and it depends on him which he
                        wants to use for official purposes and which for personal purposes." />
                    <FAQItem number={4} ques="What will be the validity of the digital signature
                      certificate?"
                        answer="You can apply for a digital signature certificate having 1 year or 2 years validity from the date
                        of issuance as per your convenience." />
                    <FAQItem number={5} ques="Can a digital signature be forged?"
                        answer="No, it is secure and has already been applied online for authentication. Thus it is more secure
                        than an ordinary hand-written signature and practically impossible to forge a digital signature.." />
                    <FAQItem number={6} ques="Still Confused?"
                        answer="Speak to our experts who shall
                        solve all your
                        doubts.
                        Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com" />
                        
                </div>
            </div>
        </section>
    </>);
}

export default DSC;