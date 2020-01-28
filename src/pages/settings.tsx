import * as React from 'react';
import Header from '../components/Header';
import Layout from '../components/Layout';
import FeedProviderCollection from '../components/feed-provider/FeedProviderCollection';
import { IFeedProvider } from '../stores/feed-provider/models/i-feed-provider';
import { getProviderList } from '../stores/feed-provider/feed-provider.service';

type Props = {
    providerList: IFeedProvider[];
};

export default class SettingsPage extends React.Component<Props> {
    public providerList: IFeedProvider[] = [];

    public static async getInitialProps() {
        const providerList: IFeedProvider[] = await getProviderList();

        return {
            providerList,
        };
    }

    constructor(props: Props) {
        super(props);
    }

    public render() {
        return (
            <Layout title="Settings | Dignity">
                <Header title="Settings" />
                <FeedProviderCollection providerList={this.props.providerList} />
            </Layout>
        );
    }
}
