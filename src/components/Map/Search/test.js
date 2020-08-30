
/*

        if(allfiles.length > 1) {
            filesarray.map((file) => {
                var storageRef = props.firebase.store.app.storage().ref();
                var metadata = {
                    contentType: 'image/jpeg'
                  };
             
                  var uploadTask = storageRef.child('images/' + coupleId + '/' + city + '/' + file.name).put(file, metadata);
            
                  
                  uploadTask.on(props.firebase.store.app.firebase_.storage.TaskEvent.STATE_CHANGED, 
                    function(snapshot) {
                      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                      console.log('Upload is ' + progress + '% done');
                      switch (snapshot.state) {
                        case props.firebase.store.app.firebase_.storage.TaskState.PAUSED: // or 'paused'
                          console.log('Upload is paused');
                          break;
                        case props.firebase.store.app.firebase_.storage.TaskState.RUNNING: // or 'running'
                          console.log('Upload is running');
                          break;
                        
                        default:
                            console.log("Something went wrong??")
                            break;
                      }
                    }, function(error) {   
                    switch (error.code) {
                      case 'storage/unauthorized':
                        break;
                  
                      case 'storage/canceled':
                        break;
                  
                      case 'storage/unknown':
                        break;
                    
                        default:
                            console.log("Something went wrong??")
                            break;
                    }
                  }, function() {
                    uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                      console.log('File available at', downloadURL);
                      const newPlaceKey = props.firebase.db.app.database().ref().child('places').push().key;
                    var postData = {
                        author: props.authUser.username,
                        uid: props.authUser.uid,
                        type: "image",
                        body: downloadURL,
                        file_name: file.name,
                        createdAt: Date.now(),
                        city: city,
                        address: props.placeinfos.raw[0].address,
                        coordinates: [props.placeinfos.raw[0].lat, props.placeinfos.raw[0].lon],
                        placeid: props.placeinfos.raw[0].place_id
                        };
               
                        
            
                        var updates = {};
                        //places-together für Markerposition
                        updates['/places-together/' + coupleId + '/' + city] = postData
                        //places für Bilder
                        updates['/places/' + coupleId + '/' + city + '/' + newPlaceKey] = postData;
                        updates['/user-places/' + props.authUser.uid + '/' + city + '/' + newPlaceKey] = postData;
            
                        return props.firebase.db.app.database().ref().update(updates); 
                    });
                  })
                  })
        } 
        
        else {var storageRef = props.firebase.store.app.storage().ref();
            var metadata = {
                contentType: 'image/jpeg'
              };
         
              var uploadTask = storageRef.child('images/' + city + '/' + file.name).put(file, metadata);
        
              
              uploadTask.on(props.firebase.store.app.firebase_.storage.TaskEvent.STATE_CHANGED, 
                function(snapshot) {
                  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                  console.log('Upload is ' + progress + '% done');
                  switch (snapshot.state) {
                    case props.firebase.store.app.firebase_.storage.TaskState.PAUSED: // or 'paused'
                      console.log('Upload is paused');
                      break;
                    case props.firebase.store.app.firebase_.storage.TaskState.RUNNING: // or 'running'
                      console.log('Upload is running');
                      break;
                    
                    default:
                        console.log("Something went wrong??")
                        break;
                  }
                }, function(error) {   
                switch (error.code) {
                  case 'storage/unauthorized':
                    break;
              
                  case 'storage/canceled':
                    break;
              
                  case 'storage/unknown':
                    break;
                
                    default:
                        console.log("Something went wrong??")
                        break;
                }
              }, function() {
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
                  console.log('File available at', downloadURL);
                  const newPlaceKey = props.firebase.db.app.database().ref().child('places').push().key;
                var postData = {
                    author: props.authUser.username,
                    uid: props.authUser.uid,
                    type: "image",
                    body: downloadURL,
                    file_name: file.name,
                    createdAt: Date.now(),
                    city: city,
                    address: props.placeinfos.raw[0].address,
                    coordinates: [props.placeinfos.raw[0].lat, props.placeinfos.raw[0].lon],
                    placeid: props.placeinfos.raw[0].place_id
                    };
           
                    
        
                    var updates = {};
                        //places-together für Markerposition
                        updates['/places-together/' + coupleId + '/' + city] = postData
                        //places für Bilder
                        updates['/places/' + coupleId + '/' + newPlaceKey] = postData;
                        updates['/user-places/' + props.authUser.uid + '/' + city + '/' + newPlaceKey] = postData;
        
                    return props.firebase.db.app.database().ref().update(updates); 
                });
              })

        }
        
       
    }*/