import Image from 'next/image';
import Layout from "../components/generics/Layout";

function Home({
    data,
    ...props
}) {
    console.log('props', data)

    return (
        <Layout
            title={data.meta.title}
            description={data.meta.description}
        >
            Home
            <Image
                src={data.image}
                alt="Imass"
                width={500}
                height={500}
            />
        </Layout>
    )
}

export async function getStaticProps() {
    const data = await import('../content/home.md');
    return {
        props: {
            data: data.attributes
        }
    };
}

export default Home;