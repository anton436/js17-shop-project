import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "./Carousel";
import "./styles/Styles.css";
import { useProducts } from "../contexts/ProductContextProvider";

const HomePage = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);

  const [clothes, setClothes] = useState([]);
  const [shoes, setShoes] = useState([]);
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    products.forEach((product) => {
      if (product.category === "Clothes") {
        setClothes((prevClothes) => [...prevClothes, product]);
      } else if (product.category === "Shoes") {
        setShoes((prevShoes) => [...prevShoes, product]);
      } else if (product.category === "Accessories") {
        setAccessories((prevAccessories) => [...prevAccessories, product]);
      }
    });
  }, [products]);
  console.log(clothes);
  return (
    <div>
      <Box sx={{ overflowX: "hidden" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage:
              'url("https://pumakyrgyzstan.kg/uploads/photos/new_collection_man_ss23-11920x9999.jpg?v=5.01")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "150px",
            margin: "0 0 150px 0",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#ffffff",
              textAlign: "center",
              fontFamily: "serif",
              fontWeight: "500",
            }}
          >
            НОВАЯ <br /> КОЛЛЕКЦИЯ
          </Typography>

          <Button
            sx={{
              width: "10%",
              background: "#ffffff",
              color: "black",
              border: "1px solid black",
            }}
          >
            Каталог
          </Button>
        </Box>

        {clothes.length ? <Carousel product={clothes} /> : null}

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            backgroundImage:
              'url("https://pumakyrgyzstan.kg/uploads/photos/new_collection_woman_ss23-11920x9999.jpg?v=5.01")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "150px 0",
            margin: "150px 0",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "#ffffff",
              textAlign: "start",
              fontFamily: "serif",
              fontWeight: "500",
            }}
          >
            НОВАЯ <br /> КОЛЛЕКЦИЯ
          </Typography>

          <Button
            sx={{
              width: "10%",
              background: "#ffffff",
              color: "black",
              border: "1px solid black",
            }}
          >
            Каталог
          </Button>
        </Box>
        <Carousel product={shoes} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            backgroundImage:
              'url("https://pumakyrgyzstan.kg/uploads/photos/Football_1920x667new1920x9999.jpg?v=5.01")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            padding: "150px 0",
            margin: "150px 0",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              color: "black",
              textAlign: "start",
              fontFamily: "serif",
              fontWeight: "500",
            }}
          >
            ИГРАЙ ЯРЧЕ, <br /> ЧЕМ КОГДА ЛИБО
          </Typography>
          <h2>для тех, кто любит победу!</h2>

          <Button
            sx={{
              width: "10%",
              background: "#ffffff",
              color: "black",
              border: "1px solid black",
            }}
          >
            Выбрать
          </Button>
        </Box>
        <Carousel product={accessories} />
        <Box sx={{ display: "flex", marginTop: "50px" }}>
          <ul
            style={{
              listStyleType: "none",
              padding: "0",
              margin: "0",
              display: "flex",
            }}
          >
            <li
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://pumakyrgyzstan.kg/uploads/photos/3922_1200x6281920x9999.jpg?v=5.01"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="h2">MOTORSPORT</Typography>
              <Button
                sx={{ width: "20%", background: "black", color: "#ffffff" }}
              >
                Выбрать
              </Button>
            </li>
            <li
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://pumakyrgyzstan.kg/uploads/photos/Puma-Studio_kyrgyzstan-1200x6281920x9999.png?v=5.01"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="h2">PUMA STUDIO</Typography>
              <Button
                sx={{ width: "20%", background: "black", color: "#ffffff" }}
              >
                Выбрать
              </Button>
            </li>
            <li
              style={{
                flex: "1",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="https://pumakyrgyzstan.kg/uploads/photos/RS-X_1200x6281920x9999.png?v=5.01"
                alt=""
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <Typography variant="h2">PUMA RS</Typography>
              <Button
                sx={{ width: "20%", background: "black", color: "#ffffff" }}
              >
                Выбрать
              </Button>
            </li>
          </ul>
        </Box>
        <Box
          sx={{
            backgroundColor: "#eceeef",
            padding: " 30px",
            marginTop: "50px",
          }}
        >
          <Box sx={{ borderTop: " 1px solid white", padding: "15px 0" }}>
            <h3>О компании PUMA</h3>
            <p>
              <strong>PUMA</strong> - один из крупнейших мировых спортивных
              брендов, производящих обувь, одежду и аксессуары. С 1948 года
              бренд PUMA создает инновационные продукты для самых быстрых и
              лучших спортсменов в мире: от футбола до гольфа, от автоспорта до
              бега.
            </p>
            <p>
              <strong>Интернет-магазин PUMA Kyrgyzstan</strong>представляет
              обширный каталог спортивных товаров, включая линейки товаров для
              мужчин, женщин и детей, а также известные коллаборации марки.
            </p>
            <p>
              Товары PUMA представлены более, чем в 120 странах. Штаб-квартира
              компании находится в Германии, в городе Херцогенаурах.
            </p>
            <p>
              Если вам нужны интенсивные тренировки или вы хотите хорошо
              выглядеть на улице - PUMA предлагает подходящие товары для всего,
              что вы хотите делать, где бы вы ни находились. Дети также могут
              открыть и исследовать мир вместе с PUMA Kids.
            </p>
            <p>
              <strong>Миссия PUMA-</strong> быть самым быстрым спортивным
              брендом в мире.
            </p>
            <p>
              Благодаря нашему бесконечному стремлению развивать спорт мы
              «всегда быстрее» (forever faster). «Всегда быстрее» — это больше,
              чем быстро. Это больше, чем победа любой ценой. Это значит
              превращать сложности в возможности. Побеждать.
            </p>
            <p>
              Открывай новую страницу своей активной жизни вместе с{" "}
              <strong>интернет-магазином PUMA Kyrgyzstan</strong>.
            </p>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;
