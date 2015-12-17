
var FeatureItemClass = [
  'compat-feature',
  'compat-page'
].join(' ')

var FeatureListClass = [
  'compat-container'
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

        <div className='sub-page'>
          <div className="compat-imgFeatWrapper">
            <img className='compat-feature-img' src={R(feature.img.src)} alt={feature.img.alt}/>
          </div>
          <div className='compat-feature-title'>
            <h3>{feature.title}</h3>
          </div>
        </div>

        <div className='sub-page'>
          <div className='compat-feature-content'>
            <p>{feature.text}</p>
          </div>
        </div>

      </div>
    );
  }
});

module.exports=FeatureList;