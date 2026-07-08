import { Github, Linkedin } from "lucide-react";
import Image from "next/image";

const brandIconUrl = (slug) => `https://cdn.simpleicons.org/${slug}/00f0ff`;

const links = [
    { name: "GitHub", href: "https://github.com/TanishqNikam", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/tanishq-nikam", icon: Linkedin },
    { name: "Medium", href: "https://medium.com/@itanishqnikam", iconSlug: "medium" },
    { name: "TryHackMe", href: "https://tryhackme.com/p/itanishqnikam", iconSlug: "tryhackme" },
];

export default function HeroSocials() {
    return (
        <div className="flex items-center gap-6">
            {links.map(({ name, href, icon: Icon, iconSlug }) => (
                <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group text-muted hover:text-primary transition-all hover:-translate-y-1"
                >
                    {Icon ? (
                        <Icon className="w-5 h-5" />
                    ) : (
                        <Image
                            src={brandIconUrl(iconSlug)}
                            alt=""
                            width={20}
                            height={20}
                            className="w-5 h-5 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all"
                            unoptimized
                        />
                    )}
                    <span className="sr-only">{name}</span>
                </a>
            ))}
        </div>
    );
}
