// import Image from 'next/image';
// import navbar from '../../../public/img/positive/nav-menu-1.png';

// export default function Navbar() {
//   return (
//     <div className='min-h-screen bg-gray-50'>
//       <div className='container mx-auto px-4 py-8 max-w-6xl'>
//         <h2 className='text-3xl font-bold text-center mb-8 text-gray-900'>
//           Navbar Analysis
//         </h2>

//         <div className='w-full mb-8'>
//           <Image
//             src={navbar}
//             alt='navbar menu'
//             className='w-full h-auto max-h-96 object-contain rounded-lg shadow-lg'
//             priority
//           />
//         </div>

//         <div className='space-y-8'>
//           <div className='bg-white rounded-lg p-6 shadow-sm'>
//             <h3 className='text-2xl font-semibold mb-4 text-green-600 flex items-center'>
//               <span className='mr-2'>✅</span>
//               What Works Well
//             </h3>
//             <p className='text-gray-700 leading-relaxed'>
//               The Taking Shape website menu is well-structured, combining
//               extensive product range with intuitive navigation. Clear visual
//               cues and organized categories ensure a smooth and effortless
//               browsing experience. Its clean design seamlessly integrates
//               functionality and visual appeal, resulting in a user-friendly and
//               engaging shopping environment.
//             </p>
//           </div>

//           <div className='bg-white rounded-lg p-6 shadow-sm'>
//             <h3 className='text-2xl font-semibold mb-4 text-orange-600 flex items-center'>
//               <span className='mr-2'>⚠️</span>
//               Areas for Improvement
//             </h3>

//             <div className='space-y-6'>
//               <h2 className='text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2'>
//                 🖱️ Hover Interaction Feedback – Large vs Mobile Screens
//               </h2>

//               <section className='bg-gray-50 p-4 rounded-lg'>
//                 <h3 className='text-lg font-semibold mb-3 text-gray-800'>
//                   🧩 Current Behavior
//                 </h3>
//                 <ul className='space-y-2 text-gray-700'>
//                   <li className='flex items-start'>
//                     <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                     <span>
//                       <strong>Large screen (desktop):</strong> Menu items show
//                       an <strong>underline on hover</strong>, providing a visual
//                       cue.
//                     </span>
//                   </li>
//                   <li className='flex items-start'>
//                     <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                     <span>
//                       <strong>Mobile screen:</strong> No hover feedback due to
//                       touch interface limitations (no cursor hover).
//                     </span>
//                   </li>
//                 </ul>
//               </section>

//               <section className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
//                 <h3 className='text-lg font-semibold mb-3 text-red-800'>
//                   ⚠️ Issue
//                 </h3>
//                 <ul className='space-y-2 text-red-700'>
//                   <li className='flex items-start'>
//                     <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                     <span>
//                       No visual indication is provided on touch, reducing
//                       awareness.
//                     </span>
//                   </li>
//                   <li className='flex items-start'>
//                     <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                     <span>This weakens the tactile feel of the interface.</span>
//                   </li>
//                 </ul>
//               </section>

//               <section className='bg-green-50 p-4 rounded-lg border-l-4 border-green-200'>
//                 <h3 className='text-lg font-semibold mb-3 text-green-800'>
//                   ✅ Recommendation: Add Touch Feedback Animation
//                 </h3>
//                 <p className='mb-3 text-green-700'>
//                   Implement touch-friendly visual feedback, such as:
//                 </p>
//                 <ul className='space-y-2 text-green-700 mb-4'>
//                   <li className='flex items-start'>
//                     <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                     <span>
//                       <strong>Background color change</strong> or highlight on
//                       tap
//                     </span>
//                   </li>
//                   <li className='flex items-start'>
//                     <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                     <span>
//                       <strong>Ripple effect</strong> or light shadow animation
//                     </span>
//                   </li>
//                   <li className='flex items-start'>
//                     <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
//                     <span>
//                       <strong>Scale-in effect</strong> or subtle zoom on tap
//                     </span>
//                   </li>
//                 </ul>
//               </section>

//               <section className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200'>
//                 <h3 className='text-lg font-semibold mb-3 text-blue-800'>
//                   🎯 Goal
//                 </h3>
//                 <p className='text-blue-700'>
//                   Provide a <strong>consistent interactive experience</strong>{' '}
//                   across devices. Ensure users receive immediate visual
//                   feedback—whether by mouse hover on desktop or touch tap on
//                   mobile—making navigation more responsive and engaging.
//                 </p>
//               </section>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
'use client';
import { useState } from 'react';
import MobileClothingMenu from '../../components/MobileClothingMenu';
import Image from 'next/image';
import navbar from '../../../public/img/positive/nav-menu-1.png';
import mobileMenuImage from '../../../public/img/improvments/nav-menu-mobile-1.png';
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8 max-w-6xl'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Navbar Analysis
        </h2>

        <div className='w-full mb-8'>
          <Image
            src={navbar}
            alt='navbar menu'
            className='w-full h-auto max-h-96 object-contain rounded-lg shadow-lg'
            priority
          />
        </div>

        <div className='space-y-8'>
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-green-600 flex items-center'>
              <span className='mr-2'>✅</span>
              What Works Well
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              The Taking Shape website menu is well-structured, combining
              extensive product range with intuitive navigation. Clear visual
              cues and organized categories ensure a smooth and effortless
              browsing experience. Its clean design seamlessly integrates
              functionality and visual appeal, resulting in a user-friendly and
              engaging shopping environment.
            </p>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-orange-600 flex items-center'>
              <span className='mr-2'>⚠️</span>
              Areas for Improvement
            </h3>

            <div className='space-y-6'>
              <h2 className='text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2'>
                🖱️ Hover Interaction Feedback – Large vs Mobile Screens
              </h2>

              <section className='bg-gray-50 p-4 rounded-lg'>
                <h3 className='text-lg font-semibold mb-3 text-gray-800'>
                  🧩 Current Behavior
                </h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>Large screen (desktop):</strong> Menu items show
                      an <strong>underline on hover</strong>, providing a visual
                      cue.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>Mobile screen:</strong> No hover feedback due to
                      touch interface limitations (no cursor hover).
                    </span>
                  </li>
                </ul>
              </section>

              <section className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
                <h3 className='text-lg font-semibold mb-3 text-red-800'>
                  ⚠️ Issue
                </h3>
                <ul className='space-y-2 text-red-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      No visual indication is provided on touch, reducing
                      awareness.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>This weakens the tactile feel of the interface.</span>
                  </li>
                </ul>
              </section>

              <section className='bg-green-50 p-4 rounded-lg border-l-4 border-green-200'>
                <h3 className='text-lg font-semibold mb-3 text-green-800'>
                  ✅ Recommendation: Add Touch Feedback Animation
                </h3>
                <p className='mb-3 text-green-700'>
                  Implement touch-friendly visual feedback, such as:
                </p>
                <ul className='space-y-2 text-green-700 mb-4'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>Background color change</strong> or highlight on
                      tap
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>Ripple effect</strong> or light shadow animation
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>Scale-in effect</strong> or subtle zoom on tap
                    </span>
                  </li>
                </ul>
              </section>

              <section className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200'>
                <h3 className='text-lg font-semibold mb-3 text-blue-800'>
                  🎯 Goal
                </h3>
                <p className='text-blue-700'>
                  Provide a <strong>consistent interactive experience</strong>{' '}
                  across devices. Ensure users receive immediate visual
                  feedback—whether by mouse hover on desktop or touch tap on
                  mobile—making navigation more responsive and engaging.
                </p>
              </section>
              {/* Original Mobile Menu Image */}
              <section className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200'>
                <h3 className='text-lg font-semibold mb-3 text-blue-800'>
                  📱 Original Mobile Menu
                </h3>
                <p className='text-blue-700 mb-4'>
                  Current mobile menu implementation:
                </p>

                <div className='flex justify-center mb-4'>
                  <div className='max-w-xs w-full bg-white rounded-lg shadow-lg border border-gray-200 p-4'>
                    <div className='w-full mb-8'>
                      <Image
                        src={mobileMenuImage}
                        alt='mobile menu'
                        className='w-full h-auto max-h-96 object-cover rounded-lg shadow-lg'
                        priority
                      />
                    </div>
                  </div>
                </div>
              </section>

              {/* Mobile Menu Demo Section */}
              <section className='bg-purple-50 p-4 rounded-lg border-l-4 border-purple-200'>
                <h3 className='text-lg font-semibold mb-3 text-purple-800'>
                  📱 Mobile Menu Demo
                </h3>
                <p className='text-purple-700 mb-4'>
                  Here's a working demonstration of the mobile clothing menu
                  with improved touch feedback:
                </p>

                <div className='flex justify-center mb-4'>
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg'
                  >
                    Open Mobile Menu Demo
                  </button>
                </div>

                {/* Mobile Menu Container */}
                <div className='relative mx-auto max-w-sm h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg'>
                  <div className='absolute inset-2 bg-white rounded-lg'>
                    <MobileClothingMenu
                      isOpen={isMobileMenuOpen}
                      onClose={() => setIsMobileMenuOpen(false)}
                    />
                    {!isMobileMenuOpen && (
                      <div className='flex items-center justify-center h-full'>
                        <div className='text-center'>
                          <div className='text-4xl mb-2'>📱</div>
                          <p className='text-gray-500'>
                            Click "Open Mobile Menu Demo" to see the menu in
                            action
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
