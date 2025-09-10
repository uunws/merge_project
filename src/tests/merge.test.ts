import { Merger } from '../merge';

describe('Merger', () => {
  let merger: Merger;

  beforeEach(() => {
    merger = new Merger();
  });

  test('test1', () => {
    const collection_1 = [1, 2, 3];
    const collection_2 = [4, 5, 6];
    const collection_3 = [9, 8, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    expect(merger.merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('test2', () => {
    const collection_1 = [1, 5, 10];
    const collection_2 = [2, 5, 12];
    const collection_3 = [20, 10, 1];
    const expected = [1, 1, 2, 5, 5, 10, 10, 12, 20];
    expect(merger.merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('test3', () => {
    const collection_1 = [1, 3, 5];
    const collection_2: number[] = [];
    const collection_3 = [10, 8, 6];
    const expected = [1, 3, 5, 6, 8, 10];
    expect(merger.merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('test4', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const expected: number[] = [];
    expect(merger.merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('test5', () => {
    const collection_1 = [1, 2, 3, 4, 5];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const expected = [1, 2, 3, 4, 5];
    expect(merger.merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('test6', () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3 = [5, 4, 3, 2, 1];
    const expected = [1, 2, 3, 4, 5];
    expect(merger.merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  test('test7', () => {
    const collection_1 = [100, 200];
    const collection_2 = [1, 2, 3, 4, 5];
    const collection_3 = [99, 50, 6];
    const expected = [1, 2, 3, 4, 5, 6, 50, 99, 100, 200];
    expect(merger.merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  // test('test8', () => {
  //   const collection_1 = [-10, -5, 0, 5];
  //   const collection_2 = [-8, 2, 8];
  //   const collection_3 = [10, 0, -1, -9];
  //   const expected = [-10, -9, -8, -5, -1, 0, 0, 2, 5, 8, 10];
  //   expect(merger.merge(collection_1, collection_2, collection_3)).toEqual(expected);
  // });
});