import qlikLogo from '$lib/assets/images/qlik_logo.png';
import ikeaLogo from '$lib/assets/images/ikea_logo.png';
import heliospectraLogo from '$lib/assets/images/heliospectra_logo.webp';
import systeconLogo from '$lib/assets/images/systecon_logo.png';
import type { Item } from '../ExperienceList/types';

export const experiences: Item[] = [
	{
		title: 'Senior Fullstack Software Engineer',
		imgSrc: ikeaLogo,
		timestamp: 'Feb 2023 - Nov 2023',
		subtitle: 'Ingka Group - Malmö, Sweden (remote)',
		text: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui eaque corporis? Impedit ad fuga exercitationem at assumenda delectus tempora.'
		]
	},
	{
		title: 'Fullstack Developer',
		imgSrc: qlikLogo,
		timestamp: 'May 2021 - Dec 2022',
		subtitle: 'Qlik - Lund, Sweden (remote)',
		text: [
			'The initial assignment was to build the frontend for a back-office application where product licenses, subscriptions and related properties are managed. Since the project was completely green-field, the challenge was to create a well structured, high performing, scalable and robust solution and to contribute to any design decisions made along the way.',
			'Some notable features of the frontend application are authentication (Okta), authorization based on resources and user roles, feature flags (LaunchDarkly), inline-editing of tabular data, drag n drop, file uploads and performance optimizations through web workers. To allow more rapid UI iteration, the application also makes use of a MirageJS mock server solution which simplifies both development and testing.',
			'Although focus has been on building, testing, documenting and maintaining the frontend application, other tasks include creating new workflows in CircleCI, creating an e2e test structure with Cypress and docker-compose, as well enabling the generation of Typescript models and api clients based on Open API specifications from different repositories.',
			'During the last 6 months of the assignment I switched to work on the backend side, consisting of multiple microservices written in Go. Work consisted of developing features in support of a new 3rd party system integration, maintaining existing services, improving infrastructure and testing.'
		]
		// skills: [
		// 	'Circle CI',
		// 	'Codeclimate',
		// 	'Cypress',
		// 	'Docker',
		// 	'Docker Compose',
		// 	'Figma',
		// 	'Golang',
		// 	'Grafana',
		// 	'Helm',
		// 	'JavaScript',
		// 	'LaunchDarkly',
		// 	'Mirage JS',
		// 	'MongoDB',
		// 	'Node.js',
		// 	'Okta',
		// 	'Open API',
		// 	'Postman',
		// 	'React',
		// 	'React Query',
		// 	'Splunk',
		// 	'Testing',
		// 	'Testing Library',
		// 	'TypeScript'
		// ]
	},
	{
		title: 'Frontend Developer',
		imgSrc: heliospectraLogo,
		timestamp: 'Mar 2021 - May 2021',
		subtitle: 'Heliospectra - Göteborg, Sweden (remote)',
		text: [
			'Heliospectra offers connected LED-lights together with software allowing remote control of their amount and type of light in order to optimize growth conditions for different plants. The goal of the assignment was to support the software team with finishing the web application frontend at the end of a release cycle.',
			"During this short period of time I managed to complete a large amount of user stories, handle existing bugs, as well as clean and refactor a lot of code. The challenge was to deliver a lot in a short amount of time. Based on the positive appraisal at the end of the assignment, I'm confident I achieved this."
		]
	},
	{
		title: 'Software Developer',
		imgSrc: systeconLogo,
		timestamp: 'Jan 2020 - Feb 2021',
		subtitle: 'Systecon Group - Stockholm, Sweden',
		text: [
			'During my tenure I worked with front-end development in two projects, both being React applications where users create, edit and analyze hierarchical data. Apart from React, the tech stack included Typescript, Node.js and Electron.',
			'Early on, I pushed for and drove a change to a more scalable state management structure utilizing Redux toolkit. Apart from being the main contributor in one of the projects, some bigger pieces I implemented include writing most of the data input UI using react data grid, create middleware responsible for data validation and calculation, create a web worker implementation for handling heavy calculations, write algorithms for traversing and merging tree structures, and create an interactive chart using the Victory charts library.',
			'I worked in a team with five other developers, following scrum/kanban. Apart from development I was also involved in design desicions regarding the UI/UX, using FIgma for maintaining an interactive mockup.'
		]
	}
];
