export default function manifest() {
    return {
        name: "Tanishq Nikam | SOC Analyst Portfolio",
        short_name: "TN-SOC",
        description: "Cybersecurity portfolio, SOC dashboard, and technical reports by Tanishq Nikam.",
        start_url: "/",
        display: "standalone",
        background_color: "#0a0a0a",
        theme_color: "#0a0a0a",
        icons: [
            {
                src: "/icon.svg",
                type: "image/svg+xml",
                sizes: "any",
            },
            {
                src: "/apple-icon.png",
                type: "image/png",
                sizes: "180x180",
            },
        ],
    };
}
