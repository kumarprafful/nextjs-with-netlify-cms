function SEO({
    meta
}) {
    return (
        <>
            <title>{meta.title}</title>
            <meta name='description' content={meta.description} />
            <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
            <link rel="canonical" href="https://stayqrious.com/" />
            <meta property="og:locale" content={meta.og_locale} />
            <meta property="og:type" content={meta.og_type} />
            <meta property="og:title" content={meta.og_title || meta.title} />
            <meta property="og:description" content={meta.og_description || meta.description} />
            <meta property="og:url" content={meta.og_url} />
            <meta property="og:site_name" content={meta.og_site_name} />
            <meta property="article:modified_time" content="2021-02-02T06:18:54+00:00" />
            <meta property="og:image" content={meta.og_image} />
            <meta property="og:image:width" content={meta.og_image_width} />
            <meta property="og:image:height" content={meta.og_image_height} />
            <meta name="twitter:card" content={meta.og_twitter_card} />
            <meta name="twitter:label1" content={meta.og_label1} />
            <meta name="twitter:data1" content={meta.og_data1} />
        </>
    )
}

export default SEO;