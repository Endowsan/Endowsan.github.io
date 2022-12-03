import Link from 'next/link';
//import Image from 'next/image';

const PostCard = ({post}) => {
    return (
        <div className = 'border rounded-lg'>
        <Link href={`/posts/${post.slug}`}>
            <div className = 'px-2 py-4'>
                <h1 className = 'font-bold text-lg'>{post.frontMatter.title}</h1>
                <span>{post.frontMatter.date}</span>
                <div className="prose prose-lg max-w-none">
                    <span>category:</span>
                    {post.frontMatter.categories.map((category) => (
                    <span key={category}>
                        <Link href={`/categories/${category}`}>
                            {category}
                        </Link>
                    </span>
                    ))}
                </div>
            </div>
        </Link>
        </div>
    );
};

export default PostCard;