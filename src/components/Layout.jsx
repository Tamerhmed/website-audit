'use client';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function Layout({ children }) {
  const pathname = usePathname();

  const getPageTitle = () => {
    switch (pathname) {
      case '/navbar':
        return 'Navbar Component';
      case '/product':
        return 'Product';
      case '/searchbar':
        return 'Search Bar Component';
      case '/discount':
        return 'Discount Issues';
      case '/shopping-bag':
        return 'Shopping Bag';
      case '/':
        return 'My Website Journey & Feedback';
      case '/dashboard':
        return 'Dashboard';
      case '/analytics':
        return 'Analytics';
      case '/settings':
        return 'Settings';
      default:
        return 'Component Dashboard';
    }
  };

  return (
    <div className='flex min-h-screen bg-gray-50'>
      <Sidebar />

      {/* Main Content */}
      <div className='flex-1 ml-80'>
        {/* Top Bar */}
        <header className='bg-white shadow-sm border-b border-gray-200 px-8 py-4 sticky top-0 z-30'>
          <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-2xl font-bold text-gray-800'>
                {getPageTitle()}
              </h2>
              <p className='text-gray-600 text-sm mt-1'>
                Comprehensive Website Component Management and Monitoring
              </p>
            </div>
            <div className='flex items-center space-x-4'>
              <button className='p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 17h5l-5 5-5-5h5zm0 0V3'
                  />
                </svg>
              </button>
              <button className='p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors'>
                <svg
                  className='w-5 h-5'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707'
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className='p-8'>
          <div className='max-w-7xl mx-auto'>{children}</div>
        </main>
      </div>
    </div>
  );
}
