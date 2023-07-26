import getCategory from '@/actions/getCategory'
import getColors from '@/actions/getColors'
import getProducts from '@/actions/getProducts'
import getSizes from '@/actions/getSizes'
import Billboard from '@/components/ui/billboard'
import Container from '@/components/ui/container'
import React from 'react'
import Filter from './components/filter'
import NoResults from '@/components/ui/noResults'
import ProductCard from '@/components/ui/productCard'
import MobileFilters from './components/mobileFilters'

export const revalidate = 0

interface CategoryPageProps {
  params: {
    categoryId: string
  },
  searchParams: {
    colorId: string,
    sizeId: string
  }
}

const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams
}) => {
  const prdocuts = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId
  })
  const sizes = await getSizes()
  const colors = await getColors()
  const category = await getCategory(params.categoryId)

  return (
    <div className='bg-white space-y-12'>
      <Billboard data={category.billboard} />
      <Container>
        <div className='px-6 pb-12'>
          <div className="lg:grid lg:grid-cols-5 lg:gap-8">
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter 
                valueKey='sizeId'
                name='Sizes'
                data={sizes}
              />
              <Filter 
                valueKey='colorId'
                name='Colors'
                data={colors}
              />
            </div>
            <div className='mt-6 lg:col-span-4 lg:mt-0'>
              {prdocuts.length === 0 ? 
              <NoResults /> : 
              <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4'>
                {prdocuts.map((item) => (
                  <ProductCard 
                    key={item.id}
                    data={item}
                  />
                ))}
              </div>
              }
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CategoryPage