import React, { Component } from 'react'
import './Select.css'



class Select extends Component {

  componentDidMount(){
  
  const input = document.querySelector('.input')
  const listItems = document.querySelector('.list-items') 

  if(this.props.width){
    input.style.width = this.props.width;
    listItems.style.width = this.props.width;
  }
  
  if(input){
      input.addEventListener('click', (e) =>{
        listItems.className === 'list-items disable' ? listItems.className = 'list-items' : listItems.className = 'list-items disable'
      })
  }
  }

  render(){
    return (
      <div className="input">
      <div className="select">Selecione um ítem</div>
        <div className="list-items disable">
          <List/>
        </div>
      </div>
    )
  }
} 

export default Select

const List = () =>{

  const data = [
    {
      item: 'Opção 1',
      sub_item: [
        { item: 'Opção 1 - 1' },
        { item: 'Opção 1 - 2' },
        {
          item: 'Opção 1 - 3',
          sub_item: [{ item: 'Opção 1 - 3 - 1' }, { item: 'Opção 1 - 3 - 2' }]
        }
      ]
    },
    { item: 'Opção 2' },
    {
      item: 'Opção 2 -1 ',
      sub_item: [
        {
          item: 'Opção 2 - 1 - 1',
          sub_item: [
            {
              item: 'Opção 2 - 1 - 1 - 1',
              sub_item: [
                {
                  item: 'Opção 2 - 1 - 1 - 1 - 1'
                }
              ]
            }
          ]
        }
      ]
    },
    {
      item: 'Opção 4',
      sub_item: [
        { item: 'Opção 4 - 1' },
        { item: 'Opção 4 - 2' },
        { item: 'Opção 4 - 3' }
      ]
    }
  ]

  const listItems = (array) => array.map((nivel) =>{
    console.log(nivel)
    return (
      <ul key={nivel.item}>
        <li key={nivel.item}>
          {nivel.item}
          {nivel.sub_item ? listItems(nivel.sub_item) : "-"}
        </li>
      </ul>
    )
  });

  return (
    <div>
      {listItems(data)}
    </div>
  );
}




