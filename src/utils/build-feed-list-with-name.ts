export function buildFeedListWithName(feedList: any[], feedDict: any): any[] {
    return feedList.reduce((sum: any[], feed: any): any[] => {
        const itemFeed = feedDict.filter((item: any): any => {
            const lowerCaseTitle = feed.title.toLowerCase();

            return lowerCaseTitle.indexOf(item.name.toLowerCase()) !== -1;
        })[0];

        return [
            ...sum,
            {
                ...feed,
                name: itemFeed.name,
            },
        ];
    }, []);
}
