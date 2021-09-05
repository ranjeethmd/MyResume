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
            <div className="row-25">
                <Title />
            </div>
            <div className="row-25">                
                <ul>
                    <li>
                        <a className="surface-normal square-large circular" href="https://github.com/ranjeethmd"><i className="fab fa-github-alt"></i></a>
                    </li>
                    <li>
                        <a className="surface-normal square-large circular" href="https://www.linkedin.com/in/ranjeethdevaiah/"><i className="fab fa-linkedin-in"></i></a>
                    </li>
                    <li>
                        <a className="surface-normal square-large circular" href="https://hub.docker.com/repository/docker/ranjeethmd/open-image"><i className="fab fa-docker"></i></a>
                    </li>
                    <li>
                        <a className="surface-normal square-large circular" href="https://bitbucket.org/RanjeethDevaiah/"><i className="fab fa-bitbucket"></i></a>
                    </li>
                </ul>
            </div>
            <div className="row-50">
                <Content>
                    <Error {...error} onClick={onReturnHome}>
                        <Content scrollX={true}>
                            <Jobs onClick={onCompanyChange} defaulCompany={(defaultUri || {}).company} />
                        </Content>
                        <Switch>
                            <Route path='/job-desc/:company' render={props => <JobDescription {...props} onError={onError} />} />
                            <Route path='/' render={props => <Skills {...props} onError={onError} />} />
                        </Switch>
                    </Error>
                    <footer>
                        <div>
                            <h4>Powered by</h4>
                            <br/>
                            <span>C#</span>
                            <span>ReactJS</span>
                            <span>Docker</span>
                            <br/>
                            <span>kubernetes</span>
                            <span>MongoDB</span>
                            <span>Azure</span>
                        </div>
                    </footer>
                </Content>
            </div>
        </>
    );
}


