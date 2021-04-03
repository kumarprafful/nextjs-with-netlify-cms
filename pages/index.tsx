import Layout from "../components/generics/Layout";

export default function Home(props) {
    console.log('props', props)
    return (
        <Layout
            title="Home"
            description="Description"
        >
            Home
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