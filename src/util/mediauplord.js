const supabaseUrl = "https://sbydttltmkejghhyamer.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNieWR0dGx0bWtlamdoaHlhbWVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc5NjE4NDIsImV4cCI6MjA3MzUzNzg0Mn0.BDAoRT8Exw2AAm-I-gm8bsdRDfso55WTcAdFJoPZMZ0";

import { createClient } from "@supabase/supabase-js";
 const supabase = createClient(supabaseUrl, supabaseKey);
export function Mediauplord(file) {
  return new Promise( (resolve, reject) => {
    if (file == null) {
      reject("file not added");
      return;
    }

    // extension check
    const extance = file.name.split(".").pop().toLowerCase();
    if (extance !== "jpg" && extance !== "png") {
      reject("plz uplord photos only");
      return;
    }

   
    const timelaps = new Date().getTime();
    const newfilename = timelaps + file.name+ "." + extance;

    try {
      // upload to supabase bucket "cbcpic"
      const { error } =  supabase.storage
        .from("cbcpic")
        .upload(newfilename, file, { cacheControl: "3600", upsert: false });

      if (error) {
        reject(error.message);
        return;
      }

      // get public url
      const { data } = supabase.storage.from("cbcpic").getPublicUrl(newfilename);
      resolve(data.publicUrl);
    } catch (err) {
      reject(err.message);
    }
  });
}
