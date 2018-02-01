var searchYouTube = (options, callback) => {  //THIS callback is the bound callback to the APP state
  // TODO

  //JQuery GET request to search endpoint
  //search enpoint URL
  let searchURL = "https://www.googleapis.com/youtube/v3/search";

  $.ajax({
    url : searchURL,
    type: 'GET',
    contentType : 'application/JSON',
    data: options,
    success: function(data) {
      //pass the data into that callback to do work on the APP
      console.log('here is the data', data);  //<--object that has the array somewhere in it
      callback(data.items); 
      return (data.items); 
    },
    error: function(error) {
      console.error(error);
    }
    

  });


};

window.searchYouTube = searchYouTube;
window.debouncedSearchYouTube = _.debounce(searchYouTube,500);

