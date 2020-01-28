import * as React from 'react';
import Link from 'next/link';

type Props = {
    user?: any;
};

function _buildAuthenticatedHeader(props: Props) {
    if (!props.user) {
        return null;
    }

    return (
        <>
            <li>USER</li>
        </>
    );
}

const Layout: React.FunctionComponent<Props> = (props) => {
    return (
        <header className="container">
            <nav>
                <ul className="hlist hlist-divided">
                    <li>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/settings">
                            <a>Settings</a>
                        </Link>
                    </li>
                    { _buildAuthenticatedHeader(props) }
                </ul>
            </nav>
        </header>
    );
};

export default Layout;
