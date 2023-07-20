import Select, { components } from 'react-select';
import { SelectIcon, selectStyles } from './CustomSelect.styled';

// const months = [
//   { value: 'January', label: 'January' },
//   { value: 'February', label: 'February' },
//   { value: 'March', label: 'March' },
//   { value: 'April', label: 'April' },
//   { value: 'May', label: 'May' },
//   { value: 'June', label: 'June' },
//   { value: 'July', label: 'July' },
//   { value: 'August', label: 'August' },
//   { value: 'September', label: 'September' },
//   { value: 'October', label: 'October' },
//   { value: 'November', label: 'November' },
//   { value: 'December', label: 'December' },
// ];

const DropdownIndicator = props => {
  return (
    components.DropdownIndicator && (
      <components.DropdownIndicator {...props}>
        <SelectIcon />
      </components.DropdownIndicator>
    )
  );
};

export const CustomSelect = ({ options, onChange, nameOfSelect }) => {
  return (
    <Select
      components={{ DropdownIndicator }}
      defaultValue={options ? options[0] : null}
      options={options}
      styles={selectStyles}
      onChange={onChange}
      name={nameOfSelect}
    />
  );
};
