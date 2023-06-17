import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Grid,
  Button,
} from "@mui/material";
import { useProducts } from "../../contexts/ProductContextProvider";
import ProductSize from "./ProductSize";
import ProductCount from "./ProductCount";

const ProductDetail = () => {
  const { getProductDetails, productDetails } = useProducts();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };
  const [mainImages, setMainImages] = useState({});

  const handleImageClick = (productId, image) => {
    setMainImages((prevMainImages) => ({
      ...prevMainImages,
      [productId]: image,
    }));
  };

  return (
    <Box>
      <Typography
        sx={{
          width: "73%",
          margin: "0 auto",
          fontSize: "16px",
          marginTop: "20px",
        }}
      >
        Home / {productDetails?.category} / {productDetails?.title}
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Box>
          <CardMedia
            sx={{
              height: 467,
              width: 452,
            }}
            image={mainImages[productDetails?.id] || productDetails?.pic1}
            title="green iguana"
          />
          <Box
            sx={{
              display: "flex",
              marginTop: "14px",
              justifyContent: "space-around",
              width: "70%",
            }}
          >
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic1}
              title="green iguana"
              onClick={() =>
                handleImageClick(productDetails?.id, productDetails?.pic1)
              }
            />
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic2}
              title="green iguana"
              onClick={() =>
                handleImageClick(productDetails?.id, productDetails?.pic2)
              }
            />
            <CardMedia
              sx={{
                height: 60,
                width: 60,
              }}
              image={productDetails?.pic3}
              title="green iguana"
              onClick={() =>
                handleImageClick(productDetails?.id, productDetails?.pic3)
              }
            />
          </Box>
        </Box>

        <Box sx={{ width: "33%" }}>
          <CardContent>
            <Typography
              variant="h5"
              component="h2"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold", fontSize: "29px" }}
            >
              {productDetails?.title}
            </Typography>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "black", fontWeight: "bold", fontSize: "23px" }}
            >
              {productDetails?.price} KGS
            </Typography>
            <Typography variant="body2">
              Цена вкл. 20% НДС / Артикул 52252801
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 3 }}>
              РАЗМЕР (ТАБЛИЦА РАЗМЕРОВ)
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={4} md={3}>
                <ProductSize />
              </Grid>
              <Grid item xs={6} sm={8} md={9}></Grid>
              <Grid item xs={6} sm={4} md={3}>
                <Typography variant="body2">КОЛ-ВО</Typography>
              </Grid>
              <Grid item xs={6} sm={8} md={9}>
                <ProductCount
                  quantity={quantity}
                  handleIncrement={handleIncrement}
                  handleDecrement={handleDecrement}
                />
              </Grid>
            </Grid>
          </CardContent>
          <Box>
            <Button
              variant="contained"
              color="secondary"
              sx={{
                backgroundColor: "#D2B48C",
                color: "#FFFFFF",
                borderRadius: 0,
                width: "30px",
                marginLeft: "65px",
                width: "60%",
              }}
            >
              Добавить в корзину
            </Button>
          </Box>
        </Box>
        <Box>
          <Typography>recently-watched</Typography>
          <Card
            sx={{
              maxWidth: 180,
              border: "1px solid #ccc",
              marginTop: 5,
              textAlign: "center",
            }}
          >
            <CardMedia
              sx={{ width: 179, height: 140 }}
              image="https://pumakyrgyzstan.kg/images/products/jpg/36962101185x185.jpg?v2.61"
              title="green iguana"
            />
            <CardContent>
              <Typography
                sx={{ fontSize: "14px" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Балетки PUMA Adelina SS22
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "17px", fontWeight: "bold" }}
              >
                6490 KGS
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              maxWidth: 180,
              border: "1px solid #ccc",
              marginTop: 2,
              textAlign: "center",
            }}
          >
            <CardMedia
              sx={{ width: 179, height: 140 }}
              image="https://pumakyrgyzstan.kg/images/products/jpg/84894201320x320.jpg?v4.28"
              title="green iguana"
            />
            <CardContent>
              <Typography
                sx={{ fontSize: "14px" }}
                gutterBottom
                variant="h5"
                component="div"
              >
                Балетки PUMA Adelina SS22
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: "17px", fontWeight: "bold" }}
              >
                6490 KGS
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          backgroundColor: "#dedce7",
          padding: " 30px",
          marginTop: "50px",
        }}
      >
        <Box sx={{ borderTop: " 1px solid white", padding: "15px 0" }}>
          <h3>О компании PUMA</h3>
          <p>
            <strong>PUMA</strong> - один из крупнейших мировых спортивных
            брендов, производящих обувь, одежду и аксессуары. С 1948 года бренд
            PUMA создает инновационные продукты для самых быстрых и лучших
            спортсменов в мире: от футбола до гольфа, от автоспорта до бега.
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
            Если вам нужны интенсивные тренировки или вы хотите хорошо выглядеть
            на улице - PUMA предлагает подходящие товары для всего, что вы
            хотите делать, где бы вы ни находились. Дети также могут открыть и
            исследовать мир вместе с PUMA Kids.
          </p>
          <p>
            <strong>Миссия PUMA-</strong> быть самым быстрым спортивным брендом
            в мире.
          </p>
          <p>
            Благодаря нашему бесконечному стремлению развивать спорт мы «всегда
            быстрее» (forever faster). «Всегда быстрее» — это больше, чем
            быстро. Это больше, чем победа любой ценой. Это значит превращать
            сложности в возможности. Побеждать.
          </p>
          <p>
            Открывай новую страницу своей активной жизни вместе с{" "}
            <strong>интернет-магазином PUMA Kyrgyzstan</strong>.
          </p>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDetail;
