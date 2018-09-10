import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

export const LeftNav = ({ female = { identity: null }, females }) => (
    <div className="left-nav">
        <h1>
            <Link to="/">
                <span>kick-ass</span>
                <span>women</span>
            </Link>
        </h1>
        <ul>
            {females.map(f => (
                <li key={f.identity}>
                    <Link
                        className={f.identity === female.identity ? 'active': ''}
                        to={`/${f.identity}`}>
                        {f.sprint}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

export default props => <LeftNav
    {...data }
    {...props}
    female={data.females.find(female => female.identity === props.match.params.identity)}
/>;
