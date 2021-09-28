import { createContext, useContext, useState } from "react";

const PhoneContext = createContext();

const usePhoneInsertContext = () => {
    const context = useContext(PhoneContext);
    return context;
};

const PhoneContextProvider = ({ children }) => {
    const [phone, setPhone] = useState({
        p_id: 1,
        p_name: "",
        p_tel: "",
        p_email: "",
    });

    const [phoneBook, setPhoneBook] = useState([]);
    // Provider에 JSON객체 type으로 묶어서 전달할 것
    const providorData = {
        phone,
        setPhone,
        phoneBook,
        setPhoneBook,
    };
    return (
        <div>
            <PhoneContext.Provider value={providorData}>
                {children}
            </PhoneContext.Provider>
        </div>
    );
};

export { PhoneContextProvider, usePhoneInsertContext };
