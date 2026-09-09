import Link from 'next/link';
import { storyblokEditable } from '@storyblok/react/rsc';
import { resolveLink } from '@/lib/resolveLink';

export default function NavLink({ blok }) {
	if (!blok) return null;

	const href = resolveLink(blok.link);
	const isExternal = blok.link?.linktype === 'url';

	return (
		<li {...storyblokEditable(blok)}>
			<Link
				href={href}
				{...(isExternal && { target: '_blank', rel: 'noopener noreferrer' })}
				className="transition-colors hover:text-brand-hover"
			>
				{blok.label}
			</Link>
		</li>
	);
}