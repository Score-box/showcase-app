
var FeatureList = React.createClass({
  render: function () {
    var list = this.props.features.map( function (feature) {
      return <FeatureItem key={feature.title} feature={feature}/>;
    });
    return <div className="featureList">{list}</div>;
  }
});

var FeatureItem = React.createClass({
  render: function () {
    var feature = this.props.feature;
    return (
      <div className='mobile-section'>
        <div className='mobile-image-title'>
          <img className='mobile-image' src={R(feature.img.src)} alt={feature.img.alt}/>
        </div>
        <div className='mobile-up-left'>
          <div className='mobile-catch-text'>
          <b>{feature.title}</b>
          </div>
        </div>
        <div className='mobile-down-right'>
          <div className='mobile-detail-text'>
            {feature.text}
          </div>
        </div>
      </div>
    );
  }
});

module.exports=FeatureList;