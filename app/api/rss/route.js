export async function GET() {
    // Fetch all blog posts from the API
    const allBlogPosts = [];
    let currentPage = 1;
    const perPage = 2;

    // Fetch all blog posts from the API
    while (true) {
      const url = `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/Newblogpost/${currentPage}?perPage=${perPage}`;
      const response = await fetch(url);

      if (!response.ok) {
        // Handle errors if the API request fails
        return new Response("Failed to fetch blog posts", { status: 500 });
      }

      const data = await response.json();

      if (!data || !data.blogPosts || data.blogPosts.length === 0) {
        break; // No more data
      }

      allBlogPosts.push(...data.blogPosts);

      if (data.blogPosts.length < perPage) {
        break; // Reached the last page
      }

      currentPage++;
    }

    // Handle case where no blog posts are available
    if (allBlogPosts.length === 0) {
      return new Response("No blog posts found", { status: 404 });
    }

    // Helper function to escape special characters for XML
    const escapeXml = (str) => {
      return str.replace(/[<>&'"]/g, (match) => {
        const escapes = {
          '<': '&lt;',
          '>': '&gt;',
          '&': '&amp;',
          "'": '&apos;',
          '"': '&quot;',
        };
        return escapes[match];
      });
    };

    // Generate RSS XML
    const rssFeed = `
      <rss version="2.0">
        <channel>
          <title>My Blog</title>
          <link>${process.env.NEXT_PUBLIC_Site_URL}/</link>
          <description>All blog posts</description>
          ${allBlogPosts
            .map(
              (post) => `
            <item>
              <title>${escapeXml(post.title)}</title>
              <link>${process.env.NEXT_PUBLIC_Site_URL}/blog/${post._id}</link>
              <description>${escapeXml(post.content.slice(0, 200))}...</description>
              <author>${escapeXml(post.author.name)}</author>
              <pubDate>${new Date(post.created_at).toUTCString()}</pubDate>
            </item>
          `
            )
            .join("")}
        </channel>
      </rss>
    `;

    // Return XML response
    return new Response(rssFeed, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
}
