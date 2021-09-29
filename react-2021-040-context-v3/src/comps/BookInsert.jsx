import { useBookInsertContext } from "../context/ContextProvider";
import BookView from "./BookView";
import CaButton from "../callor/CaButton";
/**
 * 버튼을 클릭하면 App.js에 선언된 message state에 변화를 준다.
 * 이때 App.js 에 선언된 state들을 중간의 MessageMain을 거쳐서 전달받아야 하나
 * Context를 사용하므로써 필요한 곳에서 직접 값을 참조하고 사용할 수 있다
 */
const BookInsert = () => {
    const { book, setBook, bookList, setBookList } = useBookInsertContext();

    const onChange = (e) => {
        console.log("onChange");
        const { name, value } = e.target;
        setBook({ ...book, [name]: value });
    };

    const bookInsert = () => {
        console.log("insert");
        setBookList([...bookList, book]);
    };

    return (
        <>
            <div className="input_box">
                <label>도서명</label>
                <input name="b_name" onChange={onChange} value={book.b_name} />
                <label>장르</label>
                <input
                    name="b_genre"
                    onChange={onChange}
                    value={book.b_genre}
                />
                <CaButton onClick={bookInsert}>리스트 추가</CaButton>
            </div>
            <BookView />
        </>
    );
};

export default BookInsert;
