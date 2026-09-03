import { useEffect } from "react";
import { supabase } from "../supabase/supabase";

// this is the dashboard below is the connection with the supabase 
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
    
    return(<div>
    
    </div>



    );
}
export default Dashboard;