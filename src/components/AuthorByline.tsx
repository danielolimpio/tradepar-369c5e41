import { Calendar, User } from "lucide-react";
import { author } from "@/data/author";

type Props = {
  date: string;
  readTime?: string;
};

const AuthorByline = ({ date, readTime }: Props) => (
  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
    <div className="flex items-center gap-2">
      <img
        src={author.photo}
        alt={author.name}
        className="w-8 h-8 rounded-full object-cover border border-border"
      />
      <span className="font-medium text-foreground">{author.name}</span>
    </div>
    <div className="flex items-center gap-2">
      <Calendar className="w-4 h-4 text-primary" />
      <span>{date}</span>
    </div>
    {readTime && (
      <div className="flex items-center gap-2">
        <User className="w-4 h-4 text-primary" />
        <span>{readTime} de leitura</span>
      </div>
    )}
  </div>
);

export default AuthorByline;
