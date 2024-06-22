import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TermsAcceptance = () => {
  const [accepted, setAccepted] = useState(true);
  const navigate = useNavigate();

  const handleAcceptance = () => {
    if (accepted) {
      navigate("/initial-representations");
    }
  };

  return (
    <div className="flex justify-center items-center  min-h-screen overflow-hidden">
      <form onSubmit={handleAcceptance} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center space-y-4 px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-4">Οδηγίες</h1>

          <div className="text-gray-700 text-left">
            Στην επόμενη σελίδα θα προβληθεί η αρχική σελίδα της έρευνας. Σε αυτή θα δείτε 4 τρόπους παρουσίασης
            απόφοιτων ενός πανεπιστημίου. Κάθε τρόπος είναι ένα διαφορετικό πανεπιστήμιο.
            <br />
            <br />
            <p className="text-gray-700 text-left">
              Στην συνέχεια ακολουθήστε τα επόμενα βήματα:
              <li>Παρατηρήστε τα πανεπιστήμια και διαλέξτε αυτό που σας φαίνεται πιο ενδιαφέρον.</li>
              <li>
                Παρατήρησε τους απόφοιτους του πανεπιστημίου που εφανίζονται και διαλέξτε κάποιον που σας ενδιαφέρει.
              </li>
              <li>Δείτε την σελίδα του απόφοιτου και πατήστε το κουμπί 'Συνέχεια'.</li>
              <br />
              Ακολουθήστε τα παραπάνω για όλα τα πανεπιστήμια και πατήστε το κουμπί επόμενο. Στην συνέχεια συμπληρώστε
              την φόρμα αξιολόγησης και υποβάλετέ την.
              <br />
              <br />
              <div class="alert alert-warning ">
                <strong>Προσοχή!</strong> Χρησιμοποιήστε μόνο την εφαρμογή.
              </div>
            </p>
            <br />
            Πατώντας το κουμπί 'Συνέχεια', θα εμφανιστεί η κεντρική σελίδα της εργασίας.
          </div>
        </div>
        {/* <div className="mt-6 flex justify-center">
                    <label htmlFor="acceptTerms" className="flex items-center">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-red-600"
                            id="acceptTerms"
                            checked={accepted}
                            onChange={(e) => setAccepted(e.target.checked)}
                        />
                        <span className="ml-2 text-gray-700">I accept the terms and conditions.</span>
                    </label>
                </div> */}
        <div className="flex justify-center mt-6">
          <button
            className={`px-4 py-2 rounded text-lg bg-red-600 text-white hover:bg-red-700`}
            onClick={handleAcceptance}
            //disabled={!accepted}
          >
            Συνέχεια
          </button>
        </div>
      </form>
    </div>
  );
};

export default TermsAcceptance;
