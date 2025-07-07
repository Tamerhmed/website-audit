import Image from 'next/image';
import aboutItemImage from '../../public/img/improvments/about-item-styling.png';

export default function AboutItemEnhancementDocs() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        Styling Issue: Visual Hierarchy and Layout Clarity in "About This Item"
        Section
      </h1>

      <div className='mb-8'>
        <Image
          src={aboutItemImage}
          alt='About This Item Section Enhancement'
          className='w-full h-auto rounded-lg shadow-md'
          priority
        />
      </div>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4 flex items-center'>
          <span className='text-2xl mr-2'>🧩</span>
          Problem
        </h2>

        <p className='text-gray-700 mb-4'>
          The "About This Item" section provides important product information
          but currently suffers from <strong>visual hierarchy issues</strong>,{' '}
          <strong>crowded layout</strong>, and{' '}
          <strong>inconsistent alignment</strong>. Key areas of concern include:
        </p>

        <div className='space-y-4 mb-6'>
          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800 mb-2'>Dense Text Block</h4>
            <p className='text-red-700'>
              The paragraph under the features list is long and lacks visual
              breaks, which affects readability.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800 mb-2'>
              Left vs Right Panel Imbalance
            </h4>
            <p className='text-red-700'>
              The features list and product measurements are presented
              side-by-side but lack clear separation, making the section feel
              cramped.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800 mb-2'>
              Lack of Emphasis on Key Info
            </h4>
            <p className='text-red-700'>
              Important details like fabric composition, measurements, and style
              number don't stand out visually.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800 mb-2'>
              Overloaded Feature Bullets
            </h4>
            <p className='text-red-700'>
              The bullet list is long and includes washing instructions, which
              could be grouped separately under "Care Instructions."
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800 mb-2'>
              Inconsistent Font Weight/Spacing
            </h4>
            <p className='text-red-700'>
              There's minimal typographic contrast between headings, body text,
              and labels, which reduces scannability.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800 mb-2'>
              Model Info Placement
            </h4>
            <p className='text-red-700'>
              The model image and stats (Laura, size 14, height, bust) are oddly
              placed next to measurements, which may confuse users about what
              section it belongs to.
            </p>
          </div>
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4 flex items-center'>
          <span className='text-2xl mr-2'>✅</span>
          Proposed Solution
        </h2>

        <div className='space-y-6'>
          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              1. Enhance Visual Hierarchy
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                • Use <strong>section subheadings</strong> (e.g., "Key
                Features", "Care Instructions", "Model Info") to break up
                content.
              </p>
              <p>
                • Increase <strong>spacing</strong> between sections and groups
                of information.
              </p>
              <p>
                • Apply{' '}
                <strong>bolder typography or background highlights</strong> for
                "Style Number", "Fabrication", and "Measurements" to draw
                attention.
              </p>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              2. Improve Layout Balance
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                • Consider a <strong>two-column grid</strong> with proper
                gutters or a tabbed layout for "Features" and "Care
                Instructions."
              </p>
              <p>
                • Move the model info (photo + measurements) under a clearly
                titled section (e.g., "Model Sizing Reference") or align it
                beside product images.
              </p>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              3. Separate Content Blocks
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                • Break the long paragraph into <strong>shorter chunks</strong>{' '}
                with line spacing or icons (e.g., a star icon for feature
                highlights).
              </p>
              <p>
                • Group washing/care instructions into their own{' '}
                <strong>"Care" subsection</strong> with a lighter font or muted
                background.
              </p>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              4. Responsive Spacing Adjustments
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                • Ensure margin and padding between each element adapt
                gracefully on smaller screens.
              </p>
              <p>
                • Consider using an <strong>accordion-style collapse</strong>{' '}
                for long instructions on mobile view to avoid overwhelming the
                user.
              </p>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              5. Typography Consistency
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                • Use a{' '}
                <strong>larger or semi-bold font for section headers</strong>{' '}
                and key product attributes.
              </p>
              <p>
                • Maintain consistent font size and style for bullets and body
                copy to enhance readability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg'>
        <h2 className='text-xl font-semibold text-blue-800 mb-4'>
          Implementation Benefits
        </h2>
        <div className='text-blue-700 space-y-2'>
          <p>• Improved user experience through better content organization</p>
          <p>• Enhanced readability and scannability of product information</p>
          <p>• Clearer visual hierarchy that guides user attention</p>
          <p>• Better mobile responsiveness and usability</p>
          <p>• Reduced cognitive load when processing product details</p>
        </div>
      </section>
    </div>
  );
}
