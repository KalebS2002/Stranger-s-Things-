import React from "react";
const COHORT_NAME = "2303-FTB-ET-WEB-AM";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;
// const TOKEN_STRING_HERE =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDgwYjE0YTUxMjQxMzAwMTQ0MTExZjEiLCJ1c2VybmFtZSI6ImthbGViUzIwMDIiLCJpYXQiOjE2ODYxNTU1OTR9.zDKJC2eufW-FIDCCHRlP7iJtF0Mu79Btoo2DyfFL3bk";

const FetchMessages = async () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  try {
    const response = await fetch(`${BASE_URL}/posts/${localStorage.token}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.token}`,
      },
    });
    const result = await response.json();
    console.log(result);
    return result;
  } catch (err) {
    console.error(err);
  }
  return <p>this is from messages</p>;
};
export default FetchMessages;
