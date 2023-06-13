import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useProducts } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";

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
=======
        onClick={() => navigate(`/details/${item.id}`)}
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
<<<<<<< HEAD
          {item.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => navigate(`/edit/${item.id}`)}>
          Edit
        </Button>
        <Button size="small" onClick={() => deleteProduct(item.id)}>
          Delete
        </Button>
=======
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
>>>>>>> 7477af825bc2f4e6a619bd16a66f8b336c176a4b
      </CardActions>
    </Card>
  );
}
