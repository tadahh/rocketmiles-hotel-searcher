import React from 'react';
import { mount } from 'enzyme';
import App from './App';
import Filters from '../Filters';
import HotelList from '../HotelList';
import axios from 'axios';

jest.mock('axios');

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

describe('App', () => {
    it('should mount Loader in a full DOM', function() {
        expect(mount(<App />).length).toBe(1);
    });

    it('should fetch a list of hotel data', () => {
        axios.get.mockImplementation(() =>
            Promise.resolve({ data: hotelData }).then(resp =>
                expect(resp.data).toEqual(hotelData)
            )
        );

        axios.get.mockReset();
    });

    it('should mount Filters in a full DOM', function() {
        expect(mount(<Filters />).length).toBe(1);
    });

    it('should mount HotelList in a full DOM', function() {
        expect(mount(<HotelList hotelData={hotelData} />).length).toBe(1);
    });
});
