import { storyblokEditable } from "@storyblok/react/rsc";
import { getStoryblokApi } from "@/lib/storyblok";
import Link from "next/link";

export default async function JobList({ blok }) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.getStories({
		version: "draft",
		starts_with: "jobs/",
		content_type: "job-post",
		resolve_relations: ["job-post.department"],
	});

	const stories = data.stories;

	return (
		<section className="job-list" {...storyblokEditable(blok)}>
			{blok.heading && <h1>{blok.heading}</h1>}

			{stories.length === 0 ? (
				<p>{blok.empty_text || "Inga inlägg."}</p>
			) : (
				<div className="job-list__items">
					{stories.map((job) => (
						<div key={job.uuid}>
							<h2>{job.content.title}</h2>
							<p>{job.content.summary}</p>
							<Link href={`/${job.full_slug}`}>Read more</Link>
						</div>
					))}
				</div>
			)}
		</section>
	);
}