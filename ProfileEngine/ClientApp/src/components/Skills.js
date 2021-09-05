import React, { useEffect, useState } from 'react';
import { Loader } from './Loader';

export const Skills = ({ onError }) => {


    const [skills, setSkills] = useState([]);
    const [loader, setLoader] = useState(false);  
    


    const getSkills = async () => {
        setLoader(true);
        try {
            const response = await fetch(`Skills`);
            const data = await response.json();

            if (response.status > 199 && response.status < 300) {               
                setSkills(data);
                setLoader(false);
            }
            else {               
                setLoader(false);
                onError(response.status, data.message);
            }
        }
        catch (error) {
            console.log(error);
        }        
    }

    useEffect(() => {
        getSkills();
        return () => { setLoader(false) }

    }, []);
    

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





