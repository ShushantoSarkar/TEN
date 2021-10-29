import React from "react";
import { ProfileAlumni } from "./AlumniProfile";
import "./css/AlumniTeam.css";

function AlumniTeam({ profile }) {
  return (
    <div className="alumni">
      <div className="alumniHeading">
        <h1>Alumni Team</h1>
      </div>

      <br />
      <div className="alumniGrid">
        {ProfileAlumni.map((profile, iname) => {
          return (
            <div key={iname} className="alumniTeam">
              <img
                className="alumniImg"
                src={profile.image}
                alt={profile.alt}
              />
              <br />
              <a style={{ color: "Black" }} href={profile.link}>
                <u>{profile.name}</u>​
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AlumniTeam;
