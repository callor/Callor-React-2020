import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { firestore } from "../config/BBSConfig";

function BBsDelete() {
    const match = useRouteMatch();
    const docId = match.params.id;
    const router = useHistory();

    if (docId) {
        firestore
            .collection("bbs")
            .doc(docId)
            .delete()
            .then((result) => {
                router.push("/");
            });
    } else {
        router.push(`/detail/${docId}`);
    }
}

export default BBsDelete;
