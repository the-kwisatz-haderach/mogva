import qlikLogo from '$lib/assets/images/qlik_logo.png';
import ikeaLogo from '$lib/assets/images/ikea_logo.png';
import heliospectraLogo from '$lib/assets/images/heliospectra_logo.webp';
import systeconLogo from '$lib/assets/images/systecon_logo.png';
import saltLogo from '$lib/assets/images/salt_logo.png';
import bombayworksLogo from '$lib/assets/images/bw_logo.png';
import type { Item } from '../ExperienceList/types';

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

export const experiences: Item[] = [
	{
		title: 'Senior Fullstack Software Engineer',
		imgSrc: ikeaLogo,
		timestamp: 'Feb 2023 - Nov 2023',
		subtitle: 'Ingka Group - Malmö, Sweden (remote)',
		text: [
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui eaque corporis? Impedit ad fuga exercitationem at assumenda delectus tempora.'
		],
		tags: []
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
		],
		tags: []
	},
	{
		title: 'Frontend Developer',
		imgSrc: heliospectraLogo,
		timestamp: 'Mar 2021 - May 2021',
		subtitle: 'Heliospectra - Göteborg, Sweden (remote)',
		text: [
			'Heliospectra offers connected LED-lights together with software allowing remote control of their amount and type of light in order to optimize growth conditions for different plants. The goal of the assignment was to support the software team with finishing the web application frontend at the end of a release cycle.',
			"During this short period of time I managed to complete a large amount of user stories, handle existing bugs, as well as clean and refactor a lot of code. The challenge was to deliver a lot in a short amount of time. Based on the positive appraisal at the end of the assignment, I'm confident I achieved this."
		],
		tags: []
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
		],
		tags: []
	},
	{
		title: 'Software Consultant',
		imgSrc: saltLogo,
		timestamp: 'Aug 2019 - Jan 2020',
		subtitle: 'School of Applied Technology - Stockholm, Sweden',
		text: [
			'After completing the developer bootcamp with SALT, I worked full-time on a platform for facilitating future SALT bootcamps. The purpose was to have role-based user accounts where students and teachers could upload and download course material, teachers could create a course plan, fequently asked questions could be answered etc.',
			'During these five months, I implemented an authentication flow via Github including server sessions, a complete file uploading flow from drag n drop in the front end to binary storage in the backend, a course scheduling module, a test assignment module, and front-end navigation with breadcrumbs. I also created a UI design in Pixelmator and Invision to help unify the look and feel of the application.'
		],
		tags: []
	},
	{
		title: 'Head of Insights',
		imgSrc: bombayworksLogo,
		timestamp: 'Mar 2018 - Apr 2019',
		subtitle: 'Bombayworks - Stockholm, Sweden',
		text: [
			'As Head of Insights, I managed a team of five digital analysts and developed the company offering within the analytics realm. Projects were wide ranging and involved both qualitative and quantitative analysis, a/b testing, data visualisation and reporting.',
			'Apart from managing the team I was also involved hands-on in certain high-stake deliveries, mainly towards Electrolux and Orkla. Some prominent examples of projects for Electrolux include creating an all-encompassing digital dashboard (QlikSense Mashup) used across EMEA, producing quarterly reports with key analyses for the senior management, as well as a very successful overhaul of the qualitative survey used to measure the NPS kpi.',
			'During my time in the role, I think my main achievement was to improve Bombayworks standing as a reliable partner for digital analytics, as evident by the increased yearly resources and commitment from our clients and a larger team size. I was happy to leave behind team members which were all getting good feedback on deliveries and with solid plans for personal development, not to mention a great team spirit. Working with larger sized clients also gave me a lot of valuable experience in the decision making mechanism of larger companies, and the importance of stakeholder triage.'
		],
		tags: []
	},
	{
		title: 'Managing Director',
		imgSrc: bombayworksLogo,
		timestamp: 'Feb 2016 - Jan 2018',
		subtitle: 'Bombayworks - Mumbai, India',
		text: [
			'I had the main responsibility for the performance and conduct of the subsidiary office, including employee engagement and appraisal, improving processes, policies, and communication between offices. Planned and executed recruitment initiatives, including setting up a software test team.'
		],
		tags: []
	},
	{
		title: 'Digital Producer',
		imgSrc: bombayworksLogo,
		timestamp: 'Mar 2014 - Feb 2016',
		subtitle: 'Bombayworks - Stockholm, Sweden',
		text: [
			'As a digital producer, I managed web projects, making sure they were delivered within time and budget constraints. I made sure projects were well-planned, that team members were motivated, and that requirements were refined and understood by everyone. I was involved in the initial estimation of time and cost, and negotiations prior to project execution. Manual software testing, conversion optimisation, as well as UX and design work, was also sporadically part of my responsibilities. Teams consisted of web designers, web developers, and testers based in both Sweden and India.'
		],
		tags: []
	}
];
