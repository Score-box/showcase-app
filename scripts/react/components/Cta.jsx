module.exports = React.createClass({
	render: function () {
		var currentPage = this.props.currentPage
	
		var style = {}
		
	
		if(currentPage === 0) {
			style.visibility = 'visible' 
		}else {
			style.visibility = this.props.visibility ? 'visible' : 'hidden'
		}
		
		
		return (
			<div className='cta-togglable' style={style}>
				<h3>Découvrez notre beta en avant première </h3>
				<form action="#" method="POST">
					<fieldset>
						<input type="email" id="email" placeholder="Email" required autofocus></input>
					</fieldset>
					<fieldset>
						<input type="submit"></input>
					</fieldset>
				</form>
			</div>
			);
	}
})
