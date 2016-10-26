export class ObjFieldsProvider {
  getfield(object, path: string) {
    let arrayPath: string[] = path.split('.');
    let ret = object;
    for (let i = 0; i < arrayPath.length && ret != null && typeof ret == 'object'; i++) {
      ret = ret[arrayPath[i]];
    }
    return ret;
  }
}
