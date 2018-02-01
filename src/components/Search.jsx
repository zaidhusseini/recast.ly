


var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />  
    <button className="btn hidden-sm-down" onClick={ ()=>{
      console.log($('input').val());
      window.options.q = $('input').val();
      window.searchYouTube(window.options, props.cb);
    } }>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div> 
);
// onclick - () {  do window.searchYouTube with "options" object }
// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;

window.options = {
  'maxResults': 5,
  'key': window.YOUTUBE_API_KEY,
  'part': 'snippet',
  'q': "Funny Cat Videos",
  'videoEmbeddable': true,
  'type' : 'video',
  'privacyStatus' : 'public',
  'license' : 'youtube'
};