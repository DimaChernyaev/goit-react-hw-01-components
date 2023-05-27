import CreateProfileBoard from "Components/Profile/CreateProfileBoard/CreateProfileBoard";
import user from 'user.json';
import CreateStatistics from "Components/Statistics/CreateStatistics/CreateStatistics";
import data from 'data.json';
import CreateFriendList from "Components/FriendList/CreateFriendList/CreateFriendList";
import friends from 'friends.json'
import CreateTransactionTable from "Components/UserTransactionHistory/CreateTransactionTable/CreateTransactionTable";
import transactions from 'transactions.json'


function App() {
  return (
    <div>
      <CreateProfileBoard 
        username={user.username}
        location={user.location}
        tag={user.tag}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.followers}
        likes={user.stats.likes}
      />

      <CreateStatistics 
        title="Upload stats"
        data={data}
      />

      <CreateFriendList
        friends={friends}
      />

      <CreateTransactionTable
        transaction={transactions}
      />
    </div>
  );
}

export default App;
