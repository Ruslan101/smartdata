import { connect } from 'react-redux';
import NavigationOption from '../Layout/navigationOption';
import MapDispatchToProps from '../../store/mapDispatchToProps';
import mapStateToProps from '../../store/mapStateToProps'; 

const NavigationOption_w = connect(mapStateToProps("NavigationOption"), MapDispatchToProps("NavigationOption"))(NavigationOption);

export default NavigationOption_w;