import PropTypes from "prop-types";

export const GifItem = ({ url, title }) => {
  return (
    <>
      <div className="card">
        <img src={url} alt={title} />
      </div>
    </>
  );
};

//! npm install --save-dev prop-types
//! npm add prop-types para agregar esto, se debe instalar la dependencias
GifItem.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
