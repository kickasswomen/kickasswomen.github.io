import data from '../data';
import LetterList from './LetterList';
import React from 'react';

export const Footer = ({ females, female = { identity: null } }) => (
    <footer>
        <LetterList females={females} female={female} />
        <div className="clearfix" />
        <p>Made with ❤️ by <a href="https://scottdover.com" target="_blank">Scott Dover</a></p>
    </footer>
);

export default props => <Footer
    {...data }
    {...props}
    female={data.females.find(female => female.identity === props.match.params.identity)}
/>;
