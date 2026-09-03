
import './App.css'
import Navbar from"./components/navbar"
import TasksPage from './pages/Tasks'
import HomePage from './pages/Home'
import ProfilePage from './pages/Profile'
import {Routes, Route } from "react-router-dom"
import { useState, useEffect } from 'react'
import { supabase } from "./supabase/supabase"
import Auth from "./pages/Auth"; 


function App() {


const [tasks, setTasks] = useState([])
const [session, setSession] = useState(null)
const [profile, setProfile] = useState(null)
const [authLoading, setAuthLoading] = useState(true)

// Authentication
useEffect(() => {
  supabase.auth.getSession().then(({ data }) => {
    setSession(data.session);
    setAuthLoading(false);
  });

  const { data: authListener } =
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    
  return () => {
    authListener.subscription.unsubscribe();
  };
}, []);


// fetch profile name and job 
useEffect(() => {
  async function fetchProfile() {
    if (!session) {
      setProfile(null);
      return;
    }

    const { data, error } = await supabase
      .from("profiles")
      .select("name, profession")
      .eq("id", session.user.id)
      .maybeSingle();

    if (error) {
      console.error("Error fetching profile:", error);
      return;
    }

    setProfile(data);
  }

  fetchProfile();
}, [session]);
// Fetch task 
 useEffect(() => {
  async function fetchTasks() {
    if (!session) {
      setTasks([]);
      return;
    }


    const { data, error } = await supabase
      .from("Tasks")
      .select("*");
    


    if (error) {
      console.error("Error fetching tasks:", error);
      return;
    }

    setTasks(data);
  }

  fetchTasks();
}, [session]);

async function handleLogout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Logout error:", error);
    return;
  }

  setTasks([]);
  setProfile(null)
}
  

if (authLoading) {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <p className="text-zinc-400">
        Loading...
      </p>
    </main>
  );
}
if (!session) {
  return <Auth />;
}
  return (
    
   
    <div className="flex min-h-screen " >
   
    {/* Shared sidebar */}
    <Navbar onLogout={handleLogout} />

    {/* Area where pages change */}
    <div className="flex-1 pb-20 md:pb-0">
    <Routes>
    <Route path="/" element={<HomePage 
                    tasks={tasks}/>} />

    <Route path="/tasks" element={<TasksPage 
                tasks={tasks}
                setTasks={setTasks}/>} />
    <Route path="/profile" element={<ProfilePage tasks={tasks} 
                                    session={session}
                                    profile={profile}
                                    setProfile={setProfile}
/>} />
    
    </Routes>
    </div>
     </div>
     
  )
}

export default App
