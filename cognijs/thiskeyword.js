function testThis() {
  const this.name = "max";
  return this.name;
}

console.log(testThis() === undefined);
