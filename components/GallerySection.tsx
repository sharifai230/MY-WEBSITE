
import React from 'react';
import Section from './Section';

const GalleryImage: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <div className="w-full sm:w-[48%] md:w-[31%] overflow-hidden rounded-lg shadow-lg">
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
      />
    </div>
  );
};

const GallerySection: React.FC = () => {
  const images = [
    { src: 'https://picsum.photos/400/300?1', alt: 'Sample Image 1' },
    { src: 'https://picsum.photos/400/300?2', alt: 'Sample Image 2' },
    { src: 'https://picsum.photos/400/300?3', alt: 'Sample Image 3' },
    { src: 'https://picsum.photos/400/300?4', alt: 'Sample Image 4' },
    { src: 'https://picsum.photos/400/300?5', alt: 'Sample Image 5' },
    { src: 'https://picsum.photos/400/300?6', alt: 'Sample Image 6' },
  ];

  return (
    <Section id="gallery" title="Gallery">
      <div className="flex flex-wrap justify-center gap-4 mt-2">
        {images.map((image, index) => (
          <GalleryImage key={index} src={image.src} alt={image.alt} />
        ))}
      </div>
    </Section>
  );
};

export default GallerySection;
