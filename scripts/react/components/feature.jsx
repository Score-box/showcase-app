
var FeatureItemClass = [
  'compat-feature'
].join(' ')

var FeatureListClass = [

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

        <div className=''>
          <img className='compat-feature-img' src={R(feature.img.src)} alt={feature.img.alt}/>
          <div className=''>
            <b>{feature.title}</b>
          </div>
        </div>

        <div className=''>
          <div className=''>
            {feature.text}
          </div>
        </div>

      </div>
    );
  }
});

module.exports=FeatureList;