import React from "react";

const QuoteList = ({ quotes }) =>
  quotes.map(quote => (
    <li key={quote.b_id}>
      {quote.b_date} : {quote.b_subject}
    </li>
  ));

export default QuoteList;
