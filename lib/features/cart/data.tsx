// "use client";

// import { useState } from "react";
// import { useAppDispatch, useAppSelector } from "@/lib/hooks";
// import { addProduct, setList } from "@/lib/features/addData/addDataSlice";
// import styles from "@/app/components/counter/Counter.module.css";

// const DataList = () => {

//   const dispatch = useAppDispatch();
//   const list = useAppSelector(setList )

//   const [id, setId] = useState(0);
//   const [quant, setQuantity] = useState(0);

//   return (
//     <div>
//       {
//         list.map((value, index) => {
//           return (
//             <h1 key={index}>{value.productId} <br /> {value.quantity}</h1>
//           )
//         })
//       }
//       <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={id}
//           type="number"
//           onChange={(e) => {
//             setId(Number(e.target.value));
//           }}
//         />
//       <input
//           className={styles.textbox}
//           aria-label="Set increment amount"
//           value={quant}
//           type="number"
//           onChange={(e) => {
//             setQuantity(Number(e.target.value));
//           }}
//         />
//       <button
//       className={styles.button}
//       aria-label="Decrement value"
//       onClick={() => dispatch(addProduct({ productId: id, quantity: quant }))}
//       >
//         add
//     </button>
//     </div>

//   )
// }

// export default DataList