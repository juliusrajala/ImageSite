ImageGrid = React.createClass({
  mixins: [ReactMeteorData],

  getMeteorData(){
    return{
      images: Images.find({}, {}).fetch()
    }
  },
  renderImages(){
    console.log("Rendering images.");
    console.log(this.data.images);
    return this.data.images.map((image) => {
      console.log(image);
      return(
        <ImageThumb key={image._id}/>
      );
    });
  },
  render(){
    return(
      <div className="Images">
      {this.renderImages()}
      </div>
    );
  }
});