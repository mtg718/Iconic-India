import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Appstate } from "../App";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

const Header = () => {
  const useAppstate = useContext(Appstate);

  return (
    <div className="sticky z-50 w-full bg-white shadow-md header top-0 text-3xl flex justify-between items-center text-blue-500 font-bold p-3 border-b-2">
      <Link to={"/"}>
        <span>
          Iconic<span className="ml-1 text-black">India</span>
        </span>
      </Link>
      {useAppstate.login ? (
        <Link to={"/addmovie"}>
          <h1 className="text-lg cursor-pointer flex items-center">
            <Button variant="outlined">
              <AddIcon className="mr-1" color="primary" />{" "}
              <span className="text-blue-500">Add Site</span>
            </Button>
          </h1>
        </Link>
      ) : (
        <div className="flex">
          <Link to={"/login"}>
            <h1 className="text-lg mr-1  cursor-pointer flex items-center">
              <Button variant="outlined">
                <span className="text-blue-500 font-medium capitalize">Login</span>
              </Button>
            </h1>
          </Link>
          <Link to={"/login"}>
            <h1 className="text-lg cursor-pointer flex items-center">
              <Button variant="outlined">
                <span className="text-blue-500 font-medium capitalize">SignUp</span>
              </Button>
            </h1>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
