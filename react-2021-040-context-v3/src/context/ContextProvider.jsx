import { createContext, useContext, useState } from "react";

const BookContext = createContext();

const useBookInsertContext = () => {
    const context = useContext(BookContext);
    return context;
};

const BookContextProvider = ({ children }) => {
    const [book, setBook] = useState({
        p_id: 1,
        p_name: "",
        p_genre: "",
    });

    const [bookList, setBookList] = useState([]);
    // Provider에 JSON객체 type으로 묶어서 전달할 것
    const providorData = {
        book,
        setBook,
        bookList,
        setBookList,
    };
    return (
        <div>
            <BookContext.Provider value={providorData}>
                {children}
            </BookContext.Provider>
        </div>
    );
};

export { BookContextProvider, useBookInsertContext };
