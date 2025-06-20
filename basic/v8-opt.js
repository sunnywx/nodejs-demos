function add(a, b) {
  return a + b;
}

for (let i = 0; i < 10000; i++) {
  add(i, i + 1); // Call with consistent types
}

// Potentially trigger optimization
add(10001, 10002);