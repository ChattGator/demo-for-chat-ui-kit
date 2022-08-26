import {
	Container,
	RecentChatContainer,
	ChatContainer,
	ProfileContainer,
} from "chattgator-chat-kit";

function App() {
	return (
		<div>
			<Container>
				<RecentChatContainer />
				<ChatContainer />
				<ProfileContainer />
			</Container>
		</div>
	);
}

export default App;
