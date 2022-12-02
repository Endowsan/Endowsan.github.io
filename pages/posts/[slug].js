import fs from 'fs';
import matter from 'gray-matter';
import { unified } from 'unified';
//import Image from 'next/image';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import remarkToc from 'remark-toc';
import rehypeSlug from 'rehype-slug';
import remarkPrism from 'remark-prism';
import { createElement,Fragment } from 'react';
import rehypeParse from 'rehype-parse';
import rehypeReact from 'rehype-react';
import remarkUnwrapImages from 'remark-unwrap-images';
import Link from 'next/link';

function MyLink({ children, href }) {
    if (href === '') href = '/';
    return href.startsWith('/') || href.startsWith('#') ? (
      <Link href={href}>
        <a>{children}</a>
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }


export async function getStaticProps({params}){
    const file = fs.readFileSync(`posts/${params.slug}.md`, 'utf-8');
    const { data,content } = matter(file);
    const result = await unified()
        .use(remarkParse)
        .use(remarkPrism,{/* options */})
        .use(remarkToc,{heading:'目次'})
        .use(remarkUnwrapImages)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeSlug)
        .use(rehypeStringify, { allowDangerousHtml: true })
        .process(content);

    return {props:{ frontMatter: data,content: result.toString() }};
};

const toReactNode = (content) => {
    return unified()
      .use(rehypeParse,{fragment:true,})
      .use(rehypeReact, {
        createElement,
        Fragment,
        components: {
        },
      })
      .processSync(content).result;
  };

export async function getStaticPaths(){
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace(/\.md$/, ''),
        },
    }));
    console.log('paths:',paths)
    return {
        paths,
        fallback: false,
    };
};


const Post = ({ frontMatter,content}) => {
    return (
        <div className="prose prose-lg max-w-none">
        <div className="border">
        </div>
        <h1 className="mt-12">{frontMatter.title}</h1>
        <span>{frontMatter.date}</span>
        <div className="space-x-2">
        {frontMatter.categories.map((category) => (
        <span key={category}>
            <Link href={`/categories/${category}`}>
                {category}
            </Link>
        </span>
        ))}
        </div>
        {toReactNode(content)}
        </div>
    );
};

export default Post;