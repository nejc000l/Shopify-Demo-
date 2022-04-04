import Link from 'next/link'

export default function Hero() {
  return (
    <div className="my-48 mx-auto max-w-7xl px-4 sm:mt-24 md:mt-72 text-center">
      <h1 className="font-extrabold text-gray-900">
        
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-4xl sm:text-6xl md:text-7xl">Shopify eCommerce</p>
      </h1> 
      <h2 className="mt-3 max-w-md mx-auto text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-x-3xl">
        Build the eCommerce site of your dreams.
      </h2>
      <div className="mt-5 max-w-md mx-auto flex justify-center items-center md:mt-8">
      
        <a href="#" className="inline-flex items-center font-semibold text-gray-900 hover:text-gray-800">
          Learn more
        </a>
      </div>
    </div>
  )
}