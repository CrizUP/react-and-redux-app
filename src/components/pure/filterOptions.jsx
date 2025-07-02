import React from 'react';
import FilterContainer from '../containers/filterContainer';

const FilterOptions = () => {
    return (
        <div>

            <FilterContainer filter='SHOW_ALL'>
                ALL
            </FilterContainer>
            <FilterContainer filter='SHOW_COMPLETED'>
                COMPLITED
            </FilterContainer>
            <FilterContainer filter='SHOW_ACTIVE'>
                ACTIVE
            </FilterContainer>

        </div>
    );
}

export default FilterOptions;
