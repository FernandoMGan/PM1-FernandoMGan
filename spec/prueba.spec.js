const {Activity, Repository} = require("../scripts/index");

describe("demo", function () {
  it("Este test debe pasar siempre", function () {
    expect(4 + 2).toBe(6);
  });
  it("Este test debe compprobar coincidencia", function () {
    expect(4).toBe(4);
    expect(2).toBe(2);
    expect(6).toBe(6);
    expect(1).toBe(1);
  });
});
