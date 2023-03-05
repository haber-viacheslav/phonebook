import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilterValue } from 'redux/contacts/selectors';
import { setFilterValue } from 'redux/contacts/filterSlice';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';

const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectFilterValue);

  const changeFilter = e => {
    const value = e.currentTarget.value.toLowerCase();
    dispatch(setFilterValue(value));
  };
  return (
    <Box>
      <TextField
        id="filter"
        label="Find contacts by name"
        variant="standard"
        value={filterValue}
        onChange={changeFilter}
      />
    </Box>
  );
};

Filter.propTypes = {
  filterValue: PropTypes.string,
};

export default Filter;
