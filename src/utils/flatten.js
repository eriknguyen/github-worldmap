const flatten = o => {
  return Object.assign(
    {}, 
    ...function _flatten(o) { 
      return [].concat(...Object.keys(o)
        .map(k => 
          typeof o[k] === 'object' ?
            _flatten(o[k]) : 
            ({[k]: o[k]})
        )
      );
    }(o)
  );
};

export default flatten;