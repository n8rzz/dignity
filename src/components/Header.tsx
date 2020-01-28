import * as React from 'react';

type Props = {
    title: string;
    subTitle?: string;
}

function _buildSubTitleJsx(props: Props): React.ReactNode {
    const subTitleStyle = {
        fontFamily: 'monospace',
    };;

    if (!props.subTitle) {
        return null;
    }

    return (
        <div style={subTitleStyle}>{ props.subTitle }</div>
    );
}

const Header: React.FunctionComponent<Props> = (props) => {
    const headerStyle = {
        paddingBottom: '15px',
    };

    return (
        <div style={headerStyle}>
            <h1>
                { props.title }
            </h1>
            { _buildSubTitleJsx(props) }
        </div>
    );
};

export default Header;
