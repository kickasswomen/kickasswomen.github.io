import data from '../data';
import React from 'react';
import IdentifyPage from './IdentifyPage';

const strip = (html) => {
   var tmp = document.createElement('div');
   tmp.innerHTML = html;
   return (tmp.textContent || tmp.innerText || '').replace(/\r|\n/g, ' ');
};

export const DetailsView = ({ female }) => (
    <div className="details main-content">
        <IdentifyPage title={female.name} content={strip(female.content)} />
        <h2>{female.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: female.content }} />
    </div>
);

export default props => <DetailsView
    {...data}
    {...props}
    female={data.females.find(female => female.identity === props.match.params.identity)}
/>;
