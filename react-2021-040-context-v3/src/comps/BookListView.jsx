import { useBookInsertContext } from "../context/ContextProvider";
const BookListView = () => {
    const { bookList } = useBookInsertContext();

    const viewList = bookList.map((book, index) => {
        return (
            <tr key={book.b_id}>
                <td>{book + 1}</td>
                <td>{book.b_name}</td>
                <td>{book.b_genre}</td>
            </tr>
        );
    });

    return (
        <table className="book_list">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>도서명</th>
                    <th>장르</th>
                </tr>
            </thead>
            <tbody>{viewList}</tbody>
        </table>
    );
};

export default BookListView;