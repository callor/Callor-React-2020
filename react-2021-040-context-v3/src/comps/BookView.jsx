import { useBookInsertContext } from "../context/ContextProvider";
const BookView = () => {
    const { book } = useBookInsertContext();
    return (
        <div className="book_view">
            <p>도서명 :{book.b_name} </p>
            <p>장르 :{book.b_genre} </p>
        </div>
    );
};

export default BookView;
