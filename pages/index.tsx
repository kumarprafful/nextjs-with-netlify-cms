import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Image from 'next/image';
import Layout from "../components/generics/Layout";

import styles from '../styles/pages/home.module.scss';

function Home({
    meta,
    header,
    features,
    ...props
}) {

    return (
        <Layout
            meta={meta}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <div className={styles.textSection}>
                        <Typography variant="h1" className={styles.title}>{header.title}</Typography>
                        <Typography variant="h4" className={styles.description}>{header.description}</Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            className={styles.button}
                        >
                            {header.button}
                        </Button>
                    </div>
                    <div className={styles.banner}>
                        <Image
                            className={styles.bannerImage}
                            src={header.banner_img}
                            height={500}
                            width={800}
                        />
                    </div>
                </div>

                <div className={styles.features}>
                <Typography variant="h1" className={styles.title}>{features.title}</Typography>

                </div>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await import('../content/home.md');
    return {
        props: {
            meta: data.attributes.meta,
            header: data.attributes.header,
            features: data.attributes.features,
        }
    };
}

export default Home;