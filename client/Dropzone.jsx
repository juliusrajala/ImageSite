DropzoneContainer = React.createClass({
  getInitialState(){
    return{
      files: []
    };
  },
  onDrop: function(files){
    console.log("Received files: ", files);
    for(var i = 0; i<files.length; i++){
      var newFile = new FS.File(files[i]);
      Images.insert(newFile, function(error, fileObj){
        if(error){
          toastr.error("Upload failed.. please try again.");
        }else{
          toastr.success("Upload succeeded!")
        }
      });
    }
  },
  render(){
    console.log("Rendering Dropzone");
    return (
      <Dropzone className="dropZone" onDrop={this.onDrop}>
        Drop a file here.
      </Dropzone>
    );
  }
});