import './filter.css';

const Filter = () => {

    return <div className="filters">
        <label htmlFor="name">Filter by name:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="name" />
    </div>
}

export default Filter;