import React from "react";
import { productsSchema } from "@/lib/Model/products";

const product = async ({ params }: { params: { id: string } }) => {
  const ProductId = params.id;

  const ProductAPI = await fetch(
    `${process.env.CURRENT_API_URL}/api/products/${ProductId}`,
    {
      headers: {
        Accept: "application/json",
        method: "GET",
      },
    }
  );
  const ProductData = await ProductAPI.json();

  const data: productsSchema = ProductData.data;

  return (
    <>
      <section>
        <div className="container flex">
          <article className="w-9/12">
            <div className="product-wrapper">
              <div className="product-detail flex mb-5">
                <div className="w-6/12 rounded-xl me-7 border border-border-color">
                  <img src={data.img} alt={data.name} />
                </div>
                <div className="w-6/12 px-4">
                  {/* <h6>{data.categories}</h6> */}
                  <h3 className="text-4xl">{data.name}</h3>
                  <h6 className="text-gray text-base w-25">
                    <div className="product-rate d-inline-block mr-2">
                      <div
                        className="product-rating"
                        style={{ width: `${data.rating * 10}%` }}
                      ></div>
                    </div>
                    ({data.rating.toFixed(1)} reviews)
                  </h6>
                  <div className="flex items-center gap-5">
                    <h4 className="text-5xl text-primary">
                      $
                      {(
                        data.price -
                        (data.price * data.discount) / 100
                      ).toFixed(2)}
                    </h4>
                    <div className="">
                      <h6 className="text-base text-secondary">{`${data.discount}% Off`}</h6>
                      <h5 className="text-xl text-gray line-through">
                        ${data.price}
                      </h5>
                    </div>
                  </div>
                  <h6>{data.description}</h6>
                </div>
              </div>
              <div className="product-discription text-gray p-10 border border-gray rounded-lg">
                <h1 className="text-2xl text-primary">Description</h1>
                <hr className="text-gray my-2" />
                <p>
                  Uninhibited carnally hired played in whimpered dear gorilla
                  koala depending and much yikes off far quetzal goodness and
                  from for grimaced goodness unaccountably and meadowlark near
                  unblushingly crucial scallop tightly neurotic hungrily some
                  and dear furiously this apart.
                </p>
                <p>
                  Spluttered narrowly yikes left moth in yikes bowed this that
                  grizzly much hello on spoon-fed that alas rethought much
                  decently richly and wow against the frequent fluidly at
                  formidable acceptably flapped besides and much circa far over
                  the bucolically hey precarious goldfinch mastodon goodness
                  gnashed a jellyfish and one however because.
                </p>
                <ul>
                  <li>Type Of Packing Bottle</li>
                  <li>Color Green, Pink, Powder Blue, Purple</li>
                  <li>Quantity Per Case 100ml</li>
                  <li>Ethyl Alcohol 70%</li>
                  <li>Piece In One Carton</li>
                </ul>
                <hr className="text-gray my-2" />
                <p>
                  Laconic overheard dear woodchuck wow this outrageously taut
                  beaver hey hello far meadowlark imitatively egregiously hugged
                  that yikes minimally unanimous pouted flirtatiously as beaver
                  beheld above forward energetic across this jeepers
                  beneficently cockily less a the raucously that magic upheld
                  far so the this where crud then below after jeez enchanting
                  drunkenly more much wow callously irrespective limpet.
                </p>
                <h1 className="text-2xl text-primary mt-7">
                  Packaging & Delivery
                </h1>
                <hr className="text-gray my-2" />
                <p>
                  Less lion goodness that euphemistically robin expeditiously
                  bluebird smugly scratched far while thus cackled sheepishly
                  rigid after due one assenting regarding censorious while
                  occasional or this more crane went more as this less much amid
                  overhung anathematic because much held one exuberantly sheep
                  goodness so where rat wry well concomitantly.
                </p>
                <p>
                  Scallop or far crud plain remarkably far by thus far iguana
                  lewd precociously and and less rattlesnake contrary caustic
                  wow this near alas and next and pled the yikes articulate
                  about as less cackled dalmatian in much less well jeering for
                  the thanks blindly sentimental whimpered less across
                  objectively fanciful grimaced wildly some wow and rose jeepers
                  outgrew lugubrious luridly irrationally attractively
                  dachshund.
                </p>
              </div>
            </div>
          </article>

          <aside className="w-3/12">
            <h1>sidebar</h1>
          </aside>
        </div>
      </section>
    </>
  );
};

export default product;
