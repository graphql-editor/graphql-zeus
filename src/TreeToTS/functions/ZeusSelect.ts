import { StringFunction } from './models';

export const ZeusSelectFunction: StringFunction = {
  ts: `export const ZeusSelect = <T>() => ((t: any) => t) as SelectionFunction<T>;`,
  js: `export const ZeusSelect = () => (t) => t`,
};
