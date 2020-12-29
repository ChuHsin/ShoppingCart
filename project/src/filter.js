export function cateFilter(cate, itemsArray, items) {
    let newItemsArray = [];
    if (cate !== '') {
        itemsArray.forEach(element => {
            if (items[element].itemCategory === cate) {
                newItemsArray.push(element);
            }
        });
        itemsArray = newItemsArray;
    }
    return itemsArray;
}

export function keyWordsFilter(keyWords, itemsArray, items) {
    let newItemsArray = [];
    if (keyWords !== '') {
        console.log(keyWords);

        itemsArray.forEach(element => {
            console.log(items[element].itemName.replace(/\s+/g, '').toLowerCase().indexOf(keyWords));

            if (items[element].itemName.replace(/\s+/g, '').toLowerCase().indexOf(keyWords) >= 0) {
                newItemsArray.push(element);
            }
        });
        itemsArray = newItemsArray;
        console.log(itemsArray);
    }
    return itemsArray;
}

