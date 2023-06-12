import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
<<<<<<< HEAD
import { useNavigate } from "react-router-dom";
import { useProducts } from "../contexts/ProductContextProvider";
=======
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692

export default function ProductCard({ item }) {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
<<<<<<< HEAD
        onClick={() => navigate(`/details/${item.id}`)}
=======
>>>>>>> 91796cc7958dcb962cb9ba9ef287864e25859692
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.price} $
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
      </CardActions>
    </Card>
  );
}
