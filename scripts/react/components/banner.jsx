function urlify (url) {
  return 'url(' + R(url) + ')';
}

var BannerClass = [

].join(' ')

module.exports = React.createClass({render: function () {
	return (
    <div id='m-banner'
      className={BannerClass}
      style={{
        backgroundImage: urlify('/images/sky.jpeg'),
        backgroundSize: 'cover'
      }}
    ><div className=''>
        SCORE BOX
      </div>
    </div>
	);
}});