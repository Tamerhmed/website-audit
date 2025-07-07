'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();
  const [activeItem, setActiveItem] = useState(null);

  const sections = [
    {
      title: 'Pages',
      items: [
        { name: 'Homepage', path: '/', icon: '🏠' },
        { name: 'Navbar', path: '/navbar', icon: '🧭' },
        { name: 'Discount', path: '/discount', icon: '🎨' },
        { name: 'Search Bar', path: '/searchbar', icon: '🔍' },
        { name: 'Product', path: '/product', icon: '🥻' },
      ],
    },
    // {
    //   title: 'Issues',
    //   items: [
    //     { name: 'Discount Problems', path: '/issues/discount', icon: '🏷️' },
    //     { name: 'Layout Issues', path: '/issues/layout', icon: '📐' },
    //     { name: 'Responsive Bugs', path: '/issues/responsive', icon: '📱' },
    //   ],
    // },
    // {
    //   title: 'Pages',
    //   items: [
    //     { name: 'Dashboard', path: '/dashboard', icon: '📊' },
    //     { name: 'Analytics', path: '/analytics', icon: '📈' },
    //     { name: 'Settings', path: '/settings', icon: '⚙️' },
    //   ],
    // },
  ];

  const isActive = (path) => pathname === path;

  return (
    <div className='fixed left-0 top-0 bottom-0 z-40 w-80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 shadow-2xl h-screen border-r border-slate-700/50'>
      <div className='flex flex-col h-full'>
        {/* Header */}
        <div className='p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800 to-slate-900'>
          <h1 className='text-xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent'>
            Component Library
          </h1>
          <p className='text-slate-400 text-sm leading-relaxed'>
            Navigate through components and issues
          </p>
        </div>

        {/* Navigation - Fixed height with custom scrollbar */}
        <div className='flex-1 overflow-hidden'>
          <div className='h-full overflow-y-auto scrollbar-thin scrollbar-track-slate-800 scrollbar-thumb-slate-600 hover:scrollbar-thumb-slate-500 scrollbar-thumb-rounded-full p-4'>
            <div className='space-y-8 pb-4'>
              {sections.map((section, index) => (
                <div key={section.title} className='text-gray-100'>
                  <h3 className='text-sm font-semibold mb-4 text-slate-300 uppercase tracking-wider flex items-center'>
                    <div className='w-8 h-px bg-gradient-to-r from-blue-500 to-purple-500 mr-3'></div>
                    {section.title}
                  </h3>
                  <ul className='space-y-2'>
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={item.path}
                          className={`w-full flex items-center p-3 rounded-xl transition-all duration-300 text-left group relative overflow-hidden ${
                            isActive(item.path)
                              ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/25 border border-blue-400/30'
                              : 'text-slate-300 hover:bg-slate-700/50 hover:text-white hover:shadow-lg hover:shadow-slate-700/20 border border-transparent hover:border-slate-600/30'
                          }`}
                        >
                          {/* Active indicator */}
                          {isActive(item.path) && (
                            <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-300 to-blue-400 rounded-r-full'></div>
                          )}

                          {/* Icon with glow effect */}
                          <div
                            className={`flex items-center justify-center w-8 h-8 rounded-lg mr-3 transition-all duration-300 ${
                              isActive(item.path)
                                ? 'bg-white/20 shadow-lg shadow-white/10'
                                : 'group-hover:bg-slate-600/50'
                            }`}
                          >
                            <span className='text-base'>{item.icon}</span>
                          </div>

                          <span className='text-sm font-medium flex-1'>
                            {item.name}
                          </span>

                          {/* Active dot */}
                          {isActive(item.path) && (
                            <div className='w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50 animate-pulse'></div>
                          )}

                          {/* Hover arrow */}
                          <div
                            className={`transition-all duration-300 ${
                              isActive(item.path)
                                ? 'opacity-0'
                                : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-1'
                            }`}
                          >
                            <svg
                              className='w-4 h-4'
                              fill='none'
                              stroke='currentColor'
                              viewBox='0 0 24 24'
                            >
                              <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M9 5l7 7-7 7'
                              />
                            </svg>
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='p-4 border-t border-slate-700/50 bg-gradient-to-r from-slate-800 to-slate-900'>
          <div className='flex items-center p-3 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl border border-slate-600/50 shadow-lg hover:shadow-xl transition-all duration-300'>
            <div className='w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center shadow-lg'>
              <span className='text-white font-semibold text-sm'>AD</span>
            </div>
            <div className='ml-3 flex-1'>
              <p className='text-white font-medium text-sm'>Admin</p>
              <p className='text-slate-400 text-xs'>Developer</p>
            </div>
            <div className='w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-400/50 animate-pulse'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
