import React from "react";
import Head from "next/head";
import AppLayout from "../components/AppLayout";
import "./JoinForm.css";

const App = ({ Component }) => {
  return (
    <>
      <Head>
        <title>Callor LMS 2021</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.1/antd.js"></script>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default App;
