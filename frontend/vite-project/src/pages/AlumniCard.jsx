import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import React, { useContext } from "react";
const AlumniCard = ({ alumni }) => {
  const fullName = `${alumni.name}`;
  const { handleAlumniClick } = useContext(AppContext);
  const navigate = useNavigate();
  const imageUrl = `/${alumni.image}`;
  const onhandleAlumniClick = () => {
    handleAlumniClick("Card Representation", fullName);
    navigate("/alumni/" + alumni.id, { state: { alumni } });
  };

  return (
    <div
      className="w-100 rounded overflow-hidden shadow-lg bg-white cursor-pointer hover:border-4 hover:border-red-500"
      onClick={onhandleAlumniClick}
    >
      <img className="w-50 h-50 object-cover" src={imageUrl} alt={fullName} />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">{fullName}</h2>
        <br />
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

export default AlumniCard;
