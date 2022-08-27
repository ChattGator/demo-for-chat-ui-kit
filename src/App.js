import {
	Container,
	RecentChatContainer,
	ChatContainer,
	ProfileContainer,
} from "chattgator-chat-kit";

function App() {
	return (
		<Container>
			<RecentChatContainer />
			<ChatContainer />
			<ProfileContainer />
		</Container>
	);
}

export default App;
