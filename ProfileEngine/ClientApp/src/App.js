import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Jobs } from './components/Jobs';
import { JobDescription } from './components/JobDesc';
import { Skills } from './components/Skills';
import { Title } from './components/Title';
import { useEvents } from './components/EventSystem';
import { parseUri } from './components/ParseUrl';
import { Error } from './components/Error';
import { Content } from './components/Content';
import './custom.css'

export const App = () => {

    var location = useLocation();

    const history = useHistory();

    const [event, setEvent] = useState();

    const defaultUri = parseUri(location.pathname, '/job-desc/:company');

    const [subscribe] = useEvents();

    useEffect(() => {

        const unsubscribe = subscribe((event, message) => {

            setEvent({ event, message });
        });

        return unsubscribe;

    }, []);


    const onCompanyChange = (company, unClicked) => {
        if (unClicked) {
            history.push(`/`);
        }
        else {
            history.push(`/job-desc/${company}`);
        }

    };

    const onReturnHome = () => {
        console.log('home');
        history.push(`/`);
        setEvent(undefined);
    }

    return (
        <>
            <Title />
            <section className={event ? '' : 'hide'}>
                <Error code={(event || {}).event} message={(event || {}).message} onClick={onReturnHome} />
            </section>
            <section className={event ? 'hide' : ''}>
                <Jobs onClick={onCompanyChange} defaulCompany={(defaultUri || {}).company} />
            </section>
            <Content hidden={event ? true : false}>
                <Switch>
                    <Route path='/job-desc/:company' component={JobDescription} />
                    <Route path='/' component={Skills} />
                </Switch>
            </Content>
        </>
    );
}


