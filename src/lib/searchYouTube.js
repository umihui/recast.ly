var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      part: 'snippet',
      key: options.key,
      maxResults: options.max
    },
    success: function (data) {
      console.log(data.items);
      callback(data.items);
    },
    error: function () {
      console.error('Failed');
    }
  });
  
};

window.searchYouTube = searchYouTube;
