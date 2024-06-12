import {useState} from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function MultiActionAreaCard({userId}) {
    
    const { isLoading, error, data } = useQuery(["games"], () =>
        makeRequest.get("/games?userId=" + userId).then((res) => {
          return res.data;
        })
      
      );

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginLeft: '13%' }}>
    {error
        ? "Something went wrong"
        : isLoading
        ? "loading"
        : data.map((game) => (
    <Card sx={{ maxWidth: 250 }} key={game.id}>
        <CardActionArea>
        <CardMedia
            component="img"
            height="140"
            image={game.img}
            alt={game.title}
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {game.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {game.desc} 
            </Typography>
        </CardContent>
        </CardActionArea>
        <CardActions>

            <Rating name="size-large" value={game.stars} size="large" />
            <a href={game.link} target="_blank" rel="noopener noreferrer">
                <Button size="small" color="primary">
                PLAY
                </Button>
            </a>
            
        </CardActions>
    </Card>
    ))}
    </div>

  );
}
