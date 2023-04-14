import React, {memo} from 'react';
import ListItem from "../../components/ListItem/ListItem";
import {timestampToDate} from "../../utils/timestampToDate";
import {Timestamp} from "../../types/timestampTypes";
import {useSelector} from "react-redux";
import {selectTimestamps} from "../../store/timestamps/selectors";

interface TimestampListProps {
    onListItemClick: (timestamp: Timestamp) => () => void
}

const TimestampList = memo(({onListItemClick}: TimestampListProps) => {
    const {timestamps} = useSelector(selectTimestamps)
    return (
        <div>
            {timestamps?.map(timestamp => <ListItem
                key={timestamp.id}
                caption={timestampToDate(timestamp).toISOString().slice(14, -1)}
                onClick={onListItemClick(timestamp)}
            />)}
        </div>
    );
});

export default TimestampList;