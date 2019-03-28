import React from 'react';
import { shallow, mount } from 'enzyme';
import HotelItems from './HotelItems';

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

describe('HotelItems', () => {
    const wrapper = mount(<HotelItems hotelData={hotelData} />);

    it('accepts hotelData props', () => {
        expect(wrapper.props().hotelData).toEqual(hotelData);
    });

    it('renders', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('returns default empty array when there is no data', () => {
        const wrapper = mount(<HotelItems hotelData={[]} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('does not break without data', () => {
        const wrapper = mount(<HotelItems hotelData={[]} />);
        expect(wrapper.find('.card')).toHaveLength(0);
    });

    it('contains image src for hotel photo', () => {
        expect(wrapper.find('img').prop('src')).toEqual(
            hotelData[0].hotelStaticContent.mainImage.url
        );
    });

    it('contains neighborhood name', () => {
        expect(
            mount(
                <div className='ui medium header'>
                    <a>
                        <i
                            aria-hidden='true'
                            className='blue map marker alternate icon'
                        />
                        Magnificent Mile
                    </a>
                </div>
            ).text()
        ).toEqual(hotelData[0].hotelStaticContent.neighborhoodName);
    });
});
