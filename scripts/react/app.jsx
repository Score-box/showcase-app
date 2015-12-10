var FeatureList = require('./components/feature.jsx');
var Banner = require('./components/banner.jsx');
var Menu = require('./components/menu.jsx');
var Footer = require('./components/footer.jsx');
var Summary = require('./components/SummaryTogglable.jsx');
var Cta = require('./components/Cta.jsx');

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

var AppClass = [
  'reactApp'
].join(' ')

var ScrollerClass = [
  'm-flex-container-orient',
  'm-scroll-wrapper'
].join(' ')

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
        var _state = {
          currentPage: index,
          ctaTogglable : {
            visibility: (index == 0 || index == self.state.pageList.length - 1) ? true : false
          }
        }
        self.setState (
           _state
        )
      }
    })
    return {
      pageList: pageList,
      navList: navList,
      currentPage: 0,
      summaryTogglabe: {
        visibility: false
      },
    ctaTogglable : {
      visibility: true
    },
      menu: {}
    }
  },toggleCta: function () {
    this.setState({
      ctaTogglable: {
        visibility: (this.state.ctaTogglable.visibility) ? false : true
      }
    })
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
      <div className={AppClass}>
        <Menu
          toggleSummary={this.toggleSummary}
          up={this.navUp()}
          down={this.navDown()}
          toggleCta={this.toggleCta}/>
        <Summary
          anchors={this.state.pageList}
          currentPage={this.state.currentPage}
          visible={this.state.summaryTogglabe.visibility}/>
        <Cta
          visibility={this.state.ctaTogglable.visibility}
          currentPage={this.state.currentPage}/>
        <div
          id='m-scroll-wrapper'
          className={ScrollerClass}
          data-page={this.state.currentPage}
        >
          <Banner/>
          <FeatureList features={FEATURES}/>
          <Footer/>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <App/>, document.getElementById('react-content')
);