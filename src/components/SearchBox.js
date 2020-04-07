import React from 'react'

const SearchBox = ({search}) => {


    return (
        <div>
            <input name='search' type="search" placeholder='Search a robot' onChange={search} />
        </div>
    )
}

export default SearchBox;
