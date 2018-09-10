import data from '../data';
import React from 'react';
import IdentifyPage from './IdentifyPage';

export const DetailsView = ({ female }) => (
    <div className="details main-content">
        <IdentifyPage title={female.name} />
        <h2>{female.name}</h2>
        <div dangerouslySetInnerHTML={{ __html: female.content }} />
    </div>
);

export default props => <DetailsView
    {...data}
    {...props}
    female={data.females.find(female => female.identity === props.match.params.identity)}
/>;
