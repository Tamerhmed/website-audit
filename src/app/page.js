import Link from 'next/link';

export default function Home() {
  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
        <h1 className='text-3xl font-bold text-gray-800 mb-4'>
          Welcome to Component Dashboard
        </h1>
        <p className='text-gray-600 mb-6'>
          Navigate through the sidebar to explore components and track issues.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <Link
            href='/dashboard'
            className='p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors'
          >
            <div className='flex items-center'>
              <span className='text-2xl mr-3'>📊</span>
              <div>
                <h3 className='font-semibold text-gray-800'>Dashboard</h3>
                <p className='text-sm text-gray-600'>View overview and stats</p>
              </div>
            </div>
          </Link>

          <Link
            href='/components/banner'
            className='p-4 bg-red-50 rounded-lg hover:bg-red-100 transition-colors'
          >
            <div className='flex items-center'>
              <span className='text-2xl mr-3'>🎨</span>
              <div>
                <h3 className='font-semibold text-gray-800'>Banner Issues</h3>
                <p className='text-sm text-gray-600'>
                  Check alignment problems
                </p>
              </div>
            </div>
          </Link>

          <Link
            href='/issues/discount'
            className='p-4 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors'
          >
            <div className='flex items-center'>
              <span className='text-2xl mr-3'>🏷️</span>
              <div>
                <h3 className='font-semibold text-gray-800'>Discount Issues</h3>
                <p className='text-sm text-gray-600'>
                  Review promotional banners
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
