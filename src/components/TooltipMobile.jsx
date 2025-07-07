import Image from 'next/image';
import tooltipImage from '../../public/img/improvments/tooltip-mobile-1.png';

export default function TooltipMobileAnalysis() {
  return (
    <div className='max-w-5xl mx-auto p-8 bg-gray-50'>
      <header className='mb-10'>
        <h1 className='text-4xl font-bold text-gray-900 mb-3'>
          Mobile Tooltip UX Analysis
        </h1>
        <p className='text-lg text-gray-600'>
          A case study on improving mobile interface interactions
        </p>
      </header>

      <div className='w-full mb-8'>
        <Image
          src={tooltipImage}
          alt='Mobile Tooltip Interface Analysis'
          className='w-full h-auto max-h-96 object-contain rounded-lg shadow-lg'
          priority
        />
      </div>

      <div className='grid gap-8'>
        {/* Problem Identification */}
        <section className='bg-white p-8 rounded-xl shadow-sm'>
          <div className='flex items-center mb-6'>
            <h2 className='text-2xl font-bold text-red-700'>
              Problem I Identified
            </h2>
          </div>
          <div className='bg-red-50 p-6 rounded-lg border border-red-200'>
            <p className='text-gray-800 text-lg leading-relaxed'>
              During my mobile usability audit, I discovered that tooltips were
              creating significant friction. They'd appear in awkward positions,
              often getting cut off at screen edges, and users couldn't easily
              dismiss them. The touch targets were too small and the interaction
              patterns weren't intuitive for mobile users.
            </p>
          </div>
        </section>

        {/* Solution Strategy */}
        <section className='bg-white p-8 rounded-xl shadow-sm'>
          <div className='flex items-center mb-6'>
            <h2 className='text-2xl font-bold text-blue-700'>
              My Strategic Approach
            </h2>
          </div>

          <div className='space-y-6'>
            <div className='grid md:grid-cols-2 gap-6'>
              <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
                <h3 className='text-lg font-semibold text-blue-800 mb-4 flex items-center'>
                  <span className='bg-blue-200 w-8 h-8 rounded-full flex items-center justify-center text-blue-800 text-sm font-bold mr-3'>
                    1
                  </span>
                  Positioning Strategy
                </h3>
                <p className='text-gray-700'>
                  I recommend implementing dynamic positioning algorithms that
                  calculate optimal tooltip placement based on viewport
                  dimensions and available screen real estate.
                </p>
              </div>

              <div className='bg-blue-50 p-6 rounded-lg border border-blue-200'>
                <h3 className='text-lg font-semibold text-blue-800 mb-4 flex items-center'>
                  <span className='bg-blue-200 w-8 h-8 rounded-full flex items-center justify-center text-blue-800 text-sm font-bold mr-3'>
                    2
                  </span>
                  Interaction Design
                </h3>
                <p className='text-gray-700'>
                  I would focus on making close buttons more visible and
                  increasing touch target sizes to meet mobile accessibility
                  standards - minimum 44px touch targets.
                </p>
              </div>
            </div>

            <div className='bg-green-50 p-8 rounded-lg border border-green-200'>
              <h3 className='text-xl font-semibold text-green-800 mb-4 flex items-center'>
                <span className='text-green-600 mr-3'>✓</span>
                Final Recommendation
              </h3>
              <p className='text-gray-800 text-lg leading-relaxed'>
                Rather than completely redesigning the tooltip system, I suggest
                optimising the existing implementation: repositioning tooltips
                above interactive elements to prevent screen edge clipping,
                condensing content for mobile consumption, and enhancing the
                dismissal mechanism. This approach maintains consistency while
                significantly improving the mobile user experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
