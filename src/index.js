// TODO: Render the `App` component to the DOM
//searchYouTube({key: YOUTUBE_API_KEY, query:'', max: 5 }, function(data){ReactDOM.render(<App videos={data}/>, document.getElementById('app'));})
//var initial = searchYouTube({ key: YOUTUBE_API_KEY, query: '', max: 5 }, (data) => data);
ReactDOM.render(<App inputvideos={() => searchYouTube({key: YOUTUBE_API_KEY, query: '', max: 5 },(data) => data) }/>, document.getElementById('app'));
