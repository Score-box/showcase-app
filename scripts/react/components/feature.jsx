var FeatureListClass = [
  'compat-container'
].join(' ')

var CategoryFeatureList = React.createClass({
  render: function () {
    var classTotal = [];
    var classGiver = function (numberOfItems) {
      var col2 = function (numberOfItems) {
        var class2 = [];
        if (numberOfItems % 2 === 0) {
          for (var i = 1; i <= numberOfItems; i++) {
            class2.push(2);
          }
        }
        else {
          for (var i = 1; i < numberOfItems; i++) {
            class2.push(2);
          }
          class2.push(1);
        }
        classTotal.push(class2);
    };
      var col3 = function (numberOfItems) {
        var class3 = [];
        switch(numberOfItems) {
          case 1:
            class3 = [1];
            break;

          case 2 :
            class3 = [2,2];
            break;

          case 3 :
            class3 = [3,3,3];
            break;

          case 4 : 
            class3 = [2, 2, 2, 2];
            break;

          case 5 :
            class3 = [3,3,3,2,2];
            break;

          case 6 :
            class3 = [3,3,3,3,3,3];
            break;

          case 7 :
            class3 = [3,3,3,3,3,3,2];
            break;

          case 8 :
            class3 = [3,3,3,3,3,3,2,2];
            break;

          case 9 :
            class3 = [3,3,3,3,3,3,3,3,3];
            break;

          case 10 :
            class3 = [3,3,3,3,3,3,2,2,2,2];
            break;

          case 11 :
            class3 = [3,3,3,3,3,3,3,3,3,2,2];
            break;

          case 12 :
            class3 = [3,3,3,3,3,3,3,3,3,3,3,3];
            break;

        }
      classTotal.push(class3);
     };
      var col4 = function (numberOfItems) {
        var class4 = [];
        switch(numberOfItems) {
          case 1:
            class4 = [1];
            break;

          case 2 :
            class4 = [2,2];
            break;

          case 3 :
            class4 = [3,3,3];
            break;

          case 4 : 
            class4 = [4, 4, 4, 4];
            break;

          case 5 :
            class4 = [3,3,3,2,2];
            break;

          case 6 :
            class4 = [3,3,3,3,3,3];
            break;

          case 7 :
            class4 = [3,3,3,3,3,3,2];
            break;

          case 8 :
            class4 = [4,4,4,4,4,4,4,4];
            break;

          case 9 :
            class4 = [4,4,4,4,3,3,3,2,2];
            break;

          case 10 :
            class4 = [4,4,4,4,4,4,4,4,2,2]; 
            break;

          case 11 :
            class4 = [4,4,4,4,4,4,4,4,3,3,3];
            break;

          case 12 :
            class4 = [4,4,4,4,4,4,4,4,4,4,4,4];
            break; 
        }
        classTotal.push(class4);
     };
      col2(numberOfItems);
      col3(numberOfItems);
      col4(numberOfItems);
      return classTotal;
};

    var numberOfItems = this.props.category.features.length;
    classGiver(numberOfItems);

    var featuresList = this.props.category.features.map( function (feature, index) {
      var classProp = [];
      for(var i = 0; i < classTotal.length; i++) {
        classProp.push(classTotal[i][index])
      }
      return <FeatureItem key={feature.id} feature={feature} classProp={classProp}/>;
     });
    return <div className={FeatureListClass}>{featuresList}</div>;
  }
});


var FeatureItem = React.createClass({
  render: function () {
    var FeatureItemClass = [
          'compat-feature',
          'compat-pageWrapper'
        ].join(' ');
    var feature = this.props.feature;
    var classProp= this.props.classProp;
    for (var i = 0; i < classProp.length; i++) {
      FeatureItemClass += " col-" + (i + 2 ) + "-" + classProp[i];
    }
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