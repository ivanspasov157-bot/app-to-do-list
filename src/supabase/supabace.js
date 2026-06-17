
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://srxaqhksvnhzqjxdbfsg.supabase.co";
const supabaseKey = "sb_publishable_CplhoIzjSeV3HpctO2vFcA_TScliqwi";

export const supabase = createClient (supabaseUrl, supabaseKey);
