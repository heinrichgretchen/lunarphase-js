import { CycleStart } from "./constants/CycleStart";
import { Hemisphere } from "./constants/Hemisphere";

export type MoonOptions = {
  readonly cycleStart: CycleStart;
  readonly hemisphere: Hemisphere;
};

export const MoonOptionsFactory = (): MoonOptions => ({
  cycleStart: CycleStart.EVENT,
  hemisphere: Hemisphere.NORTHERN,
});
