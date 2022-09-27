export function getObjectById(id, treeStructure) {
    const nestingArray = id.split('.');
    let tempObject = {};
    let tempArray = treeStructure;

    for (let i = 0; i < nestingArray.length; i++) {
        const temp = findInArray(i, nestingArray[i], tempArray);
        if (temp) {
            tempObject = temp;
            tempArray = tempObject._data;
        }
    }
    return tempObject;
}

function findInArray(index, id, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i]._id.split('.')[index] === id) {
            return array[i];
        }
    }
}