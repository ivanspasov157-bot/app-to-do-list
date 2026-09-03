import { useState } from "react";
import { supabase } from "../supabase/supabase";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSignup() {
     setErrorMessage("");

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    console.error("Signup error:", error);
    setErrorMessage(error.message);
    return;
  }

  console.log("Signup successful:", data);
  navigate("/");
  }
  // handles the login of guests specifically
  async function handleGuestLogin() {
  setErrorMessage("");

  const { data, error } =
    await supabase.auth.signInAnonymously();

  if (error) {
    console.error("Guest login error:", error);
    setErrorMessage("Could not start guest session.");
    return;
  }

  console.log("Guest login successful:", data);
  navigate("/");
}
  async function handleLogin() {
    setErrorMessage("");

  const { data, error } =
    await supabase.auth.signInWithPassword({
      email,
      password,
    });

  if (error) {
    console.error("Login error:", error);
    setErrorMessage(error.message);
    return;
  }

  console.log("Login successful:", data);
  navigate("/");
  }

  
  return (
  <main className="flex min-h-screen items-center justify-center">
    <div className="flex w-80 flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <h1 className="text-2xl font-bold text-white">
        Account
      </h1>

      <input
        className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <input
        className="rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-3 text-white"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />

       {errorMessage && (
        <p className="text-sm text-red-400">
          {errorMessage}
        </p>
      )}


      <button
        className=" cursor-pointer
    rounded-lg
    bg-violet-600
    px-4 py-3
    text-white
    transition
    hover:bg-violet-500
    hover:shadow-lg
    active:scale-[0.98]
    active:bg-violet-700"
        onClick={handleSignup}
      >
        Sign Up
      </button>

      <button
        className=" cursor-pointer
    rounded-lg
    bg-zinc-700
    px-4 py-3
    text-white
    transition
    hover:bg-zinc-600
    active:scale-[0.98]
    active:bg-zinc-800"
        onClick={handleLogin}
      >
        Log In
      </button>
       <button
       onClick={handleGuestLogin}
       className="cursor-pointer
    rounded-lg
    bg-zinc-700
    px-4 py-3
    text-white
    transition
    hover:bg-zinc-600
    active:scale-[0.98]
    active:bg-zinc-800"
      >
      Continue as Guest
</button>
    </div>
  </main>
  );
}

export default Auth;