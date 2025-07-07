// import Image from 'next/image';
// import aboutItemImage from '../../public/img/improvments/about-item-styling.png';

// export default function AboutItemEnhancementDocs() {
//   return (
//     <div className='max-w-4xl mx-auto p-6 bg-white'>
//       <h1 className='text-3xl font-bold text-gray-900 mb-6'>
//         Styling Issue: Visual Hierarchy and Layout Clarity in "About This Item"
//         Section
//       </h1>

//       <div className='mb-8'>
//         <Image
//           src={aboutItemImage}
//           alt='About This Item Section Enhancement'
//           className='w-full h-auto rounded-lg shadow-md'
//           priority
//         />
//       </div>

//       <section className='mb-8'>
//         <h2 className='text-2xl font-semibold text-gray-800 mb-4 flex items-center'>
//           <span className='text-2xl mr-2'>🧩</span>
//           Problem
//         </h2>

//         <p className='text-gray-700 mb-4'>
//           The "About This Item" section has all the important product details
//           you need, but right now it's a bit of a mess. The layout feels cramped
//           and cluttered, it's hard to tell what's most important at a glance,
//           and things don't line up properly. Here's what's making it tough to
//           use:
//         </p>

//         <div className='space-y-4 mb-6'>
//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <p className='text-red-700'>
//               That paragraph below the features? It's way too long and packed
//               together without any breathing room, making it really hard to read
//               through.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <p className='text-red-700'>
//               The features and measurements are squished together without enough
//               space between them, so everything feels pretty cramped and hard to
//               scan through.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <p className='text-red-700'>
//               Important details like fabric composition, measurements, and style
//               number don't stand out visually.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800 mb-2'>
//               Inconsistent Font Weight/Spacing
//             </h4>
//             <p className='text-red-700'>
//               There's little typographic contrast between headings, body copy,
//               and labels, so it's not as scannable.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800 mb-2'>
//               Model Info Placement
//             </h4>
//             <p className='text-red-700'>
//               The model image and stats are oddly placed next to measurements,
//               which could make it confusing for users to know what section it
//               goes in.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className='mb-8'>
//         <h2 className='text-2xl font-semibold text-gray-800 mb-4 flex items-center'>
//           <span className='text-2xl mr-2'>✅</span>
//           Proposed Solution
//         </h2>

//         <div className='space-y-6'>
//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-3'>
//               1. Enhance Visual Hierarchy
//             </h3>
//             <div className='text-green-700 space-y-2'>
//               <p>
//                 • Use <strong>section subheadings</strong> (e.g., "Key
//                 Features", "Care Instructions", "Model Info") to break up
//                 content.
//               </p>
//               <p>
//                 • Increase <strong>spacing</strong> between sections and groups
//                 of information.
//               </p>
//               <p>
//                 • Apply{' '}
//                 <strong>bolder typography or background highlights</strong> for
//                 "Style Number", "Fabrication", and "Measurements" to draw
//                 attention.
//               </p>
//             </div>
//           </div>

//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-3'>
//               2. Improve Layout Balance
//             </h3>
//             <div className='text-green-700 space-y-2'>
//               <p>
//                 • Consider a <strong>two-column grid</strong> with proper
//                 gutters or a tabbed layout for "Features" and "Care
//                 Instructions."
//               </p>
//               <p>
//                 • Move the model info (photo + measurements) under a clearly
//                 titled section (e.g., "Model Sizing Reference") or align it
//                 beside product images.
//               </p>
//             </div>
//           </div>

//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-3'>
//               3. Separate Content Blocks
//             </h3>
//             <div className='text-green-700 space-y-2'>
//               <p>
//                 • Break the long paragraph into <strong>shorter chunks</strong>{' '}
//                 with line spacing or icons.
//               </p>
//             </div>
//           </div>

//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-3'>
//               4. Responsive Spacing Adjustments
//             </h3>
//             <div className='text-green-700 space-y-2'>
//               <p>
//                 • Margin/padding between each item should adjust for smaller
//                 screens.
//               </p>
//               <p>
//                 • Long instructions can collapse accordion style on mobile to
//                 reduce cognitive load.
//               </p>
//             </div>
//           </div>

//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-3'>
//               5. Typography Consistency
//             </h3>
//             <div className='text-green-700 space-y-2'>
//               <p>
//                 • Bullet and body copy should have the same font size and style.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg'>
//         <h2 className='text-xl font-semibold text-blue-800 mb-4'>
//           Implementation Benefits
//         </h2>
//         <div className='text-blue-700 space-y-2'>
//           <p>
//             • Users can find what they need much faster with better organized
//             content
//           </p>
//           <p>
//             • Customers can actually scan through the info quickly and easily
//           </p>
//           <p>
//             • The user's eye naturally flows to the most important details first
//           </p>
//           <p>
//             • Customers have a smooth experience whether they're on their phone
//             or computer
//           </p>
//           <p>
//             • Users won't feel overwhelmed trying to process all the product
//             details
//           </p>
//         </div>
//       </section>
//     </div>
//   );
// }

import Image from 'next/image';
import aboutItemImage from '../../public/img/improvments/about-item-styling.png';

export default function AboutItemEnhancementDocs() {
  return (
    <div className='max-w-4xl mx-auto p-6 bg-white'>
      <h1 className='text-3xl font-bold text-gray-900 mb-6'>
        UX Case Study: "About This Item" Section Enhancement
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
          Problem Analysis
        </h2>

        <p className='text-gray-700 mb-4'>
          I analyzed the "About This Item" section and identified several UX
          issues that impact user experience. While the section contains all
          necessary product information, the layout and presentation create
          barriers for users trying to quickly find specific details. Here are
          the key issues I identified:
        </p>

        <div className='space-y-4 mb-6'>
          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <p className='text-red-700'>
              The product description paragraph is quite dense and packed
              together without enough white space, making it challenging for
              users to digest the information quickly.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <p className='text-red-700'>
              Features and measurements are crowded together without clear
              separation, so users have to work harder to find specific details
              they're looking for.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <p className='text-red-700'>
              Critical information like fabric composition, measurements, and
              style numbers don't have enough visual emphasis to help users spot
              them quickly.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800 mb-2'>
              Typography Hierarchy Issues
            </h4>
            <p className='text-red-700'>
              There's minimal contrast between headings, body text, and labels,
              which makes the content less scannable for users in a hurry.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800 mb-2'>
              Model Information Placement
            </h4>
            <p className='text-red-700'>
              The model image and sizing information seems disconnected from the
              rest of the content, which might confuse users about how it
              relates to the product measurements.
            </p>
          </div>
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4 flex items-center'>
          <span className='text-2xl mr-2'>✅</span>
          Solution Approach
        </h2>

        <div className='space-y-6'>
          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              1. Create Clear Visual Hierarchy
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                Introduce <strong>clear section subheadings</strong> like "Key
                Features", "Care Instructions", and "Model Info" to help users
                navigate the content.
              </p>
              <p>
                Increase <strong>spacing between sections</strong> to give the
                content room to breathe and make it less overwhelming.
              </p>
              <p>
                For critical details like style numbers and fabric info, use
                <strong>
                  bolder typography or subtle background highlights
                </strong>
                to make them stand out.
              </p>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              2. Improve Layout Organization
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                Implement a <strong>two-column grid layout</strong>
                or tabbed interface for "Features" and "Care Instructions" to
                make better use of space.
              </p>
              <p>
                Move the model information into its own clearly defined section
                called "Model Sizing Reference" so users understand its purpose.
              </p>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              3. Break Up Dense Content
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                Split long product descriptions into{' '}
                <strong>shorter, digestible chunks</strong> with proper line
                spacing and icons to make content more visually appealing.
              </p>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              4. Mobile-First Responsive Design
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                Ensure proper <strong>margin and padding adjustments</strong>
                for smaller screens so the content remains readable.
              </p>
              <p>
                For mobile users, implement{' '}
                <strong>collapsible accordion sections</strong> for lengthy care
                instructions to reduce cognitive load.
              </p>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-3'>
              5. Typography Standardization
            </h3>
            <div className='text-green-700 space-y-2'>
              <p>
                Ensure all bullet points and body copy follow consistent
                <strong>font sizing and styling</strong> for a more polished
                look.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-blue-50 border-l-4 border-blue-400 p-6 rounded-r-lg'>
        <h2 className='text-xl font-semibold text-blue-800 mb-4'>
          Expected Impact
        </h2>
        <div className='text-blue-700 space-y-2'>
          <p>
            • Users would be able to find specific product information much
            faster
          </p>
          <p>
            • The improved scannability would reduce bounce rates and increase
            engagement
          </p>
          <p>
            • Better visual hierarchy would guide users to the most important
            details first
          </p>
          <p>
            • Responsive design improvements would create a consistent
            experience across devices
          </p>
          <p>
            • Overall, users would feel less overwhelmed and more confident in
            their purchasing decisions
          </p>
        </div>
      </section>
    </div>
  );
}
