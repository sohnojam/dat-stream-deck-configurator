function shallowCompare(_a, _b) {
  const a = _a || {}
  const b = _b || {}
  return Object.keys(a).length === Object.keys(b).length &&
    Object.keys(a).every(key =>
      typeof(a[key]) === typeof(b[key]) &&
      (typeof(a[key]) === 'object' ? shallowCompare(a[key], b[key]) : a[key] === b[key])
    )
}

export default shallowCompare