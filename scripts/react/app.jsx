var FeatureList = require('./components/feature.jsx');
var Banner = require('./components/banner.jsx');
var Menu = require('./components/menu.jsx');
var Footer = require('./components/footer.jsx');
var Summary = require('./components/SummaryTogglable.jsx');

var FEATURES = [
  {
    img: {
      src: '/images/ping_pong.png',
      alt:'Ping Pong'
    },
    title: 'Partagez vos plus belles victoires !',
    text: 'Ajoutez une photo, commentez votre match et partagez le sur vos réseaux sociaux préférés.',
    id:'whatever'
  },{
    img: {
      src:'/images/ping_pong.png',
      alt:'Ping Pong'
    },
    title:'Géolocalisez vos adversaires !',
    text:'Trouvez un terrain, des groupes actifs, ou recherchez simplement votre adversaire du lendemain, la géolocalisation vous permet de trouver vos futurs adversaires en un clic !',
    id:'idem'
  }
];

var App = React.createClass({
  getInitialState: function () {
    var self = this;
    var pageList = [{
        name: 'Score Box',
        id: 'banner'
      },{
        name: FEATURES[0].title,
        id: FEATURES[0].id
      },{
        name: FEATURES[1].title,
        id: FEATURES[1].id
      },{
        name: 'More',
        id: 'footer'
      }];
    var navList = pageList.map(function(page, index) {
      return function () {
        self.setState ({
          currentPage: index
        })
      }
    })
    return {
      pageList: pageList,
      navList: navList,
      currentPage: 0,
      summaryTogglabe: {
        visibility: false
      },
      menu: {}
    }
  },toggleSummary: function () {
    this.setState({
      summaryTogglabe: {
        visibility: (this.state.summaryTogglabe.visibility) ? false : true
      }
    })
  },changePage: function (page) {
    this.setState({
      currentPage: page
    })
  },navArray: function (){

  },navUp: function (){
    if (this.state.currentPage <= 0) {
      return null
    } else {
      return this.state.navList[this.state.currentPage - 1]
    }
  },navDown: function (){
    if (this.state.currentPage >= this.state.navList.length - 1) {
      return null
    } else {
      return this.state.navList[this.state.currentPage + 1]
    }
  },render:function () {
    return (
      <div className='reactApp'>
        <Menu toggleSummary={this.toggleSummary} up={this.navUp()} down={this.navDown()}/>
        <Summary
          anchors={this.state.pageList}
          currentPage={this.state.currentPage}
          visible={this.state.summaryTogglabe.visibility}/>
        <Banner/>
        <FeatureList features={FEATURES}/>
        <Footer/>
      </div>
    );
  }
});



ReactDOM.render(
  <App/>, document.getElementById('react-content')
);