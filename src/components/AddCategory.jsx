import PropTypes from "prop-types";
import { useState } from "react";


export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    setInputValue('');
    onNewValue(inputValue.trim());
    // setValueInput((cat) => [inputValue, ...cat]);
  };

  return (
    <form onSubmit={onSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};


AddCategory.propTypes = {
  onNewValue: PropTypes.func.isRequired,
};
