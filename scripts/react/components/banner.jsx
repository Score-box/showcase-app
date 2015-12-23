function urlify (url) {
  return 'url(' + R(url) + ')';
}

var BannerClass = [
  'compat-page'
].join(' ')

module.exports = React.createClass({render: function () {
  return (
    <div className={BannerClass}>
      <div className='compat-subPage'>
        <div className="compat-siteTitle">
            <h1>SCORE BOX</h1>
        </div>
      </div>
      <div className='compat-subPage'>
        <div className="compat-logoWrapperContainer">
          <div className="compat-logoWrapper">
            <img src="images/logoV14_20.png"/>
          </div>
        </div>
      </div>
    </div>
  );
}});