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
          Navbar UX Analysis Project
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
              What I Discovered Was Working Well
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              So I was analyzing the Taking Shape website's navigation, and
              honestly, I was impressed with how they handled the complexity.
              They have this massive product catalog, but they managed to
              organize everything in a way that doesn't overwhelm users. The
              labeling is intuitive, the hierarchy makes sense, and the overall
              design stays clean. It's one of those cases where good UX design
              really shines - you can tell they put thought into making shopping
              actually enjoyable rather than frustrating.
            </p>
          </div>

          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-orange-600 flex items-center'>
              <span className='mr-2'>⚠️</span>
              The Key Issue I Identified
            </h3>

            <div className='space-y-6'>
              <h2 className='text-xl font-bold text-gray-900 border-b-2 border-gray-200 pb-2'>
                🖱️ Mobile Touch Feedback Problem
              </h2>

              <section className='bg-gray-50 p-4 rounded-lg'>
                <h3 className='text-lg font-semibold mb-3 text-gray-800'>
                  🧩 What I Observed
                </h3>
                <ul className='space-y-2 text-gray-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>On desktop:</strong> I noticed the menu items have
                      this nice underline effect when you hover over them -
                      great visual feedback.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>On mobile:</strong> But when I tested it on mobile
                      devices, there's basically no feedback when you tap
                      something. Nothing happens visually.
                    </span>
                  </li>
                </ul>
              </section>

              <section className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
                <h3 className='text-lg font-semibold mb-3 text-red-800'>
                  ⚠️ Why This Matters
                </h3>
                <ul className='space-y-2 text-red-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      I found that users were often double-tapping or hesitating
                      because they weren't sure if their tap registered. That's
                      a UX red flag.
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      The interface felt less responsive on mobile compared to
                      desktop, which creates an inconsistent user experience.
                    </span>
                  </li>
                </ul>
              </section>

              <section className='bg-green-50 p-4 rounded-lg border-l-4 border-green-200'>
                <h3 className='text-lg font-semibold mb-3 text-green-800'>
                  ✅ My Proposed Solution
                </h3>
                <p className='mb-3 text-green-700'>
                  So I researched best practices for mobile touch feedback and
                  came up with several options:
                </p>
                <ul className='space-y-2 text-green-700 mb-4'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>Active state styling</strong> - immediate color
                      change on tap
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>Subtle animations</strong> - ripple effects or
                      gentle transitions
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      <strong>Micro-interactions</strong> - slight scale or
                      shadow changes
                    </span>
                  </li>
                </ul>
              </section>

              <section className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200'>
                <h3 className='text-lg font-semibold mb-3 text-blue-800'>
                  🎯 My Goal With This Analysis
                </h3>
                <p className='text-blue-700'>
                  I wanted to create a{' '}
                  <strong>consistent, responsive experience</strong> across all
                  devices. Users should get immediate visual confirmation when
                  they interact with any element, whether they're hovering with
                  a mouse or tapping with their finger. It's about building
                  trust and confidence in the interface.
                </p>
              </section>

              {/* Original Mobile Menu Image */}
              <section className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200'>
                <h3 className='text-lg font-semibold mb-3 text-blue-800'>
                  📱 The Current Mobile Implementation
                </h3>
                <p className='text-blue-700 mb-4'>
                  Here's what the current mobile menu looks like - you can see
                  it's functional but lacks that tactile feedback:
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
                  📱 My Prototype Solution
                </h3>
                <p className='text-purple-700 mb-4'>
                  I actually built a working prototype to demonstrate the
                  improved touch feedback. This shows how I approach
                  problem-solving - I don't just identify issues, I create
                  tangible solutions:
                </p>

                <div className='flex justify-center mb-4'>
                  <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className='bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg'
                  >
                    Try My Improved Mobile Menu
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
                            Click the button above to see my prototype in action
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
