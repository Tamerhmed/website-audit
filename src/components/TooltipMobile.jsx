import Image from 'next/image';
import tooltipImage from '../../public/img/improvments/tooltip-mobile-1.png';

export default function TooltipMobile() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        Mobile Tooltip Optimization
      </h1>

      <div className='mb-8'>
        <Image
          src={tooltipImage}
          alt='Mobile Tooltip Interface'
          className='w-full h-auto rounded-lg shadow-lg'
          priority
        />
      </div>

      <div className='space-y-8'>
        {/* Problem Section */}
        <section>
          <h2 className='text-2xl font-semibold text-red-800 mb-4 border-b-2 border-red-500 pb-2'>
            Problem
          </h2>
          <div className='bg-red-50 p-6 rounded-lg border-l-4 border-red-500'>
            <p className='text-gray-700 leading-relaxed'>
              Current tooltip implementation on mobile devices creates usability
              issues. Tooltips appear in suboptimal positions, often extending
              beyond screen boundaries, making them difficult to read and
              interact with. The close functionality is not intuitive for touch
              interfaces, and touch targets are inadequately sized for mobile
              interaction patterns.
            </p>
          </div>
        </section>

        {/* Solution Section */}
        <section>
          <h2 className='text-2xl font-semibold text-blue-800 mb-4 border-b-2 border-blue-500 pb-2'>
            Solution
          </h2>

          <div className='space-y-6'>
            <div className='mb-6'>
              <h3 className='text-xl font-semibold text-blue-800 mb-4'>
                Key Improvements
              </h3>

              <div className='space-y-4'>
                <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500'>
                  <h4 className='font-semibold text-blue-800 mb-3'>
                    Positioning
                  </h4>
                  <div className='space-y-2 text-gray-700'>
                    <p>• Position tooltips above trigger elements on mobile</p>

                    <p>
                      • Use adaptive positioning based on available screen space
                    </p>
                  </div>
                </div>

                <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500'>
                  <h4 className='font-semibold text-blue-800 mb-3'>
                    User Experience
                  </h4>
                  <div className='space-y-2 text-gray-700'>
                    <p>• Make close (X) button more visible and tappable</p>
                    <p>• Improve touch target sizes</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='bg-green-50 p-6 rounded-lg border-l-4 border-green-500'>
              <h3 className='text-xl font-semibold text-green-800 mb-3'>
                Recommended Approach
              </h3>
              <p className='text-gray-700 leading-relaxed'>
                Keep current tooltip concept but implement mobile-specific
                optimizations: reposition above triggers, reduce size, condense
                content, and enhance close button visibility for better mobile
                usability.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
