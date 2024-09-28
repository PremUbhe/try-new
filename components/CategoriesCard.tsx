import React from 'react'
import Image from 'next/image'


export default async function CategoriesCard() {

    let CategorieData = null;

    try {
        const res = await fetch("http://localhost:3000/api/categories", {
            headers: {
            Accept: "application/json",
            method: "GET",
            },
        });
        CategorieData = await res.json();
    } catch (error) {
        console.log(error);
    }

  return (
    <div className="flex flex-row gap-4 ">
        {CategorieData.map((data: any, index: any)=>{
            return(
                <div className='categorie-card px-8 py-7 border rounded-xl shadow overflow-hidden border-transparent relative' key={index}>
                    <Image src={data.img} width={100} height={100} alt='Categorie Image'/>
                    <h3>{data.name}</h3>
                </div>
            );
        })}
    </div>
  )
}
