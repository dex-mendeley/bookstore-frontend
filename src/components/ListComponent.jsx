import React from 'react';

const ListComponent = ({ list }) => (
    <ul>
        {list.map((listItem) => (
            <li key={listItem.isbn}>{listItem.title}</li>
        ))}
    </ul>
);

export default ListComponent;
