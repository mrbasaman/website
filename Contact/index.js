import React from "react";
import "./index.css";
export default function Contact() {
  return (
    <article className="main-home">
      <form
        method="post"
        enctype="multipart/form-data"
        action="https://geniecleaning.com.au/?page_id=24"
      >
        Please Fill The Information
        <input type="text" name="wpforms[fields][0]" placeholder="Name" />
        {/* These need to turn into more dynamic shit like above input, the only value that is important is the NAME attribute */}
        <input
          type="hidden"
          name="wpforms[fields][1]"
          placeholder="Name"
          value="basaman91@gmail.com"
        />
        <input type="hidden" name="wpforms[fields][2]" value="i  sage" />
        <input type="hidden" name="wpforms[fields][3]" value="0423728837" />
        <input
          type="hidden"
          name="wpforms[fields][4]"
          value="54/ 392 Jones street"
        />
        {/* DONT FUCK WITH THE BELOW HIDDEN ATTRIBUTES */}
        <input type="hidden" name="wpforms[id]" value="938" />
        <input type="hidden" name="wpforms[author]" value="1" />
        <input type="hidden" name="wpforms[hp]" value="" />
        <input type="hidden" name="wpforms[submit]" value="wpforms-submit" />
        <input type="hidden" name="wpforms[post_id]" value="24" />
        {/* You can change this button */}
        <button type="submit">Submit me yo</button>
      </form>
    </article>
  );
}
