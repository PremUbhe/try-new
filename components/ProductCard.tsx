'use client'

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaCartShopping } from "react-icons/fa6";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


export default function ProductCard({ products }: any) {
  return (
    <>
      <div className="product-card w-80 p-7 rounded-xl hover:border-primary hover:shadow-lg">
        <Link href={`/products/${products.id}`}>
          <Image
            src={products.img}
            height={320}
            placeholder="blur"
            alt="product image"
          />
          <h6 className="text-gray text-sm">{products.categories}</h6>
          <h3 className="text-xl truncate overflow-hidden">{products.name}</h3>
          <h6 className="text-gray text-sm w-25">
            <div className="product-rate d-inline-block mr-2">
              <div
                className="product-rating"
                style={{ width: `${products.rating * 10}%` }}
              ></div>
            </div>
            ({products.rating.toFixed(1)})
          </h6>
          <h5 className="text-gray text-sm">
            By <span className="text-primary">{products.brand}</span>
          </h5>
        </Link>
        <div className="flex justify-between mt-5">
          <h6 className="text-2xl text-primary">
            $
            {(
              products.price -
              (products.price * products.discount) / 100
            ).toFixed(2)}{" "}
            <span className="text-base text-gray line-through">
              ${products.price}
            </span>
          </h6>
          <Dialog>
            <DialogTrigger>
              <div className="flex items-center gap-2 rounded-xl px-4 py-2 bg-primary-light text-primary text-base hover:bg-primary hover:text-white"
              >
                <FaCartShopping /> Add
              </div>
            </DialogTrigger>
            <DialogContent className="product-dialog">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription>
                  <div className="flex gap-10 p-10">
                    <div className="w-1/2">
                      <div className="img-wrapper rounded-xl border border-gray aspect-[1/1]">
                        <Image
                          src={products.img}
                          placeholder="blur"
                          alt="product image"
                        />
                      </div>
                    </div>
                    <div className="w-1/2">
                      <h6 className="text-gray text-sm">
                        {products.categories}
                      </h6>
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
                      {/* <h5 className="text-gray text-sm">
                        By <span className="text-primary">{products.brand}</span>
                      </h5> */}
                      <div className="flex items-center gap-5">
                        <h4 className="text-5xl text-primary">
                          $
                          {(
                            products.price -
                            (products.price * products.discount) / 100
                          ).toFixed(2)}{" "}
                        </h4>
                        <div className="">
                          <h6 className="text-base text-secondary">{`${products.discount}% Off`}</h6>
                          <h5 className="text-xl text-gray line-through">
                            ${products.price}
                          </h5>
                        </div>
                      </div>
                      <p>{products.description}</p>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </>
  );
}
