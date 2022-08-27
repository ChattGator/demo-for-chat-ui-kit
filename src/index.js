import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChattGatorProvider } from "chattgator-chat-kit";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<ChattGatorProvider
		value={{
			projectConfig: {
				projectId: "6309eebfbfb6d50eb37b26b5",
				projectSecret: "515gQkG0Ap1e",
			},
			user: {
				projectId: "6309eebfbfb6d50eb37b26b5",
				name: "Ishant Juyal",
				userId: "ishan_juyal",
				avatar: "https://pbs.twimg.com/profile_images/1487513325357264897/1EbO1o2h_400x400.jpg",
				userName: "ishan_juyal",
				bio: "Hey there, twitter is using me!",
			},
		}}>
		<App />
	</ChattGatorProvider>
);
