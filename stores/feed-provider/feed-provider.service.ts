import { FEEDS } from '../feed/feed.constant';

export const getProviderList = () => {
    return Promise.resolve(FEEDS);
}
