// import React from "react";
// import "./Checkout.css";
// import Subtotal from "./Subtotal";
// import CheckoutProduct from "./CheckoutProduct";
// import { useStateValue } from "./StateProvider";
// import FlipMove from "react-flip-move";

// function Checkout() {
//   const [{ basket, user }, dispatch] = useStateValue();

//   return (
//     <div className="checkout">
//       <div className="checkout_left">
//         <img
//           src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
//           alt=""
//           className="checkout_ad"
//         />
//         <div>
//           <h3>Hello, {user?.email}</h3>
//           <h2 className="checkout_title">Your Shopping Basket</h2>
//           {/* console.log("Item ID:", item.id); // Log the item's ID
//           console.log("Item Key:", item.key); // Log the item's key */}
//           <FlipMove>
//             {" "}
//             {basket.map((item) => (
//               <CheckoutProduct
//                 key={item.key} // Use the unique key as the key prop
//                 id={item.id}
//                 title={item.title}
//                 price={item.price}
//                 image={item.image}
//                 rating={item.rating}
//               />
//             ))}
//           </FlipMove>
//         </div>
//       </div>
//       <div className="checkout_right">
//         <Subtotal />
//       </div>
//     </div>
//   );
// }

// export default Checkout;
import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./StateProvider";
import FlipMove from "react-flip-move";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
          className="checkout_ad"
        />
        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className="checkout_title">Your Shopping Basket</h2>
          <FlipMove
            typeName="div" // Specify the type of container element
            leaveAnimation="elevator" // Specify the exit animation
            enterAnimation="elevator"
          >
            {basket.map((item) => (
              <CheckoutProduct
                key={item.key} // Use the unique key as the key prop
                id={item.id}
                title={item.title}
                price={item.price}
                image={item.image}
                rating={item.rating}
              />
            ))}
          </FlipMove>
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
