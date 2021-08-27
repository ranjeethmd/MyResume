import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { useEvents } from './EventSystem';

export const JobDescription = () => {

    const { company } = useParams();

    const [, publish] = useEvents();

    const [descriptions, setDescription] = useState([]);

    const [loading, setLoading] = useState(false);

    useEffect(() => { 
        updateDescription();
    }, [company]);


    useEffect(() => {
        return () => { setLoading(false); }
    }, []);    

    

    const updateDescription = async () => {

        if (company) {
            setLoading(true);
            try {
                const response = await fetch(`Roles/${company}`);

                if (response.status > 199 && response.status < 300) {
                    const data = await response.json();
                    setDescription(data);                    
                }
                else {
                    publish(response.status, "You naughty naughty !!!");
                }
            }
            catch (error) {                
                console.log(error);
            }
            setLoading(false);
        }
    }

    

    if (loading) {
        return (
            <div>
                <Loader/>
            </div>
        );
    }
    else {
        return (
            <div>
                {descriptions.map(({ title, description }) => <div key={title} className="skills margin-b-2-l">
                    <h2 className="surface surface-inset pad-eql">{title}</h2>
                    <p className="surface surface-inset eql-margin-tb pad-eql">
                        {description}
                    </p>
                </div>)}
            </div>
        );

    }  
}
