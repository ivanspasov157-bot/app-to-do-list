import { Pencil } from "lucide-react";


// since when you are a memmber
function ProfileSidebar({session, profile, onEdit, }) {
  const memberSince = session?.user?.created_at
  ? new Date(session.user.created_at).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  : "";
// check is user is anonymous 
  const isGuest = session?.user?.is_anonymous;
// last time you sighned in
  const lastSignIn = session?.user?.last_sign_in_at
  ? new Date(session.user.last_sign_in_at).toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    })
  : "";
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-900 p-6">

      <div className="flex flex-col items-center text-center">

        {/* Profile image */}
        <div className="relative">
          <img
            src="https://placehold.co/120x120"
            alt="Profile"
            className="h-24 w-24 rounded-full object-cover"
          />

          <button
            className="
              absolute bottom-0 right-0
              flex h-7 w-7 items-center justify-center
              rounded-full
              bg-violet-600
              text-white
            "
          >
            <Pencil size={14} />
          </button>
        </div>

        {/* User information */}
        <h2 className="mt-4 text-xl font-semibold text-white">
          {profile?.name || (isGuest ? "Guest" : "No username")}
        </h2>

        <p className="mt-1 text-sm text-zinc-400">
            {profile?.profession || (isGuest ? "Guest account" : "No profession")}
        </p>

        <p className="mt-1 text-sm text-zinc-500">
          {session?.user?.email}
        </p>

        {/* Edit button */}
        <button
          onClick={onEdit}
          className="mt-5 w-full 
          rounded-lg 
          bg-violet-600 
          px-4 py-2 text-sm 
          font-medium 
          text-white 
          hover:bg-violet-500"
        >
          Edit Profile
        </button>

        {/* Additional account info */}
        <div
          className="
            mt-6 w-full
            border-t border-zinc-800
            pt-5
            text-sm
          "
        >
          <div className="mb-4">
            <p className="text-zinc-500">
              Member since
            </p>

            <p className="mt-1 text-zinc-300">
              {memberSince}
            </p>
          </div>

          <div>
            <p className="text-zinc-500">
              Last active
            </p>

            <p className="mt-1 text-zinc-300">
              {lastSignIn}
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default ProfileSidebar;