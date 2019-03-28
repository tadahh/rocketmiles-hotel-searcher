import React, { useState } from 'react';
import { Form, Segment } from 'semantic-ui-react';

const options = [
    { key: 'a', text: 'Ascending', value: 'Ascending' },
    { key: 'd', text: 'Descending', value: 'Descending' }
];

const Filters = ({ filterHotelList, orderHotelListByPrice }) => {
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    return (
        <Segment basic>
            <Form
                size='big'
                onSubmit={event => {
                    event.preventDefault();
                    filterHotelList(inputValue.toLowerCase());
                }}
            >
                <Form.Group widths='equal'>
                    <Form.Input
                        fluid
                        icon='search'
                        placeholder='Search Hotels...'
                        onChange={event => {
                            setInputValue(event.target.value);
                        }}
                        value={inputValue}
                    />
                    <Form.Select
                        fluid
                        options={options}
                        placeholder='Price'
                        selection
                        value={selectValue}
                        onChange={(e, { value }) => {
                            setSelectValue(value);
                            orderHotelListByPrice(value);
                        }}
                    />
                </Form.Group>
            </Form>
        </Segment>
    );
};

export default Filters;
