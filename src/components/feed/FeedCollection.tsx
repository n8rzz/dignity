import React from 'react';
import { IFeed } from '../../stores/feed/models/i-feed';
import FeedItem from './FeedItem';

type Props = {
    feedList: IFeed[];
}

function _buildFeedSummaryListJsx(feedList: IFeed[] = []) {
    if (feedList.length === 0) {
        return [];
    }

    return feedList.map((feed: IFeed) => <FeedItem
        key={feed.name}
        feed={feed}
    />);
};

const FeedCollection: React.FunctionComponent<Props> = (props: Props) => {
    return (
        <ul>
            { _buildFeedSummaryListJsx(props.feedList) }
        </ul>
    );
};

export default FeedCollection;
