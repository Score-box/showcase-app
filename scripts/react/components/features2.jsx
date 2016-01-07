function col2 (n) {
  var ret = Array(n).fill(2);
  if (n % 2)
    ret[n - 1] = 1;
  return ret;
}
function col3 (n) {
  if (n / 3 < 1)
    return Array(n).fill(n)
  if (n % 3 == 0)
    return Array(n).fill(3)
  if (n % 3 == 2)
    return Array(n).fill(3).fill(2, n-2)
  return Array(n).fill(3).fill(2, n-4)
}
function col4 (n) {
  if (n / 4 < 1)
    return Array(n).fill(n)
  if (n % 4 == 0)
    return Array(n).fill(4)
  if (n % 4 == 3)
    return Array(n).fill(4).fill(3, n-3)
  if (n % 4 == 2)
    return Array(n).fill(4).fill(3, n-6)
  return Array(n).fill(4).fill(3, n-5).fill(2, n-2)
}

var Page = require('./compatPage.jsx');
var Container = require('./compatContainer.jsx');
var FeatureItem = React.createClass({
  render: function () {
    var feature = this.props.feature;
    var pageClassName =
      "col2-" + this.props.cols[0] +
      " col3-" + this.props.cols[1] +
      " col4-" + this.props.cols[2];
    return (
      <Page
        id={feature.key}
        className={pageClassName}
      >
        <div>
          <img src={R(feature.img.src)} alt={feature.img.alt}/>
          <h2>{feature.title}</h2>
        </div>
        <p>{feature.text}</p>
      </Page>
    );
  }
});
var FeatureList = React.createClass({
  render: function () {
    var list = this.props.list;
    var length=list.length
    var cols = [col2(length), col3(length), col4(length)];
    var index = 0;
    return (
      <Container>
        {
          list.map(function (feature) {
            return (
              <FeatureItem
                cols = {[cols[0][index], cols[1][index], cols[2][index++]]}
                key={feature.key}
                feature={feature}
              >
              </FeatureItem>
            );
          })
        }
      </Container>
    );
  }
});
var FeatureSectionHeader = React.createClass({
  render: function () {
    var header = this.props.header;
    return (
      <div className="feature-section-header">
        <h3>{header.title}</h3>
        <h4>{header.subtitle}</h4>
      </div>
      );
  }
});
var FeatureSection = React.createClass({
  render: function () {
    var section = this.props.section;
    return (
      <div className="feature-section">
        <Container className="header-container"><Page className="header-page-wrapper"><FeatureSectionHeader header={section.header}/></Page></Container>
        <FeatureList list={section.features}/>
      </div>
    );
  }
});
var Features = React.createClass({
  render: function () {
    var features = this.props.features;
    return (
      <div className="features">
        {
          features.map( function (section) {
            return (
              <FeatureSection
                key={section.key}
                section={section}
              ></FeatureSection>
              );
          })
        }
      </div>
    );
  }
});

module.exports=Features;