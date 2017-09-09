class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    //this.state.list = searchYouTube({ key: YOUTUBE_API_KEY, query:'', max: 5 }, (data) => data);
    this.selectVideo = this.selectVideo.bind(this);
    this.renderList = this.renderList.bind(this);
  }

  componentWillMount() {
    var init = searchYouTube({ key: YOUTUBE_API_KEY, query: '', max: 5 }, (data) => data);
    this.setState({ select: window.exampleVideoData[0],
      list: init
    });

  }

  selectVideo(e) {
    this.setState({
      select: e
    });
  }

  renderList(e) {
    this.setState({
      list: e
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search clickSearch={this.renderList}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.select}
             />
          </div>
          <div className="col-md-5">
            <div id="list"><VideoList videos={this.state.list}
                 clickEvent={this.selectVideo}
            /></div>
          </div>
        </div>
      </div>
    );

  }



}
    // searchYouTube({ key: YOUTUBE_API_KEY, query:'', max: 5 }, this.renderList);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
