import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [visited, setVisited] = useState(() => JSON.parse(sessionStorage.getItem('visitedPages') || '[]'));
    const [clickedAlumni, setClickedAlumni] = useState(() => JSON.parse(sessionStorage.getItem('clickedAlumni') || '[]'));
    const [alumniList, setAlumniList] = useState([]);

    useEffect(() => {
        sessionStorage.setItem('visitedPages', JSON.stringify(visited));
    }, [visited]);

    useEffect(() => {
        sessionStorage.setItem('clickedAlumni', JSON.stringify(clickedAlumni));
    }, [clickedAlumni]);

    useEffect(() => {
        const fetchAlumni = async () => {
            try {
                const response = await axios.get('http://localhost:5000/users');
                const alumniWithFullNames = response.data.map(alumni => ({
                    ...alumni,
                    fullName: `${alumni.name}`
                }));
                setAlumniList(alumniWithFullNames);
            } catch (error) {
                console.error('Error fetching alumni', error);
            }
        };
        fetchAlumni();
    }, []);

    const handleAlumniClick = async (representation, alumniFullName) => {
        const updated = [...clickedAlumni, { representation, alumniFullName }];
        setClickedAlumni(updated);
        sessionStorage.setItem('clickedAlumni', JSON.stringify(updated));

        const sessionUUID = sessionStorage.getItem('userUUID');
        console.log('Sending update-sequence request:', { uuid: sessionUUID, page: representation, alumni: alumniFullName });

        try {
            const response = await axios.post('http://localhost:5000/update-sequence', { uuid: sessionUUID, page: representation, alumni: alumniFullName });
            console.log('update-sequence response:', response.data);
        } catch (error) {
            console.error('Error updating sequence in database', error.response ? error.response.data : error.message);
        }
    };

    return (
        <AppContext.Provider value={{ visited, setVisited, clickedAlumni, handleAlumniClick, alumniList }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };