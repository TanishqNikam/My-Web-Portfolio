import { getAllContent } from "@/lib/content";

const BASE_URL = "https://tanishqnikam.vercel.app";

export default async function sitemap() {
    const logs = await getAllContent("logs");

    const staticRoutes = [
        "",
        "/about",
        "/contact",
        "/projects",
        "/terminal",
        "/logs",
    ].map((route) => ({
        url: `${BASE_URL}${route}`,
        lastModified: new Date(),
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1 : 0.7,
    }));

    const logRoutes = logs.map((log) => ({
        url: `${BASE_URL}/logs/${log.slug}`,
        lastModified: log.date ? new Date(log.date) : new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
    }));

    return [...staticRoutes, ...logRoutes];
}
