
var FeatureItemClass = [
  'm-feature-item',
  'm-page',
  'm-flex-box-orient',
  'm-flex-container-orient'
].join(' ')

var FeatureListClass = [
  'm-feature-list',
  'm-flex-box-orient',
  'm-flex-container-orient'
].join(' ')

var FeatureList = React.createClass({
  render: function () {
    var list = this.props.features.map( function (feature) {
      return <FeatureItem key={feature.id} feature={feature}/>;
    });
    return <div className={FeatureListClass}>{list}</div>;
  }
});

var FeatureItem = React.createClass({
  render: function () {
    var feature = this.props.feature;
    return (
      <div
        key={this.props.key}
        id={feature.id}
        className={FeatureItemClass}
      >

        <div className='m-feature-sub'>
          <img className='m-feature-img' src={R(feature.img.src)} alt={feature.img.alt}/>
          <div className='m-feature-title'>
            <b>{feature.title}</b>
          </div>
        </div>

        <div className='m-feature-sub'>
          <div className='m-feature-desc'>
            {feature.text}
          </div>
        </div>

      </div>
    );
  }
});

module.exports=FeatureList;