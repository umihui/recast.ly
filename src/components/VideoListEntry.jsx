var VideoListEntry = (props) => (

  // constructor(props) {
  //   super(props);
  //
  //   //this.listenOnClick = this.listenOnClick.bind(this);
  // }

  // listenOnClick(e){
  //   console.log(e);
  //   this.props.newclickEvent(e.video);
  // }


  //  return (
      <div className="video-list-entry media">
        <div className="media-left media-middle">
          <img className="media-object" src={props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">

          <div className="video-list-entry-title" onClick={() => props.newclickEvent(props.video)}>{props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{props.video.snippet.description}</div>
        </div>
      </div>

    );

//<div className="video-list-entry-title" onClick={this.listenOnClick.bind(this,this.props)}>{this.props.video.snippet.title}</div>
// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.VideoListEntry = VideoListEntry;
