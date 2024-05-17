import React, { useEffect, useState } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { getDocs } from "firebase/firestore";
import { sitesRef } from "../firebase/firebase";

const Cards = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const _data = await getDocs(sitesRef);
      _data.forEach(doc => {
        setData(prv => [...prv, { ...doc.data(), id: doc.id }]);
      });
      setLoading(false);
    }
    getData();
  }, []);

  return (
    <div  className="flex flex-wrap justify-center px-3 mt-2">
      {loading ? (
        <div className="w-full flex justify-center items-center h-32">
          <RotatingTriangles height={50} color="white" />
        </div>
      ) : (
        data.map((e, i) => {
          return (
            <Link to={`/detail/${e.id}`}>
              <div
              
                key={i}
                className="card font-medium shadow-lg p-2 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500 w-70 mr-8"
              >
                <img className="h-60 md:h-72 w-96" src={e.image} />
                <h1>
                  <span className="text-gray-500 mr-1">Name:</span> {e.name}
                </h1>
                <h1>
                  <span className="text-gray-500 mr-1">Place:</span> {e.place}
                </h1>
                <h1>
                  <span className="text-gray-500">Year:</span> {e.year}
                </h1>
                <h1 className="flex items-center">
                  <span className="text-gray-500 mr-1">Rating:</span>
                  <ReactStars
                    size={20}
                    half={true}
                    value={e.rating / e.ratingCount}
                    edit={false}
                  />
                </h1>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
};

export default Cards;
