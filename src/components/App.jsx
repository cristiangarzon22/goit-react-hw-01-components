import  transaccions  from "../data/transactions.json";
import  data from "../data/data.json";
import  friends from "../data/friends.json";
import  user from "../data/user.json";


import FriendList from "./friends/FriendList";
import Stadistics from "./stadistics/stadistics";
import Transaccion from "./Transactions/transactions1";
import  Perfil  from "./socialProfile/social";
export const App = () => {
  return (
    <>
    <Perfil
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     />

     <Stadistics title="Uploads stats" stats={data} />

     <FriendList friends={friends} />

     <Transaccion items={transaccions} />
    </>
  );
};
