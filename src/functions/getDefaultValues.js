import TreeStore from "../store/treeStore";

export const getDefaultValues = () => {
    let defaultArray = [];
    defaultArray.push(new TreeStore('1', 'Node1'));
    defaultArray[0].setData([
        new TreeStore('1.1', 'Node2', [
            new TreeStore('1.1.1', 'Node3'),
            new TreeStore('1.1.2', 'Node4')
        ]),
        new TreeStore('1.2', 'Node5')
    ]);
    return defaultArray;
}

export function getRootObject() {
    return {_id: '0', _name: 'root', _data: []};
}