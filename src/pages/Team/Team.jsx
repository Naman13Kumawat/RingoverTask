import "./Team.scss";

import Navbar from "../../components/Navbar/Navbar";
import TeamCard from "../../components/TeamCard/TeamCard";

import { team } from "../../data/team.js";

export default function Team() {
  return (
    <>
      <Navbar page={"team"} />
      <div className="team">
        <h1>
          Without <b>Bonding</b> and <b>Co-ordination</b>, every project is a
          failure.
        </h1>
        <h1>
          Look at who makes <b>KICKUP</b> great. ;)
        </h1>
        <div className="lines"></div>
        <div className="member_container">
          {team.map((member) => {
            return <TeamCard key={member._id} member={member} />;
          })}
        </div>
        <h1>
          and <b>You!</b> ;)
        </h1>
      </div>
    </>
  );
}
