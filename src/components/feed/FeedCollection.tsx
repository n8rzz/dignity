import React from 'react';
import { IFeed } from '../../stores/feed/models/i-feed';
import FeedItem from './FeedItem';

function _buildFeedSummaryListJsx(feedList: IFeed[] = []) {
    if (feedList.length === 0) {
        return [];
    }

    return feedList.map((feed) => <FeedItem
        key={feed.name}
        feed={feed}
    />);
};

type Props = {
    feedList: IFeed[];
}

const FeedCollection: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <ul>
            { _buildFeedSummaryListJsx(props.feedList) }
        </ul>
    );
};

export default FeedCollection;
