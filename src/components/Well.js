import React from 'react'

export default function Well (props) {
return (
    <div className='wishes'>
    {/* functional componenets NEVER use this.props  */}
    {/* filter first then map  */}
    <h3>{props.name}</h3>
    <br/>
    <input className='input' value={props.editName} onChange={e => props.editInput(e)} />
    <button className='editButt'
    onClick={() => props.changeWish(props.id)}>...</button>
    <br/>
    <br/>
    <img id='wellImage' src={props.url} />
    <br /><br /><br />
    <button className='delButt' onClick={() => props.deleteWish(props.id)}>X</button>
  </div>
 )
 
} 

