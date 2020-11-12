import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  render() {
    // parent Component에서 보낸 변수를 받아서 분해한후 사용할 준비하기
    // 이름변환변수 : 원래변수 형태로 분해가능
    const { bucketList, handleFlagChange, updateBucket } = this.props;
    const bItemList = bucketList.map((bucket) => {
      return (
        <BucketItem
          key={bucket.b_id}
          bucket={bucket}
          handleFlagChange={handleFlagChange}
          updateBucket={updateBucket}
          handleCancel={this.props.handleCancel}
          handleComplet={this.props.handleComplet}
        />
      );
    });

    return (
      <section className="w3-container-fluid w3-margin">
        <table className="w3-table w3-table-all">
          <tr>
            <th>FLAG</th>
            <th>날짜</th>
            <th>BUCKET</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
          {bItemList}
        </table>
      </section>
    );
  }
}

export default BucketList;
