import React from 'react';
import { mount } from 'enzyme';
import Loader from './Loader';

describe('Loader', () => {
    it('should mount Loader in a full DOM', function() {
        expect(mount(<Loader />).length).toBe(1);
    });
});
