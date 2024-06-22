import { useNavigate } from "react-router-dom";
import { AppContext } from "../AppContext";
import React, { useContext } from "react";

const AlumniListItem = ({ alumni }) => {
  const fullName = `${alumni.name}`;
  const graduationYear = alumni.graduationYear;
  const jobTitle = alumni.currentJob;
  const educationInstitute = alumni.educationInstitute;
  const { handleAlumniClick } = useContext(AppContext);
  const navigate = useNavigate();

  const onhandleAlumniClick = () => {
    handleAlumniClick("List Representation", fullName);
    navigate("/alumni/" + alumni.id, { state: { alumni } });
  };

  return (
    <div
      className="w-full h-full items-center justify-center rounded overflow-hidden shadow-lg bg-white align-left  cursor-pointer hover:border-2 hover:border-red-500"
      onClick={onhandleAlumniClick}
    >
      <div className="p-4">
        <ul>
          <li className="mb-2 flex">
            <span className="font-bold w-40">Όνομα:</span>
            <span>{fullName}</span>
          </li>
          <li className="mb-2 flex">
            <span className="font-bold w-40">Έτος αποφοίτησης:</span>
            <span>{graduationYear}</span>
          </li>
          <li className="flex">
            <span className="font-bold w-40">Θέσης εργασίας: </span>
            <span>{jobTitle}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AlumniListItem;
