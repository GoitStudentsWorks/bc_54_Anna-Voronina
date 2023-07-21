import Select, { components } from 'react-select';
import {
  SelectIcon,
  selectStyles,
  selectStylesCategory,
} from './CustomSelect.styled';

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
    <>
      {nameOfSelect === 'category' ? (
        <Select
          components={{ DropdownIndicator }}
          defaultValue={options ? options[0] : null}
          options={options}
          styles={selectStylesCategory}
          onChange={onChange}
          name={nameOfSelect}
        />
      ) : (
        <Select
          components={{ DropdownIndicator }}
          defaultValue={options ? options[0] : null}
          options={options}
          styles={selectStyles}
          onChange={onChange}
          name={nameOfSelect}
        />
      )}
    </>
  );
};
