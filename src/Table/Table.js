import React from 'react';
import Button from '../Button/Button.js';

const Table = ({ list, pattern, isSearched, onDismiss }) => {
  return (
    <div>
      { list.filter(isSearched(pattern)).map(item =>
          <div key={item.objectID}>
            <span>
              <a href={item.url}>{item.title}</a>
            </span>
            <span>{item.author}</span>
            <span>{item.num_contents}</span>
            <span>{item.points}</span>
            <span>
              <Button onClick={() => onDismiss(item.objectID)}>
                Dismiss
              </Button>
            </span>
          </div>
        )
      }
    </div>
  );
}

export default Table;
