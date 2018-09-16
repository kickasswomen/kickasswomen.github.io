import { Link } from 'react-router-dom';
import data from '../data';
import LetterList from './LetterList';
import React from 'react';

export const LeftNav = ({ female = { identity: null }, females }) => (
    <div className="left-nav">
        <h1>
            <Link to="/">
                <span>kick-ass</span>
                <span>women</span>
            </Link>
        </h1>
        <LetterList females={females} female={female} />
    </div>
);

export default props => <LeftNav
    {...data }
    {...props}
    female={data.females.find(female => female.identity === props.match.params.identity)}
/>;
