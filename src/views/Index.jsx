import "../styles/Main.scss";
import OpenSocket from "../API/websockets/OpenSocket";
import CreateToken from "../API/CreateToken";
import CallList from "../components/call/CallList";
import Header from "../components/ui/Header";



export default function PhoneInfo() {

  return (
    <div className="wrapper">
      <Header />
      <CallList />
      <CreateToken />
      <OpenSocket />
    </div>
  );
};

