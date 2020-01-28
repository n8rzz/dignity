import * as React from 'react';
import Link from 'next/link';

type Props = {};

const Layout: React.FunctionComponent<Props> = () => (
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
            </ul>
        </nav>
    </header>
);

export default Layout;
