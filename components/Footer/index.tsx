import { Twitter, Github } from '@icon-park/react';
import Link from 'next/link';

export const Footer = () => {
  return (<footer className="footer items-center p-4 text-neutral-content">
      <div className="items-center grid-flow-col">
        <p>Copyright © 2022 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Link href="https://twitter.com/GitStarHistory">
          <Twitter theme="filled" size="36" fill="#ffffff"/>
        </Link>
        <Link href="https://github.com/remote-camps/git-star-history">
          <Github theme="filled" size="36" fill="#ffffff"/>
        </Link>
      </div>
    </footer>)
}