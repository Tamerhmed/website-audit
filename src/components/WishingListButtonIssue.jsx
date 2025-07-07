// export default function WishlistButtonIssue() {
//   return (
//     <div className='min-h-screen bg-gray-50'>
//       <div className='container mx-auto px-4 py-8 max-w-4xl'>
//         <h1 className='text-3xl font-bold text-center mb-8 text-gray-900'>
//           Wishlist Button Functionality Issue
//         </h1>

//         <div className='space-y-8'>
//           {/* Problem Statement */}
//           <div className='bg-white rounded-lg p-6 shadow-sm'>
//             <h2 className='text-2xl font-semibold mb-4 text-red-600 flex items-center'>
//               <span className='mr-2'>⚠️</span>
//               Problem Statement
//             </h2>
//             <p className='text-gray-700 leading-relaxed'>
//               When users click the heart icon (wishlist button) on product
//               cards, instead of adding the item to their wishlist, the product
//               page opens. This creates a poor user experience as users cannot
//               quickly add items to their wishlist without navigating away from
//               the current page.
//             </p>
//           </div>

//           {/* Expected Outcome */}
//           <div className='bg-white rounded-lg p-6 shadow-sm'>
//             <h2 className='text-2xl font-semibold mb-4 text-green-600 flex items-center'>
//               <span className='mr-2'>✅</span>
//               Expected Outcome
//             </h2>
//             <ul className='space-y-3 text-gray-700'>
//               <li className='flex items-start'>
//                 <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                 <span>
//                   Clicking the heart icon only toggles wishlist status
//                 </span>
//               </li>
//               <li className='flex items-start'>
//                 <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                 <span>
//                   Clicking elsewhere on the product card opens the product page
//                 </span>
//               </li>
//               <li className='flex items-start'>
//                 <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                 <span>
//                   Users can quickly add multiple items to wishlist without page
//                   navigation
//                 </span>
//               </li>
//               <li className='flex items-start'>
//                 <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                 <span>Improved user experience and conversion rates</span>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

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
              <div className='absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg'>
                Issue Here!
              </div>
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
              Problem Statement
            </h2>
            <p className='text-gray-700 leading-relaxed'>
              When users click the heart icon (wishlist button) on product
              cards, instead of adding the item to their wishlist, the product
              page opens. This creates a poor user experience as users cannot
              quickly add items to their wishlist without navigating away from
              the current page.
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
                  Clicking the heart icon only toggles wishlist status
                </span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>
                  Clicking elsewhere on the product card opens the product page
                </span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>
                  Users can quickly add multiple items to wishlist without page
                  navigation
                </span>
              </li>
              <li className='flex items-start'>
                <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                <span>Improved user experience and conversion rates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
