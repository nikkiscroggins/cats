import React from 'react';

export default class SavedImg extends React.Component {

    constructor() {
        super();
        this.state = {
            nameOfImg: '',
            images: []
        }
    }
// show cats under each category function
    fetchImages(img) {
        var images = JSON.parse(localStorage.getItem(img))

        this.setState({
            nameOfImg: img,
            images
        })

    }

    render() {
        const { imgData } = this.props;
        const { images, nameOfImg } = this.state;

        return (<div >
            <div
                style={{
                    border: '1px solid black',
                    padding: 10
                }} >

                <h3>The Existing Categories</h3>
                <hr />
                {imgData.length !== 0 ? imgData.map((img, key) => {
                    return (<div
                        style={{
                            padding: 10
                        }}
                        key={key}>
                        <h6>
                            <a href="#"
                               onClick={() => this.fetchImages(img.img)}
                               style={left}
                              >{img.img}</a>

                            <span
                                style={right}
                            >{img.length}</span>
                        </h6>
                        <br />
                    </div>)
                }) :
                    <div
                        className='center'
                        style={{
                            padding: 30
                        }}>
                        <h6 >Choose a Cat-egory</h6>
                    </div>}
            </div>

            {images.length !== 0 ?
                <div  >
                    <h3>
                        <span
                            style={{
                                marginRight: "10%",
                                textTransform: 'capitalize'
                            }}>
                            {nameOfImg}
                        </span>
                        <span>
                            [&nbsp;{images.length}&nbsp;]
                        </span>
                    </h3>
                    <hr />
                    <div style={{
                        border: '1px solid black',
                        padding: 10

                    }}>
                        {images.map((image, key) => {
                            return (
                                <img
                                    style={{
                                        width: '18rem',
                                        margin: 10
                                    }}
                                    key={key}
                                    src={image}
                                    alt='' />
                            )
                        })}
                    </div>
                </div> : null}
        </div>)
    }
}

const left = {
    float: "left"
},
    right = {
        float: 'right'
    }
