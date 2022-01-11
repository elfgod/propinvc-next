import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Typography,
} from '@mui/material';
import NextLink from 'next/link';

import Layout from './components/Layout';
import data from '../utils/data';

export default function Home() {
  return (
    <Layout>
      <div>
        <h1>Propiedades</h1>
        <Grid container spacing={3}>
          {data.properties.map((property) => (
            <Grid item md={4} key={property.code}>
              <Card>
                <NextLink href={`/property/${property.slug}`} passHref>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={property.image}
                      title={property.name}
                    ></CardMedia>
                    <CardContent>
                      <Typography>{property.name}</Typography>
                    </CardContent>
                  </CardActionArea>
                </NextLink>
                <CardActions>
                  <Typography>${property.price}</Typography>
                  <Button size="small" color="primary">
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Layout>
  );
}
