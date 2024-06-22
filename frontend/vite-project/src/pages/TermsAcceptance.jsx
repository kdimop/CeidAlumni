import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const TermsAcceptance = () => {
  const [accepted, setAccepted] = useState(false);
  const navigate = useNavigate();

  const handleAcceptance = () => {
    if (accepted) {
      navigate("/data-declaration");
    }
  };

  return (
    <div className="flex justify-center items-center  min-h-screen overflow-hidden">
      <form onSubmit={handleAcceptance} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center space-y-4 px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-4">Όροι συμμετοχής</h1>
          <h2 className="text-2xl font-semibold mb-2">Όνομα ερευνητή: Κωνσταντίνος Δημόπουλος</h2>
          <h3 className="text-xl font-semibold mb-2">
            Φορέας: Πανεπιστήμιο Πατρών - Σχολή Μηχανικών Ηλεκτρονικών Υπολογιστών & Πληροφορικής
          </h3>
          <p className="text-gray-700 text-left">
            Σας ευχαριστούμε που συμμετέχετε σε αυτή τη μελέτη. Οι ακόλουθες πληροφορίες θα σας βοηθήσουν να κατανοήσετε
            το σκοπό της μελέτης, τι αναμένεται από εσας και τα δικαιώματά σας ως συμμετέχοντες.
          </p>
          <p className="text-gray-700 text-left">
            Σκοπός της παρούσας μελέτης είναι να κατανοήσουμε τους λόγους για τους οποίους μπορεί κάποιος να θεωρήσει
            ένα Πανεπιστήμιο έγκριτο, με βάσει τον τρόπο που παρουσιάζει το Πανεπιστήμιο του απόφοιτούς του. Οι
            συμμετέχοντες θα κληθούν να:
            <li>Εκτελέσουν μια σειρά εργασιών.</li>
            <li>Ακολουθήσουν συγκεκριμένα βήματα για να ολοκληρώσουν την διαδικασία, εάν ζητηθεί.</li>
          </p>
          <p className="text-gray-700 text-left">
            Είναι σημαντικό να ακολουθήσετε προσεκτικά τις οδηγίες που δίνονται.
          </p>
          <p className="text-gray-700 text-left">
            Η μελέτη αναμένεται να δεσμεύσει περίπου 10-15 λεπτά από το χρόνο σας. Η μελέτη αυτή δεν ενέχει κινδύνους.
            Ωστόσο, εάν αισθανθείτε άβολα σε οποιοδήποτε σημείο, μπορείτε να αποχωρήσετε χωρίς αρνητικές συνέπειες. Οι
            απαντήσεις σας θα είναι εμπιστευτικές και θα χρησιμοποιηθούν μόνο για ερευνητικούς σκοπούς. Όλα τα δεδομένα
            θα αποθηκευτούν με ασφάλεια και δεν θα συνδεθούν με καμία πληροφορία αναγνώρισης. Η συμμετοχή σε αυτή τη
            μελέτη είναι εθελοντική.
          </p>
          <p className="text-gray-700 text-left">
            Εάν επιθυμείτε να επικοινωνήσετε με τον ερευνητή της μελέτης για να συζητήσετε αυτή την έρευνα, παρακαλούμε
            επικοινωνήστε στο{" "}
            <a href="mailto:kadimopoulos@gmail.com" className="accent-red-600 underline">
              kadimopoulos@gmail.com
            </a>
            .
          </p>
          <p className="text-gray-700 text-left">
            Κάνοντας κλικ στο παρακάτω κουμπί, αναγνωρίζετε ότι η συμμετοχή σας στη μελέτη είναι εθελοντική, ότι είστε
            18 ετών και άνω και ότι γνωρίζετε ότι μπορείτε να επιλέξετε να τερματίσετε τη συμμετοχή σας στη μελέτη ανά
            πάσα στιγμή και για οποιονδήποτε λόγο.
          </p>
        </div>
        <div className="mt-6 flex justify-center">
          <label htmlFor="acceptTerms" className="flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 accent-red-600"
              id="acceptTerms"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
            />
            <span className="ml-2 text-gray-700">Αποδέχομαι τους όρους και τις προϋποθέσεις.</span>
          </label>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className={`px-4 py-2 rounded text-lg font-medium ${
              accepted ? "bg-red-600 text-white hover:bg-red-700" : "bg-gray-300 text-gray-500 cursor-not-allowed"
            }`}
            onClick={handleAcceptance}
            disabled={!accepted}
          >
            Συνέχεια
          </button>
        </div>
      </form>
    </div>
  );
};

export default TermsAcceptance;
