import { connect } from 'react-redux';
import SignIn from '../Registration/sigIn';
import MapDispatchToProps from '../../store/mapDispatchToProps';

const SignIn_w = connect(null, MapDispatchToProps("SignIn"))(SignIn);

export default SignIn_w;