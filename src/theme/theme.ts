import type { ThemeBreakpoints } from "./foundation/breakpoints";
import { breakpoints } from "./foundation/breakpoints";
import type { ColorPalette } from "./foundation/colors";
import { colors } from "./foundation/colors";
import type { ThemeElevations } from "./foundation/elevations";
import { elevations } from "./foundation/elevations";
import type { ThemeTransitions } from "./foundation/transitions";
import { transitions } from "./foundation/transitions";

 export type Theme = {
   breakpoints: ThemeBreakpoints;
   colors: ColorPalette;
   transitions: ThemeTransitions;
   elevations: ThemeElevations;
 };

 export const theme = {
   breakpoints,
   colors,
   transitions,
   elevations,
 };