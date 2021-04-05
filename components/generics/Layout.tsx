import Head from "next/head";
import SEO from "./SEO";

// interface Props {
//     title: string,
//     description?: string,
//     og_title?: string,
//     og_description?: string,
//     children: React.ReactNode,
// }

function Layout({
    meta,
    children,
}) {
    return (
        <>
            <Head>
                <SEO
                    meta={meta}
                />
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;