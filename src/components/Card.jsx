const Card = () => {
  return (
    <div className="card__content">
        <div className="content__flag">

        </div>
        <div className="content__data">
            <span className="data__title">Germany</span>
            <ul className="data__list">
                <li>
                    <span>Population:</span>
                    <span>81.770.900</span>
                </li>
                <li>
                    <span>Region:</span>
                    <span>Europe</span>
                </li>
                <li>
                    <span>Capital:</span>
                    <span>Berlin</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Card