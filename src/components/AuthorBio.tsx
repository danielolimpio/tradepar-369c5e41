import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { author } from "@/data/author";
import {
  FacebookIcon,
  XIcon,
  LinkedInIcon,
  InstagramIcon,
  WebsiteIcon,
} from "@/components/SocialIcons";

const socialList = [
  { href: author.socials.website, label: "Site oficial", Icon: WebsiteIcon },
  { href: author.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  { href: author.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: author.socials.x, label: "X (Twitter)", Icon: XIcon },
  { href: author.socials.facebook, label: "Facebook", Icon: FacebookIcon },
];

const AuthorBio = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="mb-16">
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8">
        <div className="flex flex-col sm:flex-row gap-6 items-start">
          <Link to="/quem-somos" className="flex-shrink-0">
            <img
              src={author.photo}
              alt={author.name}
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-primary/40 hover:border-primary transition-colors"
            />
          </Link>

          <div className="flex-1 min-w-0">
            <div className="flex items-baseline gap-2 flex-wrap mb-1">
              <span className="text-xs uppercase tracking-wider text-primary font-semibold">
                Autor
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-1">
              <Link to="/quem-somos" className="hover:text-primary transition-colors">
                {author.name}
              </Link>
            </h3>
            <p className="text-xs text-muted-foreground mb-4">{author.role}</p>

            <p className="text-muted-foreground leading-relaxed">{author.short}</p>

            {expanded && (
              <div className="mt-4 space-y-3 text-muted-foreground leading-relaxed border-t border-border pt-4">
                {author.full.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setExpanded((v) => !v)}
                className="gap-1"
              >
                {expanded ? (
                  <>
                    Ver menos <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    Ver mais <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </Button>

              <div className="flex items-center gap-2">
                {socialList.map(({ href, label, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${author.name} no ${label}`}
                    className="w-9 h-9 rounded-lg bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorBio;
