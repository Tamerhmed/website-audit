import { CheckCircle, TrendingUp, Target } from 'lucide-react';

export default function Home() {
  const strengths = [
    {
      title: 'Clear Navigation Structure',
      description:
        'When I tested the site, I found the product categories were really well-organized. I could easily find and compare items without getting lost in the navigation.',
    },
    {
      title: 'Strong Brand Consistency',
      description:
        "What impressed me was how consistently they maintained Taking Shape's brand identity throughout the entire site. The look, feel, and tone all aligned perfectly with their welcoming brand values.",
    },
    {
      title: 'Streamlined Checkout Process',
      description:
        'I actually went through the entire purchase flow to test it, and I was impressed by how smooth the checkout was. The guest checkout option was particularly well-implemented, and shipping information was transparent.',
    },
  ];

  const opportunities = [
    {
      title: 'Performance Optimization Potential',
      description:
        'During my mobile testing, I noticed some opportunities to improve page load speeds. I identified specific areas where image optimization and better caching strategies could make a significant impact.',
    },
    {
      title: 'Mobile Experience Refinements',
      description:
        'The mobile experience was already solid, but I spotted some minor areas where touch responsiveness could be enhanced to make the experience even more polished.',
    },
  ];

  return (
    <div className='space-y-6'>
      <div className='bg-white rounded-xl shadow-sm border border-gray-200 p-6'>
        <div className='max-w-4xl mx-auto p-6 bg-white'>
          {/* Header */}
          <div className='mb-8'>
            <h1 className='text-3xl font-bold text-gray-900 mb-4'>
              My Complete User Journey Analysis
            </h1>
            <div className='bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-lg'>
              <p className='text-gray-700 leading-relaxed'>
                I wanted to get the full customer experience, so I actually went
                through the entire purchase process - from browsing to adding
                items to my cart, all the way through checkout. What I
                discovered was really impressive: every step felt seamless and
                intuitive, especially on mobile. This told me a lot about both
                the frontend architecture and backend stability of their
                platform.
              </p>
            </div>
          </div>

          {/* Key Strengths */}
          <div className='mb-8'>
            <div className='flex items-center mb-6'>
              <CheckCircle className='w-6 h-6 text-green-600 mr-3' />
              <h2 className='text-2xl font-semibold text-gray-900'>
                What I Found Was Working Really Well
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
                Areas Where I Saw Room for Improvement
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
                  My Overall Assessment
                </h3>
                <p className='text-purple-800'>
                  What I concluded from this analysis is that the website has
                  really strong fundamentals - excellent UX design and solid
                  brand consistency. I believe that with the specific
                  performance and mobile optimizations I identified, this
                  platform could really set new benchmarks for e-commerce
                  excellence in their industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
