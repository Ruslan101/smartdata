function mapStateToProps(component) {
	switch (component) {
		case "Main": {
			return function (state) {
				return {
					activePage: state.activePage
				};
			}
		}
		default: return undefined;
	}
}

export default mapStateToProps;