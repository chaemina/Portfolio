import React, { useState } from "react";
import Button from "../atom/Button";
import { handleLogin, handleLogout } from "../hooks/useLogin";

const LoginCard = () => {
  const [nickName, setNickName] = useState("");
  const [token, setToken] = useState("");
  const [storedNickName, setStoredNickName] = useState("");

  return (
    <>
      <main className="flex flex-col min-h-[70%] space-y-4">
        {!token ? (
          <>
            <p className="text-2xl ">Enter your NickName</p>
            <input
              className="border border-2 border-purple-300 rounded-lg  w-[30%] h-[15%] p-4"
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
            />
            <Button
              onClick={() =>
                handleLogin(nickName, setToken, setStoredNickName, setNickName)
              }
              className="w-[30%] h-[70%] bg-purple-500 text-white hover:text-purple-500 hover:bg-white hover:border-purple-500"
            >
              Login
            </Button>
          </>
        ) : (
          <>
            <p className="text-2xl animate-bounce ">Hi {storedNickName}</p>
            <Button
              onClick={() => handleLogout(setToken)}
              className="w-[30%] h-[70%] bg-purple-500 text-white hover:text-purple-500 hover:bg-white hover:border-purple-500"
            >
              Logout
            </Button>
          </>
        )}
      </main>
    </>
  );
};
export default LoginCard;
