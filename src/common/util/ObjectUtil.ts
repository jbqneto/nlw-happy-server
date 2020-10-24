export function notNullableArray<T>(object: T[] | undefined | null): Array<T> {

  if (typeof object === 'undefined' || object == null) {
    return [];
  } else {
    return object;
  }

}

export default {
  notNullableArray
}