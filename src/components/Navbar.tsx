'use client';

import React from 'react';
import Link from 'next/link';
import { MagneticButton } from './ui/magicbtn';
import { IconBrandGithub, IconMessageChatbot } from '@tabler/icons-react';

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-t px-4 py-4 dark:border-neutral-800">
      {/* Left side - Logo */}
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-black" />
        <Link href={"/"} className="text-base font-bold md:text-2xl">ResumeX</Link>
      </div>

      <div className="flex items-center gap-2">
        {/* Chat Button */}
        <MagneticButton distance={0.1}>
          <Link
            href="/chat"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-700 md:px-4 md:py-2"
          >
            Chat with Resume <IconMessageChatbot size={18} />
          </Link>
        </MagneticButton>

        {/* GitHub Star Button with Magnetic Effect */}
        <MagneticButton distance={0.1}>
          <Link
            href="https://github.com/priyanshuyadav/resume-x"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-gray-800 md:px-4 md:py-2 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Star on GitHub <IconBrandGithub size={18} />
          </Link>
        </MagneticButton>
      </div>
    </nav>
  );
}

export default Navbar;
