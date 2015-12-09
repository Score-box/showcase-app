function urlify (url) {
  return 'url(' + R(url) + ')';
}

module.exports = React.createClass({render: function () {
	return (
      <div id='banner' className='page mobile-section'style={{backgroundImage: urlify('/images/sky.jpeg'), backgroundSize: 'cover'}}>
        <div className='title'>
          SCORE BOX
        </div>
        <div className='cta'>
          <div>follow us on facebook</div>
          <div>discover our incoming features</div>
        </div>
      </div>
	);
}});