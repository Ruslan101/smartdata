import { connect } from 'react-redux';
import Main from '../main';
import mapStateToProps from '../../store/mapStateToProps';

const Main_w = connect(mapStateToProps("Main"), null)(Main);

export default Main_w;