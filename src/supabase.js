import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qcjtfhdojwytifpjpqty.supabase.co";

const supabaseKey =
  "sb_publishable_VOffilxT6Y9XEQtA8--V0A_HuRKolsV";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);