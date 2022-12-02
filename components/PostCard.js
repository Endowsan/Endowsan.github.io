import Link from 'next/link';
//import Image from 'next/image';

const PostCard = ({post}) => {
    return (
        <Link href={`/posts/${post.slug}`}>
            <div className = 'border rounded-lg'>
            </div>
            <div className = 'px-2 py-4'>
                <h1 className = 'font-bold text-lg'>{post.frontMatter.title}</h1>
                <span>{post.frontMatter.date}</span>
            </div>
        </Link>
    );
};

export default PostCard;