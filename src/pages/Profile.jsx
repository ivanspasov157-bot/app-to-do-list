import ProfileSidebar from "../profile_components/ProfileSidebar";
import ProfileStats from "../profile_components/ProfileStats";
import RecentActivity from "../profile_components/RecentActivity";
import TaskCategories from "../profile_components/TaskCategories";
import { useState } from "react";
import { supabase } from "../supabase/supabase";

function ProfilePage({tasks, session,profile,
  setProfile,}){

const [isEditing, setIsEditing] = useState(false);
const [editName, setEditName] = useState("");
const [editProfession, setEditProfession] = useState("");



function handleEditClick() {
  setEditName(profile?.name || "");
  setEditProfession(profile?.profession || "");
  setIsEditing(true);
}

async function handleProfileSave() {
  if (!session) return;

  const { data, error } = await supabase
    .from("profiles")
    .upsert({
      id: session.user.id,
      name: editName,
      profession: editProfession,
    })
    .select()
    .single();

  if (error) {
    console.error("Profile update error:", error);
    return;
  }

  setProfile(data);
  setIsEditing(false);
  
}



   // how profile page is structured
    return (
    <main className="grid grid-cols-1 gap-4 p-4 md:grid-cols-[300px_1fr] md:gap-6 md:p-6">

      <ProfileSidebar session = {session}
      profile={profile}
       onEdit={handleEditClick}
        />

      <section className="flex h-full flex-col gap-6">

        <ProfileStats tasks={tasks} />

        <div className="grid flex-1 grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
          <TaskCategories tasks={tasks}/>
          <RecentActivity tasks={tasks}/>
        </div>

      </section>
 {/* Edit Profile popup */}
    {isEditing && (
      <div className="fixed z-50 inset-0 flex items-center justify-center bg-black/60">
        <div className="mx-4 w-full h-full max-w-96 rounded-xl border border-zinc-800 bg-zinc-900 p-6">

          <h2 className="mb-4 text-xl font-semibold text-white">
            Edit Profile
          </h2>

          <input
            className="mb-3 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white"
            value={editName}
            onChange={(event) => setEditName(event.target.value)}
            placeholder="Name"
          />

          <input
            className="mb-4 w-full rounded-lg border border-zinc-700 bg-zinc-800 px-4 py-2 text-white"
            value={editProfession}
            onChange={(event) => setEditProfession(event.target.value)}
            placeholder="Profession"
          />

          <div className="flex gap-3 h-full">
            <button
              onClick={handleProfileSave}
              className="flex-1 rounded-lg bg-violet-600 px-4 py-2 text-white"
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              className="flex-1 rounded-lg bg-zinc-700 px-4 py-2 text-white"
            >
              Cancel
            </button>
          </div>

        </div>
      </div>
    )}


    </main>

  );
}

export default ProfilePage;