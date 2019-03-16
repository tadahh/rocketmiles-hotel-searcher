import React, { Component } from 'react';
import './style.less';

class App extends Component {
    state = {
        mockData: {
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
                    url: 'http://d2whcypojkzby.cloudfront.net/imageRepo/2/0/68/56/314/ExteriorCarsGone_S.jpg',
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
    }

    render() {
        return (
            <div className="app-container">
                <div className="content">
                    <div className="filters">
                        Hotel name
                        <input type="text" />
                        Price
                        <button>sort</button>
                    </div>
                    <div className="hotel-list">
                    <img src={this.state.mockData.hotelStaticContent.mainImage.url} className="photo"/>
                    <div className="details">
                        <div>
                            {this.state.mockData.hotelStaticContent.name}
                        </div>
                        <div>
                            {this.state.mockData.hotelStaticContent.neighborhoodName}
                        </div>
                    </div>
                    <div className="price">
                        {this.state.mockData.lowestAveragePrice.symbol}
                        {this.state.mockData.lowestAveragePrice.amount}
                        {this.state.mockData.rewards.miles}
                        <button>Select</button>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;