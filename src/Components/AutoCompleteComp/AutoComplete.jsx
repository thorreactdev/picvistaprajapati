import React from 'react'

const AutoComplete = ({suggestions, onSuggestionClick}) => {
  return (
    <ul>
        {
            suggestions.map((suggestion , index)=>(
                <li key={index} onClick={() => onSuggestionClick(suggestion)}>
                    {suggestion}
                </li>
            ))
        }
    </ul>
  )
}

export default AutoComplete