import React from 'react';
import ListItem from "../../components/ListItem/ListItem";
import {timestampToDate} from "../../utils/timestampToDate";
import {TimeStampType} from "../../types/timestampTypes";

interface TimestampListProps {
    timestamps: TimeStampType[] | null,
    onListItemClick: (timestamp: TimeStampType) => () => void
}

const TimestampList = ({timestamps, onListItemClick}:TimestampListProps) => {
    return (
        <div>
            {timestamps?.map(timestamp => <ListItem
                key={timestamp.id}
                caption={timestampToDate(timestamp).toISOString().slice(14, -1)}
                onClick={onListItemClick(timestamp)}
            />)}
        </div>
    );
};

export default TimestampList;