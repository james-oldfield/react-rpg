import React from 'react';

const ReactRpgPhoto = ({ url,text, padding, clickHandler = null }) => {
  const pointer = clickHandler ? 'pointer' : 'auto';

  var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

  const styles = {
    imageGridItem: {
      display: 'inline-block',
      boxSizing: 'border-box',
      float: 'left',
      padding,
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: '100%',
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      cursor: pointer,
    },
    hoverText : {
    top: '50px',
    position: 'relative',
    paddingLeft: '10px',
    backgroundColor: 'white',
    color: 'white',
    },
  };

  return (
    <div className="imageGridItem" style={styles.imageGridItem}>
      <a onClick={ clickHandler ? clickHandler.bind(this, url) : null }>
        <div className="imageWrapper" style={styles.imageWrapper}>
        <p style={styles.imageGridItem}>{text}</p>
        </div>
      </a>
    </div>
  );
};

ReactRpgPhoto.propTypes = {
  url: React.PropTypes.string.isRequired,
  padding: React.PropTypes.number,
  clickHandler: React.PropTypes.func,
  text:React.PropTypes.string
};

export default ReactRpgPhoto;
