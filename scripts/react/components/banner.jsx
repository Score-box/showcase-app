function urlify (url) {
  return 'url(' + R(url) + ')';
}

var BannerClass = [
  'm-page',
  'm-flex-box-orient'
].join(' ')

module.exports = React.createClass({render: function () {
	return (
    <div id='banner'
      className={BannerClass}
      style={{
        backgroundImage: urlify('/images/sky.jpeg'),
        backgroundSize: 'cover'
      }}
    ><div className='title'>
        SCORE BOX
      </div>
    </div>
	);
}});