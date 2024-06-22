import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EvaluationPage = () => {
  const [formData, setFormData] = useState({
    question1: "",
    question2: "",
    question3: "",
    scaleQuestions: {
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      question8: "",
      question9: "",
      question10: "",
      question11: "",
      question12: "",
      question13: "",
    },
  });

  const [uuid, setUuid] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedUuid = sessionStorage.getItem("userUUID");
    if (storedUuid) {
      setUuid(storedUuid);
    } else {
      // Handle case where UUID is not in session storage
      console.error("UUID not found in session storage");
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("question")) {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleScaleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      scaleQuestions: {
        ...prevState.scaleQuestions,
        [name]: value,
      },
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const completeFormData = { ...formData, uuid };
      await axios.post("http://localhost:5000/evaluation", completeFormData);
      navigate("/thanksForPartaking");
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Αξιολόγηση εφαρμογής</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block" style={{ fontWeight: "bold" }}>
            Ποιο πανεπιστήμιο πιστεύεις ότι έχει το μεγαλύτερο κύρος;
          </label>
          {["Card University", "List University", "Blog University", "Video University"].map((university) => (
            <label key={university} className="block">
              <input
                type="radio"
                name="question1"
                value={university}
                checked={formData.question1 === university}
                onChange={handleChange}
                className="mr-2 accent-red-600"
              />
              {university}
            </label>
          ))}
        </div>
        <div className="mb-4">
          <label className="block" style={{ fontWeight: "bold" }}>
            Διάλεξες 4 απόφοιτους (έναν από κάθε πανεπιστήμιο). Ο απόφοιτος ποιου πανεπιστημίου θα σε επηρεάζε
            περισσοτερο για να διαλέξεις ένα απ' τα 4 πανεπιστήμια;
          </label>
          {["Card University", "List University", "Blog University", "Video University"].map((university) => (
            <label key={university} className="block">
              <input
                type="radio"
                name="question2"
                value={university}
                checked={formData.question2 === university}
                onChange={handleChange}
                className="mr-2 accent-red-600"
              />
              {university}
            </label>
          ))}
        </div>
        <div className="mb-4">
          <label className="block" style={{ fontWeight: "bold" }}>
            Σχολίασε τον απόφοιτο που διάλεξες στην προηγούμενη ερώτηση και το πανεπιστήμιο του
          </label>
          <textarea name="question3" value={formData.question3} onChange={handleChange} className="mt-1 block w-full" />
        </div>

        <h1 className="text-xl font-bold mb-4">Αξιολόγηση του συστήματος που μόλις χρησιμοποίησες</h1>
        <h3 className="text-xl font-bold mb-4">
          Σε κλίμακα 1 έως 5 (1 = Διαφωνώ απόλυτα, 5 = Συμφωνώ απόλυτα) απάντησε τις παρακάτω ερωτήσεις
        </h3>
        {[
          "Θα ήθελα να χρησιμοποιώ αυτό το σύστημα συχνά.",
          "Το σύστημα είναι πιο πολύπλοκο από όσο θα έπρεπε να είναι.",
          "Το σύστημα είναι απλό και εύκολο στη χρήση.",
          "Πιστεύω ότι θα χρειαζόμουν την υποστήριξη κάποιου τεχνικού για να χρησιμοποιήσω αυτό το σύστημα.",
          "Όλες οι λειτουργίες του συστήματος είναι σωστά ενταγμένες.",
          "Βρήκα το σύστημα πολύ δυσάρεστο στη χρήση.",
          "Νομίζω ότι το σύστημα μπορεί να το μάθει κάποιος εύκολα.",
          "Θεωρώ ότι η χρήση του συστήματος είναι πολύ χρονοβόρα.",
          "Νιώθω άνετα να χρησιμοποιώ αυτό το σύστημα.",
          "Θεωρώ ότι πρέπει να μάθω πολλά πράγματα πριν χρησιμοποιήσω αυτό το σύστημα.",
        ].map((question, index) => (
          <div key={index} className="mb-4">
            <label className="block" style={{ fontWeight: "bold" }}>
              {question}
            </label>
            {[1, 2, 3, 4, 5].map((score) => (
              <label key={score} className="inline-flex items-center ml-2">
                <input
                  type="radio"
                  name={`question${index + 4}`}
                  value={score}
                  checked={formData.scaleQuestions[`question${index + 4}`] === String(score)}
                  onChange={handleScaleChange}
                  className="mr-1 accent-red-600"
                />
                {score}
              </label>
            ))}
          </div>
        ))}

        <button type="submit" className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-700">
          Υποβολή αξιολόγησης
        </button>
      </form>
    </div>
  );
};

export default EvaluationPage;
