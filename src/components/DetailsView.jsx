import data from '../data';
import React from 'react';
import IdentifyPage from './IdentifyPage';
import { Redirect } from 'react-router-dom';

const strip = (html) => {
   var tmp = document.createElement('div');
   tmp.innerHTML = html;
   return (tmp.textContent || tmp.innerText || '').replace(/\r|\n/g, ' ');
};

export const DetailsView = ({ female }) => {
    if (!female) {
        return <Redirect to="/" />;
    }

    return (
        <div className="details main-content">
            <IdentifyPage title={female.name} content={strip(female.content)} image={`/${female.identity}.jpg`} />
            <h2>{female.name}</h2>
            <div className="report-wrapper">
                <div dangerouslySetInnerHTML={{ __html: female.content }} />
            </div>
            <p className="disclaimer">
                <em>*The views expressed here are my own, and may not be representative of Research Square.</em>
            </p>
        </div>
    );
};

export default props => <DetailsView
    {...data}
    {...props}
    female={data.females.find(female => female.identity === props.match.params.identity)}
/>;
