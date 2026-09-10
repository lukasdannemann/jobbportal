import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';
import { resolveLink } from '@/lib/resolveLink';

export default function Hero({ blok }) {
	if (!blok) return null;

	return (
		<section
			className="border-b border-line py-16 text-center"
			{...storyblokEditable(blok)}
		>
			{blok.heading && (
				<h1 className="font-sans text-4xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
					{blok.heading}
				</h1>
			)}

			{blok.text && (
				<p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted">
					{blok.text}
				</p>
			)}

			{blok.cta_label && (
				<Link
					href={resolveLink(blok.cta_link)}
					className="mt-8 inline-block rounded-lg bg-brand px-6 py-3 font-sans text-sm font-medium text-white transition-colors hover:bg-brand-hover"
				>
					{blok.cta_label}
				</Link>
			)}
		</section>
	);
}