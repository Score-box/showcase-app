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
            <h3>L'app qui met tous vos scores dans votre poche</h3>
        </div>
      </div>
      <div className='compat-subPage'>
          <div className="compat-fbContainer">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/scorebox42/"
              data-width="300"
              data-height="200"
              data-small-header="false"
              data-adapt-container-width="true"
              data-hide-cover="true"
              data-show-facepile="false">
              <div className="fb-xfbml-parse-ignore">
                <blockquote cite="https://www.facebook.com/scorebox42/">
                  <a href="https://www.facebook.com/scorebox42/">Score Box</a>
                </blockquote>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
}});