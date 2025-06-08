function toChildArray(children, out) {
  out=out || [];
  if (children == null || typeof children == 'boolean') {
  } else if (Array.isArray(children)) {
    children.some(child => {
      toChildArray(child, out);
    });
  } else {
    out.push(children);
  }
  return out;
}

const a=['a', [1,2,3, [4,5]]]

console.log(toChildArray(a))
