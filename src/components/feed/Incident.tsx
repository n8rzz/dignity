import moment from 'moment';
import { IFeedIncident } from '../../stores/feed/models/i-feed-incident';

type Props = {
    incident: IFeedIncident;
}

const Incident: React.FunctionComponent<Props> = (props) => {
    const pubDateFromNow = moment(props.incident.pubDate).fromNow();

    return (
        <li>
            <ul className="hlist">
                <style jsx>{`
                    li:first-child {
                        min-width: 100px;
                        width: 15%;
                    }
                `}</style>
                <li>{ pubDateFromNow }</li>
                <li>
                    <a
                        href={props.incident.link}
                        target="_blank"
                    >
                        { props.incident.title }
                    </a>
                </li>
            </ul>
        </li>
    );
};

export default Incident;
