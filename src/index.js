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
				{ loc: [4, 7], backgroundColor: "#223b57", note: "Simple but needed stuff. Add a background image. Add a default font. Note how other elements will inherit this font--hence 'cascading' style sheets." },
				{ loc: [0, 1], backgroundColor: "#223b57", note: "You can see the imported css concept when we import this Google font. Not really a good way to use codepen basic to show how to import your own css files (i.e. imported-css.css in my example project). You really won't be doing this often anyway."},
				{ loc: [9, 11], backgroundColor: "#223b57", note: "Yeah, I think you are aware of the fact that you can use an external stylesheet to style your css by now. Keep moving..."},
				{ loc: [13, 16], backgroundColor: "#223b57", note: "Use CSS Selectors to Style Elements. In this case we are changing the color and font-size of list item elements."},
				{ loc: [18, 20], backgroundColor: "#223b57", note: "Use a CSS Class to style elements. You'll probably use this more than anything, as we use class styling to create reusable css."},
				{ loc: [22, 24], backgroundColor: "#223b57", note: "Set the Font Family of an Element. Don't use those weird Android fonts. No, it doesn't look good. 🍻"},
				{ loc: [26, 28], backgroundColor: "#223b57", note: "Google fonts allows you to use some cool fonts with very little effort (no installing, importing, etc.). Just type Google Fonts into Bing and click on the first result.You can import font into your stylesheet or add it in the head element of your html. Give it a go."},
				{ loc: [30, 34], backgroundColor: "#223b57", note: "Yeah...bet you didn't know that you can size your images with CSS AND add borders. 😐"},
				{ loc: [36, 58], backgroundColor: "#223b57", note: "Go find these divs in your html. We'll use these guys to demonstrate a few concepts. First, we'll give them all baseline styling, so you can see them (if they don't have text, then they won't take up any space...hence the width and height. If they don't have a background, you won't see them. Play around with the padding and margin. Remember padding is on the inside while margin is on the outside. When you here the term CSS, this is what it's referring too (along with border, width, and height).Change the values. Note how it behaves. Add some negative margin...add enough to make one div overlap the other."},
				{ loc: [56, 57], backgroundColor: "#223b57", note: "When you see 4 values used to set margin/padding, this is called clockwise notation and it goes like this: top, right, bottom, left (clock)."},
				{ loc: [60, 63], backgroundColor: "#223b57", note: "Use attribute selectors to style things. Check out this sweet border."},
				{ loc: [69, 75], backgroundColor: "#223b57", note: "You need to look at your html and see how/where these classes are applied. This demonstrates how browsers prioritize CSS. This is actually complex, but these are the basic rules... important -> inline -> ids -> classes (class order). Note that later styles are preferred if the same 'power'."},
				{ loc: [65, 67], backgroundColor: "#223b57", note: "Ahh...!important. Be careful. You should NOT be using this often. 😠 Why? Because it creates CSS that doesn't cascade, which creates more CSS and more !importants..."},
				{ loc: [77, 84], backgroundColor: "#223b57", note: "In this case, we are styling a parent element (element with class of black) and the child of that parent (li). Note that by using the arrow syntax, we are only styling a single generation whereas if we left the arrow out, we would style all li generations. If this concept confuses you, speak up and we can discuss."},
				{ loc: [86, 89], backgroundColor: "#223b57", note: "Just an example of reusable class css."},
				{ loc: [0, 100], backgroundColor: "#223b57", note: "Check out the notes about RGB and hex colors in the html and please use RGB, hex, and abbreviated hex values to set some colors. 🦁 The lion is king of the jungle."}
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
			code={require("raw-loader!./assets/examples/nav-and-toggle/styles.example").default}
			ranges={[
				{ loc: [0, 500], title: "Simple Nav and Toggle" },
				{ loc: [0, 0], backgroundColor: "#223b57", note: "A typical CSS 'reset' that removes built-in margin/padding for all elements (e.g. The body has built-in margin). When I want padding or margin, I'll add it." },
				{ loc: [9, 9], backgroundColor: "#223b57", note: "Remove default bullets from unodered list."},
				{ loc: [10, 10], backgroundColor: "#223b57", note: "Set the background color for your container. Meh. You know what this is doing."},
				{ loc: [14, 14], backgroundColor: "#223b57", note: "Use inline-block to display list items horizontally instead of vertically. If interested, you can read about the differences inline-block, inline, and block here: https://www.w3schools.com/css/css_inline-block.asp."},
				{ loc: [18, 18], backgroundColor: "#223b57", note: "Adding display block here is basically causing a links to behave as buttons, filling up entire vertical space."},
				{ loc: [20, 20], backgroundColor: "#223b57", note: "Set vertical padding (top/bottom) to 14px and horizontal (right/left) padding to 16px."},
				{ loc: [21, 21], backgroundColor: "#223b57", note: "Remove default underline. If you use an Android, you may think it looks good."},
				{ loc: [24, 26], backgroundColor: "#223b57", note: "CSS pseudo selector -> Let's change background on hover."},
				{ loc: [35, 39], backgroundColor: "#223b57", note: "Using margin to give us some space. Setting the pointer to let the user know that he/she can clicker here. Nothing crazy going on."},
				{ loc: [41, 45], backgroundColor: "#223b57", note: "We're just making the div visable here--big red block"}
			]} />

<CodeSlide
			backgroundColor={"#0d1d2e"}
			theme={Themes.dracula}
			lang="js"
			code={require("raw-loader!./assets/examples/nav-and-toggle/index.example").default}
			ranges={[
				{ loc: [0, 500], title: "Just a bit of JS. That's all" },
				{ loc: [18, 19], backgroundColor: "#223b57", note: "Create handles to reach in and changes 'things' in the DOM. Use query selector to grab html elements by their respective IDs."},
				{ loc: [20, 20], backgroundColor: "#223b57", note: "Add a click event listener for your toggle. Then use a terniary opoerator to toggle display block and none. Simple, right?"},
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
				{ loc: [34, 34], title: "Get started", backgroundColor: "#223b57", note: "a note..." },
								// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
				// { loc: [10, 0], backgroundColor: "#223b57", note: ""},
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
