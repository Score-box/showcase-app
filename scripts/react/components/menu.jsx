function urlify (url) {
  return 'url(' + R(url) + ')';
}

var MenuItem = React.createClass({
  render:function () {
    var style = {
      backgroundImage: urlify(this.props.data.url)
    }
    return <div className='menu-item' style={style}/>
  }
})

module.exports = React.createClass({
  render: function () {
    var icons = [
      '/images/ic_menu_black_48dp_1x.png',
      '/images/ic_expand_more_black_48dp_1x.png',
      '/images/ic_expand_less_black_48dp_1x.png',
      '/images/logoV12_center_256gold_transparent.png'
    ]
    var inner = icons.map(function (url) {
      return <MenuItem data={{url:url}}/>
    })

    return (
      <div className='mobile-menu'>{inner}</div>
    );
  }
});
