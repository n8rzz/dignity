import * as React from 'react';
import Layout from '../components/Layout';
import { NextPage } from 'next';
import { buildFeedListWithName } from '../utils/build-feed-list-with-name';
import FeedCollection from '../components/feed/FeedCollection';
import Header from '../components/Header';
import { FEEDS } from '../stores/feed/feed.constant';
import { getFeedList } from '../stores/feed/feed.service';
import { IFeed } from '../stores/feed/models/i-feed';

type Props = {
    feedList: IFeed[];
}

const IndexPage: NextPage<Props> = (props) => {
    return (
        <Layout title="Dignity | Status of your providers">
            <Header title="Status" />
            <FeedCollection feedList={props.feedList} />
        </Layout>
    );
};

IndexPage.getInitialProps = async () => {
    const feedListResponse = await getFeedList();
    const feedList = buildFeedListWithName(feedListResponse, FEEDS);

    return {
        feedList,
    };
};

export default IndexPage;
