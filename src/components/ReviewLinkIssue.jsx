import Image from 'next/image';
import reviewLink from '../../public/img/improvments/review-click.png';

export default function ReviewLinkIssue() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8 max-w-4xl'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Review Link Navigation Analysis
        </h1>

        {/* Visual Illustration */}
        <div className='bg-white rounded-lg p-6 shadow-sm mb-8'>
          <div className='flex justify-center'>
            <div className='relative w-full max-w-4xl'>
              <Image
                src={reviewLink}
                alt='Product grid showing review link issue'
                className='w-full h-auto rounded-lg shadow-lg object-contain'
              />
            </div>
          </div>
          <p className='text-center text-gray-600 mt-4 text-sm'>
            Issue I Identified: Review links not navigating to review section
            when clicked
          </p>
        </div>

        <div className='space-y-8'>
          {/* Problem Description */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold mb-4 text-red-600 flex items-center'>
              <span className='mr-2'>⚠️</span>
              Problem I Discovered
            </h2>
            <div className='space-y-4 text-gray-700'>
              <div>
                <span className='font-semibold text-red-600'>
                  What I Found:
                </span>{' '}
                "During my usability audit, I discovered that the review link
                functionality was completely broken."
              </div>
              <div>
                <span className='font-semibold text-red-600'>
                  Current Behavior:
                </span>{' '}
                "When users click on review links - the '4 Reviews' text with
                star ratings - nothing happens. No navigation, no scrolling, no
                response whatsoever."
              </div>
              <div>
                <span className='font-semibold text-green-600'>
                  Expected Behavior:
                </span>{' '}
                "Users expect clicking that link to take them straight to the
                review section. It's basic navigation functionality that should
                work seamlessly."
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold mb-4 text-orange-600 flex items-center'>
              <span className='mr-2'>📊</span>
              Why This Matters
            </h2>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>
                  "Users can't access the social proof they need to make
                  purchase decisions"
                </span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>
                  "It creates immediate frustration - broken links damage user
                  trust"
                </span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>
                  "Review engagement drops significantly when access is this
                  difficult"
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
