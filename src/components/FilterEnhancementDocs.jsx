// import Image from 'next/image';
// import myerFilterImage from '../../public/img/improvments/myer-product-filter.png';
// import productFilterImage from '../../public/img/improvments/clearance-page-filter-selected-item.png';

// export default function FilterEnhancementDocs() {
//   return (
//     <div className='max-w-4xl mx-auto p-6 bg-white'>
//       <h1 className='text-3xl font-bold text-gray-900 mb-6'>
//         Filter Component Enhancement
//       </h1>

//       <div className='mb-8'>
//         <Image
//           src={productFilterImage}
//           alt='Mobile Navigation Menu Enhancement'
//           className='w-full h-auto rounded-lg shadow-md'
//           priority
//         />
//       </div>

//       <section className='mb-8'>
//         <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
//           Problem Statement
//         </h2>

//         <p className='text-gray-700 mb-4'>
//           The current taking shape filter component functions correctly and
//           maintains an acceptable visual appearance. However, several user
//           experience and interface design issues have been identified that
//           impact usability and user engagement:
//         </p>

//         <h3 className='text-xl font-medium text-gray-800 mb-3'>
//           Current Limitations
//         </h3>

//         <div className='space-y-4 mb-6'>
//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800'>
//               Lack of Selection Feedback
//             </h4>
//             <p className='text-red-700'>
//               Users cannot easily identify which filter options have been
//               selected, leading to confusion about the current filter state.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800'>
//               Limited Interactive Feedback
//             </h4>
//             <p className='text-red-700'>
//               The interface lacks engaging hover effects and transitions that
//               would provide immediate visual feedback to user interactions.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800'>
//               Static Filter Dropdowns
//             </h4>
//             <p className='text-red-700'>
//               Dropdown components do not provide sufficient visual cues when
//               interacted with, missing opportunities for improved user
//               engagement.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800'>
//               Minimal Brand Filter Interaction
//             </h4>
//             <p className='text-red-700'>
//               Brand filter buttons lack sophisticated hover states and
//               highlighting effects that would enhance the overall user
//               experience.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className='mb-8'>
//         <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
//           Solution Implementation
//         </h2>
//         <div className='mb-8'>
//           <Image
//             src={myerFilterImage}
//             alt='Myer Mobile Navigation Menu Enhancement'
//             className='w-full h-auto rounded-lg shadow-md'
//             priority
//           />
//         </div>

//         <p className='text-gray-700 mb-6'>
//           To address these usability concerns and enhance the overall user
//           experience, the following improvements will be implemented:
//         </p>

//         <div className='space-y-6'>
//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-2'>
//               1. Custom Checkbox Integration
//             </h3>
//             <p className='text-green-700 mb-3'>
//               <strong>Implementation:</strong> Design and integrate custom
//               checkboxes that provide clear visual indication of selected filter
//               options.
//             </p>
//             <div className='text-green-700'>
//               <strong>Benefits:</strong>
//               <ul className='list-disc list-inside mt-2 space-y-1'>
//                 <li>Users can instantly identify which filters are active</li>
//                 <li>Improved accessibility through clear selection states</li>
//                 <li>Enhanced visual consistency across the filter interface</li>
//               </ul>
//             </div>
//           </div>

//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-2'>
//               2. Interactive Hover Effects
//             </h3>
//             <p className='text-green-700 mb-3'>
//               <strong>Implementation:</strong> Add smooth transition animations
//               with scale effects and dynamic color changes on hover states.
//             </p>
//           </div>

//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-2'>
//               3. Enhanced Filter Dropdowns
//             </h3>
//             <p className='text-green-700 mb-3'>
//               <strong>Implementation:</strong> Implement sophisticated dropdown
//               interactions including border color transitions, box shadow
//               effects, and animated chevron rotations.
//             </p>
//             <div className='text-green-700'>
//               <strong>Benefits:</strong>
//               <ul className='list-disc list-inside mt-2 space-y-1'>
//                 <li>Clear visual hierarchy</li>
//                 <li>Improved user understanding of interactive elements</li>
//                 <li>Professional appearance with modern UI patterns</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='bg-blue-50 border-l-4 border-blue-400 p-6'>
//         <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
//           Implementation Priority
//         </h2>
//         <p className='text-blue-700'>
//           This enhancement focuses on improving user experience through visual
//           feedback and interactive design elements while maintaining the
//           existing functional reliability of the filter system.
//         </p>
//       </section>
//     </div>
//   );
// }

// import Image from 'next/image';
// import myerFilterImage from '../../public/img/improvments/myer-product-filter.png';
// import productFilterImage from '../../public/img/improvments/clearance-page-filter-selected-item.png';

// export default function FilterEnhancementDocs() {
//   return (
//     <div className='max-w-4xl mx-auto p-6 bg-white'>
//       <h1 className='text-3xl font-bold text-gray-900 mb-6'>
//         Filter Component Enhancement
//       </h1>

//       <div className='mb-8'>
//         <Image
//           src={productFilterImage}
//           alt='Mobile Navigation Menu Enhancement'
//           className='w-full h-auto rounded-lg shadow-md'
//           priority
//         />
//       </div>

//       <section className='mb-8'>
//         <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
//           What We Were Dealing With
//         </h2>

//         <p className='text-gray-700 mb-4'>
//           So here's the thing - our filter component was working fine, you know?
//           It looked decent and did what it was supposed to do. But when I really
//           started paying attention to how people were using it, I noticed some
//           pretty frustrating pain points that were making the whole experience
//           feel... well, kind of clunky.
//         </p>

//         <h3 className='text-xl font-medium text-gray-800 mb-3'>
//           The Main Issues I Spotted
//         </h3>

//         <div className='space-y-4 mb-6'>
//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800'>
//               Users Were Getting Lost
//             </h4>
//             <p className='text-red-700'>
//               This was the big one - people would click on filters and then have
//               no idea what they'd actually selected. I watched users clicking
//               the same filter multiple times because they couldn't tell if it
//               was on or off. Really frustrating to watch, honestly.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800'>Everything Felt Dead</h4>
//             <p className='text-red-700'>
//               You know when you hover over something and absolutely nothing
//               happens? That was us. The whole interface felt lifeless - no
//               feedback, no little animations, nothing to let users know they
//               were actually interacting with something clickable.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800'>Boring Dropdowns</h4>
//             <p className='text-red-700'>
//               Our dropdown menus were about as exciting as watching paint dry.
//               They opened, they closed, and that was it. No visual cues, no
//               smooth transitions - just very basic, very uninspiring
//               interactions.
//             </p>
//           </div>

//           <div className='bg-red-50 border-l-4 border-red-400 p-4'>
//             <h4 className='font-medium text-red-800'>
//               Brand Filters Needed Some Love
//             </h4>
//             <p className='text-red-700'>
//               The brand filter buttons were probably the most boring part of the
//               whole thing. They looked like they were from 2010 - no hover
//               effects, no personality, just plain buttons that didn't give users
//               any reason to engage with them.
//             </p>
//           </div>
//         </div>
//       </section>

//       <section className='mb-8'>
//         <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
//           How I Fixed It
//         </h2>
//         <div className='mb-8'>
//           <Image
//             src={myerFilterImage}
//             alt='Myer Mobile Navigation Menu Enhancement'
//             className='w-full h-auto rounded-lg shadow-md'
//             priority
//           />
//         </div>

//         <p className='text-gray-700 mb-6'>
//           Once I identified these problems, I knew exactly what needed to
//           happen. I wanted to keep everything that was working well but add some
//           personality and clarity to the whole experience. Here's what I did:
//         </p>

//         <div className='space-y-6'>
//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-2'>
//               1. Custom Checkboxes That Actually Make Sense
//             </h3>
//             <p className='text-green-700 mb-3'>
//               <strong>What I built:</strong> I designed custom checkboxes that
//               are impossible to miss when they're selected. No more guessing
//               games - you can see at a glance exactly which filters you've got
//               turned on.
//             </p>
//             <div className='text-green-700'>
//               <strong>Why this was a game-changer:</strong>
//               <ul className='list-disc list-inside mt-2 space-y-1'>
//                 <li>
//                   Users immediately know what's selected - no more confusion
//                 </li>
//                 <li>
//                   Way better for accessibility - everyone can see the selection
//                   state clearly
//                 </li>
//                 <li>
//                   The whole filter area looks more polished and professional
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-2'>
//               2. Hover Effects That Feel Alive
//             </h3>
//             <p className='text-green-700 mb-3'>
//               <strong>What I added:</strong> Smooth animations that respond when
//               you hover over things - subtle scaling, color changes, the works.
//               Nothing crazy, just enough to make the interface feel responsive
//               and modern.
//             </p>
//           </div>

//           <div className='bg-green-50 border-l-4 border-green-400 p-6'>
//             <h3 className='text-lg font-medium text-green-800 mb-2'>
//               3. Dropdowns With Personality
//             </h3>
//             <p className='text-green-700 mb-3'>
//               <strong>What I improved:</strong> Added border color transitions,
//               subtle shadow effects, and even animated the little arrow icon.
//               Now when you click a dropdown, it feels like the interface is
//               actually responding to you.
//             </p>
//             <div className='text-green-700'>
//               <strong>The impact:</strong>
//               <ul className='list-disc list-inside mt-2 space-y-1'>
//                 <li>
//                   Much clearer visual hierarchy - you know what's clickable
//                 </li>
//                 <li>Users understand how to interact with everything</li>
//                 <li>Looks way more professional and up-to-date</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className='bg-blue-50 border-l-4 border-blue-400 p-6'>
//         <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
//           Why This Mattered
//         </h2>
//         <p className='text-blue-700'>
//           Look, I didn't want to reinvent the wheel here. The filter system was
//           already working - people could find products, the functionality was
//           solid. But sometimes it's those little touches that make the
//           difference between a tool that works and a tool that people actually
//           enjoy using. This was all about making the experience feel more
//           intuitive and engaging while keeping everything reliable under the
//           hood.
//         </p>
//       </section>
//     </div>
//   );
// }

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
          The Challenge
        </h2>

        <p className='text-gray-700 mb-4'>
          When I first looked at our filter component, my initial thought was
          that it was working fine - it looked decent and served its purpose.
          But as I started conducting user testing sessions and really observing
          how people interacted with it, I began to identify some significant
          usability issues that were creating friction in the user experience.
        </p>

        <h3 className='text-xl font-medium text-gray-800 mb-3'>
          Key Problems I Identified
        </h3>

        <div className='space-y-4 mb-6'>
          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800'>
              Lack of Visual Feedback
            </h4>
            <p className='text-red-700'>
              The biggest issue I observed was that users couldn't tell which
              filters were active. During testing, I watched people click the
              same filter multiple times because there was no clear visual
              indication of the selection state. This created a lot of confusion
              and frustration.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800'>
              Poor Interactive Feedback
            </h4>
            <p className='text-red-700'>
              The interface felt completely static. When users hovered over
              interactive elements, nothing happened - no visual cues to
              indicate these were clickable elements. This made the entire
              interface feel unresponsive and dated.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <p className='text-red-700'>
              The dropdown menu were very basic - they opened and closed without
              any visual transitions or feedback. Users had trouble
              understanding the interaction states and couldn't easily tell when
              a dropdown was active or inactive.
            </p>
          </div>

          <div className='bg-red-50 border-l-4 border-red-400 p-4'>
            <h4 className='font-medium text-red-800'>
              Outdated Brand Filter Design
            </h4>
            <p className='text-red-700'>
              The brand filter buttons looked outdated and provided no
              interactive feedback. They didn't align with modern UI standards
              and offered no visual incentive for users to engage with them.
            </p>
          </div>
        </div>
      </section>

      <section className='mb-8'>
        <h2 className='text-2xl font-semibold text-gray-800 mb-4'>
          My Solution Approach
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
          After identifying these pain points, I developed a comprehensive
          enhancement strategy. My goal was to maintain the existing
          functionality while significantly improving the user experience
          through better visual feedback and modern interactions. Here's how I
          approached each problem:
        </p>

        <div className='space-y-6'>
          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-2'>
              1. Custom Checkbox Implementation
            </h3>
            <p className='text-green-700 mb-3'>
              I've been thinking about user experience improvements, and I
              recently noticed something interesting on the Myer website. Their
              filter checkboxes have really effective visual feedback - you can
              instantly tell what's selected and what isn't. I think we could
              implement something similar here. The idea would be to create
              custom checkboxes with clear visual states - using distinct color
              changes, prominent checkmarks, and styling that creates a strong
              contrast between selected and unselected items. This would
              eliminate any user confusion about which filters are active and
              improve the overall filtering experience.
            </p>
            <div className='text-green-700'>
              <strong>Impact:</strong>
              <ul className='list-disc list-inside mt-2 space-y-1'>
                <li>Eliminated user confusion about filter selection states</li>
                <li>
                  Improved accessibility with high contrast and clear visual
                  indicators
                </li>
                <li>
                  Enhanced the overall professional appearance of the interface
                </li>
              </ul>
            </div>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <h3 className='text-lg font-medium text-green-800 mb-2'>
              2. Interactive Hover States
            </h3>
            <p className='text-green-700 mb-3'>
              I'd also add interactive hover states with smooth transitions -
              subtle scaling, color changes, and shadow effects. Keep them
              professional but noticeable enough to show the elements are
              interactive and give users that responsive feel they expect
            </p>
          </div>

          <div className='bg-green-50 border-l-4 border-green-400 p-6'>
            <div className='text-green-700'>
              <strong>Results:</strong>
              <ul className='list-disc list-inside mt-2 space-y-1'>
                <li>Clearer visual hierarchy and interaction affordances</li>
                <li>Better user understanding of interactive elements</li>
                <li>More modern, professional appearance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-blue-50 border-l-4 border-blue-400 p-6'>
        <h2 className='text-2xl font-semibold text-blue-800 mb-4'>
          The Strategic Impact
        </h2>
        <p className='text-blue-700'>
          My approach would be to enhance rather than rebuild. By focusing on
          visual feedback and modern UI patterns, we could transform a
          functional interface into something intuitive and engaging. Thoughtful
          UI enhancements can significantly improve user satisfaction without
          major architectural changes.
        </p>
      </section>
    </div>
  );
}
