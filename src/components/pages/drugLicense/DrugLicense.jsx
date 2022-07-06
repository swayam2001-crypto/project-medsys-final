import React from "react";
import { useState } from "react";
import Scrollspy from "react-scrollspy";

import { TabTitle } from '../../Utillity'
import './drugLicense.css';
import businessLogo from './business logo.jpeg';
import smileLogo from './smile logo.jpeg';
import starLogo from './star logo.jpeg';

function numberToLetter(num) {
    let ascii = 'a'.charCodeAt(0) + num;
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
                <span className="accordion__caption" > {numberToLetter(props.number) + ' ' + props.ques}</span>
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
                <h1>Central FSSAI License</h1> <br />
                <p>The authority issue the Food License to that business who is engaged in activities involving food or related
                    products for human consumption and
                    lays down the rules  regulations which has to be adhered to by Food Business Operators in India.</p><br />

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
            <p>Drug License Registration at just ₹14999/- (inclusive of all taxes)</p>
            <button type="submit"><a href="tel:+91 70204 38881">Call Now!</a></button>
        </div>
    </>);

}


function DrugLicense() {
    TabTitle('Drug License - medsysconsultancy.com');

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
                        'content-documents',
                        'content-regProcess',
                        'content-faq'
                    ]}>
                    <li> <a className="tabanchor" href="#overview" >Overview</a></li>
                    <li> <a className="tabanchor" href="#importance">Forms Of Drug License</a></li>
                    <li> <a className="tabanchor" href="#documents">Documents Required</a></li>
                    <li> <a className="tabanchor" href="#attachment">Registration Process</a></li>
                    <li> <a className="tabanchor" href="#faq" >FAQs</a></li>
                    </Scrollspy>
                    <br />
                </div>
                
                <button type="submit" id="contact"><a href="#contactus"><b style={{color: 'white'}}> CONTACT US </b></a></button>
            </div>


            <div className="right necessity flex-col" id="overview" style={{fontSize: '1rem', marginBottom: '7rem'}}>
                <div className="necessity" id="content-overview">
                    <h1 id="overview">Overview</h1>
                    <br />
                    <p className="gap">Drug license is an authorization granted by the authority under the Drugs and Cosmetic Act 1940 so as to perform the business of drugs/ medicines or cosmetics.
                        The Drug license is issued through the State Drugs Standard Control Organization or the Central Drug Standard Control Organization.
                        <br /><br />

                        The government has set down stringent laws and guidelines for the manufacturing and distribution of drugs and medicines within India. The registration of Drug License and everything identified
                        with drugs is directed by the Drugs and Cosmetics Act 1940. Control is practiced over drugs from the raw material stage amid manufacture, sale, and distribution and up to the time it is given on
                        to a patient or buyer by a Pharmacist in the retail drug store, hospital or a dispensary. Drug license is requisite to be taken for a wide range of drugs or cosmetics business which includes allopathic, homeopathic, ayurvedic or Unani drugs and so forth. The act also covers the Pharmacist's actions, hospital or dispensary utilization of drugs.
                        The act covers the Ayurvedic and Unani drugs likewise in it.
                    </p>

                    <p id="importance"></p>
                </div>
                <br /><br />

                <div className="ICI necessity" id="content">
                    <h1 >Forms for Drug License for sale and wholesale of Drugs:</h1>
                    <br />
                    <p>Drugs have varieties of categories, and for various categories, the different license is mandatory to obtain, by filing various forms as given underneath:-</p>
                    <ul>

                        <li>FORM 20 is for the sale of Allopathic drugs.</li>
                        <li>FORM 20-A is for the sale of Restricted Allopathic drugs.</li>
                        <li>FORM-20-B is for wholesale of Allopathic drugs.</li>
                        <li>Form 20-C is for the sale of Homoeopathic medicines by retail.</li>
                        <li>Form 21 is for Sale of Allopathic drugs specified in Sch C & C (1).</li>
                        <li>Form 21-B is for wholesale of Allopathic drugs specified in Sch C & C(1).</li>
                        <li>Form 21-A is for the retail sale of restricted Allopathic drugs specified in Schedule C (I).</li>
                        <li>Form 20-F is for the retail sale of drugs specified in Sch. 'X'.</li>
                        <li>Form 20-G is for wholesale of drugs Specified in Sch. 'X'.</li>
                        <li id="documents">Form 20 BB & Form 21 BB R-62- D R  is for Sale of Drugs from motor vehicles (1) Drugs other than those specified
                            in Schedule C&C (1) (2) Drugs specified in Schedule C&C (1).</li>
                    </ul>
                </div>

                <br /><br />
                <div className="ICI necessity" id="content-documents">
                    <h1 >Documents Required</h1>
                    <br />
                    <p>The lists of documents required for Drug License are:-</p>
                    <ul>

                        <li>The corporation’s constitution (AOA/MOA).</li>
                        <li>The photograph identity proof of sole proprietor, partner or their director.</li>
                        <li>The papers of the owned property where the commerce would be carried out.</li>
                        <li>For rented property, a copy of the rent agreement is required.</li>
                        <li>The key plan and the site plan of the particular premises.</li>
                        <li>Drug storage sometimes needs to be in the cold chain, therefore the particulars and invoice of the refrigerator in use.</li>
                        <li>An affidavit relating to compliance with MPD 2021 and if premises are situated on DDA residential flat or building or a plot then their affidavit.</li>
                        <li>An additionally exhaustive document is required for a registered pharmacist.</li>
                        <li>Qualification proof in the form of degrees as well as certificates or mark sheets ( wholesale license).</li>
                        <li>The certificate of registration with the state pharmacy council depending on the region.</li>
                        <li>An appointment letter as well as biodata ( wholesale license).</li>
                        <li>Any other additional wholesale documents for wholesale Drug License competent person.</li>
                        <li id="attachment">Any type of experience certificate ( wholesale license).</li>
                    </ul>
                </div>
                <br /><br />
                <div className="ICI necessity" id="content-regProcess">
                    <h1 >Registration Process</h1>
                    <br />
                    <p>The process for obtaining a Drug license is-</p>
                    <ul>
                        <li>
                            <b >Step 1:</b>  Online application filling for the drug License, with the payment of a government fee.
                            The scanned copy of each and every document is uploaded at the time of filing the application.
                        </li>
                        <li>
                            <b >Step 2:</b> On receipt of the application, the drug inspector would visit personally the shop for verifying the documents and the accuracy of the information provided.
                        </li>
                        <li>
                            <b >Step 3:</b> On successful completion of the Inspection personal interview for by the inspector or such competent individual and depending on verification of every information and documents provided is correct the controller of drugs issues the Drug License.
                        </li>
                    </ul>
                    <br />
                    <p>The Drug Regulatory Body has made it compulsory for its authorities to attend as well as grant the licenses, whether retail or wholesale, within a period of 30 days, in the event that they satisfy all the necessary eligibility criteria.
                        <br />
                        We at Medsys provide meticulous assistance to the clients in correctly filing the drug registration as per the rules.</p>
                    <br />
                    <p id="faq" >
                        Medsys is a professional tech-based online and legal service that helps clients to simplify the procedures of all kinds of drug license registration, license, implementation,
                        tax concerns, and any additional legal compliances and services related to the pharmaceutical business in India.
                    </p>
                </div>

                <br /><br />

                <div className="faq" id="content-faq">
                    <h1>FAQs</h1>
                    <br /><br />

                    <FAQItem number={0} ques="What is drug license?"
                        answer="Drug License is an authorization from the government of India towards dealing with drugs.
                        There are 2 types of license, the retail license and wholesale license  for drug distribution or sale in India." />

                    <FAQItem number={1} ques="Is it necessary to obtain drug license beforeÂ the commencementÂ of the drug business?"
                        answer="Yes, before you start any business dealing in drugs, whether it is Allopathic Drugs, Ayurvedic Medicine, Homeopathy or Unani, to manufacture, distribute or sell the drugs,
                        it is compulsory to obtain a license as per the nature of business by applying towards the controller of the drugs and cosmetics" />
                    <FAQItem number={2} ques="For the grant of a drug license, does my shop be located at commercial premises?"
                        answer="Licenses for the sale of drugs could be granted only at premises which are commercial premises or other premises independent of residence,
                        also recognized as mixed land use. The State drug office issues guidance which may be referred for this purpose." />
                    <FAQItem number={3} ques="What are different types of Licenses Issued for the Pharmaceutical Business?"
                        answer={`There are various licenses, for instance,\nDrug Manufacturing License Wholesale Drug License,\nRetail Drug License,\nImport of Drugs or Cosmetics\nImport of Medical Equipment\nExport of Medicines etc`} />
                    <FAQItem number={4} ques="What is the main purpose of obtaining a drug license?"
                        answer="The main purpose of the Drugs and Cosmetic Act is to make sure the safety, efficiency, and conformity of the drugs as well as
                        cosmetics sold in India towards the state quality standards for which certain restrictions have been provided under the Act." />
                    <FAQItem number={5} ques="How do I renew my drug license?"
                        answer={"You can submit the completed application with the following enclosures in the office of Drug Licensing Authority of your district within 15 days of online registration for renewal Duly filled Form 19/19A/19AA/19C.\nOriginal Treasury challan after depositing the requisite fees.\nOriginal affidavit of proprietor/authorized partner/authorized director or authorized person of Pvt Ltd or Ltd Company or Trust or Society regarding no change in Name of the firm, Constitution(in case of Proprietorship or Partnership firm), premises since granting of the license.\nDocuments related to Registered Pharmacist.\nCopy of Diploma Pharmacy; Registration Certificate from Pharmacy Council of a particular state; Copy of renewal of Registration; Copy of Appointment and Joining Letter.\nOriginal affidavit of Pharmacist.\nDocuments related to a Competent Person (For wholesale licenses).\nCopy of Educational qualification certificate(s) including the High School Certificate.\nIf the competent person is a registered pharmacist then all the documents as enlisted.\nOriginal affidavit of Competent Person."} />
                    <FAQItem number={6} ques="How do I renew my drug license?"
                        answer={`You can submit the completed application with the following enclosures in the office of Drug Licensing Authority of your district within 15 days of online registration for renewal:

                        Duly filled Form 19/19A/19AA/19C.
                        Original Treasury challan after depositing the requisite fees.
                        Original affidavit of proprietor/authorized partner/authorized director or authorized person of Pvt Ltd or Ltd Company or Trust or Society regarding no change in Name of the firm, Constitution(in case of Proprietorship or Partnership firm), premises since granting of the license.
                        Documents related to Registered Pharmacist.
                        Copy of Diploma Pharmacy; Registration Certificate from Pharmacy Council of a particular state; Copy of renewal of Registration; Copy of Appointment and Joining Letter.
                        Original affidavit of Pharmacist.
                        Documents related to a Competent Person (For wholesale licenses).
                        Copy of Educational qualification certificate(s) including the High School Certificate.
                        If the competent person is a registered pharmacist then all the documents as enlisted.
                        Original affidavit of Competent Person.`} />
                    <FAQItem number={7} ques="Still Confused?"
                        answer="Speak to our experts who shall solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com" />
                </div>
            </div>
        </section >
    </>);
}

export default DrugLicense;