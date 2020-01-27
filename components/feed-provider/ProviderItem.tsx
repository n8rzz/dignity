import * as React from 'react';
import { IFeedProvider } from '../../stores/feed-provider/models/i-feed-provider';

type Props = {
    item: IFeedProvider;
}

const FeedProviderCollection: React.FunctionComponent<Props> = (props) => {
    const itemStyle = {
        alignItems: 'center',
        backgroundColor: '#fafafa',
        border: '1px solid #dedede',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'space-between',
        padding: '10px',
    };

    return (
        <li style={itemStyle}>
            <style jsx>{`
                ul {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 5px;
                }
            `}</style>
            <ul className="vlist">
                <li>
                    {props.item.name}
                </li>
                <li>
                    { props.item.url }
                </li>
            </ul>
            <div className="switch">
                <input
                    type="checkbox"
                    id={props.item.name}
                    className="switch-input"
                    name={props.item.name}
                    defaultChecked={props.item.isActive}
                />
                <label
                    className="switch-label"
                    htmlFor={props.item.name}
                ></label>
            </div>
        </li>
    );
};

export default FeedProviderCollection;
