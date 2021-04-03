import Head from "next/head";

function Layout({
    title,
    description,
    children,
    ...props
}) {
    return (
        <>
            <Head>
                <meta
                    name='description'
                    content={description}
                />
                <title>
                    {title}
                </title>
            </Head>
            <div>
                {children}
            </div>
        </>
    )

}

export default Layout;