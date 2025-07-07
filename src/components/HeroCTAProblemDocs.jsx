import Image from 'next/image';
import mainBannerImage from '../../public/img/positive/banner-1.png';

export default function HeroCTAProblemDocs() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        Non-Functional CTA Button in Hero Banner
      </h1>

      <div className='mb-8'>
        <Image
          src={mainBannerImage}
          alt='Hero Banner CTA Button Problem Analysis'
          className='w-full h-auto rounded-lg shadow-md'
          priority
        />
      </div>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4 border-b-2 border-gray-200 pb-2'>
          Problem Identification
        </h2>

        <div className='bg-red-50 border-l-4 border-red-400 p-6 rounded-r-lg'>
          <p className='text-red-700 text-lg leading-relaxed'>
            The "SHOP NOW" button within the Taking Shape hero banner image is
            embedded as part of the static image rather than functioning as an
            interactive HTML button element. This design choice creates a
            significant usability issue that directly impacts user experience
            and conversion rates.
          </p>
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-6 border-b-2 border-gray-200 pb-2'>
          Impact on Website Users
        </h2>

        <div className='space-y-6'>
          <div className='bg-orange-50 border-l-4 border-orange-400 p-6'>
            <h3 className='text-lg font-semibold text-orange-800 mb-3'>
              Immediate User Frustration
            </h3>
            <p className='text-orange-700'>
              Users who click on what appears to be a functional button
              experience immediate frustration when nothing happens. This
              creates a disconnect between user expectation and actual
              functionality, leading to confusion and potential abandonment of
              the shopping session.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-6'>
            <h3 className='text-lg font-semibold text-red-800 mb-3'>
              Mobile-Specific Challenges
            </h3>
            <p className='text-red-700 mb-3'>
              When the hero banner image resizes to fit mobile screens, several
              critical issues emerge:
            </p>
            <ul className='text-red-700 space-y-2 ml-4'>
              <li>
                • The embedded "SHOP NOW" button becomes significantly smaller
                and harder to read
              </li>
              <li>
                • Text within the button may become illegible or pixelated due
                to image compression
              </li>

              <li>
                • Users struggle to accurately tap the tiny button area, leading
                to mis-clicks and frustration
              </li>
            </ul>
          </div>

          <div className='bg-purple-50 border-l-4 border-purple-400 p-6'>
            <h3 className='text-lg font-semibold text-purple-800 mb-3'>
              Accessibility Barriers
            </h3>
            <ul className='text-purple-700 space-y-2 ml-4'>
              <li>
                • Screen readers cannot identify the embedded button as an
                interactive element
              </li>
              <li>
                • Users with disabilities who rely on keyboard navigation cannot
                access this call-to-action
              </li>
              <li>
                • The button fails to meet WCAG accessibility standards for
                interactive elements
              </li>
              <li>
                • Mobile users with visual impairments cannot zoom in on the
                button text without losing image quality
              </li>
            </ul>
          </div>

          <div className='bg-blue-50 border-l-4 border-blue-400 p-6'>
            <h3 className='text-lg font-semibold text-blue-800 mb-3'>
              Technical Issues on Mobile
            </h3>
            <ul className='text-blue-700 space-y-2 ml-4'>
              <li>• Image scaling reduces button visibility and readability</li>
              <li>
                • Touch targets become too small for comfortable interaction
              </li>
              <li>• Responsive design principles are violated</li>
              <li>
                • Loading times increase due to large image files on mobile
                connections
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
