import React from "react";
import Parent from "./Parent";
import AccountInfor from "../../Components/Account/AccountInfor";

const AccountParent = () => {
  return (
    <div>
      <Parent>
        <AccountInfor />
      </Parent>
    </div>
  );
};

export default AccountParent;
