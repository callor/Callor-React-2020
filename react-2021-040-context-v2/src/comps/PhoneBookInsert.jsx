import { usePhoneInsertContext } from "../context/PhoneContextProvider";
/**
 * 버튼을 클릭하면 App.js에 선언된 message state에 변화를 준다.
 * 이때 App.js 에 선언된 state들을 중간의 MessageMain을 거쳐서 전달받아야 하나
 * Context를 사용하므로써 필요한 곳에서 직접 값을 참조하고 사용할 수 있다
 */
const PhoneBookInsert = () => {
    const { phone, setPhone, phoneBook, setPhoneBook } =
        usePhoneInsertContext();

    const onChange = (e) => {
        console.log("onChange");
        const { name, value } = e.target;
        setPhone({ ...phone, [name]: value });
    };

    const phoneBookInsert = () => {
        setPhoneBook([...phoneBook, phone]);
    };

    return (
        <div className="input_box">
            <label>이름</label>
            <input name="p_name" onChange={onChange} value={phone.p_name} />
            <label>전화번호</label>
            <input name="p_tel" onChange={onChange} value={phone.p_tel} />
            <label>E-mail</label>
            <input name="p_email" onChange={onChange} value={phone.p_email} />
            <button onClick={phoneBookInsert}>리스트 추가</button>
        </div>
    );
};

export default PhoneBookInsert;
