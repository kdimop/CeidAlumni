import React from 'react';
import axios from 'axios'; // Ensure axios is installed

const ThanksForPartaking = () => {
  
  return (
    <div className="container mx-auto p-4 flex items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-lg p-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Σας ευχαριστώ!</h2>
        <p className="text-gray-700 mb-6">
          Εκτιμούμε τη συμμετοχή σας. Η συμβολή σας είναι πολύτιμη για εμάς.
          <br/>
          Θα ακολουθήσει σύντομη συνέντευξη.
        </p>
      </div>
    </div>
  );
};

export default ThanksForPartaking;