import React, { useContext } from 'react';
import listLogo from '/listLogo.png';
import { AppContext } from '../AppContext';
import AlumniListItem from './AlumniListItem';
import Header from './Header';

const ListRepresentation = () => {
    const { clickedAlumni, alumniList } = useContext(AppContext);
    const filteredAlumniList = alumniList.filter(alumni => 
        !clickedAlumni.map(item => item.alumniFullName).includes(alumni.fullName)
    );

    return (
        <div>
            <Header logo={listLogo} title="List Representation" />
            <div className="container mx-auto p-4 align-left">
                <div className="grid grid-cols-2 gap-4">
                    {filteredAlumniList.map(alumni => (
                        <AlumniListItem
                            key={alumni.id}
                            alumni={alumni}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListRepresentation;