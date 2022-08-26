import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChattGatorProvider } from "chattgator-chat-kit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChattGatorProvider
			value={{
				projectConfig: {
					projectId: "6303ce473c0028aeb8e79460",
					projectSecret: "aWSocXyx_62V",
				},
				user: {
					projectId: "6303ce473c0028aeb8e79460",
					name: "Test User 2",
					userId: "ajshdhd2",
					avatar: "https://avatars.githubusercontent.com/u/80971056",
					userName: "testtest",
					bio: "Hey there, I'm using Chat app",
				},
			}}>
			<App />
		</ChattGatorProvider>
	</React.StrictMode>
);
