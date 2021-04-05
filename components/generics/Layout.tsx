import Head from "next/head";

interface Props {
    title: string,
    description?: string,
    og_title?: string,
    og_description?: string,
    children: React.ReactNode,
}

function Layout({
    title,
    description,
    og_title,
    og_description,
    children,
}: Props) {
    return (
        <>
            <Head>
                <title>{title}</title>
                {/* <title>Live online coding courses by India&#039;s best teachers</title> */}
                <meta name='description' content={description} />
                {/* <meta name="description" content="Live online coding courses with social learning. Build coding skills, confident communication and leadership skills with your very own coach" /> */}
                <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
                <link rel="canonical" href="https://stayqrious.com/" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={og_title || title} />
                <meta property="og:description" content={og_description || description} />
                <meta property="og:url" content="https://stayqrious.com/" />
                <meta property="og:site_name" content="Live online coding courses by India&#039;s best teachers" />
                <meta property="article:modified_time" content="2021-02-02T06:18:54+00:00" />
                <meta property="og:image" content="https://stayqrious.com/wp-content/uploads/2020/09/as.png" />
                <meta property="og:image:width" content="728" />
                <meta property="og:image:height" content="702" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:label1" content="Est. reading time" />
                <meta name="twitter:data1" content="4 minutes" />
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout;