// import React, { Component } from "react";
import Slider from "react-slick";

// export default class PauseOnHover extends Component {
//   render() {
//     const { product } = this.props;
//     var settings = {
//       dots: true,
//       infinite: true,
//       slidesToShow: 3,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 3000,
//       pauseOnHover: true,
//       centerMode: true,
//       arrows: true,
//     };
//     return (
//       <Slider {...settings}>
//         {product.map((item) => (
//           <div>
//             <img
//               style={{ height: "300px", width: "150ps" }}
//               src={item.pic1}
//               alt={item.title}
//             />
//             <div>
//               <h3>{item.title}</h3>
//               <h3>{item.price}</h3>
//             </div>
//           </div>
//         ))}
//       </Slider>
//     );
//   }
// }

import React from "react";

const Carousel = ({ product }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    centerMode: true,
    arrows: true,
  };
  return (
    <Slider {...settings}>
      {product.map((item) => (
        <div>
          <img
            style={{ height: "300px", width: "150ps" }}
            src={item.pic1}
            alt={item.title}
          />
          <div>
            <h3>{item.title}</h3>
            <h3>{item.price}</h3>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
