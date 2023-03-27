import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function MediaCard({Url, description, quantuity}) {

  return (
    <Box m={7} pt={5}>
        <Card sx={{ maxWidth: 250 }}>
          <CardMedia
            sx={{ height: 345 }}
            image={Url}
            title="green iguana"
          />
          <CardContent>
            
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              less {quantuity} in stock
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">BUY</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
    </Box>
    
  );
}
