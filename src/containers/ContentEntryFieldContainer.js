import { connect } from 'react-redux';
import ContentEntryField from '../components/ContentEntryField';
import { changeTextareaValue, transformToHtmlTags } from '../actions';

const mapStateToProps = state => ({
	content: state.contentGeneration.content
});

const mapDispatchToProps = dispatch => ({
	onTextareaChange: (val) => {
		dispatch(changeTextareaValue(val));
	},
	onHtmlScreenChange: (arr) => {
		dispatch(transformToHtmlTags(arr));
	}
});

const ContentEntryFieldContainer = connect(
	mapStateToProps,
	mapDispatchToProps
)(ContentEntryField);

export default ContentEntryFieldContainer;