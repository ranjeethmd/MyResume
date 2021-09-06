import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';
import { useFetch } from './UseFetch'

export const Jobs = ({ onClick, defaulCompany, onError }) => {    

    let { company } = useParams();

    company = company || defaulCompany;

    const [loading, setLoading] = useState(false);

    const [name, setName] = useState(company);

    const [opeartion, fetch] = useFetch();

    const [exps, setExps] = useState([]);

    useEffect(() => {
        getExperience();

        return () => {
            opeartion.abort();
            setLoading(false);
        }

    }, []);


    const getExperience = async () => {    

        setLoading(true);

        try {
            const response = await fetch(`Experience`);
            const data = await response.json();

            if (response.status > 199 && response.status < 300) {
                setExps(data);
                setLoading(false);
            }
            else {
                setLoading(false);
                onError(response.status, data.message);
            }
        }
        catch {
        }
    }


    const onClickHandler = (company) => {
        if (name === company) {
            setName(undefined);
            onClick(company, true);
        }
        else {
            setName(company);
            onClick(company, false);
        } 
    }

   

    if (loading) {

        return (
            <div className="exp align-center eql-margin-lr">
                <Loader/>
            </div>);
    }
    else {

        return (
            <>
           
                <div className="exp align-center">                   
                <ul>
                    {exps.map(({ company, start, end, display }, index) => (index % 2 === 0) ?
                        <li key={company}><span className="company block">{display}</span><div className="job-wrapper surface square-large surface-inset round block"><button className={(name === company) ? "surface square-normal surface-proj round btn-clicked" : "surface surface-proj square-normal round"} onClick={() => onClickHandler(company)}><span className="surface-inset block"></span></button></div><span className="years block">{`${start} - ${end}`}</span></li>
                        : <li key={company}><span className="years block">{`${start} - ${end}`}</span><div className="job-wrapper surface square-large surface-inset round block"><button className={(name === company) ? "surface square-normal surface-proj round btn-clicked" : "surface surface-proj square-normal round"} onClick={() => onClickHandler(company)}><span className="surface-inset block"></span></button></div><span className="company block">{display}</span></li>)
                    }                    
                </ul>                
                </div>
                </>);
    }
}
