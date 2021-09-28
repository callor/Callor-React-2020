import { usePhoneUpdateContext } from "../context/PhoneContextProvider";
const PhoneView = () => {
    const { phone } = usePhoneUpdateContext();
    return (
        <div>
            <p>이름 :{phone.p_name} </p>
            <p>전화번호 :{phone.p_tel} </p>
            <p>E-mail :{phone.p_email} </p>
        </div>
    );
};

export default PhoneView;
