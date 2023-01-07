import InputFilter from "./InputFilter"
import SelectorFilter from "./SelectorFilter"

const Filter = () => {
  return (
    <div className="body__filter">
        <div className="filter__input">
            <InputFilter />
        </div>
        <div className="filter__select">
            <SelectorFilter />
        </div>
    </div>
  )
}

export default Filter