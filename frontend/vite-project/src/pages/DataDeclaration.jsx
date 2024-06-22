import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const DataDeclaration = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    uuid: "",
    ageGroup: "",
    genderIdentity: "",
    educationLevel: "",
    socialMediaAccounts: {
      facebook: false,
      tiktok: false,
      instagram: false,
      linkedin: false,
      youtube: false,
    },
    marketingPreference: "",
    seenAlumniSite: "",
    knowsPatrasAlumni: "",
    visitedPatrasAlumni: "",
    seekNextStepStories: "",
    alumniStoriesImpact: "",
    alumniStoriesImpact1: "",
    firstPage: { representation: "", alumni: "" },
    secondPage: { representation: "", alumni: "" },
    thirdPage: { representation: "", alumni: "" },
    fourthPage: { representation: "", alumni: "" },
    evaluationResponses: {
      question1: "",
      question2: "",
    },
  });

  useEffect(() => {
    if (!sessionStorage.getItem("userUUID")) {
      sessionStorage.setItem("userUUID", uuidv4());
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevState) => ({
        ...prevState,
        socialMediaAccounts: {
          ...prevState.socialMediaAccounts,
          [name]: checked,
        },
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: name === "ageGroup" ? parseInt(value.split("-")[0], 10) : value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sessionUUID = sessionStorage.getItem("userUUID");
    if (formData.ageGroup) {
      try {
        const response = await axios.post("http://localhost:5000/declare-data", { ...formData, uuid: sessionUUID });
        console.log("Submission successful", response.data);
        navigate("/accept"); // Update with the correct route
      } catch (error) {
        console.error("Error submitting form", error.response ? error.response.data : error.message);
      }
    } else {
      alert("Please complete all fields.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form className="bottom-0 mb-4 bg-white shadow-md rounded px-8 pb-8" onSubmit={handleSubmit}>
        <h1 className="text-xl text-gray-700 font-bold text-center mb-6">Στοιχεία συμμετέχοντα</h1>
        <div className="mb-4">
          <p>Παρακάτω απαντήστε τις ερωτήσεις σχετικά με τον εαυτό σας.</p>
        </div>

        {/* Participation question */}

        {/* Age Group */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Ηλικία:
            </legend>
            {["18-23", "24-30", "31+"].map((ageRange) => (
              <label key={ageRange} className="block text-gray-700">
                <input
                  type="radio"
                  name="ageGroup"
                  value={ageRange}
                  className="accent-red-600"
                  checked={formData.ageGroup === parseInt(ageRange.split("-")[0], 10)}
                  onChange={handleChange}
                />
                {ageRange}
              </label>
            ))}
          </fieldset>
        </div>

        {/* Gender Identity */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Φύλο:
            </legend>
            {["Γυναίκα", "Άνδρας", "Άλλο", "Δεν επιθυμώ να απαντήσω"].map((gender) => (
              <label key={gender} className="block text-gray-700">
                <input
                  type="radio"
                  name="genderIdentity"
                  value={gender}
                  className="accent-red-600"
                  checked={formData.genderIdentity === gender}
                  onChange={handleChange}
                />
                {gender}
              </label>
            ))}
          </fieldset>
        </div>

        {/* Education Level */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Επιλέξτε ότι από τα παρακάτω σας χαρακτηρίζει καλύτερα:
            </legend>
            {[
              " Aπόφοιτος λυκείου",
              " Φοιτητής προπτυχιακού κύκλου σπουδών",
              " Απόφοιτος προπτυχιακού τίτλου σπουδών",
              " Φοιτητής μεταπτυχιακού κύκλου σπουδών",
              " Απόφοιτος μεταπτυχιακού κύκλου σπουδών",
              " Υποψήφιος διδάκτορας/ διδάκτορας",
            ].map((level) => (
              <label key={level} className="block text-gray-700">
                <input
                  type="radio"
                  name="educationLevel"
                  value={level}
                  //EDWWWWW                 o
                  className="accent-red-600"
                  checked={formData.educationLevel === level}
                  onChange={handleChange}
                />
                {level}
              </label>
            ))}
          </fieldset>
        </div>

        {/* Social Media Accounts */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Επιλέξτε όσα από τα παρακάτω κοινωνικά δίκτυα χρησιμοποιείτε:
            </legend>
            {["facebook", "tiktok", "instagram", "linkedin", "youtube"].map((account) => (
              <label key={account} className="block text-gray-700">
                <input
                  type="checkbox"
                  name={account}
                  className="accent-red-600"
                  checked={formData.socialMediaAccounts[account]}
                  onChange={handleChange}
                />
                {account.charAt(0).toUpperCase() + account.slice(1)}
              </label>
            ))}
          </fieldset>
        </div>

        {/* Marketing Preference */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Ποιον θεωρείτε πιο αποτελεσματικό τρόπο marketing προϊόντος στο internet;
            </legend>
            {[
              " Αρθρογραφία σχετικά με το προϊόν σε έγκυρα μέσα",
              " Σύντομα videos ή reels",
              " Εμφάνιση του προϊόντος σε ιστοσελίδες συγκριτικών αξιολογήσεων",
            ].map((preference) => (
              <label key={preference} className="block text-gray-700">
                <input
                  type="radio"
                  name="marketingPreference"
                  value={preference}
                  className="accent-red-600"
                  checked={formData.marketingPreference === preference}
                  onChange={handleChange}
                />
                {preference}
              </label>
            ))}
          </fieldset>
        </div>

        {/* Seen Alumni Site */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Έχετε περιηγηθεί ποτέ σε ιστοσελίδα αποφοίτων κάποιου τριτοβάθμιου εκαπιδευτικού ιδρύματος;
            </legend>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="seenAlumniSite"
                value="yes"
                className="accent-red-600"
                checked={formData.seenAlumniSite === "yes"}
                onChange={handleChange}
              />
              Ναι
            </label>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="seenAlumniSite"
                value="no"
                className="accent-red-600"
                checked={formData.seenAlumniSite === "no"}
                onChange={handleChange}
              />
              Όχι
            </label>
          </fieldset>
        </div>

        {/* Knows Patras Alumni */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Γνωρίζετε πως το Πανεπιστήμιο Πατρών έχει ιστοσελίδα αποφοίτων;
            </legend>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="knowsPatrasAlumni"
                value="yes"
                className="accent-red-600"
                checked={formData.knowsPatrasAlumni === "yes"}
                onChange={handleChange}
              />
              Ναι
            </label>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="knowsPatrasAlumni"
                value="no"
                className="accent-red-600"
                checked={formData.knowsPatrasAlumni === "no"}
                onChange={handleChange}
              />
              Όχι
            </label>
          </fieldset>
        </div>

        {/* Visited Patras Alumni */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Έχετε μπει ποτέ στην ιστοσελίδα αποφοίτων του Πανεπιστημίου Πατρών;
            </legend>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="visitedPatrasAlumni"
                value="yes"
                className="accent-red-600"
                checked={formData.visitedPatrasAlumni === "yes"}
                onChange={handleChange}
              />
              Ναι
            </label>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="visitedPatrasAlumni"
                value="no"
                className="accent-red-600"
                checked={formData.visitedPatrasAlumni === "no"}
                onChange={handleChange}
              />
              Όχι
            </label>
          </fieldset>
        </div>

        {/* Seek Next Step Stories */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              Για το επόμενο βήμα των σπουδών σας, θα αναζητούσατε ιστορίες αποφοίτων;
            </legend>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="seekNextStepStories"
                value="yes"
                className="accent-red-600"
                checked={formData.seekNextStepStories === "yes"}
                onChange={handleChange}
              />
              Ναι
            </label>
            <label className="block text-gray-700">
              <input
                type="radio"
                name="seekNextStepStories"
                value="no"
                className="accent-red-600"
                checked={formData.seekNextStepStories === "no"}
                onChange={handleChange}
              />
              Όχι
            </label>
          </fieldset>
        </div>

        {/* Alumni Stories Impact */}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              'Για να σχεδιάσω το επόμενο βήμα στις σπουδές μου, θα αναζητήσω στα πανεπιστήμια που με ενδιαφέρουν <br />{" "}
              ιστορίες αποφοίτων'.
              <br />
              (1 = Διαφωνώ απόλυτα, 5 = Συμφωνώ απόλυτα)
            </legend>
            {[1, 2, 3, 4, 5].map((score) => (
              <label key={score} className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="alumniStoriesImpact"
                  value={score}
                  className="accent-red-600"
                  checked={formData.alumniStoriesImpact === score.toString()}
                  onChange={handleChange}
                />
                {score}
              </label>
            ))}
          </fieldset>
        </div>

        {/* Alumni Stories Impact 1*/}
        <div className="mb-4">
          <fieldset className="mb-4">
            <legend className="text-gray-700" style={{ fontWeight: "bold" }}>
              'Η ύπαρξη σημαντικών ιστοριών απόφοιτων επηρεάζει την εικόνα ή το κύρος του πανεπιστημίου'.
              <br />
              (1 = Διαφωνώ απόλυτα, 5 = Συμφωνώ απόλυτα)
            </legend>
            {[1, 2, 3, 4, 5].map((score) => (
              <label key={score} className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name="alumniStoriesImpact1"
                  value={score}
                  className="accent-red-600"
                  checked={formData.alumniStoriesImpact1 === score.toString()}
                  onChange={handleChange}
                />
                {score}
              </label>
            ))}
          </fieldset>
        </div>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 mt-4 rounded hover:bg-red-700 focus:outline-none"
          >
            Υποβολή
          </button>
        </div>
      </form>
    </div>
  );
};

export default DataDeclaration;
