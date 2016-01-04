var CategoryFeatureList = require('./feature.jsx');


var CategoriesListClass = [
  ''
].join(' ');

var categoryCSSClass = [
  'compat-containerWrapper'
].join('.');


var CategoriesList = React.createClass({
  render: function () {
    var list = this.props.categories.map( function (category) {
      return <Category key={category.id} category={category}/>
    });
    return <div className={CategoriesListClass}>{list}</div>;
  }
});

var Category = React.createClass({
  render: function () {
    var category = this.props.category;
    var CategoryClass = {};
    return (
      <div style={CategoryClass} className={categoryCSSClass}>
         
          <CategoryFeatureList category={category}/>
      </div>
    );
  }
});

module.exports = CategoriesList;