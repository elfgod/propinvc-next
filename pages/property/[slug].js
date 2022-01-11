import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';

export default function ProductScreen() {
  const router = useRouter();
  const { slug } = router.query;
  const property = data.properties.find((a) => a.slug === slug);
  if (!property) {
    return (
      <div>
        <h1>Product Not Found</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>{property.name}</h1>
    </div>
  );
}
