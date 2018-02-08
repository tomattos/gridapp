import { connect } from 'react-redux';
import HtmlScreen from '../components/HtmlScreen';

const mapStateToProps = state => ({
	content: state.tagsGeneration.htmlContent
});

const HtmlScreenContainer = connect(
	mapStateToProps
)(HtmlScreen);

export default HtmlScreenContainer;