import React from 'react';
import classnames from 'classnames';
import moment from 'moment';
import DateDistanceUtility from '../../utils/date-distance.utility';
import { IFeed } from '../../stores/feed/models/i-feed';
import Incident from './Incident';

const ERROR_STATUS_HOUR_THRESHOLD = 6;
const INCIDENT_LIMIT_DEFAULT = 5;
const INCIDENT_LIMIT_INCREMENTOR = 5;

type Props = {
    feed: IFeed;
};

type State = {
    isOpen: boolean;
    incidentLimit: number;
}

export default class FeedItem extends React.Component<Props, State> {
    private _itemCount: number = 0;
    private _onClickFeedItemHandler: (event: UIEvent, feed: IFeed) => void = this._onClickFeedItem.bind(this);
    private _onClickViewMoreHandler: (event: UIEvent) => void = this._onClickViewMore.bind(this);

    constructor(props: Props) {
        super(props);

        this._itemCount = props.feed.items.length;
        this.state = {
            isOpen: false,
            incidentLimit: INCIDENT_LIMIT_DEFAULT,
        };
    }

    private _onClickFeedItem(event: UIEvent): void {
        event.preventDefault();

        if (!this.state.isOpen) {
            this.setState((prevState) => ({ isOpen: !prevState.isOpen }));

            return;
        }

        this.setState((prevState) => ({
            isOpen: !prevState.isOpen,
            incidentLimit: INCIDENT_LIMIT_DEFAULT
        }));
    }

    private _onClickViewMore(event: UIEvent): void {
        event.preventDefault();

        this.setState((prevState) => {
            let incidentLimit = prevState.incidentLimit + INCIDENT_LIMIT_INCREMENTOR;

            if (incidentLimit > this._itemCount) {
                incidentLimit = this._itemCount;
            }

            return { incidentLimit };
        });
    }

    private _buildFeedIncidentListJsx() {
        if (this.props.feed.items.length === 0) {
            return null;
        }

        return this.props.feed.items.reduce((sum, incident, index) => {
            if (index > this.state.incidentLimit) {
                return sum;
            }

            const incidentJsx = (<Incident
                key={incident.isoDate}
                incident={incident}
            />);

            return [
                ...sum,
                incidentJsx,
            ];
        }, []);
    }

    private _buildViewMoreJsx() {
        if (this.state.incidentLimit >= this._itemCount) {
            return null;
        }

        return (
            <a
                href="#"
                onClick={(event: any) => this._onClickViewMoreHandler(event)}
            >
                view more
            </a>
        );
    }

    private _buildFeedItemDetailsListJsx() {
        if (!this.state.isOpen) {
            return null;
        }

        return (
            <div className="feedIncident">
                <ul className="feedIncident-list">
                    { this._buildFeedIncidentListJsx() }
                </ul>
                { this._buildViewMoreJsx() }
            </div>
        );
    }

    private _buildFeedClassNames() {
        const pubDate = moment(this.props.feed.items[0].isoDate);
        const isError = DateDistanceUtility.isToday(pubDate)
            && DateDistanceUtility.isWithinHours(ERROR_STATUS_HOUR_THRESHOLD, pubDate);
        const isWarning = !isError && DateDistanceUtility.isYesterday(pubDate);


        return classnames({
            feed: true,
            'mix-feed_isError': isError,
            'mix-feed_isWarning': isWarning,
        });
    }

    public render() {
        const accordionTriggerStyle = {
            backgroundColor: '#eeeeee',
            padding: '10px',
        };
        const titleCardStyle = {
            flexGrow: 1,
            padding: '10px',
        };
        const providerLinkStyle = {
            marginRight: 10,
        };

        return (
            <li className={this._buildFeedClassNames()} key={ this.props.feed.title }>
                <div>
                    <div
                        className="feed-trigger"
                        style={accordionTriggerStyle}
                        onClick={(event: any) => this._onClickFeedItemHandler(event, this.props.feed)}
                    >
                        +
                    </div>
                    <div className="feed-title" style={titleCardStyle}>
                        <a style={providerLinkStyle}>{ this.props.feed.name }</a>
                        <span>{ this.props.feed.title }</span>
                    </div>
                </div>
                { this._buildFeedItemDetailsListJsx() }
            </li>
        );
    }
}
