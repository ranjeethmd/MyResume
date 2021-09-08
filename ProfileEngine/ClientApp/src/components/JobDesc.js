import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from './Loader';


export const JobDescription = ({ onError }) => {

    const { company } = useParams();

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

                const data = await response.json();

                if (response.status > 199 && response.status < 300) {

                    setDescription(data);
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
    }



    if (loading) {
        return (
            <div>
                <Loader />
            </div>
        );
    }
    else {
        return (
            <div>
                {descriptions.map(({ title, description }) =>
                    <React.Fragment key={title}>
                        <div  className="desc margin-b-2-l">
                            <h2 className="surface surface-inset pad-eql">{title}</h2>
                            <p className="surface surface-inset eql-margin-tb pad-eql">
                                {description.split('\n').filter(line => line).map((line, index) => <React.Fragment key={index}><span className="desc-bullet"></span>&nbsp;&nbsp;{line}<br /><br /></React.Fragment>)}
                            </p>
                        </div>
                        <br />
                    </React.Fragment>
                )}
            </div>
        );

    }
}
