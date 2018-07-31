import Link from 'next/link'

const PostLink = ({ post }) => (
  <div>
  <Link as={`/blog/${post.slug}`} href={`/post?slug=${post.slug}`}>
    <a>{post.title} !!!</a>
  </Link>
  <style jsx>{`
      a {
        text-decoration: none;
        color: blue;
        font-family: "Arial";
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </div>
);

export default PostLink;
