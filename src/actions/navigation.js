export const DISPLAY = 'DISPLAY';
export const display = (component) => ({
  type: DISPLAY,
  component,
});

export const FOCUS_ON = 'FOCUS_ON';
export const focusOn = (focus) => ({
  type: FOCUS_ON,
  focus
})