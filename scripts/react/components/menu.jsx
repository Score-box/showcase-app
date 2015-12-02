function urlify (url) {
  return 'url(' + R(url) + ')';
}

module.exports = React.createClass({
  render: function () {
    return (
      <div className='mobile-menu'>
        <div className='menu-item' style={{backgroundImage: urlify('/images/ic_menu_black_48dp_1x.png')}}/>
        <div className='menu-item' style={{backgroundImage: urlify('/images/ic_expand_more_black_48dp_1x.png')}}/>
        <div className='menu-item' style={{backgroundImage: urlify('/images/ic_expand_less_black_48dp_1x.png')}}/>
        <div className='menu-item' style={{backgroundImage: urlify('/images/logoV12_center_256gold_transparent.png')}}/>
      </div>
    );
  }
});