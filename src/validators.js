export const required = value => value ? undefined : 'Required';

export const notEmpty = value => 
  value.trim() !== '' ? undefined : 'This field must contain a value';