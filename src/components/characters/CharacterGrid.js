import React from 'react'
import Spinner from '../ui/Spinner'
import CharacterItem from './CharacterItem'

export default function Charactergrid({items, isLoading}) {
    return isLoading ? (<Spinner />) : (<section className = 'cards'>
        {items.map(item => (
            <CharacterItem key={item.char_id} item={item}/>
        ))}
    </section>)
}
