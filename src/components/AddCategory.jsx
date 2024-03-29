import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return;
    onNewValue(inputValue.trim());
    setInputValue('');
    // setValueInput((cat) => [inputValue, ...cat]);
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs..."
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};

