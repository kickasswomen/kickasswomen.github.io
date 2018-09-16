import './letter-list.scss';
import React from 'react';
import { Link } from 'react-router-dom';

export const LetterList = ({ female, females }) => (
    <ul className="letter-list">
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
);

export default LetterList;
