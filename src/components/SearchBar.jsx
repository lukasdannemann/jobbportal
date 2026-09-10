import { storyblokEditable } from "@storyblok/react/rsc";

export default function SearchBar({ blok, query = "" }) {
	return (
		<form
			action="/jobs"
			method="get"
			className="w-full max-w-md"
			{...storyblokEditable(blok)}
		>
			{blok.label && (
				<label
					htmlFor="search"
					className="mb-1.5 block font-sans text-sm font-medium text-ink"
				>
					{blok.label}
				</label>
			)}

			<div className="flex gap-2">
				<input
					type="search"
					id="search"
					name="q"
					placeholder={blok.placeholder}
					defaultValue={query}
					className="min-w-0 flex-1 rounded-lg border border-line bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted/60 focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand-soft"
				/>

				<button
					type="submit"
					className="shrink-0 rounded-lg bg-brand px-5 py-2.5 font-sans text-sm font-medium text-white transition-colors hover:bg-brand-hover"
				>
					Sök
				</button>
			</div>
		</form>
	);
}