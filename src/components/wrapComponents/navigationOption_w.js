import { connect } from 'react-redux';
import NavigationOption from '../Layout/navigationOption';
import MapDispatchToProps from '../../store/mapDispatchToProps';

const NavigationOption_w = connect(null, MapDispatchToProps("NavigationOption"))(NavigationOption);

export default NavigationOption_w;