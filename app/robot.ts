// File tells search engines which pages they can crawl and where to find your sitemap
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: "https://harlfid.vercel.app/sitemap.xml"
    }
} 