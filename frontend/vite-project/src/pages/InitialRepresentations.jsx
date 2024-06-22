import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import listLogo from "/listFinal.jpg";
import cardLogo from "/cardFinal.jpg";
import blogLogo from "/blogFinal.jpg";
import videoLogo from "/videoFinal.jpg";
import { AppContext } from "../AppContext";

const representations = [
  { id: 1, name: "Λίστα", route: "/list", buttonLogo: listLogo },
  { id: 2, name: "Profil", route: "/card", buttonLogo: cardLogo },
  { id: 3, name: "Blog", route: "/blog", buttonLogo: blogLogo },
  { id: 4, name: "Video", route: "/video", buttonLogo: videoLogo },
];

const InitialRepresentations = () => {
  const { visited, setVisited } = useContext(AppContext);
  const navigate = useNavigate();
  const [randomRepresentations, setRandomRepresentations] = useState([]);

  const allVisited = representations.every((rep) => visited.includes(rep.name));

  useEffect(() => {
    const shuffledRepresentations = [...representations].sort(() => Math.random() - 0.5);
    setRandomRepresentations(shuffledRepresentations);
  }, []);

  const handleSelection = (route, name) => {
    if (!visited.includes(name)) {
      const updatedVisited = [...visited, name];
      sessionStorage.setItem("visitedPages", JSON.stringify(updatedVisited));
      setVisited(updatedVisited);
      navigate(route);
    }
  };

  const goToEvaluation = () => navigate("/evaluation");

  return (
    <div className="container mx-auto p-6 justify-center items-center">
      <h1 className="text-2xl font-bold mb-4 text-center w-full">Τρόποι παρουσίασης</h1>
      <br />
      <div className="grid grid-cols-2 gap-4">
        {randomRepresentations.map((rep) => (
          <div key={rep.id} className="relative group flex justify-center">
            <button
              disabled={visited.includes(rep.name)}
              className={`flex align-center items-center justify-center bg-white shadow-md rounded w-96 h-44 z-10 relative border p-6 cursor-pointer hover:border-4 hover:border-red-500 ${
                visited.includes(rep.name) ? "opacity-50 cursor-not-allowed" : ""
              }`}
              onClick={() => handleSelection(rep.route, rep.name)}
              title={`Go to ${rep.name}`}
            >
              <img src={rep.buttonLogo} alt={`${rep.name} logo`} className="w-36 h-20 mr-4" />
              <span>{rep.name}</span>
            </button>
          </div>
        ))}
        {allVisited && (
          <div className="w-full flex justify-center mt-4 col-span-2">
            <div className="flex justify-center w-full">
              <button className="p-2 bg-red-600 text-white rounded " onClick={goToEvaluation}>
                Επόμενο
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default InitialRepresentations;
