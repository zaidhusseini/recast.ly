class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
    };

    props.searchYouTube(window.options, this.changeVideoList.bind(this));
  }

  changeVideo(selectedVideo) {
    this.setState({currentVideo: selectedVideo});
  }

  changeVideoList(data) {
    this.setState({videos: data, currentVideo: data[0]});
  }

  render() {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><window.Search cb={this.changeVideoList.bind(this)}/></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><window.VideoPlayer video={this.state.currentVideo} /></div>
          </div>
          <div className="col-md-5">
            <div><window.VideoList videos={this.state.videos} cb={this.changeVideo.bind(this)} /></div>
          </div>
        </div>
      </div>
    
    );

  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;

