export const FEEDS: any = [
    {
        name: 'Harvest',
        url: 'https://www.harveststatus.com/history.rss',
        isActive: true,
    },
    {
        name: 'Freshbooks',
        url: 'https://status.freshbooks.com/history.rss',
        isActive: true,
    },
    {
        name: 'NPM',
        url: 'https://status.npmjs.org/history.rss',
        isActive: true,
    },
    {
        name: 'Heroku',
        url: 'https://status.heroku.com/feed', // will require a parser, different format than the rest
        isActive: false,
    },
    {
        name: 'GitHub',
        url: 'https://www.githubstatus.com/history.rss',
        isActive: true,
    },
    {
        name: 'Travis CI',
        url: 'https://www.traviscistatus.com/history.rss',
        isActive: true,
    },
    {
        name: 'Gitlab',
        url: 'https://status.gitlab.com/pages/5b36dc6502d06804c08349f7/rss',
        isActive: false,
    },
    {
        name: 'Digitalocean',
        url: 'https://status.digitalocean.com/history.rss',
        isActive: true,
    },
];
