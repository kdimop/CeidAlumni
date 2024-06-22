import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const AlumniDetailPage = () => {
  const location = useLocation();
  const alumni = location.state.alumni; // Access the passed alumni data
  const navigate = useNavigate();
  const imageUrl = `/${alumni.image}`;

  const createMarkup = (text) => {
    return { __html: text.replace(/\n/g, "<br/>") };
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center gap-10 items-center mb-6">
        <button
          className="btn-next align center p-2 bg-red-500 text-white rounded hover:bg-red-700"
          onClick={() => {
            navigate("/initial-representations"); // Replace '/initial-representations' with the correct path to your initial representations page
          }}
        >
          {" "}
          Επόμενο
        </button>
      </div>
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg p-6">
        <div className="flex-shrink-0 mb-4 md:mb-0">
          <img className="h-48 w-48 rounded-full object-cover" src={imageUrl} alt={`${alumni.name}`} />
        </div>
        <div className="md:ml-6">
          <h2 className="text-3xl font-bold mb-2">{alumni.name}</h2>
          <br />
          <p className="text-gray-600 mb-4">Έτος αποφοίτησης: {alumni.graduationYear}</p>
          <p className="text-gray-600 mb-4">Θέσης εργασίας: {alumni.currentJob}</p>
          <div className="text-gray-700">
            <p>
              {/* Add a brief biography or other relevant information about the alumni here */}
              <div className="text-gray-700" dangerouslySetInnerHTML={createMarkup(alumni.text)} />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlumniDetailPage;
