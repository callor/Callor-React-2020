import { usePhoneInsertContext } from "../context/PhoneContextProvider";
const PhoneBookListView = () => {
    const { phoneBook } = usePhoneInsertContext();

    const viewList = phoneBook.map((phone, index) => {
        return (
            <tr key={phone.p_id}>
                <td>{index + 1}</td>
                <td>{phone.p_name}</td>
                <td>{phone.p_tel}</td>
                <td>{phone.p_email}</td>
            </tr>
        );
    });

    return (
        <table className="phoneBook_list">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>이름</th>
                    <th>전화번호</th>
                    <th>email</th>
                </tr>
            </thead>
            <tbody>{viewList}</tbody>
        </table>
    );
};

export default PhoneBookListView;
