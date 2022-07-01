import React from 'react';
import { TabTitle } from '../Utillity';
import Footer from '../footer/Footer';
export default function Partner() {
  TabTitle("Partner with us");
  return (
    <>
      {/* Section right below the header */}
      <section className="partner-header-below  h-96 ">
        <div className=" inner">
          {/* <img src={img} alt="" className='w-full h-96'/> */}
          <div className="container">
          <h1 className='text-4xl text-center font-bold p-7'>Join Partnership with Medsys</h1>
          <p>Medsys caters to micro and small businesses in India. Helping start-ups to start their business in any sector and industry. If you deal in B2B products, Medsys partnership can be your business growth enabler.</p></div>
        </div>
      </section>
      {/* ++++++++++++++++++++++++++++ Join Partnership ++++++++++++++++++++++++ */}
      <section className="join-partnership myCont">
       
      </section>
      {/* ++++++++++++++++++++++++++++ Join Partnership ++++++++++++++++++++++++ */}
      <section className="partner-experience myCont">
        <h1 className="heading font-bold text-4xl p-7 text-center">Our partners have experienced</h1>
        <div className="wrapper flex justify-between">
          {/* experience item  */}
          <div className='inner'>
            <div className="icon text-center font-bold text-3xl">
              <i class="lni lni-angellist text-7xl pb-4"></i>
            </div>
            <p className='text-center w-fit font-bold'>Accelerated growth through a <br /> targeted network of business</p>
          </div>
          {/* experience item  */}
          <div className='inner'>
            <div className="icon text-center font-bold text-3xl">
              <i class="lni lni-angellist text-7xl pb-4"></i>
            </div>
            <p className='text-center w-fit font-bold'>Seemless integration across<br />platform that facilities ease of doing business <br /> doing business</p>
          </div>
          {/* experience item  */}
          <div className='inner'>
            <div className="icon text-center font-bold text-3xl">
              <i class="lni lni-angellist text-7xl pb-4"></i>
            </div>
            <p className='text-center w-fit font-bold'>Complete support from a <br /> dedicated flexible team of legal <br />professionals</p>
          </div>
        </div>
        <h3 className='text-2xl text-center font-bold pt-5'>Come, Join Us</h3>
        <div className="button flex justify-center pt-4">
          <button>Become a partner</button>
        </div>
      </section>

      {/* ++++++++++++++++++++++++++++ Connect with team ++++++++++++++++++++++++ */}
      <section className="connect-with-team myCont mb-24">
        <h1 className="heading font-bold text-4xl p-7 pt-16 text-center">Connect with our team and Explore the Possibilites of Partnering </h1>
        <div className="form">
          <div className="inner grid grid-cols-2 gap-10">
            <input className='border-solid border outline-none px-5 py-1 border-slate-400' type="text" placeholder='Name*' />
            <input className='border-solid border outline-none px-5 py-1 border-slate-400' type="email" placeholder='Email Address*' />
            <input className='border-solid border outline-none px-5 py-1 border-slate-400' type="phone" placeholder='Mobile Number*' />
            <input className='border-solid border outline-none px-5 py-1 border-slate-400' type="text" placeholder='Subject*' />
          </div>
          <textarea className='w-full mt-8 border-solid border outline-none px-5 py-1 border-slate-400' name="message" id="" cols="30" placeholder='Message*' rows="5"></textarea>
          <input className='w-full mt-4 border-solid border outline-none px-5 py-1 border-slate-400' placeholder='Security Code*' type="text" />
          {/* Button  */}
          <div className="form-btn flex justify-center pt-4">
            <button className='text-white w-28 h-8 bg-[#560217] rounded-sm'>Send</button>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
