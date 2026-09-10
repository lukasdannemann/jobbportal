import Page from '@/components/Page';
import JobPost from '@/components/JobPost';
import JobList from '@/components/JobList';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavLink from '@/components/NavLink';
import Toolbar from '@/components/Toolbar';
import SearchBar from '@/components/SearchBar';
import Hero from '@/components/Hero';
import DepartmentFilter from '@/components/DepartmentFilter';
import { apiPlugin, storyblokInit } from '@storyblok/react/rsc';

export const getStoryblokApi = storyblokInit({
	accessToken: process.env.STORYBLOK_DELIVERY_API_TOKEN,
	use: [apiPlugin],
	components: {
		page: Page,
		"job-post": JobPost,
		"job-list": JobList,
		header: Header,
		footer: Footer,
		"nav-link": NavLink,
		toolbar: Toolbar,
		"search-bar": SearchBar,
		hero: Hero,
		"department-filter": DepartmentFilter
	},
	apiOptions: {
		/** Set the correct region for your space. Learn more: https://www.storyblok.com/docs/packages/storyblok-js#example-region-parameter */
		region: process.env.STORYBLOK_REGION || 'eu',
		/** The following code is only required when creating a Storyblok space directly via the Blueprints feature. */
		endpoint: process.env.STORYBLOK_API_BASE_URL
			? `${new URL(process.env.STORYBLOK_API_BASE_URL).origin}/v2`
			: undefined,
	},
});
