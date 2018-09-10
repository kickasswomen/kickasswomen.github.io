import React from 'react';

export class IdentifyPage extends React.Component {
    render() {
        return null;
    }

    componentDidMount() {
        const { title } = this.props;
        const pageTitle = title
            ? title + ' | Kick-Ass Women'
            : 'Kick-Ass Women';

        document.getElementsByTagName('title')[0].innerHTML = pageTitle;
    }
}

export default IdentifyPage;
