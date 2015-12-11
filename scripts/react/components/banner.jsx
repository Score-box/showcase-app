function urlify (url) {
  return 'url(' + R(url) + ')';
}

var BannerClass = [
  'm-banner',
  'm-page',
  'm-flex-box-orient',
  'm-flex-container-orient'
].join(' ')

module.exports = React.createClass({render: function () {
	return (
    <div id='m-banner'
      className={BannerClass}
      style={{
        backgroundImage: urlify('/images/sky.jpeg'),
        backgroundSize: 'cover'
      }}
    ><div className='m-banner-title'>
        SCORE BOX
      </div>
    </div>
	);
}});