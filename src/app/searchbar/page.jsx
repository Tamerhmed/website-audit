import Image from 'next/image';
import navbar from '../../../public/img/positive/nav-menu-1.png';
import searchbarImage from '../../../public/img/improvments/search-bar-btn-clicked.png';
import SearchBarDemo from '@/components/SearchBarDemo';

export default function SearchBar() {
  return (
    <div className='min-h-screen bg-gray-50'>
      <div className='container mx-auto px-4 py-8 max-w-6xl'>
        <h2 className='text-3xl font-bold text-center mb-8 text-gray-900'>
          Search Functionality Documentation
        </h2>

        <div className='w-full mb-8'>
          <Image
            src={searchbarImage}
            alt='searchbar image'
            className='w-full h-auto max-h-96 object-contain rounded-lg shadow-lg'
            priority
          />
        </div>

        <div className='space-y-8'>
          {/* Problem Statement */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-6 text-red-600 flex items-center'>
              <span className='mr-2'>⚠️</span>
              Problem Statement
            </h3>

            <div className='space-y-6'>
              {/* Issue 1 */}
              <div className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
                <h4 className='text-lg font-semibold mb-3 text-red-800'>
                  Issue 1: Unintended Page Refresh on Search Icon Click
                </h4>
                <div className='space-y-3'>
                  <div>
                    <p className='text-sm font-medium text-red-700 mb-2'>
                      Problem:
                    </p>
                    <p className='text-red-700 leading-relaxed'>
                      The search icon triggers a page reload when clicked,
                      causing the webpage to refresh unexpectedly. This behavior
                      disrupts the user experience and is not consistent with
                      modern search interface standards.
                    </p>
                  </div>
                  <div>
                    <p className='text-sm font-medium text-red-700 mb-2'>
                      Impact:
                    </p>
                    <p className='text-red-700 leading-relaxed'>
                      Users experience interruption in their browsing session,
                      loss of current page state, and potential frustration when
                      attempting to perform searches.
                    </p>
                  </div>
                </div>
              </div>

              {/* Issue 2 */}
              <div className='bg-red-50 p-4 rounded-lg border-l-4 border-red-200'>
                <h4 className='text-lg font-semibold mb-3 text-red-800'>
                  Issue 2: Missing Input Validation
                </h4>
                <div className='space-y-3'>
                  <div>
                    <p className='text-sm font-medium text-red-700 mb-2'>
                      Problem:
                    </p>
                    <p className='text-red-700 leading-relaxed'>
                      The search functionality allows users to click the search
                      icon even when the search input field is empty, resulting
                      in unnecessary processing and poor user experience.
                    </p>
                  </div>
                  <div>
                    <p className='text-sm font-medium text-red-700 mb-2'>
                      Impact:
                    </p>
                    <p className='text-red-700 leading-relaxed'>
                      Empty searches can trigger server requests, consume
                      resources, and provide no meaningful results to the user.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Solution */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-6 text-green-600 flex items-center'>
              <span className='mr-2'>✅</span>
              Solution
            </h3>

            <div className='space-y-6'>
              {/* Solution 1 */}
              <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-200'>
                <h4 className='text-lg font-semibold mb-3 text-green-800'>
                  Solution 1: Prevent Default Browser Behavior
                </h4>
                <div className='space-y-3'>
                  <p className='text-green-700 leading-relaxed'>
                    Implement proper event handling to prevent the search icon
                    from triggering form submissions or page reloads. The search
                    should execute asynchronously without refreshing the page.
                  </p>
                  <div>
                    <p className='text-sm font-medium text-green-700 mb-2'>
                      Implementation:
                    </p>
                    <p className='text-green-700 leading-relaxed'>
                      Add event listeners that prevent default form submission
                      behavior and handle search functionality through
                      JavaScript.
                    </p>
                  </div>
                </div>
              </div>

              {/* Solution 2 */}
              <div className='bg-green-50 p-4 rounded-lg border-l-4 border-green-200'>
                <h4 className='text-lg font-semibold mb-3 text-green-800'>
                  Solution 2: Implement Input State Validation
                </h4>
                <div className='space-y-3'>
                  <p className='text-green-700 leading-relaxed'>
                    Add input validation to ensure the search button is only
                    functional when there is actual content in the search field.
                    The search icon should be disabled or visually indicate when
                    no search term is present.
                  </p>
                  <div>
                    <p className='text-sm font-medium text-green-700 mb-2'>
                      Implementation:
                    </p>
                    <p className='text-green-700 leading-relaxed'>
                      Monitor the search input field for changes and dynamically
                      enable/disable the search functionality based on input
                      presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expected Outcome */}
          <div className='bg-white rounded-lg p-6 shadow-sm'>
            <h3 className='text-2xl font-semibold mb-4 text-blue-600 flex items-center'>
              <span className='mr-2'>🎯</span>
              Expected Outcome
            </h3>
            <div className='bg-blue-50 p-4 rounded-lg border-l-4 border-blue-200'>
              <p className='text-blue-700 leading-relaxed'>
                These solutions will create a seamless search experience where
                users can search without page interruptions, and the interface
                intelligently prevents empty searches while providing clear
                visual feedback about the search state.
              </p>
            </div>
          </div>
          <SearchBarDemo />
        </div>
      </div>
    </div>
  );
}
