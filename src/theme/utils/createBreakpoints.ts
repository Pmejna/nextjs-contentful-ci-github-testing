export type BreakpointsProps<TValues extends { [key: string]: number | string }> = {
    values: TValues;
    unit?: string;
    step?: number;
  };
  
  export type BreakpointsDefinition<TValues extends { [key: string]: number | string }> = {
    keys: Array<keyof TValues>;
    values: TValues;
    up: (key: keyof TValues | number, prependMedia?: boolean) => string;
    down: (key: keyof TValues | number, prependMedia?: boolean) => string;
    between: (start: keyof TValues | number, end: keyof TValues | number, prependMedia?: boolean) => string;
    only: (key: keyof TValues | number, prependMedia?: boolean) => string;
    width: <TKey extends keyof TValues>(key: TKey) => TValues[TKey];
  };
  
  const getPrefix = (prependMedia: boolean) => (prependMedia ? '@media ' : '');
  
  export const createBreakpoints = <TValues extends { [key: string]: number | string }>(
    breakpoints: BreakpointsProps<TValues>,
  ): BreakpointsDefinition<TValues> => {
    const { values, unit = 'px', step = 5, ...other } = breakpoints;
  
    const keys: Array<keyof TValues> = Object.keys(values) as unknown as Array<keyof TValues>;
  
    const up = (key: keyof TValues | number, prependMedia = true): string => {
      const predefinedValue = values[key as keyof TValues];
      const value = typeof predefinedValue === 'number' ? predefinedValue : (key as string | number);
      return `${getPrefix(prependMedia)}(min-width:${value}${unit})`;
    };
  
    const down = (key: keyof TValues | number, prependMedia = true): string => {
      const endIndex = keys.indexOf(key as keyof TValues) + 1;
      const upperbound = values[keys[endIndex]];
  
      if (endIndex === keys.length) {
        // Down from the biggest breakpoint applies to all sizes
        return up(0);
      }
  
      const value = typeof upperbound === 'number' && endIndex > 0 ? upperbound : (key as number);
      return `${getPrefix(prependMedia)}(max-width:${value - step / 100}${unit})`;
    };
  
    const between = (start: keyof TValues | number, end: keyof TValues | number, prependMedia = true): string => {
      const endIndex = keys.indexOf(end as keyof TValues);
  
      if (endIndex === keys.length - 1) {
        return up(start);
      }
  
      const predefinedValue = values[keys[endIndex + 1]];
  
      return (
        `${getPrefix(prependMedia)}(min-width:${
          typeof values[start as keyof TValues] === 'number' ? values[start as keyof TValues] : (start as string | number)
        }${unit}) and ` +
        `(max-width:${
          (endIndex !== -1 && typeof predefinedValue === 'number' ? predefinedValue : (end as number)) - step / 100
        }${unit})`
      );
    };
  
    const only = (key: keyof TValues | number, prependMedia = true) => between(key, key, prependMedia);
  
    function width<TKey extends keyof TValues>(key: TKey): TValues[TKey] {
      return values[key];
    }
  
    return {
      keys,
      values,
      up,
      down,
      between,
      only,
      width,
      ...other,
    };
  };
  