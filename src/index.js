import React from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';

import CodeSlide, { Themes } from './Components/CodeSlide';

import {
	Deck,
	Slide,
	Appear,
	CodePane,
	FlexBox,
	Box,
	Image,
	Heading,
	ListItem,
	OrderedList,
	Quote,
	Text,
	UnorderedList,
	Grid,
	Notes,
	FullScreen,
	Progress,
	Markdown,
	Link,
	createTheme
} from 'spectacle';

import Logo from './assets/images/fcc.svg';
import VSCode from './assets/images/vscode.png';
import GitHub from './assets/images/github.png';

const theme = {

};

const FillBox = styled(Box)`
	flex: 1;
	text-align: ${props => props.textAlign ? props.textAlign : 'left'};
`;

const ListItemLogo = styled.img`
	width: 2.5em;
	height: auto;

	&.github{
		border-radius: 100%;
		background-color: white;
		border: 1px solid white;
	}
`;

const template = () => (
	<FlexBox
		justifyContent="space-between"
		position="absolute"
		bottom={0}
		width={1}
	>
		<FillBox padding="0 1em">
			<FullScreen />
		</FillBox>
		<FillBox>
			<Text fontSize="1em" bold color="#808080" textAlign="center" margin="8px">
				<span style={{ color: '#505050' }}>Author:</span> Jay Watson | Template: <a href="https://www.braedin.com/" target="_blank" style={{ color: '#505050' }}>Braedin.com</a> 
			</Text>
		</FillBox>
		<FillBox padding="0 1em" textAlign="right">
			<Progress />
		</FillBox>
	</FlexBox>
);

const Presentation = () => (
	<Deck loop theme={theme} template={template}>
		<Slide backgroundColor="#0a0a23">
			<Heading size={1}>
				<Image src={Logo} width="100%" />
			</Heading>
			<Heading size={1} fit caps color="white">
				February 2020
			</Heading>
			<Link target="_blank" href="https://github.com/ImBaedin/FCC-January">
				<Text fontSize="1.5em" bold caps color="white">
					View on Github
				</Text>
			</Link>
			<Link target="_blank" href="https://www.braedin.com/FCC-January/complete/">
				<Text fontSize="1.5em" bold caps color="white">
					Finished project
				</Text>
			</Link>
			<Text fontSize="1em" bold color="#505050">
				Navigate with arrows
			</Text>
			<Notes>Let's get started!</Notes>
		</Slide>
		<Slide backgroundColor="#0a0a23">
			<Heading size={1} caps fit color="primary">Basics Review</Heading>
			<OrderedList>
				<ListItem>
					<Appear elementNum={0}>
						HTML - Hyper Text Markup Language
					</Appear>
					<Appear elementNum={1}>Skeleton</Appear>
				</ListItem>
				<br/>
				<ListItem>
					<Appear elementNum={2}>
						CSS - Cascading Style Sheets
					</Appear>
					<Appear elementNum={3}>Make Up</Appear>
				</ListItem>
				<br/>
				<ListItem>
					<Appear elementNum={4}>
						JS - JavaScript
					</Appear>
					<Appear elementNum={5}>Muscle</Appear>
				</ListItem>
			</OrderedList>
		</Slide>
		<Slide
			backgroundColor="#0a0a23"
		>
			<Heading size={1} caps fit color="primary">Stuff You Need</Heading>
			<OrderedList>
				<Appear elementNum={0}>
					<ListItem>Download VS Code <Link target="_blank" href="https://code.visualstudio.com/download">Link</Link> <br /> <ListItemLogo src={VSCode} /></ListItem>
				</Appear>
				<Appear elementNum={1}>
					<ListItem>Download Repository <Link target="_blank" href="https://github.com/ImBaedin/FCC-January">Link</Link> <br /> <ListItemLogo src={GitHub} className="github" /></ListItem>
				</Appear>
				<Appear elementNum={2}>
					<ListItem>Download Live Server Extension</ListItem>
				</Appear>
			</OrderedList>
		</Slide>
		<Slide backgroundColor="#0a0a23">
			<Heading size={1} caps fit color="primary">CSS Basics</Heading>
			<UnorderedList>
				<ListItem>
					<Appear elementNum={0}>
						Clone this <a href="https://codepen.io/jwatson2pt0/pen/rNVWgpY" target="_blank" style={{ color: '#fff' }}>"CSS Basics" CodePen</a>
					</Appear>
					<Appear elementNum={1}>Now, let's get started!</Appear>
				</ListItem>
				<br/>
			</UnorderedList>
		</Slide>
		<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="css"
			code={require("raw-loader!./assets/examples/css-basics/styles.example").default}
			ranges={[
				{ loc: [0, 500], title: "CSS - Basic stuff you should know" },
				{ loc: [34, 34], title: "Get started", backgroundColor: "#223b57", note: "a note..." }
			]} />
		<Slide backgroundColor="#0a0a23">
			<Heading size={1} caps fit color="primary">Horizontal Nav and Simple Toggle</Heading>
			<UnorderedList>
				<ListItem>
					<Appear elementNum={0}>
						Clone this basic <a href="https://codepen.io/jwatson2pt0/pen/YzXpbaM" target="_blank" style={{ color: '#fff' }}>"Nav and Toggle" CodePen</a>
					</Appear>
					<Appear elementNum={1}>Now, "Jocko" it.</Appear>
				</ListItem>
				<br/>
			</UnorderedList>
		</Slide>

		<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="css"
			code={require("raw-loader!./assets/examples/css-basics/styles.example").default}
			ranges={[
				{ loc: [0, 500], title: "Simple Nav and Toggle" },
				{ loc: [34, 34], title: "Get started", backgroundColor: "#223b57", note: "a note..." }
			]} />

		<Slide backgroundColor="#0a0a23">
			<Heading size={1} caps fit color="primary">Now, you'll see why people 💗 flexbox!</Heading>
			<UnorderedList>
				<ListItem>
					<Appear elementNum={0}>
						Clone this <a href="https://codepen.io/jwatson2pt0/pen/rNVWgvp" target="_blank" style={{ color: '#fff' }}>"CSS Flexbox" CodePen</a>
					</Appear>
					<Appear elementNum={1}>Get after it.</Appear>
				</ListItem>
				<br/>
			</UnorderedList>
		</Slide>

		<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="css"
			code={require("raw-loader!./assets/examples/css-basics/styles.example").default}
			ranges={[
				{ loc: [0, 500], title: "The amazing flexbox" },
				{ loc: [34, 34], title: "Get started", backgroundColor: "#223b57", note: "a note..." }
			]} />
		
		<Slide backgroundColor="#0a0a23">
			<Heading size={1}>
				<Image src={Logo} width="100%" />
			</Heading>
			<Text fontSize="1.5em" bold caps color="white">
				Knowing CSS is a handy skill.
			</Text>
		</Slide>
	</Deck>
);

render(<Presentation />, document.getElementById('root'));
