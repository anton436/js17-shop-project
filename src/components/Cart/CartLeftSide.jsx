import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/CartContextProvider";
import { Button } from "@mui/material";

const CartLeftSide = () => {
  const { cart, getCart, changeProductCount, deleteCartProduct } = useCart();

  React.useEffect(() => {
    getCart();
  }, []);

  const cartCleaner = () => {
    localStorage.removeItem("cart");
    getCart();
  };

  const handleCountChange = (count, id) => {
    changeProductCount(count, id);
  };
  return (
    <div
      className="cart__left"
      style={{
        display: "flex",
        flexWrap: "wrap",
        margin: "-2% -15px 0",
        width: "87%",
        fontFamily:
          "Roboto, PT Sans Narrow,geogrotesque,-apple-system,system-ui,BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue,Arial,sans-serif",
      }}
    >
      {cart?.products.map((row) => (
        <div
          key={row.item.id}
          className="cart__left_item"
          style={{ width: "100%", marginTop: "10%", display: "flex" }}
        >
          <div className="cart__left_img">
            <img
              src={row.item.pic1}
              alt={row.item.title}
              style={{ width: "180px", height: "180px" }}
            />
          </div>
          <div
            className="cart__left_desc"
            style={{ padding: "25px 25px 0 ", width: "72%" }}
          >
            <div
              className="cart__left_title"
              style={{
                width: "100%",
                fontSize: "1.3rem",
                fontWeight: "700",
                lineHeight: "1",
              }}
            >
              <span>{row.item.title}</span>
              <hr
                style={{
                  border: "1.5px solid #eee",
                  margin: "5px 0",
                  width: "100%",
                }}
              />
            </div>
            <div className="cart__left_attributes">
              <p style={{ fontSize: "0.85rem" }}>
                <b style={{ padding: "0 7px 0 0" }}>ЦВЕТ</b> Стандарт
              </p>
              <p
                style={{
                  fontSize: "0.85rem",
                  margin: "-15px 0 5px",
                }}
              >
                <b style={{ padding: "0 7px 0 0" }}>КАТЕГОРИЯ</b>{" "}
                {row.item.category}
              </p>
            </div>
            <div
              className="cart__left_bottom"
              style={{
                width: "100%",
                display: "flex",
                marginTop: "1%",
                justifyContent: "space-between",
              }}
            >
              <div className="cart__left_counter">
                <p>КОЛ-ВО</p>
                <div
                  style={{
                    display: "flex",
                  }}
                >
                  <button
                    style={{
                      border: "1px solid #cccccc",
                      padding: "2px 5px",
                      height: "45px",
                      width: "35px",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleCountChange(row.count - 1, row.item.id)
                    }
                    disabled={row.count === 1}
                  >
                    -
                  </button>
                  <p
                    style={{
                      border: "1px solid #767676",
                      textAlign: "center",
                      width: "40px",
                      padding: "9px",
                      fontSize: "18px",
                      margin: "0",
                    }}
                  >
                    {row.count}
                  </p>
                  <button
                    style={{
                      border: "1px solid #cccccc",
                      padding: "2px 5px",
                      height: "45px",
                      width: "35px",
                      fontSize: "18px",
                      cursor: "pointer",
                    }}
                    onClick={() =>
                      handleCountChange(row.count + 1, row.item.id)
                    }
                    disabled={row.count === 20}
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="cart__left_price">
                <p style={{ textAlign: "right" }}>ЦЕНА:</p>
                <p
                  style={{
                    textAlign: "right",
                    color: "#484747",
                    fontSize: "20px",
                    fontWeight: "500",
                  }}
                >
                  {row.subPrice}
                </p>
              </div>
            </div>
            <div className="cart__left_delete" style={{ marginTop: "3%" }}>
              <button
                style={{
                  fontSize: "0.813rem",
                  textDecoration: "underline",
                  fontWeight: "800",
                  border: "none",
                  backgroundColor: "#fff",
                  cursor: "pointer",
                }}
                onClick={() => deleteCartProduct(row.item.id)}
              >
                УДАЛИТЬ
              </button>
            </div>
          </div>
        </div>
      ))}
      <Button sx={{ marginTop: "10%" }} onClick={cartCleaner}>
        BUY NOW FOR {cart?.totalPrice} $
      </Button>
    </div>
  );
};

export default CartLeftSide;
