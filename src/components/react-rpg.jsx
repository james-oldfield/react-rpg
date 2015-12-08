import React from 'react';
import ReactRpgPhoto from './react-rpg-photo';

const ReactRpg = ({ imagesArray, padding, columns = 3 }) => {
  const width = Math.floor(100 / columns);

  const imageNodes = imagesArray.map((arr, index) => {
    return (
      <ReactRpgPhoto key={index} url={arr.url} link={arr.link} width={width} padding={padding}/>
    );
  });

  return (
    <div className="imageGrid">
      {imageNodes}
    </div>
  );
};

ReactRpg.propTypes = {
  imagesArray: React.PropTypes.array.isRequired,
  columns: React.PropTypes.number,
  padding: React.PropTypes.number,
};

ReactRpg.defaultProps = {
  imagesArray: [],
};

export default ReactRpg;
