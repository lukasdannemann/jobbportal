import { storyblokEditable, StoryblokServerComponent, StoryblokServerRichText } from "@storyblok/react/rsc";
import Link from "next/link";

export default function JobPost({ blok }) {

    return (
        <article className="job-post" {...storyblokEditable(blok)}>

            <p>
                <Link href="/jobs">← Tillbaka till lediga jobb</Link>
            </p>

            <h1>{blok.title}</h1>

            <p className="date">{blok.publishedDate}</p>

            <p className="summary">{blok.summary}</p>

            <div className="content">
                <StoryblokServerRichText doc={blok.content} />
            </div>

            {blok.body?.map((nestedBlok) => (
                <StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </article>
    );
}
