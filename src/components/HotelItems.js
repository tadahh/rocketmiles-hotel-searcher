import React from 'react';
import {
    Card,
    Header,
    Image,
    Grid,
    Segment,
    Icon,
    Label,
    Statistic
} from 'semantic-ui-react';

const HotelItems = ({ hotelData }) => {
    const decodeHtml = html => {
        var txt = document.createElement('textarea');
        txt.innerHTML = html;
        return txt.value;
    };

    return (
        <Segment basic>
            <Card.Group>
                {hotelData.map(hotel => {
                    return (
                        <Card fluid key={hotel.id}>
                            <Grid stretched>
                                <Grid.Column width={5}>
                                    <Segment basic>
                                        <Image
                                            src={
                                                hotel.hotelStaticContent
                                                    .mainImage.url
                                            }
                                            style={{
                                                height: 210,
                                                width: '100%'
                                            }}
                                            rounded
                                        />
                                    </Segment>
                                </Grid.Column>

                                <Grid.Column width={7}>
                                    <Segment basic>
                                        <Header size='medium'>
                                            <a>
                                                <Icon
                                                    color='blue'
                                                    name='map marker alternate'
                                                />
                                                {
                                                    hotel.hotelStaticContent
                                                        .neighborhoodName
                                                }
                                            </a>
                                        </Header>

                                        <Header size='large'>
                                            {hotel.hotelStaticContent.name}
                                        </Header>
                                    </Segment>
                                    <Segment basic>
                                        <Statistic.Group size='mini'>
                                            <Statistic>
                                                <Statistic.Value>
                                                    {
                                                        hotel.hotelStaticContent
                                                            .stars
                                                    }
                                                </Statistic.Value>
                                                <Statistic.Label>
                                                    Stars
                                                </Statistic.Label>
                                            </Statistic>
                                            <Statistic>
                                                <Statistic.Value>
                                                    {
                                                        hotel.hotelStaticContent
                                                            .numberOfReviews
                                                    }
                                                </Statistic.Value>
                                                <Statistic.Label>
                                                    Reviews
                                                </Statistic.Label>
                                            </Statistic>
                                        </Statistic.Group>
                                    </Segment>
                                </Grid.Column>
                                <Grid.Column width={4} textAlign='right'>
                                    <Segment basic>
                                        <Label color='blue'>
                                            {`Earn ${
                                                hotel.rewards.miles
                                            } Miles`}
                                        </Label>
                                        <Header size='large' color='green'>
                                            {`${decodeHtml(
                                                hotel.lowestAveragePrice.symbol
                                            )}${
                                                hotel.lowestAveragePrice.amount
                                            }`}
                                        </Header>
                                    </Segment>
                                </Grid.Column>
                            </Grid>
                        </Card>
                    );
                })}
            </Card.Group>
        </Segment>
    );
};

export default HotelItems;
