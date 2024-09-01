'use client';

import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

interface LinkItem {
  name: string;
  href: string;
  icon: React.ElementType; // Updated to React.ElementType to accept className
}

export default function NavLinks() {
  const pathname = usePathname();

  const links: LinkItem[] = [
    {
      name: 'Home',
      href: '/',
      icon: HomeIcon,
    },
    {
      name: 'About',
      href: '/about',
      icon: UserGroupIcon,
    },
    {
      name: 'Docs',
      href: '/docs',
      icon: DocumentDuplicateIcon,
    },
  ];

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon as React.ElementType; // Cast to React.ElementType
        return (
          <Link key={link.name} href={link.href}>
            <a
              className={clsx(
                'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                {
                  'bg-sky-100 text-blue-600': pathname === link.href,
                }
              )}
            >
              <LinkIcon className="w-6" />  {/* This should work now */}
              <p className="hidden md:block">{link.name}</p>
            </a>
          </Link>
        );
      })}
    </>
  );
}
