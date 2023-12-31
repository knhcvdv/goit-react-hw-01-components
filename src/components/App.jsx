import { Profile } from "./profile/profile";
import user from '../user.json'
import statistics from '../statistics.json'
import { Friends } from "./friends/friends";
import friends from '../friends.json'
import { TransactionHistory } from "./transactionHistory/transactionHistory";
import transactionData from '../transactionData.json'
import { Statistics } from "./statistics/Statistics";
export const App = () => {
  return (
    <div>
      <Profile 
        username={user.username} 
        tag={user.tag} 
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics 
        title={'Upload stats'}
        Roma={statistics}
      />

      <Friends 
      friends={friends}
      />
      <TransactionHistory data={transactionData}/>
    </div>
  );
};
