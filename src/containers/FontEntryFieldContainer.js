import {connect} from 'react-redux';
import FontEntryField from '../components/FontEntryField';

import {addFont} from '../actions';

const mapStateToProps = state => ({
  link: state.font.fontLink,
});

const mapDispatchToProps = dispatch => ({
  addLink: link => dispatch (addFont (link)),
});

const FontEntryFieldContainer = connect (mapStateToProps, mapDispatchToProps) (
  FontEntryField
);

export default FontEntryFieldContainer;
