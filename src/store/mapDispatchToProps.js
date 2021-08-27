import { bindActionCreators } from 'redux';
import ROUTE_TO_NEXT_PAGE from './actionCreators/route_to_next_page';

function mapDispatchToProps(component) {
	switch (component) {
		case "NavigationOption": return function (dispatch) {
			return {
				change_activePage: bindActionCreators(ROUTE_TO_NEXT_PAGE, dispatch)
			};
		};
		case "SignIn": return function (dispatch) {
			return {
				change_activePage: bindActionCreators(ROUTE_TO_NEXT_PAGE, dispatch)
			};
		};
		default: return undefined;
	}
}

export default mapDispatchToProps; 