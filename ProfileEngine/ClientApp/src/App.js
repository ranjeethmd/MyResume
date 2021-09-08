import React, { useState, useEffect } from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import { Jobs } from './components/Jobs';
import { JobDescription } from './components/JobDesc';
import { Skills } from './components/Skills';
import { Title } from './components/Title';
import { Links } from './components/Links';
import { parseUri } from './components/ParseUrl';
import { Error } from './components/Error';
import { Content } from './components/Content';
import './custom.css'

export const App = () => {

    var location = useLocation();
    const history = useHistory();

    const [defaultUri, setDefaultUrl] = useState('');
  
      

    const [error, setError] = useState({});

    const onError = (code, message) => {
        setError({ code, message });
    }


    const onLinkChange = (location) => {
        let company = parseUri(location.pathname, '/job-desc/:company');
        setDefaultUrl(company);
    }

    useEffect(() => {
        // on first load react to set url
        

        onLinkChange(location);
    }, []);


    useEffect(() => {
        // back button handle

        return history.listen((location) => {
            onLinkChange(location);
        })
    }, [history])

  

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
                <Links />
            </div>
            <div className="row-50">
                <Content>
                    <Error {...error} onClick={onReturnHome}>
                        <div className="exp-wrapper">
                            <Content scrollX={true}>
                                <Jobs onClick={onCompanyChange} defaulCompany={(defaultUri || {}).company} />
                            </Content>
                        </div>
                        <Switch>
                            <Route path='/job-desc/:company' render={props => <JobDescription {...props} onError={onError} />} />
                            <Route path='/' render={props => <Skills {...props} onError={onError} />} />
                        </Switch>
                    </Error>
                    <footer>
                        <div>
                            <h4>Powered by</h4>                           
                            <span>C#</span>
                            <span>ReactJS</span>
                            <span>Docker</span>
                            <br />
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


