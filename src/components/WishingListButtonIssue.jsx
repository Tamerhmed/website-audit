import Image from 'next/image';
import mobileMenuImage from '../../public/img/improvments/wishing-list-clicked.png';

export default function WishlistButtonIssue() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8 max-w-4xl'>
        <h1 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Wishlist Button Functionality Issue
        </h1>

        {/* Visual Illustration */}
        <div className='bg-white rounded-lg p-6 shadow-sm mb-8'>
          <div className='flex justify-center'>
            <div className='relative'>
              <Image
                src={mobileMenuImage}
                alt='Product grid showing wishlist button issue'
                className='rounded-lg shadow-md max-w-full h-auto'
              />
            </div>
          </div>
          <p className='text-center text-gray-600 mt-4 text-sm'>
            Current Issue: Clicking the heart icon opens the product page
            instead of adding to wishlist
          </p>
        </div>

        <div className='space-y-8'>
          {/* Problem Statement */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold mb-4 text-red-600 flex items-center'>
              <span className='mr-2'>⚠️</span>
              How I Discovered the Problem
            </h2>
            <p className='text-gray-700 leading-relaxed'>
              During user testing, I noticed that when users clicked the heart
              icon on product cards, they were being redirected to the product
              page instead of adding the item to their wishlist. This was
              happening because the heart button was nested inside a clickable
              product card container, causing event bubbling. Users were
              frustrated because they couldn't quickly add multiple items to
              their wishlist without constantly navigating back and forth
              between pages.
            </p>
          </div>

          {/* Expected Outcome */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h2 className='text-2xl font-semibold mb-4 text-green-600 flex items-center'>
              <span className='mr-2'>✅</span>
              Expected Outcome
            </h2>
            <ul className='space-y-3 text-gray-700'>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>
                  Users could now quickly add multiple items to wishlist without
                  page navigation
                </span>
              </li>

              <li className='flex items-start'>
                <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>
                  Heart icon now properly toggles wishlist status as expected
                </span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>Improved user experience</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
