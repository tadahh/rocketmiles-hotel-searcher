import React from 'react';
import { shallow, mount } from 'enzyme';
import HotelList from './HotelList';
import Loader from './Loader';
import Error from './Error';

const hotelData = [
    {
        id: '907',
        rewards: {
            miles: 10000
        },
        lowestAveragePrice: {
            currency: 'USD',
            symbol: '&#36;',
            amount: 579
        },
        hotelStaticContent: {
            hotelId: 907,
            languageCode: 'en',
            mainImage: {
                category: 'EXTERIOR',
                url:
                    'http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg',
                source: 'VFML'
            },
            name: 'Omni Chicago Hotel & Suites Magnificent Mile',
            neighborhoodName: 'Magnificent Mile',
            address: {
                line1: '676 North Michigan Avenue',
                line2: null,
                city: 'Chicago',
                stateName: 'Illinois',
                stateCode: 'IL',
                countryName: 'United States',
                countryCode: 'US',
                zipCode: '60611',
                latitude: 41.89475,
                longitude: -87.62465,
                timeZoneId: 'America/Chicago'
            },
            stars: 4,
            rating: 9,
            numberOfReviews: 685,
            brandCode: '1324',
            brandName: 'Omni Hotels',
            propertyType: 204,
            propertyTypeName: 'Hotel'
        }
    }
];

describe('HotelList', () => {
    it('should mount Loader in a full DOM', function() {
        expect(mount(<Loader />).length).toBe(1);
    });

    it('should mount Error in a full DOM', function() {
        expect(mount(<Error />).length).toBe(1);
    });

    it('accepts hotelData props', () => {
        const wrapper = mount(<HotelList hotelData={hotelData} />);
        expect(wrapper.props().hotelData).toEqual(hotelData);
    });
});
