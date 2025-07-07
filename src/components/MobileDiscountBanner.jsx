import Image from 'next/image';
import extraDiscountImage from '../../public/img/improvments/extra-discount-banner.png';

export default function MobileDiscountBanner() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8 max-w-6xl'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Promotional Banner Text Alignment Issue
        </h2>

        <div className='w-full mb-8'>
          <Image
            src={extraDiscountImage}
            alt='navbar menu'
            className='w-full h-auto max-h-96 object-contain rounded-lg shadow-lg'
            priority
          />
        </div>

        <div className='space-y-8'>
          {/* Problem Overview */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-gray-800 flex items-center'>
              <span className='mr-2'>📋</span>
              Problem Overview
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              The promotional banner displaying "EXTRA 30% OFF CLEARANCE
              DRESSES, PANTS, JEANS & LEGGINGS*" on the Plus Size Dresses
              Clearance Outlet page has a text alignment issue affecting its
              visual presentation and professional appearance.
            </p>
          </div>

          {/* Priority Level */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-orange-600 flex items-center'>
              <span className='mr-2'>⚡</span>
              Priority Level
            </h3>
            <div className='bg-orange-50 p-4 rounded-lg border-l-4 border-orange-200'>
              <p className='text-orange-700 leading-relaxed'>
                <strong>Medium-High</strong> - While not functionally breaking,
                this visual issue affects a key promotional element and should
                be addressed in the next styling update cycle.
              </p>
            </div>
          </div>

          {/* Current Issues */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-6 text-red-600 flex items-center'>
              <span className='mr-2'>⚠️</span>
              Current Issues
            </h3>

            <div className='space-y-6'>
              {/* Alignment Problem */}
              <div className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
                <h4 className='text-lg font-semibold mb-3 text-red-800'>
                  Alignment Problem
                </h4>
                <ul className='space-y-2 text-red-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      Banner text is left-aligned within the yellow promotional
                      banner container
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>Creates unbalanced, unprofessional appearance</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      Text appears flush to the left side rather than centered
                    </span>
                  </li>
                </ul>
              </div>

              {/* Impact on User Experience */}
              <div className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
                <h4 className='text-lg font-semibold mb-3 text-red-800'>
                  Impact on User Experience
                </h4>
                <ul className='space-y-2 text-red-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      Reduces banner effectiveness in drawing attention to sale
                      offers
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      Creates asymmetrical appearance with uneven spacing
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      Inconsistent with typical promotional banner styling
                      standards
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Recommended Solution */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-6 text-green-600 flex items-center'>
              <span className='mr-2'>✅</span>
              Recommended Solution
            </h3>

            <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-200'>
              <h4 className='text-lg font-semibold mb-3 text-green-800'>
                Center-Align Implementation
              </h4>
              <p className='text-green-700 leading-relaxed mb-4'>
                Implement proper text centering for the promotional banner to
                achieve:
              </p>
              <ul className='space-y-2 text-green-700'>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  <span>Improved visual balance and symmetry</span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  <span>Enhanced professional appearance</span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  <span>Better attention-drawing capabilities</span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  <span>Consistency with promotional banner standards</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-600 flex items-center'>
              <span className='mr-2'>🎯</span>
              Expected Outcome
            </h3>
            <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200'>
              <p className='text-blue-700 leading-relaxed'>
                This styling fix will restore the banner's visual impact and
                maintain brand consistency across promotional elements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
