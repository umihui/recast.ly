class App extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      select: window.exampleVideoData[0],
      list: window.exampleVideoData
    };

    this.selectVideo = this.selectVideo.bind(this);
    this.renderList = this.renderList.bind(this)
  }



  selectVideo(e) {
    console.log('app',e);
    this.setState({

      select : e

    });
  }

  renderList(e) {
    console.log('list',e);
    this.setState({

      list : e

    });
  }



  render(){
    // if (this.props !== undefined) {
    //
    //   return (
    //     <div>
    //       <nav className="navbar">
    //         <div className="col-md-6 offset-md-3">
    //           <Search />
    //         </div>
    //       </nav>
    //       <div className="row">
    //         <div className="col-md-7">
    //           <VideoPlayer video={this.state.select}
    //            />
    //         </div>
    //         <div className="col-md-5">
    //           <div  id="list"><VideoList videos={this.props}
    //                clickEvent={this.selectVideo}
    //           /></div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else {
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
              <div  id="list"><VideoList videos={this.state.list}
                   clickEvent={this.selectVideo}
              /></div>
            </div>
          </div>
        </div>
      )

  }



};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
