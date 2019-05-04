import React from 'react';
import { Link } from 'gatsby';
import * as path from '../path';
import Layout from '../components/Layout';
import Basic from '../components/section/Basic';

export default ({ location }) => (
    <Layout template="not-found" title="404: Not Found" description="This page does not exist." location={location}>
        <Basic id="not-found" space="space-xs-80 space-lg-130">
            <header>
                <h3 className="p-xs-25">404: Not Found</h3>
            </header>
            <section>
                <p>
                    This page does not exist.{' '}
                    <Link title="Home" rel="home" to={path.Root}>
                        Return home &rarr;
                    </Link>
                </p>
            </section>
        </Basic>
    </Layout>
);
