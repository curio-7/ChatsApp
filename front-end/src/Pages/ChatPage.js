// import { ChatState } from "../Context/ChatProvider"
// import { Box } from "@chakra-ui/layout";
// import SideDrawer from "../components/misc/SideDrawer";
// import ChatBox from "../components/ChatBox"
// import MyChats from "../components/MyChats"

// const ChatPage = () => {
//     const { user } = ChatState();
//   return (
//     <div style = {{width:"100%"}}>
//         {user && <SideDrawer />}
//         {/* if user is present then divide it into two boxes chat and menu. */}
//         <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
//         {user && <MyChats  />}
//         {user && (
//           <ChatBox  />
//         )}
//       </Box>
//     </div>
//   )
// }

// export default ChatPage
import { Box } from "@chakra-ui/layout";
import { useState } from "react";
import Chatbox from "../components/ChatBox";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/misc/SideDrawer";
import { ChatState } from "../Context/ChatProvider";

const Chatpage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default Chatpage;