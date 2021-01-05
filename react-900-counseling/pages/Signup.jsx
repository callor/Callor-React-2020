import React, { useState } from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import { Form, Input, Button } from "antd";

const TextInput = memo(({ value, onChange, name, type }) => {
  return <Input type={type} name={name} value={value} required onChange={onChange} />;
});
const Signup = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      id,
      nick,
      password,
      passwordCheck,
      term,
    });
  };

  //반복되는 코드들을 Coustom Hook을 활용하여 줄여줄 수 있다.
  const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
      setter(e.target.value);
    }, []);
    return [value, handler];
  };

  const [user_id, onChangeUserId] = useInput("");
  const [user_name, onChangeUserName] = useInput("");
  const [tel, onChangeTel] = useInput("");

  return (
    <>
      <Head>
        <title>NodeBird</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js"></script>
      </Head>
      <AppLayout>
        <Form onSubmit={onSubmit} style={{ padding: 10 }}>
          <div>
            <label htmlFor="user-id">이메일</label>
            <br />
            <TextInput name="user-id" value={user_id} required onChange={onChangeUserId} />
          </div>
          <div>
            <label htmlFor="user-name">이름</label>
            <br />
            <TextInput name="user-name" value={user_name} required onChange={onChangeUserName} />
          </div>
          <div>
            <label htmlFor="user-tel">휴대폰번호</label>
            <br />
            <TextInput name="user-tel" value={tel} required onChange={onChangeTel} />
          </div>
          <div style={{ marginTop: 10 }}>
            <Button type="primary" htmlType="submit">
              저장하기
            </Button>
          </div>
        </Form>
      </AppLayout>
    </>
  );
};

export default Signup;
