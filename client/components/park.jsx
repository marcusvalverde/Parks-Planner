import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FaRegHeart , FaHeart} from 'react-icons/fa';

// mapStateToProps
const mapStateToProps = state => ({
  fullName: state.park.fullName,
  description: state.park.description,
  weather: state.park.weather,
  images: state.park.images,
  showPark: state.park.showPark,
  isFav: state.park.isFav,
  code: state.park.code,

})

// const mapDispatchToProps = dispatch => ({
//   addFavorite: () => dispatch(actions.addFavorite()),
  
// })
function handleClick(){
  console.log(props.isFav)
  
}
// pull out the pieces of state that we want to render for specific park data
//<h2>{this.props.fullName}</h2>
{/* <li id='description'>{this.props.description}</li>
          <li id='weather'>{this.props.weather}</li>
          <img id='image' src={this.props.images}></img> */}



class Park extends Component {
  render() {
    return (
      <div id='Park' className='park'>
      <h2 className='head'>{this.props.fullName}
          <span className='icon' onClick ={handleClick}> 
            <FaHeart color='red'/>
          </span>
          </h2>
           <p id='description' className='description'>{this.props.description}</p>
          <p id='weather' className='weather'>{this.props.weather}</p>
          <img id='image' className='pic' src={this.props.images}></img>
        </div>
    )
  }
}


export default connect(mapStateToProps, null)(Park);