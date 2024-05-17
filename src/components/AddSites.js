/* eslint-disable jsx-a11y/alt-text */
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import swal from "sweetalert";
import { addDoc } from "firebase/firestore";
import { Appstate } from "../App";
import { sitesRef } from "../firebase/firebase";
import { TailSpin } from "react-loader-spinner";

const AddSites = () => {
  const useAppstate = useContext(Appstate);
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    year: "",
    place:"",
    description: "",
    image: "",
    rating: 0,
    ratingCount: 0,
  });
  const [loading, setLoading] = useState(false);

  const addSites = async () => {
    console.log('hihi')
    setLoading(true);
    try {
      if (useAppstate.login) {
        await addDoc(sitesRef, form);
        swal({
          title: "Successfully Added",
          icon: "success",
          buttons: false,
          timer: 3000,
        });
       navigate('/');
      } else {
        navigate("/login");
      }
    } catch (err) {
      swal({
        title: err,
        icon: "error",
        buttons: false,
        timer: 3000,
      });
    }
    setLoading(false);
  };

  return (
    <div>
      <section className="text-gray-600 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-900">
              Add Sites
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label for="name" className="leading-7 text-sm text-gray-600">
                    Heritage Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="place"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Place
                  </label>
                  <input
                    type="place"
                    id="place"
                    name="place"
                    value={form.place}
                    onChange={(e) => setForm({...form, place: e.target.value})}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="year"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Year
                  </label>
                  <input
                    type="year"
                    id="year"
                    name="year"
                    value={form.year}
                    onChange={(e) => setForm({...form, year: e.target.value})}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label
                    for="year"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Image Link
                  </label>
                  <input
                    
                    id="image"
                    name="image"
                    value={form.image}
                    onChange={(e) => setForm({...form, image: e.target.value})}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    for="message"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Description
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={form.description}
                    onChange={(e) => setForm({...form, description: e.target.value})}
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button  onClick={addSites} className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                {loading ? <TailSpin height={25} color="white" /> : 'Submit'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddSites;
