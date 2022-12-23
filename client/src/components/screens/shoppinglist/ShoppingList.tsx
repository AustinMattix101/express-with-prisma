import React from 'react';

class ShoppingList extends React.Component {
  props!: {
    name: String,
  };
  render() {
    return (
      <div className='m-3 text-warning'>
        <h1>Shopping List for {this.props.name}</h1>
        <ul> 
          <li className='badge rounded-pill bg-primary m-1'>Instagram</li>
          <li className='badge rounded-pill bg-primary m-1'>Facebook</li>
          <li className='badge rounded-pill bg-primary m-1'>WhatsApp</li>
          <li className='badge rounded-pill bg-primary m-1'>Oculus</li>
        </ul>

      </div>
    );
  }
}

export default ShoppingList;