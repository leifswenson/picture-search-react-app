import React from "react";

const ImageList = props => {
  const images = props.images.map(image => {
    console.log(image);
    return (
      <img
        key={image.id}
        src={image.urls.regular}
        atl={image.alt_description}
      />
    );
  });

  return <div>{images}</div>;
};

export default ImageList;
