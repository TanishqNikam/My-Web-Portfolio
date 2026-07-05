const BASE_URL = "https://tanishqnikam.vercel.app";

export default function robots() {
    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
