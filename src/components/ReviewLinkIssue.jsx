import Image from 'next/image';
import reviewLink from '../../public/img/improvments/review-click.png';

export default function ReviewLinkIssue() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8 max-w-4xl'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Review Link Navigation Issue
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
            Current Issue: Review links not navigating to review section when
            clicked
          </p>
        </div>

        <div className='space-y-8'>
          {/* Problem Description */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold mb-4 text-red-600 flex items-center'>
              <span className='mr-2'>⚠️</span>
              Problem Description
            </h2>
            <div className='space-y-4 text-gray-700'>
              <div>
                <span className='font-semibold text-red-600'>Issue:</span>{' '}
                Review link click functionality not working properly
              </div>
              <div>
                <span className='font-semibold text-red-600'>
                  Current Behavior:
                </span>{' '}
                When users click on the review link (showing "4 Reviews" with
                star ratings), the page does not navigate to the review section
                as expected.
              </div>
              <div>
                <span className='font-semibold text-green-600'>
                  Expected Behavior:
                </span>{' '}
                Clicking the review link should automatically scroll the user to
                the review section of the product page or navigate to a
                dedicated reviews section.
              </div>
            </div>
          </div>

          {/* Impact */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold mb-4 text-orange-600 flex items-center'>
              <span className='mr-2'>📊</span>
              Impact
            </h2>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>Users cannot easily access product reviews</span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>
                  Poor user experience when trying to read customer feedback
                </span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>Reduced engagement with review content</span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>Potential loss of trust due to broken functionality</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
