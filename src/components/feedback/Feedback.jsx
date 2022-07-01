import React, { useState } from "react";
import { Modal, ModalHeader, ModalBody, Row, Col } from "reactstrap";
import { FaStar } from "react-icons/fa";
import Rate from "../Rate";

const Feedback = ({ setModalOn }) => {
  const handleXClick = () => {
    setModalOn(false);
  };

  const [rating, setRating] = useState(0);

  return (
    <div className=" h-full w-full bg-white-400 opacity-100 fixed inset-0 z-50">
      <div className="flex h-full w-full justify-center items-center mt-5 ">
        <div className="flex-col w-[40rem] h-[41rem] bg-rose-100 border-2 border-rose-400 rounded-lg ">
          <button
            className="text-right hover:outline-offset-2 hover:target:marker:bg-rose-300 focus:ring-2 focus:ring-rose-700 text-lg p-4 font-semibold"
            onClick={handleXClick}
          >
            X
          </button>

          <div className=" text-[#560216] h-[3rem] mx-auto text-5xl mb-4 text-center font-semibold">
            Feedback
          </div>

          <div className="text-center p-1 text-lg">
            Please rate our Services, it helps us serving you better.
          </div>
          <div className="col text-center text-xl p-2">
            <Rate rating={rating} onRating={(rate) => setRating(rate)} />
          </div>

          <div className="w-5/6 mx-auto  text-[#560216] text-3xl font-semibold text-center">
            Suggestions
          </div>

          <div className="text-center p-2 text-lg">
            We appreciate your suggestions, write your suggestions here.
          </div>

          <div className="flex flex-col p-1">
            <input
              className="placeholder:text-slate-700 block bg-white mx-auto w-3/4 rounded-md shadow-sm focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md p-1"
              placeholder="Name"
              type="text"
              name="text"
            />
          </div>

          <div className="flex flex-col p-1">
            <input
              className="placeholder:text-slate-700 block bg-white mx-auto w-3/4 rounded-md shadow-sm focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md p-1"
              placeholder="Email"
              type="email"
              name="email"
            />
          </div>

          <div className="flex flex-col p-1">
            <input
              className="placeholder:text-slate-700 block bg-white mx-auto w-3/4 rounded-md shadow-sm focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md p-1"
              placeholder="Phone Number"
              type="number"
              name="number"
            />
          </div>

          <div className="flex flex-col p-1">
            <input
              className=" placeholder:text-slate-700 block bg-white mx-auto w-3/4 rounded-md shadow-sm focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md p-1"
              placeholder="Subject"
              type="text"
              name="text"
            />
          </div>

          <div className="flex flex-col p-1 py-3">
            <textarea
              rows="4"
              className=" pl-2 placeholder: placeholder:text-slate-600 mx-auto block bg-white w-3/4 rounded-lg shadow-sm focus:outline-none hover:outline-offset-2 focus:border-[#560216] focus:ring-[#560216] focus:ring-1 sm:text-md"
              placeholder="Write Suggestions..."
              type="text"
              name="text"
            />
          </div>

          <div className="text-center p-1 text-lg">
            <button
              className="w-1/2 sm:w-1/3 py-2 text-center text-white bg-[#560216] font-semibold rounded-md hover:bg-rose-800"
              onClick={handleXClick}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
