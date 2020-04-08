/* global split */
/* global merge */
/* global mergeSort */

const mergeFunc = { split, merge, mergeSort };

describe("Split Array function", function () {
  it("handles an empty array", function () {
    expect(mergeFunc.split([])).toEqual([[]]);
  });

  it("handles an array with 1 item", function () {
    const array = [5];
    expect(mergeFunc.split(array)).toEqual([[5]]);
  });

  it("is able to split an array into two halves", function () {
    expect(mergeFunc.split([7, 3, 4, 1, 6])).toEqual([
      [7, 3],
      [4, 1, 6],
    ]);
    expect(mergeFunc.split([9, 2, 8, 1, 5, 0])).toEqual([
      [9, 2, 8],
      [1, 5, 0],
    ]);
  });
});

describe("Merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    // test the merging algorithm
    expect(mergeFunc.merge([1, 3], [4, 6, 7])).toEqual([1, 3, 4, 6, 7]);
    expect(mergeFunc.merge([0, 1, 2], [5, 8, 9])).toEqual([0, 1, 2, 5, 8, 9]);
    expect(mergeFunc.merge([3, 5, 6], [2, 8, 9])).toEqual([2, 3, 5, 6, 8, 9]);
  });
});

describe("mergeSort function", function () {
  it("sorts array of length 0", function () {
    expect(mergeFunc.mergeSort([])).toEqual([]);
  });
  it("sorts array of length 1", function () {
    expect(mergeFunc.mergeSort([12])).toEqual([12]);
  });
  it("is able to sort an odd length array", function () {
    expect(mergeFunc.mergeSort([12, 2, 6, 32, 13, 9, 15])).toEqual([
      2,
      6,
      9,
      12,
      13,
      15,
      32,
    ]);
  });

  it("is able to sort an even length array", function () {
    expect(mergeFunc.mergeSort([12, 2, 6, 32, 13, 9])).toEqual([
      2,
      6,
      9,
      12,
      13,
      32,
    ]);
  });
});
