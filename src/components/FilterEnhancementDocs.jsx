import Image from 'next/image';
import myerFilterImage from '../../public/img/improvments/myer-product-filter.png';
import productFilterImage from '../../public/img/improvments/clearance-page-filter-selected-item.png';

export default function FilterEnhancementDocs() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        Filter Component Enhancement
      </h1>

      <div className='mb-8'>
        <Image
          src={productFilterImage}
          alt='Mobile Navigation Menu Enhancement'
          className='w-full h-auto rounded-lg shadow-md'
          priority
        />
      </div>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
          Problem Statement
        </h2>

        <p className='text-gray-700 mb-4'>
          The current taking shape filter component functions correctly and
          maintains an acceptable visual appearance. However, several user
          experience and interface design issues have been identified that
          impact usability and user engagement:
        </p>

        <h3 className='text-xl font-medium text-gray-800 mb-3'>
          Current Limitations
        </h3>

        <div className='space-y-4 mb-6'>
          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800'>
              Lack of Selection Feedback
            </h4>
            <p className='text-red-700'>
              Users cannot easily identify which filter options have been
              selected, leading to confusion about the current filter state.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800'>
              Limited Interactive Feedback
            </h4>
            <p className='text-red-700'>
              The interface lacks engaging hover effects and transitions that
              would provide immediate visual feedback to user interactions.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800'>
              Static Filter Dropdowns
            </h4>
            <p className='text-red-700'>
              Dropdown components do not provide sufficient visual cues when
              interacted with, missing opportunities for improved user
              engagement.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800'>
              Minimal Brand Filter Interaction
            </h4>
            <p className='text-red-700'>
              Brand filter buttons lack sophisticated hover states and
              highlighting effects that would enhance the overall user
              experience.
            </p>
          </div>
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
          Solution Implementation
        </h2>
        <div className='mb-8'>
          <Image
            src={myerFilterImage}
            alt='Myer Mobile Navigation Menu Enhancement'
            className='w-full h-auto rounded-lg shadow-md'
            priority
          />
        </div>

        <p className='text-gray-700 mb-6'>
          To address these usability concerns and enhance the overall user
          experience, the following improvements will be implemented:
        </p>

        <div className='space-y-6'>
          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-2'>
              1. Custom Checkbox Integration
            </h3>
            <p className='text-green-700 mb-3'>
              <strong>Implementation:</strong> Design and integrate custom
              checkboxes that provide clear visual indication of selected filter
              options.
            </p>
            <div className='text-green-700'>
              <strong>Benefits:</strong>
              <ul className='list-disc list-inside mt-2 space-y-1'>
                <li>Users can instantly identify which filters are active</li>
                <li>Improved accessibility through clear selection states</li>
                <li>Enhanced visual consistency across the filter interface</li>
              </ul>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-2'>
              2. Interactive Hover Effects
            </h3>
            <p className='text-green-700 mb-3'>
              <strong>Implementation:</strong> Add smooth transition animations
              with scale effects and dynamic color changes on hover states.
            </p>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-2'>
              3. Enhanced Filter Dropdowns
            </h3>
            <p className='text-green-700 mb-3'>
              <strong>Implementation:</strong> Implement sophisticated dropdown
              interactions including border color transitions, box shadow
              effects, and animated chevron rotations.
            </p>
            <div className='text-green-700'>
              <strong>Benefits:</strong>
              <ul className='list-disc list-inside mt-2 space-y-1'>
                <li>Clear visual hierarchy</li>
                <li>Improved user understanding of interactive elements</li>
                <li>Professional appearance with modern UI patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-blue-50 border-l-4 border-blue-400 p-6'>
        <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
          Implementation Priority
        </h2>
        <p className='text-blue-700'>
          This enhancement focuses on improving user experience through visual
          feedback and interactive design elements while maintaining the
          existing functional reliability of the filter system.
        </p>
      </section>
    </div>
  );
}
