import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from './Loader';
import { useEvents } from './EventSystem';

export const Skills = () => {


    const [skills, setSkills] = useState([]);
    const [loader, setLoader] = useState(false);
    const [_,publish] = useEvents();

    useEffect(() => {
        getSkills();

    }, []);


    const getSkills = async () => {
        setLoader(true);
        try {
            const response = await fetch(`Skills`);

            if (response.status > 199 && response.status < 300) {
                const data = await response.json();
                setSkills(data);
            }
            else {
                publish(response.status, "You naughty naughty !!!");
            }
        }
        catch (error) {
            console.log(error);
        }
        setLoader(false);
    }
    

    if (loader) {
        return (
            <div className="skills">
                <Loader/>
            </div>
        );
    }
    else {
        return (
            <div className="skills">
                {skills.map(skill => <h1 key={skill} className="surface surface-inset pull-center pad-eql">{skill}</h1>)}
            </div>
        );
    }    
}





