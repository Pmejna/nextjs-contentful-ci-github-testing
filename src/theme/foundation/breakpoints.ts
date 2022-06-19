import type { BreakpointsDefinition } from '../utils/createBreakpoints';
import { createBreakpoints } from '../utils/createBreakpoints';

export type ThemeBreakpoints = BreakpointsDefinition<{
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}>;

export const breakpoints: ThemeBreakpoints = createBreakpoints({
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1440,
  },
  unit: 'px',
});
