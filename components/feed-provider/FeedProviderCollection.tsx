import * as React from 'react';
import { IFeedProvider } from '../../stores/feed-provider/models/i-feed-provider';
import ProviderItem from './ProviderItem';

type Props = {
    providerList: IFeedProvider[];
};

function _buildProviderItemList(props: Props): React.ReactNode {
    if (!props.providerList || props.providerList.length === 0) {
        return null;
    }

    return props.providerList.map((item: IFeedProvider) => (
        <ProviderItem key={item.name} item={item} />
    ));
}

const FeedProviderCollection: React.FunctionComponent<Props> = (props) => {
    return (
        <ul className="vlist mix-vlist_spacious">
            { _buildProviderItemList(props) }
        </ul>
    );
};

export default FeedProviderCollection;
