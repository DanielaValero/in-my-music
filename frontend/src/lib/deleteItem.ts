

function deteleItem(array:Array<unknown>, callback: Function): Array<unknown> {
  const newArray = array.concat([])

  for (let index = 0; index < newArray.length; index++) {
    const element = newArray[index];
    if (callback(element)) {
      newArray.splice(index, 1);
    }
  }

  return newArray
}

export default deteleItem;