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
              The Problem I Noticed
            </h3>
            <p className='text-gray-700 leading-relaxed'>
              I was reviewing the Plus Size Dresses Clearance Outlet page and
              noticed the promotional banner had a visual alignment issue. The
              text "EXTRA 30% OFF CLEARANCE DRESSES, PANTS, JEANS & LEGGINGS*"
              was left-aligned within the banner container, which made it look
              unprofessional and reduced its effectiveness as a promotional
              tool.
            </p>
          </div>

          {/* Current Issues */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-6 text-red-600 flex items-center'>
              <span className='mr-2'>⚠️</span>
              What I Found Wrong
            </h3>

            <div className='space-y-6'>
              {/* Alignment Problem */}
              <div className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
                <h4 className='text-lg font-semibold mb-3 text-red-800'>
                  The Technical Issue
                </h4>
                <ul className='space-y-2 text-red-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      The banner text was inheriting left-alignment from its
                      parent container
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      Nobody had set a specific text-align property for the
                      promotional element
                    </span>
                  </li>
                </ul>
              </div>

              {/* Impact on User Experience */}
              <div className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
                <h4 className='text-lg font-semibold mb-3 text-red-800'>
                  Why It Mattered
                </h4>
                <ul className='space-y-2 text-red-700'>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      The promotional offer wasn't drawing enough attention
                      because it looked off
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      It created visual inconsistency that made our brand look
                      less professional
                    </span>
                  </li>
                  <li className='flex items-start'>
                    <span className='w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                    <span>
                      Most promotional banners are centered, so this looked
                      wrong to users
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
              My Recommendation
            </h3>

            <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-200'>
              <h4 className='text-lg font-semibold mb-3 text-green-800'>
                What I Suggest
              </h4>
              <p className='text-green-700 leading-relaxed mb-4'>
                I recommended adding center text alignment to the promotional
                banner element. It would be a simple fix but would make a big
                difference:
              </p>
              <ul className='space-y-2 text-green-700'>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  <span>
                    The banner would look properly balanced and professional
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  <span>
                    The promotional offer would become more prominent and
                    eye-catching
                  </span>
                </li>
                <li className='flex items-start'>
                  <span className='w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0'></span>
                  <span>
                    It would match what users expect from promotional banners
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-600 flex items-center'>
              <span className='mr-2'>🎯</span>
              Expected Impact
            </h3>
            <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200'>
              <p className='text-blue-700 leading-relaxed'>
                This recommendation would restore the banner's visual impact and
                keep the promotional elements consistent. It's a good example of
                how small styling changes can really improve user experience and
                brand perception. The solution would be low-risk but have a high
                impact on how professional the site looks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
