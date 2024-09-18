import React from 'react'

const product = ({ params }: { params: { id: number } }) => {
  return (
    <>
        <section>
            <div className="container">
                <h1>{params.id}</h1>
            </div>
        </section>
    </>
  )
}

export default product