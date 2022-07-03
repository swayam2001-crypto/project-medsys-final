import React from "react";

const copyright = () => {
  const points = [
    {
      head: "Business Served",
      icon: "1",
    },
    {
      head: "9.6/10 Unfiltered Customer ratings",
      icon: "2",
    },
    {
      head: "Satisfaction or Money Back Guarantee",
      icon: "3",
    },
  ];
  return (
    <div className="sm:grid sm:grid-cols-2 p-11 bg-rose-900">
      <div className="">
        <div className="py-7 flex sm:w-3/4 mx-auto text-rose-100">
          <h1 className="text-5xl font-semibold">Copyright Registration</h1>
        </div>
        <div className="text-2xl py-3 px-2 sm:w-3/4 mx-auto text-rose-100">
          <p>
            Copyright is a type of intellectual property that allows you to sue
            anyone who tries to steal your work.
          </p>
          <p className="mt-3">
            Why put it off any longer? Let’s safeguard your original material!!
          </p>
        </div>
        <div className="sm:w-2/3 mx-auto text-lg p-5 text-rose-200">
          {points.map((p) => (
            <div className="flex gap-3">
              <div>{p.icon}</div>
              <div>{p.head}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-rose-900 px-3 py-9">
        <form className="mx-auto sm:w-2/3 bg-rose-100 p-6 px-6 rounded-md">
          <div className="flex flex-col text-gray-600 py-2">
            <label>Full Name</label>
            <input
              className="rounded-md bg-white mt-2 p-2 focus:bg-rose-50 focus:outline-none"
              type="text"
            />
          </div>
          <div className="flex flex-col text-gray-600 py-2">
            <label>Phone Number</label>
            <input
              className="rounded-md bg-white mt-2 p-2 focus:bg-rose-50 focus:outline-none"
              type="number"
            />
          </div>
          <div className="flex flex-col text-gray-600 py-2">
            <label>E-mail</label>
            <input
              className="rounded-md bg-white mt-2 p-2 focus:bg-rose-50 focus:outline-none"
              type="e-mail"
            />
          </div>
          <button className="w-3/4 py-2 mt-5 bg-mainColor text-rose-100 font-semibold rounded-md hover:bg-rose-900">
            Request a Callback
          </button>
        </form>
      </div>
    </div>
  );
};

export default copyright;
