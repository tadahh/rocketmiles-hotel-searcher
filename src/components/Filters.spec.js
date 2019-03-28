import React from 'react';
import { shallow, mount } from 'enzyme';
import Filters from './Filters';

describe('Filters', () => {
    it('renders', () => {
        const wrapper = shallow(<Filters />);
        expect(wrapper.exists()).toBe(true);
    });

    it('search input is echoed', () => {
        const wrapper = mount(<Filters filterHotelList={() => {}} />);
        wrapper.find('input').simulate('submit', {
            target: { value: 'hello' }
        });
    });

    it('dropdown selection is echoed', () => {
        const wrapper = mount(<Filters orderHotelListByPrice={() => {}} />);
        wrapper.find('[role="listbox"]').simulate('change', {
            target: { value: 'Ascending' }
        });
    });

    it('prevents default behavior of submit form', () => {
        const wrapper = mount(<Filters filterHotelList={() => {}} />);
        let prevented = false;
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {
                prevented = true;
            }
        });
        expect(prevented).toBe(true);
    });
});
