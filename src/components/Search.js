import React, { useState } from 'react';

const Search = ({ childMethodToChangeState }) => {
    const [text, setText] = useState('')

    const searchChange = (q) => {
        setText(q)
        childMethodToChangeState(q)
    }

    return (
        <section className='search'>
            <form>
                <input
                    type='text'
                    className='form-control'
                    placeholders='Search Clubs'
                    value={text}
                    onChange={(e) => searchChange(e.target.value)}
                    autoFocus
                />
            </form>
        </section>
    )
}

export default Search;