import React from 'react';

const Search = ({ searchState, letters }) => {

    return (
        <section className='search'>
                <input
                    type='text'
                    className='form-control'
                    placeholders='Search Clubs'
                    value={letters}
                    onChange={(e) => searchState(e.target.value)}
                    autoFocus
                />
        </section>
    )
}

export default Search;