import React from 'react';
import Image from 'next/image';

const Card = ({ title, description, learnMoreLink, backgroundColor, textColor, textSize,imageUrl, imageSize, showButton,  cardWidth,
cardHeight, 
imageWidth,  }) => {
  const cardStyle = {
    background: backgroundColor || 'blue-100', // Default gradient
    color: textColor || 'black',
    fontSize: textSize || '16px',
    width: cardWidth || '350px', // Default card width
    maxheight: cardHeight || '350px', // Default card height
    // Add any other styles you want to customize
  };

  const imageStyle = {
    maxwidth: imageWidth || '200px', // Default image width
    maxheight: 'auto',
  };

  return (
    <div className=" max-w-sm max-h-full">
      <div className={`flex rounded-lg h-full p-8 flex-col shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ${backgroundColor}`} style={cardStyle}>
        {imageUrl && (
          <div className="mb-4 " >
            <Image src={imageUrl} alt="Card Image" className="rounded-md" width={300} height={200} />
          </div>
        )}
        <div className="flex items-center mb-3">
          {/* Title */}
          <h2 className="text-lg font-medium">{title}</h2>
        </div>
        <div className="flex flex-col justify-between flex-grow">
          {/* Description */}
          <p className="text-base">{description}</p>
          {/* Learn More Link */}
          {showButton && (
            <a href={learnMoreLink} className="mt-3 inline-flex items-center">
              See More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  title: 'Default Title',
  description: 'Default Description',
  learnMoreLink: '#',
  showButton: true, // Button visible by default
};

export default Card;
