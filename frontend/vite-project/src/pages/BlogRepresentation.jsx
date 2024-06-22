import React, { useContext } from 'react';
import blogLogo from '/blogLogo.png';
import { AppContext } from '../AppContext';
import AlumniBlogItem from './AlumniBlogItem';
import Header from './Header'; // Import the Header component
const BlogRepresentation = () => {
    const { clickedAlumni, alumniList } = useContext(AppContext);
    const filteredAlumniList = alumniList.filter(alumni => 
        !clickedAlumni.map(item => item.alumniFullName).includes(alumni.fullName)
    );

    return (
        <div>
            <Header logo={blogLogo} />
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 gap-10">
                    {filteredAlumniList.map(alumni => (
                        <AlumniBlogItem
                            key={alumni.id}
                            alumni={alumni}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogRepresentation;