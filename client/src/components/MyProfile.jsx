import { useAtom } from "jotai";
import { useEffect } from "react";
import state from "./AtomStates";
import CaloriesCalculator from "./CaloriesCalculator";

export default function MyProfile() {
  const [showMyProfile, setShowMyProfile] = useAtom(state.showMyProfile);
  const [user, setUser] = useAtom(state.user);

  useEffect(() => {
    fetch(`http://localhost:3001/api/getuser/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, [showMyProfile]);

  return (
    <div className="my-profile">
      <h2>Name : {user.name}</h2>
      <p>Email : {user.email}</p>
      <p>Calories target/day : {user.kcal ? user.kcal : "No target yet"}</p>
      <CaloriesCalculator useremail={user.email} informations={user.informations} />
      <button onClick={() => setShowMyProfile(false)}>Back</button>
    </div>
  );
}
