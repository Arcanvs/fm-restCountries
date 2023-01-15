import InputFilter from "./InputFilter"
import SelectorFilter from "./SelectorFilter"

const Filter = ({onChangeFilterInput, onChangeFilterSelect}) => {
  const handleChangeInput = (newVal) => {
    onChangeFilterInput(newVal);
  }
  const handleChangeSelect = (newVal) => {
    onChangeFilterSelect(newVal);
  }

  return (
    <div className="body__filter">
        <div className="filter__input">
            <InputFilter onChangeInput={handleChangeInput} />
        </div>
        <div className="filter__select">
            <SelectorFilter onChangeSelect={handleChangeSelect} />
        </div>
    </div>
  )
}

export default Filter