import React from 'react';
import { Segment, Placeholder } from 'semantic-ui-react';

const Loader = () => {
    return (
        <Segment basic>
            <Placeholder fluid>
                <Placeholder.Header image>
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                    <Placeholder.Line />
                </Placeholder.Paragraph>
            </Placeholder>
        </Segment>
    );
};

export default Loader;
