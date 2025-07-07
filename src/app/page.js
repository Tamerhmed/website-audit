import Link from 'next/link';
import { CheckCircle, TrendingUp, Target } from 'lucide-react';

export default function Home() {
  const strengths = [
    {
      title: 'Clear Navigation',
      description:
        'Product categories are well organised, making it easy to find and compare items.',
    },
    {
      title: 'Consistent Branding',
      description:
        "The look, feel, and tone of the site strongly align with Taking Shape's unique and inclusive identity.",
    },
    {
      title: 'Smooth Checkout Experience',
      description:
        'Minimal friction in the purchase journey — guest checkout was straightforward, and delivery options were clearly communicated.',
    },
  ];

  const opportunities = [
    {
      title: 'Performance Optimization',
      description:
        "There's room to enhance mobile load times through image compression and caching.",
    },

    {
      title: 'Mobile Refinements',
      description:
        'Small tweaks to touch responsiveness and checkout on mobile could make an already good experience even better.',
    },
  ];
  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
        <div className='max-w-4xl mx-auto p-6 bg-white'>
          {/* Header */}
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>
              My Website Journey & Feedback
            </h1>
            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg'>
              <p className='text-gray-700 leading-relaxed'>
                To experience the site as a customer, I selected an item, added
                it to the bag, and proceeded through to checkout. The process
                was smooth, intuitive, and mobile-friendly — from browsing to
                finalising the order, every step felt seamless. This reflects
                well on both the frontend structure and backend reliability of
                the platform.
              </p>
            </div>
          </div>

          {/* Key Strengths */}
          <div className='mb-8'>
            <div className='flex items-center mb-6'>
              <CheckCircle className='w-6 h-6 text-green-600 mr-3' />
              <h2 className='text-2xl font-semibold text-gray-900'>
                Key Strengths Observed
              </h2>
            </div>
            <div className='grid md:grid-cols-1 gap-4'>
              {strengths.map((strength, index) => (
                <div
                  key={index}
                  className='bg-green-50 border border-green-200 rounded-lg p-6 hover:shadow-md transition-shadow'
                >
                  <h3 className='font-semibold text-green-800 mb-2'>
                    {strength.title}
                  </h3>
                  <p className='text-green-700'>{strength.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities */}
          <div className='mb-8'>
            <div className='flex items-center mb-6'>
              <Target className='w-6 h-6 text-orange-600 mr-3' />
              <h2 className='text-2xl font-semibold text-gray-900'>
                Opportunities to Build On
              </h2>
            </div>
            <div className='grid md:grid-cols-1 gap-4'>
              {opportunities.map((opportunity, index) => (
                <div
                  key={index}
                  className='bg-orange-50 border border-orange-200 rounded-lg p-6 hover:shadow-md transition-shadow'
                >
                  <h3 className='font-semibold text-orange-800 mb-2'>
                    {opportunity.title}
                  </h3>
                  <p className='text-orange-700'>{opportunity.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Summary Card */}
          <div className='bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-200 rounded-lg p-6'>
            <div className='flex items-start'>
              <TrendingUp className='w-6 h-6 text-purple-600 mr-3 mt-1' />
              <div>
                <h3 className='font-semibold text-purple-900 mb-2'>
                  Overall Assessment
                </h3>
                <p className='text-purple-800'>
                  The website demonstrates strong fundamentals with excellent
                  user experience design and brand consistency. With targeted
                  improvements in performance and mobile optimization, this
                  platform has the potential to set new standards in e-commerce
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
