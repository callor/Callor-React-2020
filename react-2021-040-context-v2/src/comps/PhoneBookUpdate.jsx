import { usePhoneUpdateContext } from "../context/PhoneContextProvider";
/**
 * 버튼을 클릭하면 App.js에 선언된 message state에 변화를 준다.
 * 이때 App.js 에 선언된 state들을 중간의 MessageMain을 거쳐서 전달받아야 하나
 * Context를 사용하므로써 필요한 곳에서 직접 값을 참조하고 사용할 수 있다
 */
const PhoneBookUpdate = () => {
    const { phone, setPhone } = usePhoneUpdateContext();

    const onChange = (e) => {
        const { name, value } = e.target;
        setPhone({ ...phone, [name]: value });
    };

    return (
        <div>
            <label>이름</label>
            <input name="p_name" onChange={onChange} />
            <label>전화번호</label>
            <input name="p_tel" onChange={onChange} />
            <label>E-mail</label>
            <input name="p_email" onChange={onChange} />
        </div>
    );
};

export default PhoneBookUpdate;
