import { storyblokEditable } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function DepartmentFilter({blok, department = '', query = '',}) {
    
	const { data } = await getStoryblokApi().getStories({
		version: 'draft',
		starts_with: 'jobs/',
		content_type: 'job-post',
	});

	const departments = [
		...new Set(
			data.stories.map((job) => job.content.department).filter(Boolean)
		),
	].sort();

	return (
		<form action="/jobs" method="get" {...storyblokEditable(blok)}>
			{query && <input type="hidden" name="q" value={query} />}

			<label
				htmlFor="department"
				className="mb-1.5 block font-sans text-sm font-medium text-ink"
			>
				{blok.label || 'Avdelning'}
			</label>

			<div className="flex gap-2">
				<select
					id="department"
					name="department"
					defaultValue={department}
					className="min-w-0 flex-1 rounded-lg border border-line bg-white px-4 py-2.5 text-sm capitalize text-ink focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-soft"
				>
					<option value="">Alla avdelningar</option>
					{departments.map((d) => (
						<option key={d} value={d}>
							{d}
						</option>
					))}
				</select>

				<button
					type="submit"
					className="shrink-0 rounded-lg border border-line bg-white px-5 py-2.5 font-sans text-sm font-medium text-ink transition-colors hover:border-brand hover:text-brand"
				>
					Filtrera
				</button>
			</div>
		</form>
	);
}