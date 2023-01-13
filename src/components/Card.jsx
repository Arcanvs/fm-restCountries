const Card = ({country: {title, flag, population, region, capital}}) => {
  return (
    <div className="card__content">
        <div className="content__flag">
            <img src={flag} />
        </div>
        <div className="content__data">
            <span className="data__title">{title}</span>
            <ul className="data__list">
                <li>
                    <span>Population:</span>
                    <span>{population}</span>
                </li>
                <li>
                    <span>Region:</span>
                    <span>{region}</span>
                </li>
                <li>
                    <span>Capital:</span>
                    <span>{capital}</span>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Card