import React from 'react'
import Image from 'next/image'
import ProductForm from '../components/ProductForm'
export default function ProductPageContent({ product }) {
  console.log(product)

  return (
    <div className="flex-column md_space-x-4 mx-auto flex w-11/12 max-w-6xl items-center justify-center space-y-8 md:flex-row md:items-start md:space-y-0 lg:space-x-8">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border bg-white shadow-lg md:w-1/2">
        <div className="relative  h-96 w-full">
          <Image
            src={product.images.edges[0].node.originalSrc}
            alt={product.images.edges[0].node.altText}
            layout="fill"
          />
        </div>
      </div>
      <ProductForm product = {product} />
    </div>
  )
}
