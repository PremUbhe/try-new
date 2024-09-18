import React from 'react'
import Image from 'next/image'


export default async function CategoriesCard() {

    const res = await fetch("http://localhost:3000/api/categories", {
        headers: {
        Accept: "application/json",
        method: "GET",
        },
    });
    const CategorieData = await res.json();

  return (
    <div className="flex flex-row gap-4 my-10">
        {CategorieData.map((data: any, index: string)=>{
            return(
                <div className='categorie-card' key={index}>
                    <Image src={data.img} width={100} height={100} alt='Categorie Image'/>
                    <h3>{data.name}</h3>
                </div>
            );
        })}
    </div>
  )
}
