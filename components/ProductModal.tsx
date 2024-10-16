"use client";

import React from "react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide, SwiperClass } from "swiper/react";
import { Thumbs } from "swiper/modules";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// redux
import {
  increment,
  decrement,
  selectCount,
  selectStatus,
} from "@/lib/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

// icons
import { FaCartShopping } from "react-icons/fa6";

// images
import product1 from "@/data/Products/product-1-1.jpg";
import product2 from "@/data/Products/product-2-1.jpg";
import product3 from "@/data/Products/product-3-1.jpg";
import product4 from "@/data/Products/product-4-1.jpg";

const images = [product1, product2, product3, product4];

const ProductModal = ({ products }: { products: any }) => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectCount);
  

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass>();

  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center gap-2 rounded-xl px-4 py-2 bg-primary-light text-primary text-base hover:bg-primary hover:text-white">
          <FaCartShopping /> Add
        </div>
      </DialogTrigger>
      <DialogContent className="product-dialog">
        <DialogHeader className="relative">
          <DialogTitle></DialogTitle>
          <DialogDescription className="flex gap-10 p-10 relative">
            <div className="relative w-[335px]">
              {/* Main Swiper -> pass thumbs swiper instance */}
              <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
                {images.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="img-wrapper rounded-xl border border-primary aspect-[1/1]">
                        <Image
                          src={img}
                          placeholder="blur"
                          alt="product image"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <Swiper
                modules={[Thumbs]}
                watchSlidesProgress
                slidesPerView={4}
                spaceBetween={10}
                onSwiper={setThumbsSwiper}
                loop={true}
              >
                {images.map((img, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="img-wrapper rounded-xl border border-gray aspect-[1/1]">
                        <Image
                          src={img}
                          placeholder="blur"
                          alt="product image"
                        />
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="w-1/2">
              <h6 className="text-gray text-sm">{products.categories}</h6>
              <h3 className="text-3xl">{products.name}</h3>
              <h6 className="text-gray text-sm w-25">
                <div className="product-rate d-inline-block mr-2">
                  <div
                    className="product-rating"
                    style={{ width: `${products.rating * 10}%` }}
                  ></div>
                </div>
                ({products.rating.toFixed(1)})
              </h6>
              <div className="flex items-center gap-5">
                <h4 className="text-5xl text-primary">
                  ${(
                    products.price - (products.price * products.discount) / 100
                  ).toFixed(2)}
                </h4>
                <div className="">
                  <h6 className="text-base text-secondary">{`${products.discount}% Off`}</h6>
                  <h5 className="text-xl text-gray line-through">
                    ${products.price}
                  </h5>
                </div>
              </div>
              <p>{products.description}</p>

              <div className="counter flex gap-4 my-2">
                <button
                  className="px-3 py-1 rounded bg-primary text-white"
                  type="button"
                  onClick={() => dispatch(increment())}
                >
                  +
                </button>
                <h6 className="text-base">{count}</h6>
                <button
                  className="px-3 py-1 rounded bg-primary text-white"
                  type="button"
                  onClick={() => (count > 1 ? dispatch(decrement()) : count)}
                >
                  -
                </button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ProductModal;
