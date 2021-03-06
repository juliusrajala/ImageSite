if(Meteor.isServer){
  var imageStore = new FS.Store.S3("images", {
    accessKeyId: Meteor.settings.AWSAccessKeyID,
    secretAccessKey: Meteor.settings.AWSSecretAccessKey,
    bucket: Meteor.settings.AWSBucket
  });

  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
  });
}

if(Meteor.isClient){
  var imageStore = new FS.Store.S3("images");
  Images = new FS.Collection("Images", {
    stores: [imageStore],
    filter: {
      allow: {
        contentTypes: ['image/*']
      },
      onInvalid: function(message){
        toastr.error(message);
      }
    }
  });
}

Images.allow({
  insert: function(){ return true;},
  update: function(){ return true;},
  download: function(){ return true; }
})