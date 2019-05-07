import React, {Component} from 'react'
import SavedImg from './SavedImg';

export class CatApi extends React.Component {
constructor() {
  super();
    this.state = {
    randomImg: '',
    name: [],
    length: 0,
    imgData: []
  }
}

componentWillMount () {
  this.getImages();
  this.allStorage();
}

allStorage() {

var names = [],
    length = [],
    archive = {},
    arr5 = [],
    obj,
    keys = Object.keys(localStorage),
    i = keys.length;


// get all the objects stored in localStorage with keys
while (i--) {
  archive[keys[i]] = localStorage.getItem(keys[i]);
}

//get the keys
var name = Object.keys(archive)

var size = name.map( data => {
  return JSON.parse(localStorage.getItem(data)).length;
})

names.push(name);
length.push(size);

names[0].map((data, key) => {
  obj = {
    img: data,
    length: length[0][key]
  }
  arr5.push(obj)
})

this.setState({
  imgData: arr5
  })
}


getImages()
{
  fetch(`http://aws.random.cat/meow`)
    .then(res => res.json())
  .then(res => {
    this.setState({
      randomImg: res["file"]
    })
  })
}

//setting the local storage
SaveImg() {
  var arr = [];
  var category = document.getElementById('category').value;
  var exist = localStorage.getItem(category);



// If category exists, update the object else create new
if (exist) {
  var filteredData = JSON.parse(exist).filter(data => {
    return data === this.state.randomImg
  })

  if (!filteredData.length > 0) {
    var data = JSON.parse(exist);
    data.push(this.state.randomImg);
    localStorage.setItem(category, JSON.stringify(data))
  }
} else {
  arr.push(this.state.randomImg)
  localStorage.setItem(category, JSON.stringify(arr))
  }
}


  render() {
    var { imgData, randomImg } = this.state;
    return(
      <div className='container center' >
        <div className='row' style={{
          display: 'block',
          textAlign: 'center'
        }}>
          <img
            style={{
              height: 'auto',
              maxWidth: '100%',
              maxHeight: '500px'
            }}
            src={randomImg}
            alt="" />
        </div>
        <div className='row' style={{width: '100%'}}>
          <input
            style={{
              width: '100%',
              display: 'block',
              marginBottom: '1rem',
              marginTop: '1rem'
            }}
            type="text"
            id="category"
            placeholder="Enter category" />
        <div className='btns'>
            <button
                onClick={() => {
                  this.getImages()
                }}> Next </button>

              <button
                  onClick={() => {
                  this.SaveImg();
                  window.location.reload()
                }}> Save </button>
              <div />
              <div className='col'>
                <SavedImg imgData={imgData} />
          </div>
              </div >
          </div>
      </div >
    )
  }
}
export default CatApi;
