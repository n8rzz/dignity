import Parser from 'rss-parser';
import { FEEDS } from './feed.constant';

function _buildFeedRequestList() {
    const rssParser = new Parser();

    return FEEDS.reduce((sum: any[], feed: any): any[] => {
        if (!feed.isActive) {
            return sum;
        }

        return [
            ...sum,
            rssParser.parseURL(feed.url),
        ];
    }, []);
}

export const getFeedList = () => {
    const feedRequestList = _buildFeedRequestList();

    return Promise.all(feedRequestList)
        .then((res) => res)
        .catch((err) => {
            throw err;
        });
};
