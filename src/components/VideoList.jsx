var VideoList = (props) => {
  //console.log(props.videos.items);
  if (props.videos.items) {
    return (
      <div className="video-list">
        {props.videos.items.map(video =>
          <VideoListEntry video={video} newclickEvent={props.clickEvent}/>
        )}
      </div>
    );
  }

  return (
    
    <div className="video-list">

      {props.videos.map(video =>
        <VideoListEntry video={video} newclickEvent={props.clickEvent}/>
      )}
    </div>
  );
};

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
