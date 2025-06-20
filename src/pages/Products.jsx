import React from 'react';
import productsData from '../content/products.json';

export default function Products() {
  return (
    <div className="container">
      <h1>Our Products</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
        {productsData.products.map(product => (
          <div key={product.id} style={{ flex: '1 1 300px', minWidth: 280 }}>
            {/* Manually upload product images to /public/images/ and reference by filename in products.json */}
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            {product.link && (
              <a
                href={product.link}
                className="button-primary"
                style={{ marginTop: '1rem', display: 'inline-block' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {product.linkText || 'Learn More'}
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
