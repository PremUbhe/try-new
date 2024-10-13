import React from "react";
import Image from "next/image";
import { Suspense } from "react";

// components
import CategoriesCard from "@/components/CategoriesCard";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import Swiper from "@/components/Swiper";

// icons
import { FaArrowRightLong } from "react-icons/fa6";

// img
import sliderOne from "@/public/banners/slider-4.png";
import sliderTwo from "@/public/banner-1.png";
import loader from "@/public/section-loader.gif";

const Home = async () => {
  const productsAPI = await fetch(
    "https://nest-mart-git-main-premubhes-projects.vercel.app/api/product",
    {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    }
  );
  const ProductData = await productsAPI.json();

  const offerBanners = await fetch(
    "https://nest-mart-git-main-premubhes-projects.vercel.app/api/offerBanners",
    {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    }
  );
  const Offers = await offerBanners.json();

  return (
    <>
      {/* hero section */}
      <section className="bg-hero-pattern h-full">
        <div className="flex gap-5 w-full">
          <div className="w-8/12">
            <div className="card p-0 rounded-xl">
              <Image
                className="w-full h-full"
                src={sliderOne}
                placeholder="blur"
                alt="bg"
              />
              <div className="card-detail-absolute left-10">
                <h1 className="text-banner leading-none mb-4">
                  Snacks box <br />
                  daily save
                </h1>
                <p className="mb-65 text-2xl text-gray">
                  Sign up for the daily newsletter
                </p>
                {/* <form class="form-subcriber d-flex">
                        <input type="email" placeholder="Your emaill address" tabindex="0">
                        <button class="btn" type="submit" tabindex="0">Subscribe</button>
                    </form> */}
              </div>
            </div>
          </div>
          <div className="w-4/12">
            <div className="card p-0 rounded-xl">
              <Image
                className="w-full h-full"
                src={sliderTwo}
                placeholder="blur"
                alt="bg"
              />
              <div className="card-detail-absolute left-10">
                <h1 className="text-4xl leading-none mb-4">
                  Delivered <br /> to{" "}
                  <span className="text-primary">
                    your <br /> home
                  </span>
                </h1>
                <Button className="bg-primary text-white">
                  {" "}
                  Shop Now <FaArrowRightLong className="ms-3" />{" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* swiper */}
      <section className="offers-swiper py-0">
        <Suspense
          fallback={
            <div className="w-full h-full flex justify-center">
              <Image src={loader} width={100} alt="loading ..."></Image>
            </div>
          }
        >
          <Swiper params={Offers} />
        </Suspense>
      </section>

      {/* Featured Categories section */}
      <section className="categories pt-0">
        <div className="container">
          <h2 className="text-2xl text-center font-medium mb-3">
            Shop by Categories
          </h2>
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center">
                <Image
                  src={loader}
                  width={100}
                  unoptimized
                  alt="loading ..."
                ></Image>
              </div>
            }
          >
            <CategoriesCard />
          </Suspense>
        </div>
      </section>

      {/* Featured Products section */}
      <section className="products">
        <div className="container">
          <h2 className="text-2xl text-center font-medium mb-3">
            Popular Products
          </h2>
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center">
                <Image
                  src={loader}
                  width={100}
                  unoptimized
                  alt="loading ..."
                ></Image>
              </div>
            }
          >
            <div className="flex flex-wrap gap-3">
              {ProductData.data.map((data: any, index: string) => {
                return <ProductCard products={data} key={index} />;
              })}
            </div>
          </Suspense>
        </div>
      </section>
    </>
  );
};

export default Home;
