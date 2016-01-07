var Container = React.createClass({
  render: function () {
    var className = "compat-container-wrapper";
    if (this.props.className) {
      className += " " + this.props.className;
    }
    return (
      <div className={className} id={"compat-container-wrapper-" + this.props.id}>
        <div className="compat-container" id={"compat-container-" + this.props.id}>
          {this.props.children}
        </div>
      </div>
    );
  }
});
module.exports=Container;