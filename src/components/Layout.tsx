import * as React from 'react';
import Head from 'next/head';

import Footer from './Footer';
import Nav from './Nav';

type Props = {
  title?: string
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <Nav />
        <div className="container">
            {children}
        </div>
        <Footer />
    </div>
);

export default Layout;
