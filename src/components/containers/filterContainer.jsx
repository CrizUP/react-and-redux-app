import { connect } from 'react-redux'
import Filter from '../pure/filter'
import { setVisibilityFilter } from '../../store/actions/actions'


const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.filterState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {        
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }

}
const FilterContainer = connect(mapStateToProps, mapDispatchToProps)(Filter);

export default FilterContainer;