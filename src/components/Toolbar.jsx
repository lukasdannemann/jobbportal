import { storyblokEditable, StoryblokServerComponent } from "@storyblok/react/rsc";
import DepartmentFilter from "./DepartmentFilter.jsx";
export default function Toolbar({ blok, ...rest }) {
	return (
		<div
			className="mb-8 flex flex-wrap items-end gap-4 border-b border-line pb-6"
			{...storyblokEditable(blok)}
		>
			{blok.blocks?.map((nestedBlok) => (
				<StoryblokServerComponent
					blok={nestedBlok}
					key={nestedBlok._uid}
					{...rest}
				/>
			))}
        <DepartmentFilter blok={blok} {...rest} />
		</div>
	);
}