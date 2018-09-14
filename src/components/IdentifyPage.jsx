import React from 'react';

const DEFAULT_TITLE = 'Kick-Ass Women';
const DEFAULT_CONTENT = 'This year, I had the pleasure of learning and writing about amazing, influential, kick-ass women for 26 straight sprints.';
const MAX_LENGTH = 250;

export class IdentifyPage extends React.Component {
    render() {
        return null;
    }

    updateTitleAndMeta() {
        const { title, content, image } = this.props;
        const pageTitle = title
            ? title + ' | Kick-Ass Women'
            : DEFAULT_TITLE;
        const pageContent = (content || DEFAULT_CONTENT).substr(0, MAX_LENGTH);

        document.querySelector('title').innerHTML = pageTitle;
        document.querySelector('[property="og:title"]').setAttribute('content', pageContent);
        document.querySelector('[property="og:description"]').setAttribute('content', pageContent);
        document.querySelector('[property="og:image"]').setAttribute('content', image || '');
        document.querySelector('[property="og:url"]').setAttribute('content', window.location.href);
    }

    componentDidUpdate() {
        this.updateTitleAndMeta();
    }

    componentDidMount() {
        this.updateTitleAndMeta();
    }
}

export default IdentifyPage;
