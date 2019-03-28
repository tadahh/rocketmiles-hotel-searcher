import React from 'react';
import Loader from './Loader';
import Error from './Error';
import HotelItems from './HotelItems';

const HotelList = ({ hotelData, isError, isLoading }) => {
    if (isLoading) {
        return <Loader />;
    }

    if (isError) {
        return (
            <Error
                message='Uh-Oh'
                subMessage='Something went wrong, please reload the page'
            />
        );
    }

    if (hotelData.length != 0) {
        return <HotelItems hotelData={hotelData} />;
    } else {
        return (
            <Error
                message='No results'
                subMessage={`We couldn't find any listings with that query, try searching again!`}
            />
        );
    }
};

export default HotelList;
