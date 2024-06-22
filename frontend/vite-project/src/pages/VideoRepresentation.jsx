import React, {useContext } from 'react';
import videoLogo from '/videoLogo.png';
import { AppContext } from '../AppContext';
import AlumniVideoItem from './AlumniVideoItem';
import Header from './Header'; // Import the Header component
const VideoRepresentation = () => {
    const { clickedAlumni, alumniList } = useContext(AppContext);
     const filteredAlumniList = alumniList.filter(alumni => 
        !clickedAlumni.map(item => item.alumniFullName).includes(alumni.fullName)
    );
    
    return (
        <div>
            <Header logo={videoLogo} />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-2 gap-4">
                    {filteredAlumniList.map(alumni => (
                        <AlumniVideoItem
                            key={alumni.id}
                            alumni={alumni}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default VideoRepresentation;