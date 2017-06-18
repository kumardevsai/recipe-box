import React from 'react';

class RecipeItem extends React.Component {
  render() {
    return(
      <div className='card spacing'>
        <h3 className="card-header">{this.props.item.menu}</h3>
        <div className='card-block'>
          <ul className="list-group">
              {
                this.props.item.ingredients.map((item, i) => {
                  return (
                    <li className="list-group-item" key={i}>{item}</li>
                  );
                })
              }
          </ul>
        </div>
        <div>
          <button type="button" className="btn btn-outline-primary btn-spacing">Edit</button>
          <button type="button" className="btn btn-outline-danger btn-spacing">Delete</button>
        </div>
      </div>
    );
  }
}

export default RecipeItem;