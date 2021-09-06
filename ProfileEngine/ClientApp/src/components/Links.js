import React, { useState, useEffect } from 'react';
import { useFetch } from './UseFetch'

export const Links = () => {    


    const [opeartion, fetch] = useFetch();

    const [links, setLinks] = useState([]);

    useEffect(() => {
        getLinks();

        return () => {
            opeartion.abort();            
        }

    }, []);


    const getLinks = async () => { 

        try {
            const response = await fetch(`Links`);
            const data = await response.json();

            if (response.status > 199 && response.status < 300) {                
                setLinks(data);                
            }            
        }
        catch {
           
        }
    }

    return (
        <ul>
            {
                links.map(({ key, url, icon }) =>
                    <li key={key}>
                        <a className="surface-normal square-large circular" href={url}><i className={icon}></i></a>
                    </li>
                )
            }            
        </ul>
        );
   
}
