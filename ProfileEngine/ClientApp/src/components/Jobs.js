import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';

export const Jobs = ({ onClick, defaulCompany }) => {

    let { company } = useParams();

    company = company || defaulCompany;

    const [name, setName] = useState(company);

    useEffect(() => {
        getExperience();
    }, []);


    const getExperience = async () => {
        const response = await fetch(`Experience`);
        const data = await response.json();
        setExps(data);
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

    const load = false;

    const [exps, setExps] = useState([]);

    if (load) {

        return (
            <div className="exp align-center eql-margin-lr">
                <Loader/>
            </div>);
    }
    else {

        return (
            <div className="exp align-center eql-margin-lr">
                
                <ul className ="path">
                    {exps.map(({ company, start, end }, index) => (index % 2 === 0) ?
                        <li key={company}><span className="company block">{company}</span><div className="job-wrapper surface square-large surface-inset round block"><button className={(name === company) ? "surface square-normal surface-proj round btn-clicked" : "surface surface-proj square-normal round"} onClick={() => onClickHandler(company)}><span className="surface-inset block"></span></button></div><span className="years block">{`${start} - ${end}`}</span></li>
                        : <li key={company}><span className="years block">{`${start} - ${end}`}</span><div className="job-wrapper surface square-large surface-inset round block"><button className={(name === company) ? "surface square-normal surface-proj round btn-clicked" : "surface surface-proj square-normal round"} onClick={() => onClickHandler(company)}><span className="surface-inset block"></span></button></div><span className="company block">{company}</span></li>)
                    }                    
                </ul>                
            </div>);
    }
}
