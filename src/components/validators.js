export const required = value => (value ? undefined : 'Required');

export const nonEmpty = value =>
    value.trim() !== '' ? undefined : 'Can\'t Be Empty';

export const isTrimmed = value =>
value.trim() === value ? undefined : 'Can\'t Start Or End With Whitespace';

export const length = length => value => {
    if (length.min && value.length < length.min) {
        return `Must Be At Least ${length.min} Characters`;
    }
    if (length.max && value.length > length.max) {
        return `Must Be At Most ${length.max} Characters Long`;
    }
};

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does Not Match';

export const unSelected = value => {
  if (value === undefined) value = '';
  return value.trim() !== '' ? undefined : 'Please Select';
}
