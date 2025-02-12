import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className='container'>
                <img
                    src='./img/build_carolina_logo.png'
                    alt='Build Carolina Academy'
                    class={styles.heroImage}
                />
                <Heading as='h1' className='hero__title'>
                    {siteConfig.title}
                </Heading>
            </div>
        </header>
    );
}

export default function Home() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description=''
        >
            <HomepageHeader />
            <main class={clsx('container', styles.main)}>
                <Heading as='h2'>Our Curriculum 💻</Heading>
                <p>
                    Our structured curriculum is designed with input from
                    Upstate employers to give students a full-stack foundation
                    and to prepare them for careers in technology - right here
                    at home, or wherever their career path may go.
                </p>
                <Heading as='h2'>Our Instructors 🙋</Heading>
                <p>
                    Our instructors are industry experts and passionate
                    educators who are committed to the success of every single
                    student. Our courses are structured to provide in-person,
                    one-on-one mentorship and guidance.
                </p>
            </main>
        </Layout>
    );
}
