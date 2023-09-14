//This is a helper function that mutates an array of objects when called, it takes an iterable and an array of data to read from

export function includeImagesInArray(objArray: any, imgArray: string[]) {
  objArray?.forEach((tool: any, index: any) => {
    //at each index, create a new property: "img"
    // pass the value from frontendimages base on the index

    tool.img = imgArray[index];
  });
}
