import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import axios from 'axios';
import Filters from '../Filters';
import HotelList from '../HotelList';

const App = () => {
    const [hotelData, setHotelData] = useState([]);
    const [filteredHotelData, setFilteredHotelData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setIsError(false);

            try {
                const result = await axios(
                    'https://homework-app.rocketmiles.com/fe-homework/rates'
                );

                setHotelData(result.data.results.hotels);
                setFilteredHotelData(result.data.results.hotels);
                setIsLoading(false);
            } catch (error) {
                setIsError(true);
                disableInputs();
                setIsLoading(false);
            }
        };

        fetchData();
    }, []);

    const disableInputs = () => {
        document.querySelector('input').setAttribute('disabled', '');
        document.querySelector('.dropdown').setAttribute('disabled', '');
    };

    const filterHotelList = input => {
        setFilteredHotelData(
            hotelData.filter(hotel => {
                return hotel.hotelStaticContent.name
                    .toLowerCase()
                    .includes(input);
            })
        );
    };

    const orderHotelListByPrice = orderType => {
        if (orderType === 'Ascending') {
            filteredHotelData.sort((hotel1, hotel2) => {
                return (
                    hotel1.lowestAveragePrice.amount -
                    hotel2.lowestAveragePrice.amount
                );
            });
        } else if (orderType === 'Descending') {
            filteredHotelData.sort((hotel1, hotel2) => {
                return (
                    hotel2.lowestAveragePrice.amount -
                    hotel1.lowestAveragePrice.amount
                );
            });
        }

        setFilteredHotelData([...filteredHotelData]);
    };

    return (
        <Container>
            <>
                <Filters
                    filterHotelList={filterHotelList}
                    orderHotelListByPrice={orderHotelListByPrice}
                />
                <HotelList
                    hotelData={filteredHotelData}
                    isError={isError}
                    isLoading={isLoading}
                />
            </>
        </Container>
    );
};

export default App;
