import { getStoryblokApi } from "@storyblok/react";
import { StoryblokServerComponent } from "@storyblok/react/rsc";
import { notFound } from "next/navigation";

export default async function JobPostPage({ params }) {
  const { slug } = await params;
  const storyblokApi = getStoryblokApi();

  let story;
  try {
    const { data } = await storyblokApi.get(`cdn/stories/jobs/${slug}`, {
      version: "draft",
      resolve_relations: "job-post.author",
    });
    story = data.story;
    } catch (error) {
    if (error?.status === 404) notFound();
    throw error;
  }

  return <StoryblokServerComponent blok={story.content} />;
}