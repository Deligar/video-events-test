import React from 'react';
import './ListItem.css'

interface ListItemProps {
    caption: string,
    onClick: () => void
}

const ListItem = ({caption, onClick}: ListItemProps) => {
    return (
        <button className={'list-button'} onClick={onClick}>
            {caption}
        </button>
    )
};

export default ListItem;