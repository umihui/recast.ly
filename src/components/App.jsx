class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {select: window.exampleVideoData[0]};

    this.selectVideo = this.selectVideo.bind(this);
  }

  selectVideo(e) {
    this.setState({
      select: e
    });
  }


  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.select}/>
          </div>
          <div className="col-md-5">
            <div><VideoList videos={window.exampleVideoData}
              clickEvent={this.selectVideo}/></div>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
