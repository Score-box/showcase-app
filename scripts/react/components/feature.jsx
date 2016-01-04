
var FeatureItemClass = [
  'compat-feature',
  'compat-pageWrapper'
].join(' ')

var FeatureListClass = [
  'compat-container'
].join(' ')

var CategoryFeatureList = React.createClass({
  render: function () {
    var featuresList = this.props.category.features.map( function (feature) {
          return <FeatureItem key={feature.id} feature={feature}/>;
        });
    return <div className={FeatureListClass}>{featuresList}</div>;
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
        <div className="compat-page">
          <div className='compat-subPage'>
            <div className="compat-imgFeatWrapperCont">
              <div className="compat-imgFeatWrapper">
                <div className="compat-feature-img">
                  <img src={R(feature.img.src)} alt={feature.img.alt}/>
                </div>
                <div className='compat-feature-title'>
                  <h3>{feature.title}</h3>
                </div>
              </div>
            </div>
          </div>

          <div className='compat-subPage'>
            <div className='compat-feature-content'>
              <p>{feature.text}</p>
            </div>
          </div>

        </div>
      </div>
    );
  }
});


module.exports=CategoryFeatureList;