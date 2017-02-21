import React from 'react';
import Button from '../Button/Button.js';

const Table = ({ list, pattern, isSearched, onDismiss }) => {
  return (
    <div className="table">
      { list.filter(isSearched(pattern)).map(item =>
        <div key={item.objectID} className="table-row">
          <span style={{ width: '40%' }}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={{ width: '30%' }}>
            {item.author}
          </span>
          <span style={{ width: '10%'}}>
            {item.num_contents}
          </span>
          <span style={{ width: '10%'}}>
            {item.points}
          </span>
          <span style={{ width: '10%'}}>
            <Button
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
        </div>
      )}
    </div>
  );
}

export default Table;
