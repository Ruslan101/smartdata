import ROUTE_TO_NEXT_PAGE from '../actions/route_to_next_page';
import initialState from '../initialState';

function activePage_Reducer(state = initialState.activePage, action) {
    switch(action.type) {
        case ROUTE_TO_NEXT_PAGE: return { activePage: action.activePage };
        
        default: return { activePage: state };
    }
}

export default activePage_Reducer;