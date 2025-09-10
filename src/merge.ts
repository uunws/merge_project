export interface IMerger {
  merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[];
}

export class Merger implements IMerger {
  private mergeFunc(arr1: number[], arr2: number[]): number[] {
    const merged: number[] = [];
    let i = 0; 
    let j = 0; 

    while (i < arr1.length && j < arr2.length) {
      if (arr1[i]! < arr2[j]!) {
        merged.push(arr1[i]!);
        i++;
      } else {
        merged.push(arr2[j]!);
        j++;
      }
    }

    while (i < arr1.length) { // if still have remaining col1
      merged.push(arr1[i]!);
      i++;
    }

    while (j < arr2.length) { // if still have remaining col2
      merged.push(arr2[j]!);
      j++;
    }

    return merged;
  }

  public merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
  ): number[] {

    const reversed_collection_3 = [...collection_3].reverse();

    const tmp = this.mergeFunc(collection_1, collection_2);

    const finalMerged = this.mergeFunc(tmp, reversed_collection_3);

    return finalMerged;
  }
}

// will run when npm start
function main() {
    console.log("--- Running ---");
    const merger = new Merger();

    const collection_1 = [1, 3, 5, 10];
    const collection_2 = [2, 4, 6, 12];
    const collection_3 = [15, 11, 8, 7];

    console.log("Collection 1 (asc):", collection_1);
    console.log("Collection 2 (asc):", collection_2);
    console.log("Collection 3 (desc):", collection_3);

    const result = merger.merge(collection_1, collection_2, collection_3);

    console.log("\nSorted Array by ascending:");
    console.log(result);
    console.log("----------------------------");
}

// This should now work without errors after the tsconfig changes.
if (require.main === module) {
    main();
}