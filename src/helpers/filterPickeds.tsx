const filterPickeds = (publications) => {
    const filterItems = (items, condition) => {
        return items.filter(item => item.picked === condition);
    };

    let filteredItems = filterItems(publications, true);
    return filteredItems;
}

export default filterPickeds