import  transaccions  from "./Transactions/transactions.json";
import  data from "./stadistics/data.json";
import  friends from "./friends/friends.json";
import  user from "./socialProfile/user.json";


import FriendListItem from "./friends/friends";
import Stadistics from "./stadistics/stadistics";
import TransactionHistory  from "./Transactions/transactions";
import  Perfil  from "./socialProfile/social";
export const App = () => {
  return (
    <>
    <h1>hola</h1>
    <Perfil
     username={user.username}
     tag={user.tag}
     location={user.location}
     avatar={user.avatar}
     stats={user.stats}
     />

     <Stadistics title="Uploads stats" stats={data} />

     <FriendListItem friends={friends} />

     <TransactionHistory items={transaccions} />
    </>
  );
};
