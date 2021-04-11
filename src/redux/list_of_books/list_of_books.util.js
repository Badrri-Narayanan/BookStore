const AppendToBookList = (bookList, newBookItem) => {
    let newBookList = [
        ...bookList,
        newBookItem
    ]
    return newBookList
}

export default AppendToBookList;