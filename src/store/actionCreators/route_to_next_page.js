import ROUTE_TO_NEXT_PAGE from '../actions/route_to_next_page';

function route_to_next_page(value) {
	return {
		type: ROUTE_TO_NEXT_PAGE,
		activePage: value
	};
}

export default route_to_next_page;