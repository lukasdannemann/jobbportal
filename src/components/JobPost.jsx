import { storyblokEditable, StoryblokServerComponent, StoryblokServerRichText } from "@storyblok/react/rsc";
import Link from "next/link";

export default function JobPost({ blok }) {
	return (
		<article className="mx-auto max-w-2xl" {...storyblokEditable(blok)}>
			<p>
				<Link
					href="/jobs"
					className="text-sm text-muted transition-colors hover:text-brand"
				>
					← Tillbaka till lediga jobb
				</Link>
			</p>

			<h1 className="mt-6 font-sans text-3xl font-semibold leading-tight tracking-tight">
				{blok.title}
			</h1>

            {blok.department && (
                <span className="mt-3 inline-block w-fit rounded-full bg-brand-soft px-3 py-1 text-xs font-medium capitalize text-brand">
                    {blok.department}
                </span>
                )}

			{blok.publishedAt && (
				<p className="mt-3 text-xs uppercase tracking-wide text-muted">
					{blok.publishedAt}
				</p>
			)}

			{blok.summary && (
				<p className="mt-6 border-l-2 border-brand pl-4 text-base leading-relaxed text-muted">
					{blok.summary}
				</p>
			)}

			<div className="prose prose-neutral mt-8 max-w-none prose-headings:font-sans prose-a:text-brand">
				<StoryblokServerRichText doc={blok.content} />
			</div>

			{blok.body?.map((nestedBlok) => (
				<StoryblokServerComponent blok={nestedBlok} key={nestedBlok._uid} />
			))}
		</article>
	);
}