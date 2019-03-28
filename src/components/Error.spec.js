import React from 'react';
import { mount } from 'enzyme';
import Error from './Error';

const message = 'Uh Oh';
const subMessage = 'Something went wrong, please reload the page';

describe('Error', () => {
    it('should mount Loader in a full DOM', function() {
        expect(mount(<Error />).length).toBe(1);
    });

    it('accepts message props', () => {
        const wrapper = mount(<Error message={message} />);
        expect(wrapper.props().message).toEqual(message);
    });

    it('accepts subMessage props', () => {
        const wrapper = mount(<Error subMessage={subMessage} />);
        expect(wrapper.props().subMessage).toEqual(subMessage);
    });
});
