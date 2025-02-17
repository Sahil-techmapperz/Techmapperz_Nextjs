import getPost from "@/lib/getPost";

export async function generateMetadata({ params }) {
	const id = params.id;
	const post = await getPost(id);

	return {
		title: post.title,
		description: post.excerpt,
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: 'article',
			publishedTime: post.date,
			authors: [post.author.name],
		},
		twitter: {
			card: 'summary_large_image',
			title: post.title,
			description: post.excerpt
		}
	};
}

export default function BlogLayout({ children }) {
	return <>{children}</>;
}