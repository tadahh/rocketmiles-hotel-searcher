import React from 'react';
import { Segment, Header, Icon } from 'semantic-ui-react';

const Error = ({ message, subMessage }) => {
    return (
        <Segment placeholder>
            <Header as='h2' icon>
                <Icon name='frown outline' />
                {message}
                <Header.Subheader>{subMessage}</Header.Subheader>
            </Header>
        </Segment>
    );
};

export default Error;
