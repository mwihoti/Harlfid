import Script from "next/script"

// helps search engines understand your content better and can result in rich snippets in search resulrts whuch improve click-throuh rates.
export default function StructuredData() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Harlfid",
    }


    return (
        <Script id="structured-data" type="/application/ld+json">
            {JSON.stringify(structuredData)}
        </Script>
    )
}