import { useEffect } from "react";
import { supabase } from "../supabase/supabace";

function Dashboard() {
    
    useEffect(()=>{
        async function fetchTasks() {
            
            console.log("useEffect is running");
            const {data,error} = await supabase
            .from("Tasks")
            .select("*");

            console.log(data);
            console.log(error);

        }
        fetchTasks();
    },[]);
    
    return(<div className="border-4 outline outline-white bg-red-600 w-screen">
    <div className="border-4 outline outline-white h-1/3 ">
        <div className="border-4 outline outline-white w-64 place-self-center " >
            search bar 
        </div>
        list of tasks

    
    </div>
   
   <div className=" flex h-2/3">
    <div className="border-4 outline outline-white w-1/2"> 
        diagram
    </div>
    <div className="border-4 outline outline-white w-1/2">
        words
    </div>
    </div>
    
    
    
    </div>



    );
}
export default Dashboard;