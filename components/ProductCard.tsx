import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Button } from "@/components/ui/button"
import { FaCartShopping } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type Products = {
  id: number;
  name: string;
  img: string;
  price: number;
  rating: number;
  discount: number;
  brand: string;
  categories: string;
}

export default function ProductCard({products}: any) {

  return (
    <>
    <div className="product-card w-80 p-7 hover:border-primary hover:shadow-lg">
      <Link href={`/products/${products.id}`}>
        <Image src={products.img} height={320} alt='product image'/>
        <h6 className='text-gray text-sm'>{products.categories}</h6>
        <h3 className='text-xl truncate overflow-hidden'>{products.name}</h3>
        <h6 className='text-gray text-sm w-25'>
          <div className="product-rate d-inline-block mr-2">
              <div className="product-rating" style={{width: `${products.rating * 10}%`}}></div>
          </div>
          ({products.rating.toFixed(1)})
          </h6>
        <h5 className='text-gray text-sm'>By <span className='text-primary'>{products.brand}</span></h5>
        <div className="flex justify-between mt-5">
          <h6 className='text-2xl text-primary'>${(products.price -(products.price * products.discount/100 )).toFixed(2)} <span className='text-base text-gray line-through'>${products.price}</span></h6>
          <Button className='bg-primary-light text-primary text-base hover:bg-primary hover:text-white' variant="outline">
            <FaCartShopping className='mr-2'/> Add</Button>
        </div>
      </Link>
      <Dialog>
        <DialogTrigger className='btn-dialog hidden'>
          <div className='p-3 rounded-xl bg-white text-primary shadow-lg hover:text-secondary'><FaRegEye className='text-lg'/></div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your account
              and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>

    </>
  )
}