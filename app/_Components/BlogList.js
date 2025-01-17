import Link from 'next/link';
import moment from 'moment';
import PaginationButtons from './PaginationButtons';
import getallblogs from '@/lib/getallblogs';

const BlogList = async ({ page }) => {
  const data = await getallblogs(page);
  const { blogPosts, totalPages } = data;


  return (
    <div className="w-full p-8 max-sm:px-2">
      {blogPosts && blogPosts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post._id}
              className="group border rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:rotate-1"
            >
              <img
                src={post.images[0]}
                alt={post.title}
                className="w-full h-48 object-cover transition-opacity duration-300 group-hover:opacity-90"
              />
              <div className="p-4">
                <div className="flex justify-between text-xs  mb-2">
                  <span>{`BY ${post.author.name.toUpperCase()}`}</span>
                  <span>{`${post.category}`}</span>
                  <span>{moment(post.created_at).format('YYYY-MM-DD')}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  <Link href={`/blog/${post._id}`} className="hover:underline">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-sm  mb-4">
                  {post.content.slice(0, 100) + '...'}   
                </p>
                <Link
                  href={`/blog/${post._id}`}
                  className="text-blue-500 text-sm font-medium hover:underline"
                >
                  Read more...
                </Link>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[90dvh] text-3xl text-center text-gray-500">
          No posts found.
        </div>
      )}
      {blogPosts && blogPosts.length > 0 && (
        <PaginationButtons page={Number(page)} totalPages={totalPages} />
      )}
    </div>
  );
};

export default BlogList;
