import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";

export default async function JobList({ blok, query = "", department = ""}) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.getStories({
		version: "draft",
		starts_with: "jobs/",
		content_type: "job-post",
		resolve_relations: ["job-post.department"],
		sort_by: "content.publishedAt:desc",
		...(query && { search_term: query }),
		...(department && { filter_query: { department: { in: department } } })
	});

	const stories = data.stories;

	return (
		<section {...storyblokEditable(blok)}>
			{blok.heading && (
				<h1 className="font-sans text-3xl font-semibold tracking-tight">
					{blok.heading}
				</h1>
			)}

			{stories.length === 0 ? (
				<p className="mt-8 text-muted">{blok.empty_text || "Inga inlägg."}</p>
			) : (
				<div className="mt-10 flex flex-col gap-4">
					{stories.map((job) => (
						<Link
							key={job.uuid}
							href={`/${job.full_slug}`}
							className="group block rounded-lg border border-line bg-white p-6 transition-colors hover:border-brand"
						>
							<h2 className="font-sans text-lg font-semibold transition-colors group-hover:text-brand">
								{job.content.title}
							</h2>

							<p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">
								{job.content.summary}
							</p>

							<span className="mt-4 inline-block text-sm font-medium text-brand">
								Läs mer →
							</span>
						</Link>
					))}
				</div>
			)}
		</section>
	);
}