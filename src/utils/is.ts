export type Is = (arg: any) => boolean;

export interface IIs extends Is {
  string: Is;
  array: Is;
  object: Is;
  number: Is;
  function: Is;
}

export interface NIIs extends IIs {
  not: IIs;
}

export const is: NIIs = arg => !!arg;
is.not = (arg => !arg) as IIs;
is.string = arg => typeof arg === "string";
is.not.string = arg => is.not(is.string(arg));
is.array = arg => Array.isArray(arg);
is.not.array = arg => is.not(is.array(arg));
is.object = arg => is(arg) && typeof arg === "object" && is.not.array(arg);
is.not.object = arg => is.not(is.object(arg));
is.number = arg => typeof arg === "number";
is.not.number = arg => is.not(is.number(arg));
is.function = arg => typeof arg === "function";
is.not.function = arg => is.not(is.function(arg));
