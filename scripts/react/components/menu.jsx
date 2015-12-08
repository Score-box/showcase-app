function urlify (url) {
  return 'url(' + R(url) + ')';
}

var MenuItem = React.createClass({
  render:function () {
    var style = {
      backgroundImage: urlify(this.props.data.url)
    }
    if (this.props.onClick == null) {
      style.opacity = 0.2
    }
    return <div onClick={this.props.onClick} className='menu-item' style={style}></div>
  }
})

module.exports = React.createClass({
  render: function () {
    var icons = [
      '/images/ic_menu_black_48dp_1x.png',
      '/images/ic_expand_less_black_48dp_1x.png',
      '/images/ic_expand_more_black_48dp_1x.png',
      '/images/logoV12_center_256gold_transparent.png'
    ]
    var self = this;
    var inner = icons.map(function (url, index) {
      if (index==0) {
        return <MenuItem onClick={self.props.toggleSummary} data={{url:url}}/>
      } else if (index==1) {
        return <MenuItem onClick={self.props.up} data={{url:url}}/>
      } else if (index==2) {
        return <MenuItem onClick={self.props.down} data={{url:url}}/>
      } else {
        return <MenuItem onClick={function (){}} data={{url:url}}/>
      }
    })

    return (
      <div className='mobile-menu'>{inner}</div>
    );
  }
});
