import Link from 'next/link';
import { Fragment } from 'react';

const HomePage = () => {
    return (
        <Fragment>
            <h1>The Home Page</h1>
            <ul>
                <li><Link href='/news'>News</Link></li>
                <li><Link href='/aboutus'>AboutUs</Link></li>
            </ul>
        </Fragment>
    );
}

export default HomePage;
