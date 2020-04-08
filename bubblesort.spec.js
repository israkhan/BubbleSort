/* global bubbleSort */
/* global swap */

const sortingFunc = { bubbleSort, swap };

describe("Bubble Sort", function () {
  beforeEach(function () {
    const sortingFunc = {
      swap,
      bubbleSort,
    };

    spyOn(sortingFunc, "swap").and.callThrough();
  });

  // beforeAll(function () {
  //   spyOn(sortingFunc, "swap");
  // });

  xit("handles an empty array", function () {
    expect(sortingFunc.bubbleSort([])).toEqual([]);
  });

  xit("handles an array with 1 item", function () {
    const array = [5];
    expect(sortingFunc.bubbleSort(array)).toEqual([5]);
  });

  xit("handles an array with multiple items", function () {
    expect(sortingFunc.bubbleSort([5, 2, 3, 6, 4, 9, 1])).toEqual([
      1,
      2,
      3,
      4,
      5,
      6,
      9,
    ]);
  });

  xit("return the number of swaps required to sort an array", function () {
    sortingFunc.bubbleSort([2, 60, 24, 13]);
    expect(sortingFunc.swap.calls.any()).toEqual(true);
    expect(sortingFunc.swap.calls.count()).toEqual(7);

    //expect(sortingFunc.swap.calls.count()).toEqual(7);
  });
});
