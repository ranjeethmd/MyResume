import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Jobs } from './components/Jobs';
import { JobDescription } from './components/JobDesc';
import { Skills } from './components/Skills';
import { Title } from './components/Title';
import { parseUri } from './components/ParseUrl';
import { Error } from './components/Error';
import { Content } from './components/Content';
import './custom.css'

export const App = () => {

    var location = useLocation();

    const history = useHistory();

    const defaultUri = parseUri(location.pathname, '/job-desc/:company');

    const [error, setError] = useState({});

    const onError = (code, message) => {
        setError({ code, message });
    }

    const onCompanyChange = (company, unClicked) => {
        if (unClicked) {
            history.push(`/`);
        }
        else {
            history.push(`/job-desc/${company}`);
        }

    };

    const onReturnHome = () => {
        setError({});
        history.push(`/`);
    }

    return (
        <>
            <Title />
            <Error {...error} onClick={onReturnHome}>
                <Jobs onClick={onCompanyChange} defaulCompany={(defaultUri || {}).company} />
                <Content>                    
                    <Switch>
                        <Route path='/job-desc/:company' render={props => <JobDescription {...props} onError={onError} />} />
                        <Route path='/' render={props => <Skills {...props} onError={onError} />} />
                    </Switch>
                </Content>
            </Error>
        </>
    );
}


