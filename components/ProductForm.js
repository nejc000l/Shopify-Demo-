import { useState, useEffect, useContext } from 'react'
import { formatter } from '../utils/helpers'
import ProductOptions from '../components/ProductOptions'
import {CartContext} from '../context/ShopContext'
export default function ProductForm({ product }) {
  const {addToCart} = useContext(CartContext)

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {}

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value
    })

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.originalSrc,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    }
  })
  const defaultValues = {}
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0]
  })

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0])
  const [selectedOptions, setSelectedOptions] = useState(defaultValues)

  function setOptions(name, value) {
    setSelectedOptions(prevState => {
      return { ...prevState, [name]: value }
    })

    const selection = {
      ...selectedOptions,
      [name]: value
    }

    allVariantOptions.map(item => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item)
      }
    })
  }


  return (
    <div className="mw:w-1/3 flex w-full flex-col rounded-2xl  p-4 shadow-lg">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-3">
        {formatter.format(product.variants.edges[0].node.priceV2.amount)}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
            key={`key-${name}`}
            name={name}
            values={values}
            selectedOptions={selectedOptions}
            setOptions={setOptions}
            selectedVariant={selectedVariant}
        />
      ))}
      <button onClick={()=>{addToCart(selectedVariant)}} className="mt-3 w-[200px] rounded-md  bg-black  px-2 py-3 text-white hover:bg-gray-800">
        Add to cart
      </button>
    </div>
  )
}
