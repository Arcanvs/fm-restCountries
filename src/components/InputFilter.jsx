const InputFilter = ({onChangeInput}) => {
  const handleChange = (e) => {
    onChangeInput(e.target.value);
  }

  return (
    <div className="input__content">
        <ion-icon name="search-outline"></ion-icon>
        <input type="text" placeholder="Search for a country..." onChange={handleChange} />
    </div>
  )
}

export default InputFilter