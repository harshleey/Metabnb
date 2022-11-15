import filterIcon from "../assets/images/header-nft/setting-5.svg"

const FilterLinks = () => {
    return (
        <div className="filter-links">
            <ul className="places-links">
                <li>Restaurant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantast city</li>
                <li>beach</li>
                <li>Carbins</li>
                <li>Off-grid</li>
                <li>Farm</li>
            </ul>
            <div className="location">
                <span>Location</span>
                <img src={filterIcon} alt="" /> 
            </div>
        </div>
    )
}

export default FilterLinks