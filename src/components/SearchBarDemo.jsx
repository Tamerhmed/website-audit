'use client';
import { useState } from 'react';
import { Search, X } from 'lucide-react';

export default function SearchBarDemo() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Mock search data
  const mockData = [
    'Summer Dresses',
    'Casual Tops',
    'Formal Wear',
    'Activewear',
    'Accessories',
    'Shoes & Boots',
    'Jackets & Coats',
    'Lingerie',
    'Plus Size Fashion',
    'Vintage Collection',
  ];

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() === '') {
      return;
    }

    setIsSearching(true);

    // Simulate API call delay
    setTimeout(() => {
      const results = mockData.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
      setIsSearching(false);
    }, 500);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    // Clear results when input is empty
    if (value.trim() === '') {
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
  };

  const isSearchDisabled = searchTerm.trim() === '';

  return (
    <div className='min-h-screen bg-gray-50 p-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='bg-white rounded-lg shadow-lg p-8'>
          <h1 className='text-3xl font-bold text-gray-800 mb-2 text-center'>
            Search Bar Demo
          </h1>
          <p className='text-gray-600 text-center mb-8'>
            Proper search behavior: No page refresh, disabled when empty
          </p>

          {/* Search Container */}
          <div className='mb-8'>
            <div className='relative flex items-center'>
              <div className='relative flex-1'>
                <input
                  type='text'
                  value={searchTerm}
                  onChange={handleInputChange}
                  placeholder='Search our range in sizes 10 - 30'
                  className='w-full px-4 py-3 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-200'
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleSearch(e);
                    }
                  }}
                />

                {/* Clear button */}
                {searchTerm && (
                  <button
                    type='button'
                    onClick={clearSearch}
                    className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors'
                  >
                    <X size={20} />
                  </button>
                )}
              </div>

              {/* Search button */}
              <button
                type='button'
                onClick={handleSearch}
                disabled={isSearchDisabled}
                className={`ml-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${
                  isSearchDisabled
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    : 'bg-pink-600 text-white hover:bg-pink-700 transform hover:scale-105'
                }`}
              >
                <Search size={20} />
                Search
              </button>
            </div>
          </div>

          {/* Search Status */}
          <div className='mb-6'>
            {isSearching && (
              <div className='flex items-center justify-center text-pink-600'>
                <div className='animate-spin rounded-full h-5 w-5 border-b-2 border-pink-600 mr-2'></div>
                Searching...
              </div>
            )}

            {searchTerm && !isSearching && (
              <p className='text-gray-600 text-center'>
                {searchResults.length > 0
                  ? `Found ${searchResults.length} results for "${searchTerm}"`
                  : `No results found for "${searchTerm}"`}
              </p>
            )}
          </div>

          {/* Search Results */}
          {searchResults.length > 0 && (
            <div className='space-y-3'>
              <h3 className='text-lg font-semibold text-gray-800 mb-4'>
                Search Results
              </h3>
              {searchResults.map((result, index) => (
                <div
                  key={index}
                  className='p-4 bg-gray-50 rounded-lg border hover:bg-gray-100 transition-colors cursor-pointer'
                >
                  <p className='text-gray-800'>{result}</p>
                </div>
              ))}
            </div>
          )}

          {/* Demo Features */}
          <div className='mt-12 p-6 bg-blue-50 rounded-lg'>
            <h3 className='text-lg font-semibold text-blue-800 mb-3'>
              ✅ Demo Features
            </h3>
            <ul className='space-y-2 text-blue-700'>
              <li>• Search button is disabled when input is empty</li>
              <li>• No page refresh when search is performed</li>
              <li>• Clear button appears when typing</li>
              <li>• Loading state during search</li>
              <li>• Results display without page reload</li>
              <li>• Proper form submission handling</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
