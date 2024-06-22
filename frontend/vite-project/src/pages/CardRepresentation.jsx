import React, { useContext } from 'react';
import cardLogo from '/cardLogo.png';
import { AppContext } from '../AppContext';
import AlumniCard from './AlumniCard';
import Header from './Header'; // Import the Header component
const CardRepresentation = () => {
    const { clickedAlumni, alumniList } = useContext(AppContext);
    const filteredAlumniList = alumniList.filter(alumni => 
        !clickedAlumni.map(item => item.alumniFullName).includes(alumni.fullName)
    );

    return (
        <div>
            <Header logo={cardLogo} />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-4 gap-4">
                    {filteredAlumniList.map(alumni => (
                        <AlumniCard
                            key={alumni.id}
                            alumni={alumni}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardRepresentation;