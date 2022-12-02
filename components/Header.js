import Link from 'next/link';

const Header = () => {
  return (
    <header className="sticky top-0 border-b z-10 bg-white">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <Link href="/">
          endow7.com
        </Link>
        <Link href="/posts/about.md">
          About
        </Link>
        <Link href="https://github.com/Endowsan">
          Github
        </Link>
        <Link href="https://twitter.com/ghoqqm">
          Twitter
        </Link>
      </div>
    </header>
  );
};

export default Header;