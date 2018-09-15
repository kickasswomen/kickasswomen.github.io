import './home.scss';
import { Link } from 'react-router-dom';
import data from '../data';
import IdentifyPage from './IdentifyPage';
import React from 'react';

export const Home = ({ females }) => (
    <div className="home main-content">
        <IdentifyPage />
        <p className="intro">
            This year, over at <a href="https://www.researchsquare.com/" target="__blank">ResearchSquare</a>, I had
            the pleasure of learning and writing about amazing, influential, kick-ass women for 26 straight&nbsp;
            <a href="https://en.wikipedia.org/wiki/Scrum_Sprint" target="__blank">sprints</a>. An aggregation
            of awesome follows...
        </p>
        <ul>
            {females.map(female => (
                <li key={female.identity} className={female.identity}>
                    <div>
                        <Link to={`/${female.identity}`}>
                            <img src={female.photo} alt={female.name} />
                            <h3><span>{female.name}</span></h3>
                        </Link>
                    </div>
                </li>
            ))}
        </ul>
        <div className="clearfix" />
    </div>
);

export default props => <Home {...data } {...props} />;
