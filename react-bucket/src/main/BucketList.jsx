import React, { Component } from "react";
import BucketItem from "./BucketItem";

class BucketList extends Component {
  render() {
    const { bucketList, handleCancel } = this.props;

    const list = bucketList.map((bucket) => (
      <BucketItem
        key={bucket.b_id}
        bucket_update={this.props.bucket_update}
        bucketItem={bucket}
        changFlag={this.props.changFlag}
        handleCancel={handleCancel}
      />
    ));

    /*
    const list1 = bucketList.map(bucket => {
      return <BucketItem key={bucket.id} bucketItem={bucket} />;
    });
    */

    return (
      <section className="w3-container-fluid">
        <table className="w3-table w3-table-all">
          <tr>
            <th>FLAG</th>
            <th>추가일자</th>
            <th>BUCKET</th>
            <th>완료</th>
            <th>취소</th>
          </tr>
          {list}
        </table>
      </section>
    );
  }
}

export default BucketList;
