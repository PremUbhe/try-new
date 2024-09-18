import React from 'react'
import Image from 'next/image'
import { Suspense } from 'react'
import sliderOne from "@/public/banners/slider-4.png"
import sliderTwo from "@/public/banner-1.png"
import CategoriesCard from '@/components/CategoriesCard'
import ProductCard from '@/components/ProductCard'
import { Button } from '@/components/ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import Swiper from '@/components/Swiper'

const Home = async () => {

  const res = await fetch("http://localhost:3000/api/product", {
    headers: {
      Accept: "application/json",
      method: "GET",
      },
  });
  const ProductData = await res.json();

  return (
    <>

      {/* hero section */}
      <section className='bg-hero-pattern h-full'>
        <div className="container py-10">
          <div className="flex gap-5 w-full">
            <div className="w-8/12">
              <div className="card p-0">
                <Image className='w-full h-full' src={sliderOne} alt='bg'/>
                <div className="card-detail-absolute left-10">
                    <h1 className="text-banner leading-none mb-4">
                        Snacks box <br/>
                        daily save
                    </h1>
                    <p className="mb-65 text-2xl text-gray">Sign up for the daily newsletter</p>
                    {/* <form class="form-subcriber d-flex">
                        <input type="email" placeholder="Your emaill address" tabindex="0">
                        <button class="btn" type="submit" tabindex="0">Subscribe</button>
                    </form> */}
                </div>
              </div>
            </div>
            <div className="w-4/12">
              <div className="card p-0">
                <Image className='w-full h-full' src={sliderTwo} alt='bg'/>
                <div className="card-detail-absolute left-10">
                  <h1 className="text-4xl leading-none mb-4">Delivered <br /> to <span className='text-primary'>your <br /> home</span></h1>
                  <Button className='bg-primary text-white'> Shop Now <FaArrowRightLong className='ms-3'/> </Button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* swiper */}
      <section>
        <div className="container">
          <Swiper/>
        </div>
      </section>


      {/* Featured Categories section */}
      <section className='categories'>
        <div className="container py-10">
          <h2 className='text-2xl font-medium'>Shop by Categories</h2>
          <Suspense fallback={<p>...</p>}>
            <CategoriesCard />
          </Suspense>
        </div>
      </section>

      {/* Featured Products section */}
      <section className='products'>
        <div className="container py-10">
          <h2 className='text-2xl font-medium mb-3'>Popular Products</h2>
          <div className="flex flex-wrap gap-3">
            {ProductData.map((data: any, index: string)=>{
              return(
                <Suspense fallback={<p>...</p>}>
                  <ProductCard key={index} products={data} />
                </Suspense>
              );
            })}
          </div>
        </div>
      </section>

    </>
  )
}

export default Home