import { useBookInsertContext } from "../context/ContextProvider";
import BookView from "./BookView";
import CaButton from "../callor/CaButton";
import { useCallback, useEffect, useRef } from "react";
/**
 * 버튼을 클릭하면 App.js에 선언된 message state에 변화를 준다.
 * 이때 App.js 에 선언된 state들을 중간의 MessageMain을 거쳐서 전달받아야 하나
 * Context를 사용하므로써 필요한 곳에서 직접 값을 참조하고 사용할 수 있다
 */
const BookInsert = () => {
    const { book, setBook, bookList, setBookList } = useBookInsertContext();

    const nextId = useRef(bookList.length);
    const nameId = useRef();
    const genreId = useRef();
    console.log(nextId, nameId, genreId);
    useCallback(
        useEffect(() => {
            setBook({ ...book, b_id: nextId.current });
            nextId.current++;
            console.log("effect");
        }, [book, setBook]),
        []
    );

    const onChange = (e) => {
        console.log("onChange");
        const { name, value } = e.target;
        /**
         * 키보드 change가 있어야만 id값이 새로 생성된다.
         * 최초에 시작할때는 문제가 있다
         */
        setBook({ ...book, [name]: value, b_id: nextId.current });
    };

    const bookInsert = () => {
        if (book.b_name === "") {
            alert("도서명을 입력해 주세요");
            nameId.current.focus();
            return;
        }
        if (book.b_genre === "") {
            alert("장르를 입력해 주세요");
            genreId.current.focus();
            return;
        }

        setBook({ ...book, b_id: nextId.current });
        setBookList([...bookList, book]);
    };

    return (
        <>
            <div className="input_box">
                <label>도서명</label>
                <input
                    name="b_name"
                    onChange={onChange}
                    value={book.b_name}
                    ref={nameId}
                />
                <label>장르</label>
                <input
                    name="b_genre"
                    onChange={onChange}
                    value={book.b_genre}
                    ref={genreId}
                />
                <button onClick={bookInsert}>리스트 추가</button>
            </div>
            <BookView />
        </>
    );
};

export default BookInsert;
