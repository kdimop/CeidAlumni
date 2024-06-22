import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import React, { useContext } from "react";

const AlumniBlogItem = ({ alumni }) => {
  const fullName = `${alumni.name}`;
  const { handleAlumniClick } = useContext(AppContext);
  const navigate = useNavigate();
  const imageUrl = `/${alumni.image}`;
  const onhandleAlumniClick = () => {
    handleAlumniClick("Blog Representation", fullName);
    navigate("/alumni/" + alumni.id, { state: { alumni } });
  };

  return (
    <div
      className="w-100 rounded overflow-hidden shadow-lg bg-white cursor-pointer hover:border-1 hover:border-red-500 relative flex"
      onClick={onhandleAlumniClick}
    >
      <div className="flex-shrink-0">
        <img className="h-48 w-48 object-cover" src={imageUrl} alt={`${alumni.name}`} />
      </div>
      <div className="p-6 flex-grow">
        <h2 className="text-2xl font-semibold text-gray-800">{fullName}</h2>
        <p className="mt-2 text-sm text-gray-600 truncate-text2">{alumni.text}</p>
        <div>
          <span>Ηλικία: </span>
          <span className="text-red-600">{alumni.age}</span>
        </div>
        <div>
          <span>Έτος αποφοίτησης: </span>
          <span className="text-red-600">{alumni.graduationYear}</span>
        </div>
        <div>
          <span>Θέσης εργασίας: </span>
          <span className="text-red-600">{alumni.currentJob}</span>
        </div>
      </div>
    </div>
  );
};

export default AlumniBlogItem;
