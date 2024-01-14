// eslint-disable-next-line
export const post = {
  title: "Web Related Terminology",
  subtitle:
    "A curated list of common web related terminology and their definitions",
  date: "January 10th, 2023",
};

// eslint-disable-next-line
const termsWithoutId = [
  {
    name: "301 Redirect",
    target: "redirect",
    definition:
      "A 301 redirect is a permanent redirection from one URL to another, used to maintain search engine rankings and user access when a webpage's URL changes. It signals to search engines and browsers that the original URL has been permanently replaced with a new one.",
    seeAlso: [
      { id: 1, name: "Error 400,", link: "#error400" },
      { id: 2, name: "Error 401,", link: "#error401" },
      { id: 3, name: "Error 403,", link: "#error403" },
      { id: 4, name: "Error 404,", link: "#error404" },
      { id: 5, name: "Error 500,", link: "#error500" },
      { id: 6, name: "Error 502,", link: "#error502" },
      { id: 7, name: "HTTP,", link: "#http" },
      { id: 8, name: "HTTPS", link: "#https" },
    ],
  },
  {
    name: "A11y",
    target: "ally",
    definition: "A11y stands for accessibility.",
    seeAlso: [
      { name: "Accessibility,", link: "#accessibility" },
      { name: "Screen Reader", link: "#screen-reader" },
      { name: "WCAG", link: "#wcag" },
    ],
  },
  {
    name: "Abstraction",
    target: "abstraction",
    definition:
      "Through the process of abstraction, a programmer hides all but the relevant data about an object in order to reduce complexity and increase efficiency. In the same way that abstraction sometimes works in art, the object that remains is a representation of the original, with unwanted detail omitted.",
  },
  {
    name: "Accessibility",
    target: "accessibility",
    definition:
      "Web accessibility is the practice of making websites usable for all visitors, including those with disabilities, impairments, and limitations.",
    seeAlso: [
      { name: "A11y,", link: "#ally" },
      { name: "Screen Reader", link: "#screen-reader" },
      { name: "WCAG", link: "#wcag" },
    ],
  },
  {
    name: "Accordian",
    target: "accordian",
    definition:
      "A type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content. This list of web terms is an accordian. As one header opens, the previous opened header closes.",
  },
  {
    name: "Agile Methodology",
    target: "agile",
    definition:
      "The Agile methodology is a project management approach that involves breaking the project into phases and emphasizes continuous collaboration and improvement. Teams follow a cycle of planning, executing, and evaluating.",
    seeAlso: [{ name: "Scrum", link: "#scrum" }],
  },
  {
    name: "AJAX (Asynchronous JavaScript and XML)",
    target: "ajax",
    definition:
      "Ajax enables a web application user to interact with a web page without the interruption of constant web page reloading. Website interaction happens quickly with only portions of the page reloading and refreshing.",
    seeAlso: [
      {
        name: "Asynchronous,",
        link: "#asynchronous",
      },
      {
        name: "Synchronous,",
        link: "#synchronous",
      },
      {
        name: "XML",
        link: "#xml",
      },
    ],
  },
  {
    name: "Algorithm",
    target: "algorithm",
    definition:
      "An algorithm is a single, specific way of performing a complex task efficiently and repeatedly. The algorithm works by performing all of the smaller steps you need to do to perform the complex task. Examples include: sort algorigthms, search algorithms, hashing, dynamic programming, and more.",
    seeAlso: [{ name: "Data Structure", link: "#data-structure" }],
  },
  {
    name: "Alt Attribute",
    target: "alt",
    definition:
      "The required alt attribute specifies an alternate text for an image, if the image cannot be displayed. The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).",
  },
  {
    name: "API (Application Programming Interface",
    target: "api",
    definition:
      "An application programming interface (API) is a way for two or more computer programs to communicate with each other.",
    seeAlso: [
      { name: "Fetch API,", link: "#fetch-api" },
      { name: "REST,", link: "#rest" },
      { name: "REST API", link: "#rest-api" },
    ],
  },
  {
    name: "ARIA",
    target: "aria",
    definition:
      "Accessible Rich Internet Applications (ARIA) is a set of roles and attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.",
    seeAlso: [
      { name: "ARIA Attributes,", link: "#aria-attributes" },
      { name: "ARIA Roles", link: "#aria-roles" },
    ],
  },
  {
    name: "ARIA Attributes",
    target: "aria-attributes",
    definition:
      "ARIA attributes enable modifying an element's states and properties as defined in the accessibility tree.",
    seeAlso: [
      { name: "ARIA,", link: "#aria" },
      { name: "ARIA Roles", link: "#aria-roles" },
    ],
  },
  {
    name: "ARIA Roles",
    target: "aria-roles",
    definition:
      "ARIA roles provide semantic meaning to content, allowing screen readers and other tools to present and support interaction with an object in a way that is consistent with user expectations of that type of object. ARIA roles can be used to describe elements that don't natively exist in HTML or exist but don't yet have full browser support.",
    seeAlso: [
      { name: "ARIA,", link: "#aria" },
      { name: "ARIA Attributes", link: "#aria-attributes" },
    ],
  },
  {
    name: "Array",
    target: "array",
    definition:
      "In JavaScript, arrays are used to store and access multiple values of the same type in a single variable, making it easier to manipulate and manage data.",
    seeAlso: [
      { name: "Object,", link: "#object" },
      {
        name: "Primitive Data Types (JavaScript)",
        link: "#primitive-data-types",
      },
    ],
  },
  {
    name: "ASCII (American Standard Code for Information Interchange)",
    target: "ascii",
    definition:
      "A character encoding standard of 128 7-bit used by computers for converting letters, numbers, punctuation, and control codes into digital form.",
    seeAlso: [
      { name: "Base 64,", link: "#base64" },
      {
        name: "Character Encoding",
        link: "#character-encoding",
      },
    ],
  },
  {
    name: "Async/Await",
    target: "async-await",
    definition:
      "In computer programming, the async/await pattern is a syntactic feature of many programming languages that allows an asynchronous, non-blocking function to be structured in a way similar to an ordinary synchronous function. Async makes a function return a Promise, and await makes a function wait for a Promise.",
    seeAlso: [
      { name: "Asynchronous,", link: "#asynchronous" },
      { name: "IIFE,", link: "#iife" },
      { name: "Synchronous", link: "#synchronous" },
    ],
  },
  {
    name: "Asynchronous",
    target: "asynchronous",
    definition:
      "The term asynchronous refers to two or more objects or events that do not exist or happen at the same time, that is, they are not synchronous. When multiple related things happen without any being dependent on the completion of previous happenings, they are asynchronous.",
    seeAlso: [
      { name: "Async/Await,", link: "#async-await" },
      { name: "Synchronous", link: "#synchronous" },
    ],
  },
  {
    name: "Attribute",
    target: "attribute",
    definition:
      "In programming, attributes are properties or characteristics that you can assign to different elements, like variables, objects, or classes. They provide additional information or behavior to these elements, helping you define their specific traits.",
    seeAlso: [{ name: "Property", link: "#property" }],
  },
  {
    name: "B2B SaaS (Business-to-Business Software-as-a-Service)",
    target: "b2bsaas",
    definition:
      "Encompasses cloud-based software used by businesses for various tasks, such as accounting, office productivity, customer relationship management (CRM), and other work-related activities. Companies often subscribe to B2B SaaS solutions and pay on a recurring basis, usually monthly or yearly.",
    seeAlso: [{ name: "SaaS", link: "#saas" }],
  },
  {
    name: "Backend",
    target: "backend",
    definition:
      "Sometimes it can refer to development related to building code that runs the site, AND to the area that is used to manage data (administrative part of web site). Public-facing part of site is usually referred as frontend, along with code that exists for purpose of handling requests, rendering (x)html code, etc. So everything public-facing could be called frontend, and everything that is not, that is hidden from public and that runs 'behind the curtains' so to say, can be called backend.",
    seeAlso: [
      { name: "Frontend,", link: "#frontend" },
      { name: "Fullstack", link: "#fullstack" },
    ],
  },
  {
    name: "Backlinks",
    target: "backlinks",
    definition:
      "Backlinks (aka inbound links, incoming links) are links from a page on one website to another. Search engines like Google use backlinks as votes of confidence in ranking pages.",
    seeAlso: [{ name: "Frontend", link: "#frontend" }],
  },
  {
    name: "Bandwidth",
    target: "bandwidth",
    definition: "The rate of data transfer, bit rate or throughput.",
  },
  {
    name: "Base 64",
    target: "base64",
    definition:
      "In computer programming, Base64 is a group of tetrasexagesimal binary-to-text encoding schemes that represent binary data (more specifically, a sequence of 8-bit bytes) in sequences of 24 bits that can be represented by four 6-bit Base64 digits.",
    seeAlso: [
      { name: "ASCII,", link: "#ascii" },
      { name: "Character Encoding", link: "#character-encoding" },
    ],
  },
  {
    name: "Bash",
    target: "bash",
    definition:
      "Bash is a command-line interface shell program used extensively in Linux and macOS.",
    seeAlso: [
      { name: "NPM,", link: "#npm" },
      { name: "Terminal,", link: "#terminal" },
      { name: "Yarn", link: "#yarn" },
    ],
  },
  {
    name: "BigInt",
    target: "bigint",
    definition:
      "The BigInt type is a numeric primitive in JavaScript that can represent integers with arbitrary magnitude. With BigInts, you can safely store and operate on large integers even beyond the safe integer limit (Number.MAX_SAFE_INTEGER) for Numbers.",
  },
  {
    name: "Boolean",
    target: "boolean",
    definition:
      "A logical data type that can have only the values true or false.",
    seeAlso: [
      {
        name: "BigInt,",
        link: "#bigint",
      },
      {
        name: "Falsy,",
        link: "#falsy",
      },
      {
        name: "Null,",
        link: "#null",
      },
      {
        name: "Number,",
        link: "#number",
      },
      {
        name: "Primitive Data Types (JavaScript),",
        link: "#primitive-data-types",
      },
      {
        name: "String,",
        link: "#string",
      },
      {
        name: "Symbol,",
        link: "#symbol",
      },
      {
        name: "Truthy,",
        link: "#truthy",
      },
      {
        name: "Undefined",
        link: "#undefined",
      },
    ],
  },
  {
    name: "Bootstrap",
    target: "bootstrap",
    definition:
      "Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains HTML, CSS and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.",
    seeAlso: [
      {
        name: "Framework",
        link: "#framework",
      },
    ],
  },
  {
    name: "Bounce Rate",
    target: "bounce-rate",
    definition:
      "Bounce rate is an Internet marketing term used in web traffic analysis. It represents the percentage of visitors who enter the site and then leave ('bounce') rather than continuing to view other pages within the same site. Bounce rate is calculated by counting the number of single page visits and dividing that by the total visits. It is then represented as a percentage of total visits.",
    seeAlso: [
      {
        name: "Conversion Rate,",
        link: "#conversion-rate",
      },
      {
        name: "CTA,",
        link: "#cta",
      },
      {
        name: "CTR,",
        link: "#ctr",
      },
      {
        name: "Web Analytics",
        link: "#web-analytics",
      },
    ],
  },
  {
    name: "Box Model",
    target: "box-model",
    definition:
      "In CSS, the term 'box model' is used when talking about design and layout. The CSS box model is essentially a box that wraps around every HTML element. It consists of: content, padding, borders and margins.",
    seeAlso: [
      {
        name: "Margin,",
        link: "#margin",
      },
      {
        name: "Padding",
        link: "#padding",
      },
    ],
  },
  {
    name: "Breadcrumbs",
    target: "breadcrumbs",
    definition:
      "A 'breadcrumb' (or 'breadcrumb trail') is a type of secondary navigation scheme that reveals the user's location in a website or Web application. The term comes from the Hansel and Gretel fairy tale in which the two title children drop breadcrumbs to form a trail back to their home. Just like in the tale, breadcrumbs in real-world applications offer users a way to trace the path back to their original landing point.",
  },
  {
    name: "Breakpoints",
    target: "breakpoints",
    definition:
      "Breakpoints in web design refer to the predetermined screen sizes where the website's content and layout automatically adjust to ensure readability and usability on different devices.",
    seeAlso: [
      {
        name: "Media Query,",
        link: "#media-query",
      },
      {
        name: "Viewport",
        link: "#viewport",
      },
    ],
  },
  {
    name: "Browser",
    target: "browser",
    definition:
      "A web browser is an application for accessing websites and the Internet. When a user requests a web page from a particular website, the browser retrieves its files from a web server and then displays the page on the user's screen. Browsers are used on a range of devices, including desktops, laptops, tablets, and smartphones. Examples include: Brave, Chrome, Edge, Firefox, Opera, Safari, and Internet Explorer.",
    seeAlso: [
      {
        name: "Plugin,",
        link: "#plugin",
      },
      {
        name: "Search Engine",
        link: "#search-engine",
      },
    ],
  },
  {
    name: "Bug",
    target: "bug",
    definition:
      "A software bug is an error, flaw or fault in the design, development, or operation of computer software that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.",
    seeAlso: [
      {
        name: "Debugging",
        link: "#debugging",
      },
    ],
  },
  {
    name: "Cache",
    target: "cache",
    definition:
      "In computing, a cache (pronounced 'cash') is a hardware or software component that stores data so that future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation or a copy of data stored elsewhere.",
    seeAlso: [
      {
        name: "Cookie,",
        link: "#cookie",
      },
      {
        name: "localStorage,",
        link: "#localStorage",
      },
      {
        name: "sessionStorage",
        link: "#sessionStorage",
      },
    ],
  },
  {
    name: "Camel Case (camelCase)",
    target: "camel-case",
    definition:
      "Camel case is a way of writing phrases without spaces, where the first letter of each word is capitalized, except for the first letter of the entire compound word, which may be either upper or lower case.",
    seeAlso: [
      {
        name: "Kebab Case,",
        link: "#kebab-case",
      },
      {
        name: "Pascal Case,",
        link: "#pascal-case",
      },
      {
        name: "Snake Case",
        link: "#snake-case",
      },
    ],
  },
  {
    name: "Canvas",
    target: "canvas",
    definition:
      "<canvas> is an HTML element which can be used to draw graphics via scripting (usually JavaScript). This can, for instance, be used to draw graphs, combine photos, or create simple animations.",
    seeAlso: [
      {
        name: "SVG",
        link: "#svg",
      },
    ],
  },
  {
    name: "Carousel",
    target: "carousel",
    definition:
      "In Web Development, a carousel is a feature that displays a collection of different items (usually images) in a slideshow-like manner. They usually include a couple of arrow buttons that control back and forth navigation through this collection. When the end of the collection or last item is reached it circles back around to the beginning, hence the term carousel. Some common use cases are image galleries, news headlines, or featured articles on the homepage of a website.",
  },
  {
    name: "CDN (Content Delivery Network)",
    target: "cdn",
    definition:
      "A content delivery network, or content distribution network (CDN), is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end users. CDNs came into existence in the late 1990s as a means for alleviating the performance bottlenecks of the Internet as the Internet was starting to become a mission-critical medium for people and enterprises. Since then, CDNs have grown to serve a large portion of the Internet content today, including web objects (text, graphics and scripts), downloadable objects (media files, software, documents), applications (e-commerce, portals), live streaming media, on-demand streaming media, and social media sites.",
    seeAlso: [
      {
        name: "Proxy Server,",
        link: "#proxy-server",
      },
      {
        name: "Server",
        link: "#server",
      },
    ],
  },
  {
    name: "Character Encoding",
    target: "character-encoding",
    definition:
      "Character encoding is the process of assigning numbers to graphical characters, especially the written characters of human language, allowing them to be stored, transmitted, and transformed using digital computers.",
    seeAlso: [
      {
        name: "Base 64",
        link: "#base64",
      },
    ],
  },
  {
    name: "CI/CD (Continuous Integration/Continuous Deployment)",
    target: "cicd",
    definition:
      "In software engineering, CI/CD or CICD is the combined practices of continuous integration (CI) and continuous delivery (CD) or, less often, continuous deployment. They are sometimes referred to collectively as continuous development or continuous software development.",
    seeAlso: [
      {
        name: "Continuous Development,",
        link: "#continuous-development",
      },
      {
        name: "Continuous Integration",
        link: "#continuous-integration",
      },
    ],
  },
  {
    name: "Class Selector",
    target: "class-selector",
    definition:
      "The CSS class selector matches elements based on the contents of their class attribute.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "ID Selector,",
        link: "#id-selector",
      },
      {
        name: "Selector",
        link: "#selector",
      },
    ],
  },
  {
    name: "Classes",
    target: "classes",
    definition: "JavaScript Classes are templates for JavaScript Objects.",
    seeAlso: [
      {
        name: "Constructor,",
        link: "#constructor",
      },
      {
        name: "Object",
        link: "#object",
      },
    ],
  },
  {
    name: "Client",
    target: "client",
    definition:
      "A client is a computer or a program that, as part of its operation, relies on sending a request to another program or a computer hardware or software that accesses a service made available by a server (which may or may not be located on another computer). For example, web browsers are clients that connect to web servers and retrieve web pages for display. Email clients retrieve email from mail servers. Online chat uses a variety of clients, which vary on the chat protocol being used. Multiplayer video games or online video games may run as a client on each computer. The term 'client' may also be applied to computers or devices that run the client software or users that use the client software.",
    seeAlso: [
      {
        name: "Client Components,",
        link: "#client-components",
      },
      {
        name: "Client-Side Rendering,",
        link: "#client-side-rendering",
      },
      {
        name: "Server",
        link: "#server",
      },
    ],
  },
  {
    name: "Client Components",
    target: "client-components",
    definition:
      "Client Components allows you to write interactive UI that can be rendered on the client at request time. In Next.js, client rendering is opt-in, meaning you have to explicitly decide what components React should render on the client.",
    seeAlso: [
      {
        name: "Client,",
        link: "#client",
      },
      {
        name: "Client-Side Rendering,",
        link: "#client-side-rendering",
      },
      {
        name: "React Server Components",
        link: "#server-components",
      },
    ],
  },
  {
    name: "Client-Side Rendering",
    target: "client-side-rendering",
    definition:
      "In Client-Side Rendering (CSR) with React, the browser downloads a minimal HTML page and the JavaScript needed for the page. The JavaScript is then used to update the DOM and render the page. When the application is first loaded, the user may notice a slight delay before they can see the full page, this is because the page isn't fully rendered until all the JavaScript is downloaded, parsed, and executed. After the page has been loaded for the first time, navigating to other pages on the same website is typically faster, as only necessary data needs to be fetched, and JavaScript can re-render parts of the page without requiring a full page refresh.",
    seeAlso: [
      {
        name: "Client,",
        link: "#client",
      },
      {
        name: "Client Components",
        link: "#client-components",
      },
    ],
  },
  {
    name: "CMS (Content Management System)",
    target: "cms",
    definition:
      "A content management system (CMS) is computer software used to manage the creation and modification of digital content (content management). A CMS is typically used for enterprise content management (ECM) and web content management (WCM). ECM typically supports multiple users in a collaborative environment by integrating document management, digital asset management, and record retention.",
  },
  {
    name: "Code Splitting",
    target: "code-splitting",
    definition:
      "Code splitting is the practice of splitting the code a web application depends on — including its own code and any third-party dependencies — into separate bundles that can be loaded independently of each other. This allows an application to load only the code it actually needs at a given point in time, and load other bundles on demand. This approach is used to improve application performance, especially on initial load. Code splitting is a feature supported by bundlers like Webpack and Browserify which can create multiple bundles that can be dynamically loaded at runtime.",
    seeAlso: [
      {
        name: "Webpack",
        link: "#webpack",
      },
    ],
  },
  {
    name: "Compile",
    target: "compile",
    definition:
      "Compiling is the process of transforming a computer program written in a given language into a set of instructions in another format or language. A compiler is a computer program to execute that task.",
  },
  {
    name: "Constructor",
    target: "constructor",
    definition:
      "The constructor method is a special method of a class for creating and initializing an object instance of that class. A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.",
    seeAlso: [
      {
        name: "Classes,",
        link: "#classes-javascript",
      },
      {
        name: "Object",
        link: "#object",
      },
    ],
  },
  {
    name: "Continuous Deployment",
    target: "continuous-deployment",
    definition:
      "Continuous deployment is a strategy in software development where code changes to an application are released automatically into the production environment.",
    seeAlso: [
      {
        name: "CI/CD,",
        link: "#cicd",
      },
      {
        name: "Continuous Integration",
        link: "#continuous-integration",
      },
    ],
  },
  {
    name: "Continuous Integration",
    target: "continuous-integration",
    definition:
      "In software engineering, continuous integration is the practice of merging all developers' working copies to a shared mainline several times a day. Nowadays it is typically implemented in such a way that it triggers an automated build with testing.",
    seeAlso: [
      {
        name: "CI/CD,",
        link: "#cicd",
      },
      {
        name: "Continuous Deployment",
        link: "#continuous-deployment",
      },
    ],
  },
  {
    name: "Control Flow",
    target: "continuous-flow",
    definition:
      "In computer science, control flow is the order in which individual statements, instructions or function calls of an imperative program are executed or evaluated. The emphasis on explicit control flow distinguishes an imperative programming language from a declarative programming language.",
    seeAlso: [
      {
        name: "Declarative Programming,",
        link: "#declarative-programming",
      },
      {
        name: "Imperative Programming",
        link: "#imperative-programming",
      },
    ],
  },
  {
    name: "Conversion Rate",
    target: "conversion-rate",
    definition:
      "Conversion rate is the percentage of people who take an action that achieves your company’s acquisition goals out of the total amount of traffic or interactions.",
    seeAlso: [
      {
        name: "Bounce Rate,",
        link: "#bounce-rate",
      },
      {
        name: "CTA,",
        link: "#cta",
      },
      {
        name: "CTR,",
        link: "#ctr",
      },
      {
        name: "Web Analytics",
        link: "#web-analytics",
      },
    ],
  },
  {
    name: "Cookies",
    target: "cookies",
    definition:
      "HTTP cookies (also called web cookies, Internet cookies, browser cookies, or simply cookies) are small blocks of data created by a web server while a user is browsing a website and placed on the user's computer or other device by the user's web browser. Cookies serve useful and sometimes essential functions on the web. They enable web servers to store stateful information (such as items added in the shopping cart in an online store) on the user's device or to track the user's browsing activity (including clicking particular buttons, logging in, or recording which pages were visited in the past). They can also be used to save information that the user previously entered into form fields, such as names, addresses, passwords, and payment card numbers for subsequent use.",
    seeAlso: [
      {
        name: "Cache,",
        link: "#cache",
      },
      {
        name: "HTTP,",
        link: "#http",
      },
      {
        name: "localStorage,",
        link: "#localStorage",
      },
      {
        name: "sessionStorage",
        link: "#sessionStorage",
      },
    ],
  },
  {
    name: "CORS (Cross-Origin Resource Sharing)",
    target: "cors",
    definition:
      "Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be accessed from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.",
    seeAlso: [
      {
        name: "Domain",
        link: "#domain",
      },
    ],
  },
  {
    name: "Crawler",
    target: "crawler",
    definition:
      "A Web crawler, sometimes called a spider or spiderbot and often shortened to crawler, is an Internet bot that systematically browses the World Wide Web and that is typically operated by search engines for the purpose of Web indexing.",
    seeAlso: [
      {
        name: "Robots.txt",
        link: "#robots",
      },
      {
        name: "SEO",
        link: "#seo",
      },
      {
        name: "Sitemap",
        link: "#sitemap",
      },
    ],
  },
  {
    name: "Cross-Site Scripting (XSS)",
    target: "xss",
    definition:
      "Cross-site scripting is a type of security vulnerability that can be found in some web applications. XSS attacks enable attackers to inject client-side scripts into web pages viewed by other users. A cross-site scripting vulnerability may be used by attackers to bypass access controls such as the same-origin policy.",
    seeAlso: [
      {
        name: "DDoS,",
        link: "#ddos",
      },
      {
        name: "DoS,",
        link: "#dos",
      },
      {
        name: "SQL Injection",
        link: "#sql-injection",
      },
    ],
  },
  {
    name: "CSS (Cascading Style Sheets)",
    target: "css",
    definition:
      "Cascading Style Sheets is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML or XML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript.",
    seeAlso: [
      {
        name: "CSS Flexbox,",
        link: "#object",
      },
      {
        name: "CSS Grid,",
        link: "#object",
      },
      {
        name: "CSS Modules,",
        link: "#preprocessor",
      },
      {
        name: "CSS Preprocessor,",
        link: "#preprocessor",
      },
      {
        name: "CSS Variables,",
        link: "#object",
      },
      {
        name: "CSS-in-JS,",
        link: "#object",
      },
      {
        name: "HTML,",
        link: "#html",
      },
      {
        name: "JavaScript,",
        link: "#javascript",
      },
      {
        name: "XML",
        link: "#xml",
      },
    ],
  },
  {
    name: "CSS Flexbox",
    target: "flexbox",
    definition:
      "Flexbox is a one-dimensional layout method for arranging items in rows or columns. Items flex (expand) to fill additional space or shrink to fit into smaller spaces.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "CSS Grid",
        link: "#object",
      },
    ],
  },
  {
    name: "CSS Grid",
    target: "grid",
    definition:
      "CSS grid layout is a two-dimensional layout system for the web. It lets you organize content into rows and columns and offers many features to simplify the creation of complex layouts.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "CSS Flexbox",
        link: "#flexbox",
      },
    ],
  },
  {
    name: "CSS Modules",
    target: "modules",
    definition:
      "A CSS Module is a CSS file where all class names and animation names are scoped locally by default.",
    seeAlso: [
      {
        name: "CSS",
        link: "#css",
      },
    ],
  },
  {
    name: "CSS Preprocessor",
    target: "preprocessor",
    definition:
      "A CSS preprocessor is a program that lets you generate CSS from the preprocessor's own unique syntax. There are many CSS preprocessors to choose from, however most CSS preprocessors will add some features that don't exist in pure CSS, such as mixin, nesting selector, inheritance selector, and so on.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "Sass",
        link: "#sass",
      },
    ],
  },
  {
    name: "CSS Variables",
    target: "variable",
    definition:
      "Custom properties (sometimes referred to as CSS variables or cascading variables) are entities defined by CSS authors that represent specific values to be reused throughout a document.",
    seeAlso: [
      {
        name: "CSS",
        link: "#css",
      },
    ],
  },
  {
    name: "CSS-in-JS",
    target: "css-in-js",
    definition:
      "As the name suggests, CSS-in-JS allows programmers to style their components by writing CSS directly in their JavaScript or TypeScript code. CSS-in-JS is based on the idea of parsing all style definitions from JavaScript into vanilla CSS and then injecting the styles into the DOM using style blocks.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "React",
        link: "#react",
      },
    ],
  },
  {
    name: "CTA (Call-to-Action",
    target: "cta",
    definition:
      "A call to action is a button (or simply a text link) that tells site users to do something—explore the site further, fill out a contact form, browse a portfolio etc. CTAs are important for two reasons: first, they can be used to drive people into a page where they become a conversion—whether that means contacting you, buying something, requesting an estimate, or something else. Second, CTAs help increase your click-through rate, which is the number of pages an average visitor views when they visit your site. Website visitors should be exploring your site, clicking around and viewing many pages, not just visiting a home page or contact page and then leaving. This is important to your SEO because a high click through rate makes your site look reputable to search engines.",
    seeAlso: [
      {
        name: "Bounce Rate,",
        link: "#bounce-rate",
      },
      {
        name: "Conversion Rate,",
        link: "#conversion-rate",
      },
      {
        name: "CTR,",
        link: "#ctr",
      },
      {
        name: "Landing Page,",
        link: "#landing-page",
      },
      {
        name: "Web Analytics",
        link: "#web-analytics",
      },
    ],
  },
  {
    name: "CTR (Click-Through Rate)",
    target: "ctr",
    definition:
      "Click-through rate is the ratio of clicks on a specific link to the number of times a page, email, or advertisement is shown. It is commonly used to measure the success of an online advertising campaign for a particular website, as well as the effectiveness of email campaigns.",
    seeAlso: [
      {
        name: "Bounce Rate,",
        link: "#bounce-rate",
      },
      {
        name: "Conversion Rate,",
        link: "#conversion-rate",
      },
      {
        name: "CTA,",
        link: "#cta",
      },
      {
        name: "Web Analytics",
        link: "#web-analytics",
      },
    ],
  },
  {
    name: "Data Structure",
    target: "data-structure",
    definition:
      "A data structure is a specialized format for organizing, processing, retrieving and storing data. There are several basic and advanced types of data structures, all designed to arrange data to suit a specific purpose. Data structures make it easy for users to access and work with the data they need in appropriate ways.",
    seeAlso: [
      {
        name: "Algorithm",
        link: "#algorithm",
      },
    ],
  },
  {
    name: "Database",
    target: "database",
    definition:
      "A structured set of data held in a computer, especially one that is accessible in various ways. Database types include: hierarchical databases, relational databases, non-relational databases, and object oriented databases.",
    seeAlso: [
      {
        name: "MongoDB,",
        link: "#mongo",
      },
      {
        name: "MySQL,",
        link: "#mySql",
      },
      {
        name: "Non-Relational Database,",
        link: "#non-relational-database",
      },
      {
        name: "NoSQL Database,",
        link: "#noSql-database",
      },
      {
        name: "Relational Database,",
        link: "#relational-database",
      },
      {
        name: "SQL",
        link: "#sql",
      },
    ],
  },
  {
    name: "Debugging",
    target: "debugging",
    definition:
      "In computer programming and software development, debugging is the process of finding and resolving bugs within computer programs, software, or systems.",
    seeAlso: [
      {
        name: "Bug,",
        link: "#bug",
      },
      {
        name: "Developer Tools",
        link: "#developer-tools",
      },
    ],
  },
  {
    name: "Declarative Programming",
    target: "declarative-programming",
    definition:
      "Declarative programming is a method to abstract away the control flow for logic required for software to perform an action, and instead involves stating what the task or desired outcome is. Declarative programming is a high-level programming concept, which is the opposite of imperative programming.",
    seeAlso: [
      {
        name: "Control Flow,",
        link: "#control-flow",
      },
      {
        name: "Imperative Programming",
        link: "#imperative-programming",
      },
    ],
  },
  {
    name: "Deploy (or Deployment)",
    target: "deploy",
    definition:
      "Deployment in software and web development means pushing changes or updates from one deployment environment to another. When setting up a website you will always have your live website, which is called the live environment or production environment.",
  },
  {
    name: "Developer Tools (DevTools)",
    target: "devtools",
    definition:
      "Programs that allow a developer to create, test and debug software. /n Every modern web browser includes a powerful suite of developer tools. These tools do a range of things, from inspecting currently-loaded HTML, CSS and JavaScript to showing which assets the page has requested and how long they took to load.",
    seeAlso: [
      {
        name: "Debugging",
        link: "#debugging",
      },
    ],
  },
  {
    name: "DevOps",
    target: "devops",
    definition:
      "The combination of cultural philosophies, practices, and tools that increases an organization's ability to deliver applications and services at high velocity: evolving and improving products at a faster pace than organizations using traditional software development and infrastructure management processes.",
  },
  {
    name: "DDoS (Distributed Denial-of-Service)",
    target: "ddos",
    definition:
      "A DDoS is an attack in which many compromised systems are made to attack a single target, in order to swamp server resources and block legitimate users.",
    seeAlso: [
      {
        name: "Cross-Site Scripting,",
        link: "#xss",
      },
      {
        name: "DoS,",
        link: "#dos",
      },
      {
        name: "SQL Injection",
        link: "#sql-injection",
      },
    ],
  },
  {
    name: "DNS (Domain Name System)",
    target: "dns",
    definition:
      "The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.",
    seeAlso: [
      {
        name: "Domain,",
        link: "#domain",
      },
      {
        name: "Domain Name,",
        link: "#domain-name",
      },
      {
        name: "ICANN,",
        link: "#icann",
      },
      {
        name: "IP Address,",
        link: "#ip-address",
      },
      {
        name: "Registrar",
        link: "#registrar",
      },
    ],
  },
  {
    name: "DOCTYPE",
    target: "doctype",
    definition:
      "The HTML document type declaration, also known as DOCTYPE , is the first line of code required in every HTML or XHTML document. The DOCTYPE declaration is an instruction to the web browser about what version of HTML the page is written in. This ensures that the web page is parsed the same way by different web browsers.",
    seeAlso: [
      {
        name: "HTML",
        link: "#html",
      },
    ],
  },
  {
    name: "Documentation",
    target: "documentation",
    definition:
      "The process of creating and maintaining clear, concise, and consistent instructions and explanations for your web projects. It can help you and your team communicate better, avoid errors, save time, and improve the quality of your work. Documentation is often incorporated into the software's user interface and also included as part of help documentation.",
  },
  {
    name: "DOM (Document Object Model)",
    target: "dom",
    definition:
      "An application programming interface (API) for HTML and XML documents. It defines the logical structure of documents and the way a document is accessed and manipulated. /n HTML is used to structure the web pages and Javascript is used to add behavior to our web pages. When an HTML file is loaded into the browser, the javascript can not understand the HTML document directly. So it interprets and interacts with the Document Object Model (DOM), which is created by the browser based on the HTML document. DOM is basically the representation of the same HTML document but in a tree-like structure composed of objects.",
    seeAlso: [
      {
        name: "Virtual DOM",
        link: "#virtual-dom",
      },
    ],
  },
  {
    name: "DoS (Denial-of-Service)",
    target: "dos",
    definition:
      "A DoS attack is a type of cyber attack in which a malicious actor aims to render a computer or other device unavailable to its intended users by interrupting the device's normal functioning. ",
    seeAlso: [
      {
        name: "Cross-Site Scripting,",
        link: "#xss",
      },
      {
        name: "DDoS,",
        link: "#ddos",
      },
      {
        name: "SQL Injection",
        link: "#sql-injection",
      },
    ],
  },
  {
    name: "Domain",
    target: "domain",
    definition:
      "A domain name is a website's address on the Internet. Domain names are used in URLs to identify which server a specific webpage belongs to.",
    seeAlso: [
      {
        name: "DNS,",
        link: "#dns",
      },
      {
        name: "Domain Name,",
        link: "#domain-name",
      },
      {
        name: "IP Address,",
        link: "#ip-address",
      },
      {
        name: "Registrar",
        link: "#registrar",
      },
    ],
  },
  {
    name: "Domain Name",
    target: "domain-name",
    definition:
      "A domain name is a string of text that maps to an alphanumeric IP address, used to access a website from client software. In plain English, a domain name is the text that a user types into a browser window to reach a particular website. For instance, the domain name for Google is 'google.com'.",
    seeAlso: [
      {
        name: "DNS,",
        link: "#dns",
      },
      {
        name: "Domain,",
        link: "#domain",
      },
      {
        name: "IP Address,",
        link: "#ip-address",
      },
      {
        name: "Registrar",
        link: "#registrar",
      },
    ],
  },
  {
    name: "Dynamic Typing",
    target: "dynamic-typing",
    definition:
      "Dynamically-typed languages are those (like JavaScript) where the interpreter assigns variables a type at runtime based on the variable's value at the time.",
    seeAlso: [
      {
        name: "JavaScript,",
        link: "#javascript",
      },
      {
        name: "Type Inference,",
        link: "#type-inference",
      },
      {
        name: "TypeScript",
        link: "#typescript",
      },
    ],
  },
  {
    name: "E-Commerce",
    target: "e-commerce",
    definition:
      "E-commerce website development is the process of creating and building online platforms that enable businesses to sell products or services.",
  },
  {
    name: "ECMAScript",
    target: "ecmascript",
    definition:
      "ECMAScript is a scripting language specification on which JavaScript is based. Ecma International is in charge of standardizing ECMAScript. It is best known as a JavaScript standard intended to ensure the interoperability of web pages across different web browsers.",
  },
  {
    name: "Element",
    target: "element",
    definition:
      "An element is a part of a webpage. In XML and HTML, an element may contain a data item or a chunk of text or an image, or perhaps nothing. A typical element includes an opening tag with some attributes, enclosed text content, and a closing tag. Elements and tags are not the same things.",
  },
  {
    name: "Em",
    target: "em",
    definition:
      "An em in CSS is a scalable unit of measurement that defines the size of an element relative to its parent's font size. Unlike absolute units such as pixels (px) or points (pt), an em dynamically adapts its size based on the context.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "Pixel,",
        link: "#pixel",
      },
      {
        name: "Rem",
        link: "#rem",
      },
    ],
  },
  {
    name: "Encapsulation",
    target: "encapsulation",
    definition:
      "Encapsulation is the packing of data and functions into one component (for example, a class) and then controlling access to that component to make a 'blackbox' out of the object.",
    seeAlso: [
      {
        name: "Classes,",
        link: "#classes-javascript",
      },
      {
        name: "Function",
        link: "#function",
      },
    ],
  },
  {
    name: "End User (sometimes End-User)",
    target: "end-user",
    definition:
      "A person who ultimately uses or is intended to ultimately use a product.",
  },
  {
    name: "Encryption",
    target: "encryption",
    definition:
      "Encryption is used to protect data from being stolen, changed, or compromised and works by scrambling data into a secret code that can only be unlocked with a unique digital key.",
  },
  {
    name: "Event",
    target: "event",
    definition:
      "An event is something that happens in the browser, such as a user clicking a button, a page finishing loading, or an element being updated.",
    seeAlso: [
      {
        name: "Event Handler,",
        link: "#event-handler",
      },
      {
        name: "Event Listener",
        link: "#event-listener",
      },
    ],
  },
  {
    name: "Event Handler",
    target: "event-handler",
    definition:
      "Event handlers are simply functions that are called in response to a specific event. These handlers give life to our web pages, making them interactive and responsive to user actions.",
    seeAlso: [
      {
        name: "Event,",
        link: "#event",
      },
      {
        name: "Event Listener",
        link: "#event-listener",
      },
    ],
  },
  {
    name: "Event Listener",
    target: "event-listener",
    definition:
      "JavaScript's event listener function allows you to create custom responses to events like mouse clicks, keyboard clicks, and window resizing. The programming paradigm of waiting and responding to real-time events is called event handling.",
    seeAlso: [
      {
        name: "Event,",
        link: "#event",
      },
      {
        name: "Event Handler",
        link: "#event-handler",
      },
    ],
  },
  {
    name: "Falsy",
    target: "falsy",
    definition:
      "A falsy (sometimes written falsey) value is a value that is considered false when encountered in a Boolean context. JavaScript uses type conversion to coerce any value to a Boolean in contexts that require it, such as conditionals and loops.",
    seeAlso: [
      {
        name: "Boolean,",
        link: "#boolean",
      },
      {
        name: "Null,",
        link: "#null",
      },
      {
        name: "Primitive Data Types (JavaScript),",
        link: "#primitive-data-types",
      },
      {
        name: "Truthy,",
        link: "#truthy",
      },
      {
        name: "Undefined",
        link: "#undefined",
      },
    ],
  },
  {
    name: "Favicon",
    target: "favicon",
    definition:
      "A favicon (short for favorite icon), also known as a shortcut icon, website icon, tab icon, URL icon, or bookmark icon, is a file containing one or more small icons associated with a particular website or web page.",
  },
  {
    name: "FCP (First-Contentful Paint)",
    target: "fcp",
    definition:
      "Your website's First Contentful Paint is when the browser renders the first DOM element on your page. This includes images, canvas elements (non-white), or text. In plain English, FCP is when the user can see some part of your page change.",
    seeAlso: [
      {
        name: "Largest Contentful Paint,",
        link: "#lcp",
      },
      {
        name: "Page Load Time",
        link: "#page-load-time",
      },
    ],
  },
  {
    name: "Fetch API",
    target: "fetchapi",
    definition:
      "The Fetch API provides an interface for fetching resources (including across the network). It is a more powerful and flexible replacement for XMLHttpRequest.",
    seeAlso: [
      {
        name: "API,",
        link: "#api",
      },
      {
        name: "REST,",
        link: "#rest",
      },
      {
        name: "REST API",
        link: "#rest-api",
      },
    ],
  },
  {
    name: "Figma",
    target: "figma",
    definition:
      "Figma is a browser-based, collaborative user interface design tool that lets users work together to create vibrant and interactive prototypes.",
    seeAlso: [
      {
        name: "Prototype",
        link: "#prototype",
      },
    ],
  },
  {
    name: "Firewall",
    target: "firewall",
    definition:
      "A WAF or web application firewall helps protect web applications by filtering and monitoring HTTP traffic between a web application and the Internet.",
    seeAlso: [
      {
        name: "HTTP",
        link: "#http",
      },
    ],
  },
  {
    name: "Fold",
    target: "fold",
    definition:
      "Above the fold content is the part of a web page shown before scrolling. Any content you'd need to scroll down to see, would be considered 'below the fold'. The 'fold' is where the browser window ends, but the content continues underneath.",
    seeAlso: [
      {
        name: "Browser",
        link: "#browser",
      },
    ],
  },
  {
    name: "Footer",
    target: "footer",
    definition:
      "The <footer> element is the section of content at the very bottom of a web page. A footer typically contains information about the author of the section, copyright data or links to related documents.",
    seeAlso: [
      {
        name: "Header,",
        link: "#classes-javascript",
      },
      {
        name: "Navigation",
        link: "#navigation",
      },
    ],
  },
  {
    name: "Framework",
    target: "framework",
    definition:
      "A web development framework is a set of resources and tools for software developers to build and manage web applications, web services and websites, as well as to develop application programming interfaces (APIs). Web development frameworks are also referred to as web application frameworks or simply web frameworks.",
    seeAlso: [
      {
        name: "Bootstrap,",
        link: "#bootstrap",
      },
      {
        name: "Gatsby,",
        link: "#gatsby",
      },
      {
        name: "Next.js",
        link: "#nextjs",
      },
    ],
  },
  {
    name: "Frontend",
    target: "frontend",
    definition:
      "A front-end developer builds the frontend portion of websites and web applications—the part users see and interact with.",
    seeAlso: [
      {
        name: "Backend,",
        link: "#backend",
      },
      {
        name: "Fullstack",
        link: "#fullstack",
      },
    ],
  },
  {
    name: "FTP (File Transfer Protocol)",
    target: "ftp",
    definition:
      "The term file transfer protocol (FTP) refers to a process that involves the transfer of files between devices over a network. The process works when one party allows another to send or receive files over the Internet.",
  },
  {
    name: "Fullstack",
    target: "fullstack",
    definition:
      "Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish. It involves working with various technologies and tools, including front-end web development, back-end web development, and database development.",
    seeAlso: [
      {
        name: "Backend,",
        link: "#backend",
      },
      {
        name: "Frontend",
        link: "#frontend",
      },
    ],
  },
  {
    name: "Function",
    target: "function",
    definition:
      "Allows you to store a piece of code that does a single task inside a defined block, and then call that code whenever you need it using a single short command — rather than having to type out the same code multiple times.",
    seeAlso: [
      {
        name: "JavaScript,",
        link: "#javascript",
      },
      {
        name: "Method,",
        link: "#method",
      },
      {
        name: "Parameter",
        link: "#parameter",
      },
    ],
  },
  {
    name: "Gatsby",
    target: "gatsby",
    definition:
      "A free, open-source, React-based framework designed to help developers build performant websites and apps.",
    seeAlso: [
      {
        name: "Framework",
        link: "#classes-javascript",
      },
    ],
  },
  {
    name: "GIF (Graphics Interchange Format)",
    target: "gif",
    definition:
      "An image format that uses lossless compression and can be used for animations.",
    seeAlso: [
      {
        name: "Alt Attribute,",
        link: "#alt",
      },
      {
        name: "JPEG,",
        link: "#jpeg",
      },
      {
        name: "PDF,",
        link: "#pdf",
      },
      {
        name: "PNG",
        link: "#png",
      },
    ],
  },
  {
    name: "Git",
    target: "git",
    definition:
      "A free and open source distributed version control system designed to handle everything from small to very large projects with speed and efficiency.",
    seeAlso: [
      {
        name: "GitHub,",
        link: "#github",
      },
      {
        name: "GitHub Desktop,",
        link: "#github-desktop",
      },
      {
        name: "Version Control",
        link: "#version-control",
      },
    ],
  },
  {
    name: "GitHub",
    target: "github",
    definition:
      "A code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.",
    seeAlso: [
      {
        name: "Git,",
        link: "#git",
      },
      {
        name: "GitHub Desktop,",
        link: "#github-desktop",
      },
      {
        name: "Version Control",
        link: "#version-control",
      },
    ],
  },
  {
    name: "GitHub Desktop",
    target: "github-desktop",
    definition:
      "A free, open source application that helps you to work with files hosted on GitHub or other Git hosting services.",
    seeAlso: [
      {
        name: "Git,",
        link: "#git",
      },
      {
        name: "GitHub,",
        link: "#github",
      },
      {
        name: "Version Control",
        link: "#version-control",
      },
    ],
  },
  {
    name: "Global Scope",
    target: "global-scope",
    definition:
      "The Javascript global scope is the default context for everything in a Javascript program, and programmers routinely create customized scopes for variables and other Javascript statements. ",
    seeAlso: [
      {
        name: "Local Scope,",
        link: "#local-scope",
      },
      {
        name: "Scope",
        link: "#scope",
      },
    ],
  },
  {
    name: "GUI (Graphical User Interface)",
    target: "gui",
    definition:
      "A digital interface in which a user interacts with graphical components such as icons, buttons, and menus. In a GUI, the visuals displayed in the user interface convey information relevant to the user, as well as actions that they can take.",
  },
  {
    name: "Gutters",
    target: "gutters",
    definition:
      "Gutters refer to the whitespace between content columns on a webpage. They provide visual separation on a website, improving its organization, appearance, and readability. By offering additional breathing room between different elements, gutters increase accessibility and make content easier to digest.",
    seeAlso: [
      {
        name: "Whitespace",
        link: "#whitespace",
      },
    ],
  },
  {
    name: "Header",
    target: "header",
    definition:
      "In the web page layout, the header is the upper (top) part of the webpage. The <header> HTML element represents introductory content, typically a group of introductory or navigational aids.",
    seeAlso: [
      {
        name: "Footer,",
        link: "#footer",
      },
      {
        name: "Navigation",
        link: "#navigation",
      },
    ],
  },
  {
    name: "Hex Color",
    target: "hex-color",
    definition:
      "The <hex-color> CSS data type is a notation for describing the hexadecimal color syntax of an sRGB color using its primary color components (red, green, blue) written as hexadecimal numbers, as well as its transparency. A <hex-color> value can be used everywhere where a <color> can be used.",
    seeAlso: [
      {
        name: "HSL,",
        link: "#hsl",
      },
      {
        name: "RGB,",
        link: "#rgb",
      },
      {
        name: "RGBa",
        link: "#rgba",
      },
    ],
  },
  {
    name: "Hoisting",
    target: "hoisting",
    definition:
      "In JavaScript, Hoisting is the default behavior of moving all the declarations at the top of the scope before code execution. Basically, it gives us an advantage that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.",
    seeAlso: [
      {
        name: "Global Scope,",
        link: "#global-scope",
      },
      {
        name: "Local Scope,",
        link: "#local-scope",
      },
      {
        name: "Scope",
        link: "#scope",
      },
    ],
  },
  {
    name: "Hosting",
    target: "hosting",
    definition:
      "Web hosting -- also known as website hosting or webhosting -- is the process where a web hosting provider stores and maintains website files and applications on a server to make its customers' websites accessible on the internet.",
  },
  {
    name: "HSL (Hue, Saturation, Lightness)",
    target: "hsl",
    definition:
      "The hsl() functional notation expresses an sRGB color according to its hue, saturation, and lightness components. An optional alpha component represents the color's transparency.",
    seeAlso: [
      {
        name: "Hex Color,",
        link: "#hex-color",
      },
      {
        name: "RGB,",
        link: "#rgb",
      },
      {
        name: "RGBa",
        link: "#rgba",
      },
    ],
  },
  {
    name: "HTML (Hypertext Markup Language)",
    target: "html",
    definition:
      "A text-based approach to describing how content contained within an HTML file is structured. This markup tells a web browser how to display text, images and other forms of multimedia on a webpage.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "JavaScript",
        link: "#javascript",
      },
    ],
  },
  {
    name: "HTML Entity",
    target: "entity",
    definition:
      "An entity is a representation of a special character that causes syntax conflicts in HTML (Hypertext Markup Language). An HTML entity is a piece of text ('string') that begins with an ampersand ( & ) and ends with a semicolon ( ; ).",
    seeAlso: [
      {
        name: "HTML",
        link: "#html",
      },
    ],
  },
  {
    name: "HTTP (Hypertext Transfer Protocol)",
    target: "http",
    definition:
      "The Hypertext Transfer Protocol (HTTP) is the foundation of the World Wide Web, and is used to load webpages using hypertext links. HTTP is an application layer protocol designed to transfer information between networked devices and runs on top of other layers of the network protocol stack.",
    seeAlso: [
      { id: 1, name: "301 Redirect,", link: "#redirect" },
      { id: 2, name: "Error 400,", link: "#error400" },
      { id: 3, name: "Error 401,", link: "#error401" },
      { id: 4, name: "Error 403,", link: "#error403" },
      { id: 5, name: "Error 404,", link: "#error404" },
      { id: 6, name: "Error 500,", link: "#error500" },
      { id: 7, name: "Error 502,", link: "#error502" },
      { id: 8, name: "HTTPS", link: "#https" },
    ],
  },
  {
    name: "HTTP Error 400 (Corrupted or Invalid Cookies)",
    target: "error400",
    definition:
      "If a website's server tries to access a corrupted cookie from your browser, it may fail and return a 400 bad request error.",
    seeAlso: [
      { id: 1, name: "301 Redirect,", link: "#redirect" },
      { id: 2, name: "Error 401,", link: "#error401" },
      { id: 3, name: "Error 403,", link: "#error403" },
      { id: 4, name: "Error 404,", link: "#error404" },
      { id: 5, name: "Error 500,", link: "#error500" },
      { id: 6, name: "Error 502,", link: "#error502" },
      { id: 7, name: "HTTP,", link: "#http" },
      { id: 8, name: "HTTPS", link: "#https" },
    ],
  },
  {
    name: "HTTP Error 401 (Unauthorized Access)",
    target: "error401",
    definition:
      "You may see the “Error code 401” if you try to access an outdated or misspelled URL. ",
    seeAlso: [
      { id: 1, name: "301 Redirect,", link: "#redirect" },
      { id: 2, name: "Error 400,", link: "#error400" },
      { id: 3, name: "Error 403,", link: "#error403" },
      { id: 4, name: "Error 404,", link: "#error404" },
      { id: 5, name: "Error 500,", link: "#error500" },
      { id: 6, name: "Error 502,", link: "#error502" },
      { id: 7, name: "HTTP,", link: "#http" },
      { id: 8, name: "HTTPS", link: "#https" },
    ],
  },
  {
    name: "HTTP Error 403 (Forbidden)",
    target: "error403",
    definition:
      "Indicates that the server understands the request but can't provide additional access. This means that the web page you're trying to open in your browser is a resource that you're not allowed to access.",
    seeAlso: [
      { id: 1, name: "301 Redirect,", link: "#redirect" },
      { id: 3, name: "Error 400,", link: "#error400" },
      { id: 2, name: "Error 401,", link: "#error401" },
      { id: 4, name: "Error 404,", link: "#error404" },
      { id: 5, name: "Error 500,", link: "#error500" },
      { id: 6, name: "Error 502,", link: "#error502" },
      { id: 7, name: "HTTP,", link: "#http" },
      { id: 8, name: "HTTPS", link: "#https" },
    ],
  },
  {
    name: "HTTP Error 404 (Not Found)",
    target: "error404",
    definition: "Indicates that the server cannot find the requested resource.",
    seeAlso: [
      { id: 1, name: "301 Redirect,", link: "#redirect" },
      { id: 2, name: "Error 400,", link: "#error400" },
      { id: 4, name: "Error 401,", link: "#error401" },
      { id: 3, name: "Error 403,", link: "#error403" },
      { id: 5, name: "Error 500,", link: "#error500" },
      { id: 6, name: "Error 502,", link: "#error502" },
      { id: 7, name: "HTTP,", link: "#http" },
      { id: 8, name: "HTTPS", link: "#https" },
    ],
  },
  {
    name: "HTTP Error 500 (Internal Server Error)",
    target: "error500",
    definition:
      "The HTTP status code 500 is a generic error response. It means that the server encountered an unexpected condition that prevented it from fulfilling the request. This error is usually returned by the server when no other error code is suitable.",
    seeAlso: [
      { id: 1, name: "301 Redirect,", link: "#redirect" },
      { id: 2, name: "Error 400,", link: "#error400" },
      { id: 5, name: "Error 401,", link: "#error401" },
      { id: 3, name: "Error 403,", link: "#error403" },
      { id: 4, name: "Error 404,", link: "#error404" },
      { id: 6, name: "Error 502,", link: "#error502" },
      { id: 7, name: "HTTP,", link: "#http" },
      { id: 8, name: "HTTPS", link: "#https" },
    ],
  },
  {
    name: "HTTP Error 502 (Bad Gateway)",
    target: "error502",
    definition:
      "Indicates that the server, while acting as a gateway or proxy, received an invalid response from the upstream server.",
    seeAlso: [
      { id: 1, name: "301 Redirect,", link: "#redirect" },
      { id: 2, name: "Error 400,", link: "#error400" },
      { id: 3, name: "Error 403,", link: "#error403" },
      { id: 4, name: "Error 404,", link: "#error404" },
      { id: 5, name: "Error 500,", link: "#error500" },
      { id: 6, name: "Error 502,", link: "#error502" },
      { id: 7, name: "HTTP,", link: "#http" },
      { id: 8, name: "HTTPS,", link: "#https" },
      {
        id: 9,
        name: "Proxy Server",
        link: "#proxy-server",
      },
    ],
  },
  {
    name: "HTTPS (Hypertext Transfer Protocol Secure)",
    target: "https",
    definition:
      "Hypertext transfer protocol secure (HTTPS) is the secure version of HTTP, which is the primary protocol used to send data between a web browser and a website. HTTPS is encrypted in order to increase security of data transfer.",
    seeAlso: [
      { id: 1, name: "301 Redirect,", link: "#redirect" },
      { id: 2, name: "Error 400,", link: "#error400" },
      { id: 3, name: "Error 401,", link: "#error401" },
      { id: 4, name: "Error 403,", link: "#error403" },
      { id: 5, name: "Error 404,", link: "#error404" },
      { id: 6, name: "Error 500,", link: "#error500" },
      { id: 7, name: "Error 502,", link: "#error502" },
      { id: 8, name: "HTTP", link: "#http" },
    ],
  },
  {
    name: "Hydration",
    target: "hydration",
    definition:
      "In web development, hydration or rehydration is a technique in which client-side JavaScript converts a static HTML web page, delivered either through static hosting or server-side rendering, into a dynamic web page by attaching event handlers to the HTML elements.",
  },
  {
    name: "Hyperlink",
    target: "hyperlink",
    definition:
      "A hyperlink is an element in an HTML document. Hypertext is text with hyperlinks. The linked text (the reference to data) is called anchor text.",
  },
  {
    name: "ICANN (Internet Corporation for Assigned Names and Numbers)",
    target: "icann",
    definition:
      "ICANN (Internet Corporation for Assigned Names and Numbers) is the private, non-government, nonprofit corporation with responsibility for Internet Protocol (IP) address space allocation, protocol parameter assignment, domain name system (DNS) management and root server system management functions.",
    seeAlso: [
      {
        name: "DNS,",
        link: "#dns",
      },
      {
        name: "IP Address",
        link: "#ip-address",
      },
    ],
  },
  {
    name: "ID Selector",
    target: "id",
    definition:
      "The HTML id attribute is used to specify a unique id for an HTML element. You cannot have more than one element with the same id in an HTML document.",
    seeAlso: [
      {
        name: "Class Selector,",
        link: "#class-selector",
      },
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "Selector",
        link: "#selector",
      },
    ],
  },
  {
    name: "IDE (Integrated Development Enviroment)",
    target: "ide",
    definition:
      "A software application that helps programmers develop software code efficiently. It increases developer productivity by combining capabilities such as software editing, building, testing, and packaging in an easy-to-use application. Sometimes also referred to as a Code Editor. Examples include: Sublime Text, Visual Studio, Visual Studio Code, etc.",
  },
  {
    name: "IIFE (Immediately Invoked Function Expression)",
    target: "iife",
    definition:
      "An immediately invoked function expression, or IIFE (pronounced iffy), is a function that is called immediately after it is defined. IIFE is used to create private and public variables and methods. It is used to execute the async and await function.",
    seeAlso: [
      {
        name: "Async/Await,",
        link: "#async-await",
      },
      {
        name: "Function,",
        link: "#function",
      },
      {
        name: "Method",
        link: "#method",
      },
    ],
  },
  {
    name: "IMAP (Internet Message Access Protocol)",
    target: "imap",
    definition:
      "IMAP (Internet Message Access Protocol) is a protocol used to retrieve and store emails. More recent than POP, IMAP allows folders and rules on the server. Unlike POP3, IMAP allows multiple simultaneous connections to one mailbox.",
  },
  {
    name: "Imperative Programming",
    target: "iterate",
    definition:
      "Imperative programming is a software development paradigm where functions are implicitly coded in every step required to solve a problem.",
    seeAlso: [
      {
        name: "Control Flow,",
        link: "#control-flow",
      },
      {
        name: "Declarative Programming",
        link: "#declarative-programming",
      },
    ],
  },
  {
    name: "Immutable",
    target: "immutable",
    definition:
      "An immutable value is one whose content cannot be changed without creating an entirely new value. In JavaScript, primitive values are immutable — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned another value. By contrast, objects and arrays are mutable by default — their properties and elements can be changed without reassigning a new value.",
    seeAlso: [
      {
        name: "Mutable",
        link: "#mutable",
      },
    ],
  },
  {
    name: "Interpolation",
    target: "interpolation",
    definition:
      "Interpolation is a process of calculating values based on known values. The interpolation is used to obtain intermediate values of properties, such as height, width, etc., during the process of their animation. In gradients, interpolation is used to define intermediate values of colors based on a provided list of colors. Also, the term 'interpolation' is used as a description of the substitution of strings in the template literals. (See also: String, String Interpolation, Template Literal)",
    seeAlso: [
      {
        name: "String,",
        link: "#string",
      },
      {
        name: "String Interpolation,",
        link: "#string-interpolation",
      },
      {
        name: "Template Literal",
        link: "#template-literal",
      },
    ],
  },
  {
    name: "Intersection Observer",
    target: "intersection-observer",
    definition:
      "The Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport.",
    seeAlso: [
      {
        name: "API",
        link: "#api",
      },
    ],
  },
  {
    name: "IP Address (Internet Protocol Address)",
    target: "ip-address",
    definition:
      "IP address stands for “Internet Protocol address.” The Internet Protocol is a set of rules for communication over the internet, such as sending mail, streaming video, or connecting to a website. An IP address identifies a network or device on the internet.",
    seeAlso: [
      {
        name: "DNS,",
        link: "#dns",
      },
      {
        name: "Domain Name,",
        link: "#domain-name",
      },
      {
        name: "ICANN,",
        link: "#icann",
      },
      {
        name: "IP Address,",
        link: "#ip-address",
      },
      {
        name: "Registrar",
        link: "#registrar",
      },
    ],
  },
  {
    name: "Iterate",
    target: "iterate",
    definition:
      "In programming specifically, iterative refers to a sequence of instructions or code being repeated until a specific end result is achieved.",
    seeAlso: [
      {
        name: "Loop",
        link: "#loop",
      },
    ],
  },
  {
    name: "JavaScript",
    target: "javascript",
    definition:
      "JavaScript is a lightweight programming language commonly used by web developers to add dynamic interactions to web pages, applications, servers, and even games. /n It works seamlessly alongside HTML and CSS, complementing CSS in formatting HTML elements while providing user interaction, a capability that CSS alone lacks. /n JavaScript's widespread applications in web, mobile app, and game development make it a valuable language to learn. 98.7% of websites on the internet use JavaScript.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "HTML,",
        link: "#html",
      },
      {
        name: "TypeScript",
        link: "#typescript",
      },
    ],
  },
  {
    name: "JPEG (Joint Photographic Experts Group)",
    target: "jpeg",
    definition:
      "A commonly used method of lossy compression for digital images, particularly for those images produced by digital photography. The degree of compression can be adjusted, allowing a selectable tradeoff between storage size and image quality.",
    seeAlso: [
      {
        name: "Alt Attribute,",
        link: "#alt",
      },
      {
        name: "GIF,",
        link: "#gif",
      },
      {
        name: "PDF,",
        link: "#pdf",
      },
      {
        name: "PNG",
        link: "#png",
      },
    ],
  },
  {
    name: "JSON (JavaScript Object Notation)",
    target: "json",
    definition:
      "An open standard file format and data interchange format that uses human-readable text to store and transmit data objects consisting of attribute-value pairs and arrays (or other serializable values). It is a common data format with diverse uses in electric data interchange, including that of web applications with servers.",
    seeAlso: [
      {
        name: "Object",
        link: "#object",
      },
    ],
  },
  {
    name: "JSX (JavaScript XML)",
    target: "jsx",
    definition:
      "When writing React, JSX allows us to write HTML elements in JavaScript and place them in the DOM without any createElement() and/or appendChild() methods. JSX converts HTML tags into react elements",
    seeAlso: [
      {
        name: "DOM,",
        link: "#dom",
      },
      {
        name: "HTML,",
        link: "#html",
      },
      {
        name: "JavaScript,",
        link: "#javascript",
      },
      {
        name: "React,",
        link: "#react",
      },
      {
        name: "XML",
        link: "#xml",
      },
    ],
  },
  {
    name: "Kebab Case (kebab-case)",
    target: "kebab",
    definition:
      "Kebab case is a way of writing phrases without spaces, where spaces are replaced with hyphens, and the words are typically all lower case.",
    seeAlso: [
      {
        name: "Camel Case,",
        link: "#camel-case",
      },
      {
        name: "Pascal Case,",
        link: "#pascal-case",
      },
      {
        name: "Snake Case",
        link: "#snake-case",
      },
    ],
  },
  {
    name: "Key",
    target: "key",
    definition:
      "A 'key' is a special string attribute you need to include when creating arrays of elements. Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside an array to give the elements a stable identity.",
  },
  {
    name: "Landing Page",
    target: "landing-page",
    definition:
      "In digital marketing, a landing page is a standalone web page, created specifically for a marketing or advertising campaign. It's where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web. /n Unlike web pages, which typically have many goals and encourage exploration, landing pages are designed with a single focus or goal, known as a call to action (or CTA, for short). /n It's this focus that makes landing pages the best option for increasing the conversion rates of your marketing campaigns and lowering your cost of acquiring a lead or sale.",
    seeAlso: [
      {
        name: "Bounce Rate,",
        link: "#bounce-rate",
      },
      {
        name: "Conversion Rate,",
        link: "#conversion-rate",
      },
      {
        name: "CTA,",
        link: "#cta",
      },
      {
        name: "CTR,",
        link: "#ctr",
      },
      {
        name: "Web Analytics",
        link: "#web-analytics",
      },
    ],
  },
  {
    name: "LCP (Largest Contentful Paint)",
    target: "lcp",
    definition:
      "Largest Contentful Paint (LCP) is one of the three Core Web Vitals metrics, and it represents how quickly the main content of a web page is loaded. Specifically, LCP measures the time from when the user initiates loading the page until the largest image or text block is rendered within the viewport.",
    seeAlso: [
      {
        name: "First Contentful Paint,",
        link: "#fcp",
      },
      {
        name: "Page Load Time",
        link: "#page-load-time",
      },
    ],
  },
  {
    name: "Latency",
    target: "latency",
    definition:
      "Latency is the time it takes for a packet of data to travel from source to a destination. In terms of performance optimization, it's important to optimize to reduce causes of latency and to test site performance emulating high latency to optimize for users with lousy connections.",
    seeAlso: [
      {
        name: "Web Analytics",
        link: "#web-analytics",
      },
    ],
  },
  {
    name: "Lazy Loading",
    target: "lazy-loading",
    definition:
      "Lazy loading is a technique for waiting to load certain parts of a webpage — especially images — until they are needed. Instead of loading everything all at once, known as 'eager' loading, the browser does not request certain resources until the user interacts in such a way that the resources are needed.",
  },
  {
    name: "Local Scope",
    target: "local-scope",
    definition:
      "Local scope is a characteristic of variables that makes them local (i.e., the variable name is only bound to its value within a scope which is not the global scope).",
    seeAlso: [
      {
        name: "Global Scope,",
        link: "#global-scope",
      },
      {
        name: "Scope",
        link: "#scope",
      },
    ],
  },
  {
    name: "LocalHost",
    target: "localhost",
    definition:
      "A computer becomes a local host when a programmer is connected to a network, testing a virtual connection with another computer, or testing programs.",
  },
  {
    name: "Localization",
    target: "localization",
    definition:
      "Software localization is the process of adapting software to both the culture and language of an end user, from standards of measurement to video and graphic design. It involves not only translation, but also design and UX changes to make software look and feel natural to the target user.",
  },
  {
    name: "localStorage",
    target: "localStorage",
    definition:
      "The localStorage read-only property of the window interface allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. localStorage is similar to sessionStorage, except that while localStorage data has no expiration time, sessionStorage data gets cleared when the page session ends — that is, when the page is closed. (localStorage data for a document loaded in a 'private browsing' or 'incognito' session is cleared when the last 'private' tab is closed.)",
    seeAlso: [
      {
        name: "Cache,",
        link: "#cache",
      },
      {
        name: "Cookie,",
        link: "#cookie",
      },
      {
        name: "sessionStorage",
        link: "#sessionStorage",
      },
    ],
  },
  {
    name: "Loop",
    target: "loop",
    definition:
      "A loop is a sequence of instructions that is repeated until a certain condition is met. An example would be the process of getting an item of data and changing it, and then making sure some condition is checked — such as if a counter has reached a prescribed number.",
    seeAlso: [
      {
        name: "Iterate",
        link: "#iterate",
      },
    ],
  },
  {
    name: "Margin",
    target: "margin",
    definition:
      "Margin is the space around the border of an element. The margin surrounding an element will inform the web browser being used of how much space should be left between independent elements and the external margin of the website's page. Margins can also be used to keep different elements an equal distance apart.",
    seeAlso: [
      {
        name: "Box Model,",
        link: "#box-model",
      },
      {
        name: "Padding",
        link: "#padding",
      },
    ],
  },
  {
    name: "Markup",
    target: "markup",
    definition:
      "A markup language is one that is designed for defining and presenting text. HTML (HyperText Markup Language), is an example of a markup language.",
    seeAlso: [
      {
        name: "HTML",
        link: "#html",
      },
    ],
  },
  {
    name: "MDN (Mozilla Developer Network)",
    target: "mdn",
    definition:
      "MDN Web Docs is an open-source, collaborative project documenting Web platform technologies, including CSS, HTML, JavaScript, and Web APIs. MDN also provides an extensive set of learning resources for beginning developers and students.",
    seeAlso: [
      {
        name: "Documentation",
        link: "#documentation",
      },
    ],
  },
  {
    name: "Media Query",
    target: "media-query",
    definition:
      "Media query is a CSS technique introduced in CSS3. It uses the @media rule to include a block of CSS properties only if a certain condition is true.",
    seeAlso: [
      {
        name: "Breakpoints",
        link: "#breakpoints",
      },
    ],
  },
  {
    name: "Metadata",
    target: "metadata",
    definition:
      "Metadata is data (information) about data. Website metadata includes page titles, descriptions, keywords, and more to help search engines crawl and rank web pages.",
    seeAlso: [
      {
        name: "Meta Tags",
        link: "#meta-tags",
      },
    ],
  },
  {
    name: "Meta Tags",
    target: "meta-tags",
    definition:
      "Meta tags are HTML tags that provide information about a webpage's content to search engines and users.",
    seeAlso: [
      {
        name: "Metadata",
        link: "#metadata",
      },
    ],
  },
  {
    name: "Method",
    target: "method",
    definition:
      "A method, like a function, is a set of instructions that perform a task. The difference is that a method is associated with an object, while a function is not.",
    seeAlso: [
      {
        name: "Function,",
        link: "#function",
      },
      {
        name: "JavaScript",
        link: "#javascript",
      },
    ],
  },
  {
    name: "Middleware",
    target: "middleware",
    definition:
      "Middleware is software that different applications use to communicate with each other. It provides functionality to connect applications intelligently and efficiently so that you can innovate faster.",
  },
  {
    name: "Minification",
    target: "minification",
    definition:
      "Minification is the process of removing unnecessary or redundant data without affecting how a resource is processed by the browser. Minification can include the removal of code comments, white space, and unused code, as well as the shortening of variable and function names.",
  },
  {
    name: "Mobile-First",
    target: "mobile-first",
    definition:
      "A “mobile-first” approach involves designing a desktop site starting with the mobile version, which is then adapted to larger screens (contrary to the traditional approach of starting with a desktop site and then adapting it to smaller screens).",
    seeAlso: [
      {
        name: "Responsive Web Design",
        link: "#responsive-design",
      },
    ],
  },
  {
    name: "MongoDB",
    target: "mongo",
    definition:
      "MongoDB is an open source NoSQL database management program. NoSQL (Not only SQL) is used as an alternative to traditional relational databases.",
    seeAlso: [
      {
        name: "Database,",
        link: "#database",
      },
      {
        name: "Relational Database",
        link: "#relational-database",
      },
    ],
  },
  {
    name: "Mutable",
    target: "mutable",
    definition:
      "A mutable value is one that can be changed without creating an entirely new value. In JavaScript, objects and arrays are mutable by default, but primitive values are not — once a primitive value is created, it cannot be changed, although the variable that holds it may be reassigned.",
    seeAlso: [
      {
        name: "Immutable",
        link: "#immutable",
      },
    ],
  },
  {
    name: "MVP (Minimum Viable Product)",
    target: "mvp",
    definition:
      "The meaning of MVP in software development stands for Minimum Viable Product. It refers to a development approach where a product is built with the minimum features necessary to satisfy the early adopters or users and gather valuable feedback for further development.",
  },
  {
    name: "MySQL",
    target: "mySql",
    definition:
      "MySQL is an open-source relational database management system (RDBMS) developed by Oracle.",
    seeAlso: [
      {
        name: "Database,",
        link: "#database",
      },
      {
        name: "Relational Database",
        link: "#relational-database",
      },
    ],
  },
  {
    name: "Namespace",
    target: "namespace",
    definition:
      "In web development, a namespace is a container that holds a set of identifiers, such as functions, classes, or variables, to organize and manage code. Namespaces are used to avoid naming conflicts between different components or libraries within an application.",
  },
  {
    name: "Navigation",
    target: "navigation",
    definition:
      "Website navigation is a collection of user interface components that allows visitors find content and features on a site. These components can be in the form of copy, link text and buttons, and menus. The <nav> HTML element represents a section of a page whose purpose is to provide navigation links, either within the current document or to other documents. Common examples of navigation sections are menus, tables of contents, and indexes.",
    seeAlso: [
      {
        name: "Footer,",
        link: "#footer",
      },
      {
        name: "Header",
        link: "#header",
      },
    ],
  },
  {
    name: "Next.js",
    target: "nextjs",
    definition:
      "The React Framework for the Web. Used by some of the world's largest companies, Next.js enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
    seeAlso: [
      {
        name: "Framework,",
        link: "#framework",
      },
      {
        name: "React",
        link: "#react",
      },
    ],
  },
  {
    name: "Node",
    target: "node",
    definition:
      "An individual part of a larger data structure. Nodes are a basic data structure which contain data and one or more links to other nodes. Nodes can be used to represent a tree structure or a linked list.",
    seeAlso: [
      {
        name: "Data Structure,",
        link: "#data-structure",
      },
      {
        name: "DOM",
        link: "#dom",
      },
    ],
  },
  {
    name: "Node.js",
    target: "nodejs",
    definition:
      "A JavaScript runtime for building server-side or desktop applications. /n Node allows developers to write JavaScript code that runs directly in a computer process itself instead of in a browser. Node can, therefore, be used to write server-side applications with access to the operating system, file system, and everything else required to build fully-functional applications.",
  },
  {
    name: "Non-Relational Database",
    target: "non-relational-database",
    definition:
      "A non-relational database is a database that does not use the tabular schema of rows and columns found in most traditional database systems.",
    seeAlso: [
      {
        name: "Database,",
        link: "#database",
      },
      {
        name: "NoSQL Database",
        link: "#noSql-database",
      },
    ],
  },
  {
    name: "NoSQL Database",
    target: "noSql-database",
    definition:
      "The term 'NoSQL' refers to non-relational types of databases, and these databases store data in a format that's different from relational tables.",
    seeAlso: [
      {
        name: "Database,",
        link: "#database",
      },
      {
        name: "Non-Relational Database",
        link: "#non-relational-database",
      },
    ],
  },
  {
    name: "NPM (Node Package Manager)",
    target: "npm",
    definition:
      "It's a library and registry for JavaScript software packages. npm also has command-line tools to help you install the different packages and manage their dependencies. ",
    seeAlso: [
      {
        name: "Bash,",
        link: "#bash",
      },
      {
        name: "Terminal,",
        link: "#terminal",
      },
      {
        name: "Yarn",
        link: "#yarn",
      },
    ],
  },
  {
    name: "Number",
    target: "number",
    definition:
      "One of the primitive types of JavaScript. Number values represent floating-point numbers like 37 or -9.25.",
    seeAlso: [
      {
        name: "Primitive Data Types",
        link: "#primitive-data-types",
      },
    ],
  },
  {
    name: "Null",
    target: "null",
    definition:
      "The null value represents the intentional absence of any object value. It is one of JavaScript's primitive values and is treated as falsy for boolean operations.",
    seeAlso: [
      {
        name: "Boolean,",
        link: "#boolean",
      },
      {
        name: "Falsy,",
        link: "#falsy",
      },
      {
        name: "Primitive Data Types (JavaScript),",
        link: "#primitive-data-types",
      },
      {
        name: "Truthy,",
        link: "#truthy",
      },
      {
        name: "Undefined",
        link: "#undefined",
      },
    ],
  },
  {
    name: "Object",
    target: "object",
    definition:
      "An object is a collection of related data and/or functionality. These usually consist of several variables and functions (which are called properties and methods when they are inside objects).",
    seeAlso: [
      {
        name: "Classes,",
        link: "#classes",
      },
      {
        name: "Constructor,",
        link: "#constructor",
      },
      {
        name: "Function,",
        link: "#function",
      },
      {
        name: "Method",
        link: "#method",
      },
    ],
  },
  {
    name: "Object Literal",
    target: "object-literal",
    definition:
      "An object literal is a way to declare an object. /n You would write /n var myObject = {}; // with or without members /n instead of /n var myObject = new Object();",
    seeAlso: [
      {
        name: "Object",
        link: "#object",
      },
    ],
  },
  {
    name: "Object Model",
    target: "object-model",
    definition:
      "The CSS Object Model is a set of APIs allowing the manipulation of CSS from JavaScript. It is much like the DOM, but for the CSS rather than the HTML. It allows users to read and modify CSS style dynamically. The values of CSS are represented untyped, that is using String objects",
    seeAlso: [
      {
        name: "CSS",
        link: "#css",
      },
    ],
  },
  {
    name: "OOP (Object-Oriented Programming)",
    target: "oop",
    definition:
      "Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system. Objects contain both functions (or methods) and data.",
    seeAlso: [
      {
        name: "Function,",
        link: "#function",
      },
      {
        name: "JavaScript,",
        link: "#javascript",
      },
      {
        name: "Method,",
        link: "#method",
      },
      {
        name: "Object",
        link: "#object",
      },
    ],
  },
  {
    name: "OOTB (Out-of-the-Box)",
    target: "ootb",
    definition:
      "An out-of-the-box feature or functionality (also called OOTB or off the shelf), particularly in software, is a native feature or built-in functionality of a product that comes directly from the vendor and works immediately when the product is placed in service.",
  },
  {
    name: "Open Source",
    target: "open-source",
    definition:
      "The term open source refers to any program whose source code is made available for use or modification as users or other developers see fit. Unlike proprietary software, open source software is computer software that is developed as a public, open collaboration and made freely available to the public.",
  },
  {
    name: "Operating System",
    target: "operating-system",
    definition:
      "Operating systems act as an intermediary between a computer user and the hardware used by computers. They aim to provide a platform where users can perform programs efficiently and quickly. Each computer needs operating systems to function efficiently.",
  },
  {
    name: "Operator",
    target: "operator",
    definition:
      "In mathematics and computer programming, an operator is a character that represents a specific mathematical or logical action or process. For instance, 'x' is an arithmetic operator that indicates multiplication, while '&&' is a logical operator representing the logical AND function in programming.",
    seeAlso: [
      {
        name: "JavaScript",
        link: "#javascript",
      },
    ],
  },
  {
    name: "Padding",
    target: "padding",
    definition:
      "Padding is the space between the content and the border of an element. Padding is valuable in making additional space inside an element, keeping it at a set distance from other aspects of a website.",
    seeAlso: [
      {
        name: "Box Model,",
        link: "#box-model",
      },
      {
        name: "Margin",
        link: "#margin",
      },
    ],
  },
  {
    name: "Page Load Time",
    target: "page-load-time",
    definition:
      "In its simplest terms, page load time is the average amount of time it takes for a page to show up on your screen. It's calculated from initiation (when you click on a page link or type in a Web address) to completion (when the page is fully loaded in the browser).",
    seeAlso: [
      {
        name: "First Contentful Paint,",
        link: "#fcp",
      },
      {
        name: "Largest Contentful Paint",
        link: "#lcp",
      },
    ],
  },
  {
    name: "Pagination",
    target: "pagination",
    definition:
      "The method of separating digital content into different pages on a website. Users can navigate between these pages by clicking links, often in the form of numbers located at the bottom of a page. Paginated content is typically related by some common theme or purpose.",
  },
  {
    name: "Parameter",
    target: "parameter",
    definition:
      "A parameter is a programming variable or value that transfers data between functions.",
    seeAlso: [
      {
        name: "Function",
        link: "#function",
      },
    ],
  },
  {
    name: "Pascal Case (PascalCase)",
    target: "pascal",
    definition:
      "A programming naming convention where the first letter of each compound word in a variable is capitalized. The use of descriptive variable names is a software development best practice. However, modern programming languages do not allow variables names to include blank spaces.",
    seeAlso: [
      {
        name: "Camel Case,",
        link: "#camel-case",
      },
      {
        name: "Kebab Case,",
        link: "#kebab-case",
      },
      {
        name: "Snake Case",
        link: "#snake-case",
      },
    ],
  },
  {
    name: "PDF (Portable Document Format)",
    target: "pdf",
    definition:
      "PDF (Portable Document Format) is a file format used to share documentation without depending on any particular software implementation, hardware platform, or operating system. PDF provides a digital image of a printed document, and keeps the same appearance when printed.",
    seeAlso: [
      {
        name: "Alt Attribute,",
        link: "#alt",
      },
      {
        name: "GIF,",
        link: "#gif",
      },
      {
        name: "JPEG,",
        link: "#jpeg",
      },
      {
        name: "PNG",
        link: "#png",
      },
    ],
  },
  {
    name: "Perceived Performance",
    target: "perceived-performance",
    definition:
      "A subjective measure of website performance, responsiveness, and reliability. In other words, how fast a website seems to the user. It is harder to quantify and measure than the actual speed of operation, but perhaps even more important.",
    seeAlso: [
      {
        name: "Page Load Time",
        link: "#page-load-time",
      },
    ],
  },
  {
    name: "Pixel",
    target: "pixel",
    definition:
      "A Pixel, in the context of websites and digital media, refers to a tiny, single point in a grid of thousands or millions of points that make up an image or the display on a computer or mobile screen. It is the smallest unit of measurement for digital images and screens. Pixels are often used to measure the resolution and dimensions of images and screens.",
    seeAlso: [
      {
        name: "Resolution",
        link: "#resolution",
      },
    ],
  },
  {
    name: "Plugin",
    target: "plugin",
    definition:
      "Plugins are software extensions that allow users to customise software applications, web browsers, and web content. While plugins are still used as add-ons to customise applications, their use in web browsers has waned. In turn, browser extensions have taken their place.",
    seeAlso: [
      {
        name: "Browser",
        link: "#browser",
      },
    ],
  },
  {
    name: "PNG (Portable Network Graphic)",
    target: "png",
    definition:
      "A type of raster image file that is commonly used on the internet. PNG files are 'lossless.' This means they have a fixed number of pixels, and do not lose any quality when they are compressed. This makes them ideal for storing images that need to be high quality, such as logos, photos, and screenshots. PNG images also support transparency, which can be useful for creating web graphics with transparent backgrounds.",
    seeAlso: [
      {
        name: "Alt Attribute,",
        link: "#alt",
      },
      {
        name: "GIF,",
        link: "#gif",
      },
      {
        name: "JPEG,",
        link: "#jpeg",
      },
      {
        name: "PDF",
        link: "#pdf",
      },
    ],
  },
  {
    name: "Primitive Data Types (JavaScript)",
    target: "primitive-data-types",
    definition:
      "The predefined data types provided by JavaScript language are known as primitive data types. Primitive data types are also known as in-built data types. The seven primitive data types of JavaScript are: string, number, bigint, boolean, symbol, null and undefined.",
    seeAlso: [
      {
        name: "BigInt,",
        link: "#bigint",
      },
      {
        name: "Boolean,",
        link: "#boolean",
      },
      {
        name: "Falsy,",
        link: "#falsy",
      },
      {
        name: "Null,",
        link: "#null",
      },
      {
        name: "Number,",
        link: "#number",
      },
      {
        name: "Truthy,",
        link: "#truthy",
      },
      {
        name: "String,",
        link: "#string",
      },
      {
        name: "Symbol,",
        link: "#symbol",
      },
      {
        name: "Undefined",
        link: "#undefined",
      },
    ],
  },
  {
    name: "Promise",
    target: "promise",
    definition:
      "A promise is an object returned by an asynchronous function, which represents the current state of the operation. At the time the promise is returned to the caller, the operation often isn't finished, but the promise object provides methods to handle the eventual success or failure of the operation.",
    seeAlso: [
      {
        name: "Async/Await,",
        link: "#async-await",
      },
      {
        name: "Asynchronous,",
        link: "#asynchronous",
      },
      {
        name: "Function,",
        link: "#function",
      },
      {
        name: "Method,",
        link: "#method",
      },
      {
        name: "Object",
        link: "#object",
      },
    ],
  },
  {
    name: "Property (CSS)",
    target: "property-css",
    definition:
      "A CSS property is a characteristic (like color) whose associated value defines one aspect of how the browser should display the element.",
    seeAlso: [
      {
        name: "CSS",
        link: "#css",
      },
    ],
  },
  {
    name: "Property (JavaScript)",
    target: "property-javascript",
    definition:
      "A JavaScript property is a member of an object that associates a key with a value. A JavaScript object is a data structure that stores a collection of properties.",
    seeAlso: [
      {
        name: "JavaScript,",
        link: "#javascript",
      },
      {
        name: "Object",
        link: "#object",
      },
    ],
  },
  {
    name: "Prototype",
    target: "prototype",
    definition:
      "Essentially, a website prototype allows the project stakeholders to see what the final product will look like early in the project lifecycle.",
    seeAlso: [
      {
        name: "Figma",
        link: "#figma",
      },
    ],
  },
  {
    name: "Prototype (JavaScript)",
    target: "prototype-javascript",
    definition:
      "A prototype is an existing inbuilt functionality in JavaScript. Whenever we create a JavaScript function, JavaScript adds a prototype property to that function.",
    seeAlso: [
      {
        name: "Function,",
        link: "#function",
      },
      {
        name: "JavaScript",
        link: "#javascript",
      },
    ],
  },
  {
    name: "Proxy Server",
    target: "proxy",
    definition:
      "Proxy servers use a different IP address on behalf of the user, concealing the user's real address from web servers.",
    seeAlso: [
      {
        name: "Server",
        link: "#server",
      },
    ],
  },
  {
    name: "Pseudo-Element (CSS)",
    target: "pseudo",
    definition:
      "A CSS pseudo-element is used to style specified parts of an element. For example, it can be used to: Style the first letter, or line, of an element.",
    seeAlso: [
      {
        name: "CSS",
        link: "#css",
      },
    ],
  },
  {
    name: "Pseudocode",
    target: "pseudocode",
    definition:
      "Pseudocode is a detailed yet readable description of what a computer program or algorithm should do. It is written in a formal yet readable style that uses a natural syntax and formatting so it can be easily understood by programmers and others involved in the development process.",
  },
  {
    name: "PWA (Progressive Web App)",
    target: "pwa",
    definition:
      "A progressive web app (PWA) is a website that looks and behaves as if it is a mobile app. PWAs are built to take advantage of native mobile device features, without requiring the end user to visit an app store, make a purchase and download software locally.",
    seeAlso: [
      {
        name: "SPA,",
        link: "#spa",
      },
      {
        name: "Static Site",
        link: "#static-site",
      },
    ],
  },
  {
    name: "Quality Assurance",
    target: "quality-assurance",
    definition:
      "Website quality assurance, frequently referred to as website QA, is the process where optimizers and developers test a website to ensure everything looks and works correctly on all relevant devices and browsers.",
  },
  {
    name: "React",
    target: "react",
    definition:
      "React is a JavaScript-based UI development library. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development.",
    seeAlso: [
      {
        name: "JSX,",
        link: "#jsx",
      },
      {
        name: "Next.js,",
        link: "#nextjs",
      },
      {
        name: "React Server Components",
        link: "#server-components",
      },
    ],
  },
  {
    name: "React Server Components",
    target: "server-components",
    definition:
      "React Server Components (RSCs, or simply Server Components) represent the latest advancement in pre-rendering content on the web. They introduce a new mental model to the framework, allowing us to craft components that span both server and client realms.",
    seeAlso: [
      {
        name: "Client Components,",
        link: "#client-components",
      },
      {
        name: "React,",
        link: "#react",
      },
      {
        name: "Server,",
        link: "#server",
      },
      {
        name: "Server-Side Rendering",
        link: "#server-side-rendering",
      },
    ],
  },
  {
    name: "Recursion",
    target: "recursion",
    definition:
      "The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called a recursive function. A recursive function solves a particular problem by calling a copy of itself and solving smaller subproblems of the original problems.",
    seeAlso: [
      {
        name: "Function",
        link: "#function",
      },
    ],
  },
  {
    name: "Redirection",
    target: "redirection",
    definition:
      "URL redirection, also called URL forwarding, is a World Wide Web technique for making a web page available under more than one URL address. When a web browser attempts to open a URL that has been redirected, a page with a different URL is opened.",
    seeAlso: [
      {
        name: "URL",
        link: "#url",
      },
    ],
  },
  {
    name: "RegEx (Regular Expression)",
    target: "regex",
    definition:
      "A regular expression (regex for short) allow developers to match strings against a pattern, extract submatch information, or simply test if the string conforms to that pattern.",
    seeAlso: [
      {
        name: "String",
        link: "#string",
      },
    ],
  },
  {
    name: "Registrar",
    target: "registrar",
    definition:
      "A registrar, or domain name server (DNS) registrar, manages the sale of domain names and the assignment of IP addresses, ensuring each domain's uniqueness. They serve as middlemen between the end user and the domain name system.",
    seeAlso: [
      {
        name: "DNS,",
        link: "#dns",
      },
      {
        name: "Domain,",
        link: "#domain",
      },
      {
        name: "Domain Name,",
        link: "#domain-name",
      },
      {
        name: "IP Address",
        link: "#ip-address",
      },
    ],
  },
  {
    name: "Relational Database",
    target: "relational-database",
    definition:
      "A relational database organizes data into rows and columns, which collectively form a table. Data is typically structured across multiple tables, which can be joined together via a primary key or a foreign key. These unique identifiers demonstrate the different relationships which exist between tables, and these relationships are usually illustrated through different types of data models.",
    seeAlso: [
      {
        name: "Database,",
        link: "#database",
      },
      {
        name: "SQL",
        link: "#sql",
      },
    ],
  },
  {
    name: "REM (Root Em)",
    target: "rem",
    definition:
      "Rem stands for root em, which is a measurement unit that refers to the font-size of the root element of a document.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "Em",
        link: "#em",
      },
    ],
  },
  {
    name: "Render",
    target: "render",
    definition:
      "Rendering is the process of gathering data (if any) and load the associated templates (or just send the output directly). Then apply the gathered data to the associated templates. The final output is sent to the user.",
  },
  {
    name: "Repo (Repository)",
    target: "repo",
    definition:
      "Rendering is the process of gathering data (if any) and load the associated templates (or just send the output directly). Then apply the gathered data to the associated templates. The final output is sent to the user.",
  },
  {
    name: "Resolution",
    target: "resolution",
    definition:
      "Resolution is a metric measuring clarity and detail through the number of pixels displayed on a screen or used to render an image.",
    seeAlso: [
      {
        name: "Pixel",
        link: "#pixel",
      },
    ],
  },
  {
    name: "Responsive Web Design",
    target: "responsive-design",
    definition:
      "A design approach that addresses the range of devices and device sizes, enabling automatic adaption to the screen, whether the content is viewed on a tablet, phone, television, or watch. Responsive web design isn't a separate technology — it is an approach.",
    seeAlso: [
      {
        name: "Mobile-First",
        link: "#mobile-first",
      },
    ],
  },
  {
    name: "REST",
    target: "rest",
    definition:
      "An architectural style for providing standards between computer systems on the web, making it easier for systems to communicate with each other. REST-compliant systems, often called RESTful systems, are characterized by how they are stateless and separate the concerns of client and server.",
    seeAlso: [
      {
        name: "API,",
        link: "#api",
      },
      {
        name: "Fetch API,",
        link: "#fetch-api",
      },
      {
        name: "REST API",
        link: "#rest-api",
      },
    ],
  },
  {
    name: "Rest API",
    target: "rest-api",
    definition:
      "A REST API is an API that conforms to the design principles of the REST, or representational state transfer architectural style.",
    seeAlso: [
      {
        name: "API,",
        link: "#api",
      },
      {
        name: "Fetch API,",
        link: "#fetch-api",
      },
      {
        name: "REST",
        link: "#rest",
      },
    ],
  },
  {
    name: "RGB (Red, Green, Blue)",
    target: "rgb",
    definition:
      "Red-Green-Blue (RGB) is a color model that represents colors as mixtures of three underlying components (or channels), namely: red, green, and blue. This model describes a color with a sequence of three numbers (typically between 0.0 and 1.0, or between 0 and 255).",
    seeAlso: [
      {
        name: "Hex Color,",
        link: "#hex-color",
      },
      {
        name: "HSL,",
        link: "#hsl",
      },
      {
        name: "RGBa",
        link: "#rgba",
      },
    ],
  },
  {
    name: "RGBa (Red, Green, Blue, Alpha)",
    target: "rgba",
    definition:
      "rgba stands for 'Red Green Blue Alpha,' and it is a CSS property that allows you to specify colors using the RGB color model with an additional alpha channel. The alpha channel represents the opacity or transparency of the color. We use rgba to create colors that have transparency.",
    seeAlso: [
      {
        name: "Hex Color,",
        link: "#hex-color",
      },
      {
        name: "HSL,",
        link: "#hsl",
      },
      {
        name: "RGB",
        link: "#rgb",
      },
    ],
  },
  {
    name: "Robots.txt",
    target: "robots",
    definition:
      "A robots.txt file contains instructions for bots that tell them which webpages they can and cannot access. Robots.txt files are most relevant for web crawlers from search engines like Google.",
    seeAlso: [
      {
        name: "Crawler,",
        link: "#crawler",
      },
      {
        name: "SEO,",
        link: "#seo",
      },
      {
        name: "Sitemap",
        link: "#sitemap",
      },
    ],
  },
  {
    name: "Routers",
    target: "routers",
    definition:
      "Routers: There are three definitions for routers on the web: 1. For the network layer, the router is a networking device that decides data Packets directions. They are distributed by retailers allowing user interaction to the internet. 2. For a Single-page application in the application layer, a router is a library that decides what web page is presented by a given URL. This middleware module is used for all URL functions, as these are given a path to a file that is rendered to open the next page. 3. In the implementation of an API in a service layer, a router is a software component that parses a request and directs or routes the request to various handlers within a program. The router code usually accepts a response from the handler and facilitates its return to the requester.",
  },
  {
    name: "RSS (RDF Site Summary, aka Really Simple Syndication)",
    target: "rss",
    definition:
      "A web feed that allows users and applications to access updates to websites in a standardized, computer-readable format.",
  },
  {
    name: "SaaS (Software-as-a-Service)",
    target: "saas",
    definition:
      "A way of delivering applications over the Internet—as a service. Instead of installing and maintaining software, you simply access it via the Internet, freeing yourself from complex software and hardware management.",
  },
  {
    name: "Sass (Syntactically Awesome Style Sheets)",
    target: "sass",
    definition:
      "A preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). SassScript is the scripting language itself.",
    seeAlso: [
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "CSS Preprocessor",
        link: "#css-preprocessor",
      },
    ],
  },
  {
    name: "Scope",
    target: "scope",
    definition:
      "In JavaScript, objects and functions are also variables. Scope determines the accessibility of variables, objects, and functions from different parts of the code.",
    seeAlso: [
      {
        name: "Global Scope,",
        link: "#global-scope",
      },
      {
        name: "Local Scope",
        link: "#local-scope",
      },
    ],
  },
  {
    name: "Screen Reader",
    target: "screen-reader",
    definition:
      "Screen readers are software applications that attempt to convey what is seen on a screen display in a non-visual way, usually as text to speech, but also into braille or sound icons. Screen readers are essential to people who are visually impaired, illiterate, or have a learning disability.",
    seeAlso: [
      {
        name: "A11y,",
        link: "#ally",
      },
      {
        name: "Accessibility,",
        link: "#accessibility",
      },
      {
        name: "WCAG",
        link: "#wcag",
      },
    ],
  },
  {
    name: "Scroll-Hijacking (or Scrolljacking)",
    target: "scroll-hijacking",
    definition:
      "A design pattern that changes the speed and, sometimes, the direction of scrolling on a web page.",
  },
  {
    name: "Scrum",
    target: "scrum",
    definition:
      "Scrum is an agile team collaboration framework commonly used in software development and other industries. Scrum prescribes for teams to break work into goals to be completed within time-boxed iterations, called sprints. Each sprint is no longer than one month and commonly lasts two weeks.",
    seeAlso: [
      {
        name: "Agile",
        link: "#agile",
      },
    ],
  },
  {
    name: "SDK (Software Development Kit)",
    target: "sdk",
    definition:
      "An SDK is a set of tools to build software for a particular platform. These tools also allow an app developer to build an app which can integrate with another program - i.e. a mobile measurement partner (MMP) like Adjust.",
  },
  {
    name: "Search Engine",
    target: "search-engine",
    definition:
      "A software program that helps people find the information they are looking for online using keywords or phrases. Search engines are able to return results quickly—even with millions of websites online—by scanning the Internet continuously and indexing every page they find.",
    seeAlso: [
      {
        name: "Browser",
        link: "#browser",
      },
    ],
  },
  {
    name: "Selector (CSS)",
    target: "selector",
    definition:
      "In CSS, selectors are used to target the HTML elements on our web pages that we want to style. There are a wide variety of CSS selectors available, allowing for fine-grained precision when selecting elements to style.",
    seeAlso: [
      {
        name: "Class Selector,",
        link: "#class-selector",
      },
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "ID Selector",
        link: "#id-selector",
      },
    ],
  },
  {
    name: "Semantic HTML",
    target: "semantic",
    definition:
      "The HTML semantics refers to the tags that provide meaning to an HTML page rather than just presentation. It makes HTML more comprehensible by better defining the different sections and layout of web pages.",
    seeAlso: [
      {
        name: "HTML",
        link: "#html",
      },
    ],
  },
  {
    name: "SEO (Search Engine Optimization)",
    target: "seo",
    definition:
      "Search engine optimization is the science of improving a website to increase its visibility when people search for products or services.",
    seeAlso: [
      {
        name: "Crawler,",
        link: "#crawler",
      },
      {
        name: "Robots.txt,",
        link: "#robots",
      },
      {
        name: "Sitemap",
        link: "#sitemap",
      },
    ],
  },
  {
    name: "Server (Web Server)",
    target: "server",
    definition:
      "The term web server can refer to hardware or software, or both of them working together. 1. On the hardware side, a web server is a computer that stores web server software and a website's component files (for example, HTML documents, images, CSS stylesheets, and JavaScript files). A web server connects to the Internet and supports physical data interchange with other devices connected to the web. 2. On the software side, a web server includes several parts that control how web users access hosted files. At a minimum, this is an HTTP server. An HTTP server is software that understands URLS (web addresses) and HTTP (the protocol your browser uses to view webpages). An HTTP server can be accessed through the domain names of the websites it stores, and it delivers the content of these hosted websites to the end user's device.",
    seeAlso: [
      {
        name: "Proxy Server",
        link: "#proxy-server",
      },
    ],
  },
  {
    name: "Server-Side",
    target: "server-side",
    definition:
      "Much like with client side, 'server side' means everything that happens on the server, instead of on the client. In the past, nearly all business logic ran on the server side, and this included rendering dynamic webpages, interacting with databases, identity authentication, and push notifications.",
    seeAlso: [
      {
        name: "React Server Components,",
        link: "#react-server-components",
      },
      {
        name: "Server,",
        link: "#server",
      },
      {
        name: "Server-Side Rendering",
        link: "#server-side-rendering",
      },
    ],
  },
  {
    name: "Server-Side Rendering",
    target: "server-side-rendering",
    definition:
      "Server-side rendering (SSR) is an application's ability to convert HTML files on the server into a fully rendered HTML page for the client.",
    seeAlso: [
      {
        name: "React Server Components,",
        link: "#react-server-components",
      },
      {
        name: "Server,",
        link: "#server",
      },
      {
        name: "Server-Side",
        link: "#server-side",
      },
    ],
  },
  {
    name: "sessionStorage",
    target: "sessionStorage",
    definition:
      "The read-only sessionStorage property accesses a session Storage object for the current origin. sessionStorage is similar to localStorage; the difference is that while data in localStorage doesn't expire, data in sessionStorage is cleared when the page session ends. ",
    seeAlso: [
      {
        name: "Cache,",
        link: "#cache",
      },
      {
        name: "Cookie,",
        link: "#cookie",
      },
      {
        name: "localStorage",
        link: "#localStorage",
      },
    ],
  },
  {
    name: "Sitemap",
    target: "sitemap",
    definition:
      "A sitemap is a file where you provide information about the pages, videos, and other files on your site, and the relationships between them. Search engines like Google read this file to crawl your site more efficiently.",
    seeAlso: [
      {
        name: "Crawler,",
        link: "#crawler",
      },
      {
        name: "Robots.txt,",
        link: "#robots",
      },
      {
        name: "SEO",
        link: "#seo",
      },
    ],
  },
  {
    name: "Slider",
    target: "slider",
    definition:
      "Sliders are often the UI control of choice for letting users select a value or range from a fixed set of options.",
  },
  {
    name: "Slug",
    target: "slug",
    definition:
      "A slug, also known as a URL slug, is descriptive text after the website name at the end of a URL that identifies a web page on the domain.",
  },
  {
    name: "SMTP (Simple Mail Transfer Protocol)",
    target: "smtp",
    definition:
      "SMTP (Simple Mail Transfer Protocol) is a TCP/IP protocol used in sending and receiving email. SMTP is used most commonly by email clients, including Gmail, Outlook, Apple Mail and Yahoo Mail. SMTP can send and receive email, but email clients typically use a program with SMTP for sending email.",
  },
  {
    name: "Snake Case (snake_case)",
    target: "snake",
    definition:
      "Snake case is a way of writing phrases without spaces, where spaces are replaced with underscores _ , and the words are typically all lower case.",
    seeAlso: [
      {
        name: "Camel Case,",
        link: "#camel-case",
      },
      {
        name: "Kebab Case,",
        link: "#kebab-case",
      },
      {
        name: "Pascal Case",
        link: "#pascal-case",
      },
    ],
  },
  {
    name: "SPA (Single-Page Application)",
    target: "spa",
    definition:
      "A Web app that is presented to the user through a single HTML page to be more responsive and to more closely replicate a desktop application or a native app. An SPA is sometimes referred to as a single-page interface (SPI).",
    seeAlso: [
      {
        name: "PWA,",
        link: "#pwa",
      },
      {
        name: "Static Site",
        link: "#static-site",
      },
    ],
  },
  {
    name: "SQL (Structured Query Language)",
    target: "sql",
    definition:
      "Structured query language (SQL) is a programming language for storing and processing information in a relational database.",
    seeAlso: [
      {
        name: "Database,",
        link: "#database",
      },
      {
        name: "Relational Database",
        link: "#relational-database",
      },
    ],
  },
  {
    name: "SQL Injection",
    target: "sql-injection",
    definition:
      "SQL injection, also known as SQLI, is a common attack vector that uses malicious SQL code for backend database manipulation to access information that was not intended to be displayed. This information may include any number of items, including sensitive company data, user lists or private customer details.",
    seeAlso: [
      {
        name: "Database,",
        link: "#database",
      },
      {
        name: "DDoS,",
        link: "#ddos",
      },
      {
        name: "DoS,",
        link: "#dos",
      },
      {
        name: "SQL,",
        link: "#sql",
      },
      {
        name: "XSS",
        link: "#xss",
      },
    ],
  },
  {
    name: "SSL (Secure Sockets Layer)",
    target: "ssl",
    definition:
      "SSL stands for Secure Sockets Layer, a security protocol that creates an encrypted link between a web server and a web browser. Companies and organizations need to add SSL certificates to their websites to secure online transactions and keep customer information private and secure.",
    seeAlso: [
      {
        name: "SSL Certificate",
        link: "#ssl-certificate",
      },
    ],
  },
  {
    name: "SSL Certificate",
    target: "ssl-certificate",
    definition:
      "A digital certificate that is issued by a certificate authority. It is used to confirm the identity of a website (which is usually a company or a server) and the validity of the data sent (usually data being passed by an end user) to the website. /n Digital certificates are used to secure communications in the internet. They offer a means for a web server to authenticate its identity to the web browser, ensuring that the information being communicated is secure. This certificate is used to verify the identity of the website so that the computer user can be sure that the site is who they think it is.",
    seeAlso: [
      {
        name: "SSL",
        link: "#ssl",
      },
    ],
  },
  {
    name: "Static Site",
    target: "static-site",
    definition:
      "Static web pages are made of “fixed code,” and unless the site developer makes changes, nothing will change on the page. Think of it like a brochure for a business. Static sites give a lot of the same type of information that you could get from a brochure, but it can't just change itself.",
    seeAlso: [
      {
        name: "PWA,",
        link: "#pwa",
      },
      {
        name: "SPA",
        link: "#spa",
      },
    ],
  },
  {
    name: "Strict Mode",
    target: "strict-mode",
    definition:
      "JavaScript's strict mode is a way to opt in to a restricted variant of JavaScript, thereby implicitly opting-out of 'sloppy mode'. /n Strict mode makes several changes to normal JavaScript semantics: 1. Eliminates some JavaScript silent errors by changing them to throw errors. 2. Fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that's not strict mode. 3. Prohibits some syntax likely to be defined in future versions of ECMAScript",
    seeAlso: [
      {
        name: "JavaScript",
        link: "#javascript",
      },
    ],
  },
  {
    name: "String",
    target: "string",
    definition:
      "In any computer programming language, a string is a sequence of characters used to represent text.",
    seeAlso: [
      {
        name: "Interpolation,",
        link: "#interpolation",
      },
      {
        name: "Primitive Data Types,",
        link: "#primitive-data-types",
      },
      {
        name: "String Interpolation,",
        link: "#string-interpolation",
      },
      {
        name: "Template Literal",
        link: "#template-literal",
      },
    ],
  },
  {
    name: "String Interpolation",
    target: "string-interpolation",
    definition:
      "String interpolation (or variable interpolation, variable substitution, or variable expansion) is the process of evaluating a string literal containing one or more placeholders, yielding a result in which the placeholders are replaced with their corresponding values.",
    seeAlso: [
      {
        name: "Interpolation,",
        link: "#interpolation",
      },
      {
        name: "String,",
        link: "#string",
      },
      {
        name: "Template Literal",
        link: "#template-literal",
      },
    ],
  },
  {
    name: "Stylesheet",
    target: "stylesheet",
    definition:
      "A stylesheet is a set of CSS rules used to control the layout and design of a webpage or document.",
    seeAlso: [
      {
        name: "CSS",
        link: "#css",
      },
    ],
  },
  {
    name: "SVG (Scaling Vector Graphic)",
    target: "svg",
    definition:
      "SVG is used to define vector-based graphics for the Web. SVG defines the graphics in XML format. Every element and every attribute in SVG files can be animated. SVG is a W3C recommendation.",
    seeAlso: [
      {
        name: "Alt Attribute,",
        link: "#alt",
      },
      {
        name: "Canvas,",
        link: "#canvas",
      },
      {
        name: "JPEG,",
        link: "#jpeg",
      },
      {
        name: "PDF,",
        link: "#pdf",
      },
      {
        name: "PNG",
        link: "#png",
      },
    ],
  },
  {
    name: "Symbol",
    target: "symbol",
    definition:
      "A symbol is a data type that represents unique, unforgeable identifiers. They are sometimes called atoms. Because a symbol is unique and unforgeable, you can only read a property value associated with a symbol if you have a reference to the original identifier.",
    seeAlso: [
      {
        name: "Primitive Data Types",
        link: "#primitive-data-types",
      },
    ],
  },
  {
    name: "Synchronous",
    target: "synchronous",
    definition:
      "Synchronous programming model follows a linear execution pattern where tasks are completed one after the other in a sequence.",
    seeAlso: [
      {
        name: "Aysnc/Await,",
        link: "#async-await",
      },
      {
        name: "Asynchronous",
        link: "#asynchronous",
      },
    ],
  },
  {
    name: "Syntax",
    target: "syntax",
    definition:
      "Syntax specifies the required combination and sequence of characters making up correctly structured code. Syntax generally includes grammar and the rules that apply to writing it, such as indentation requirements in some programming languages. ",
    seeAlso: [
      {
        name: "Syntactic Sugar,",
        link: "#syntactic-sugar",
      },
      {
        name: "Syntax Error",
        link: "#syntax-error",
      },
    ],
  },
  {
    name: "Syntax Error",
    target: "syntax-error",
    definition:
      "Syntax error refers to a mistake in code that violates the programming language's rules and prevents it from executing correctly. These common mistakes in programming occur when programmers miswrite code by breaking the language's syntax rules, such as using punctuation incorrectly or misspelling commands.",
    seeAlso: [
      {
        name: "Syntax",
        link: "#syntax",
      },
    ],
  },
  {
    name: "Syntactic Sugar",
    target: "syntactic-sugar",
    definition:
      "Syntactic sugar refers to certain language features in programming that make the code easier to read or write. It's like adding a bit of sweetness to your code syntax to make it more pleasant to work with.",
    seeAlso: [
      {
        name: "Syntax",
        link: "#syntax",
      },
    ],
  },
  {
    name: "Tag",
    target: "tag",
    definition:
      "HTML tags are the keywords on a web page that define how your web browser must format and display your web page. Almost all tags contain two parts, an opening, and a closing tag. For example, <html> is the opening tag and </html> is the closing tag.",
    seeAlso: [
      {
        name: "HTML",
        link: "#html",
      },
    ],
  },
  {
    name: "Template Literal",
    target: "template-literal",
    definition:
      "Template literals are literals delimited with backtick (`) characters, allowing for multi-line strings, string interpolation with embedded expressions, and special constructs called tagged templates. /n Template literals are sometimes informally called template strings, because they are used most commonly for string interpolation (to create strings by doing substitution of placeholders).",
    seeAlso: [
      {
        name: "Interpolation,",
        link: "#interpolation",
      },
      {
        name: "String,",
        link: "#string",
      },
      {
        name: "String Interpolation",
        link: "#string-interpolation",
      },
    ],
  },
  {
    name: "Terminal (aka The Command Line)",
    target: "terminal",
    definition:
      "The terminal is a text interface for executing text-based programs.",
    seeAlso: [
      {
        name: "Bash,",
        link: "#bash",
      },
      {
        name: "NPM,",
        link: "#npm",
      },
      {
        name: "Yarn",
        link: "#yarn",
      },
    ],
  },
  {
    name: "Ternary Operator (aka Conditional Operator)",
    target: "ternary",
    definition:
      "The ternary operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.",
    seeAlso: [
      {
        name: "JavaScript",
        link: "#javascript",
      },
    ],
  },
  {
    name: "Truthy",
    target: "truthy",
    definition:
      "In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy. That is, all values are truthy except false, 0, -0, 0n, '', null, undefined, NaN, and document.",
    seeAlso: [
      {
        name: "Boolean,",
        link: "#boolean",
      },
      {
        name: "Falsy,",
        link: "#falsy",
      },
      {
        name: "Null,",
        link: "#null",
      },
      {
        name: "Primitive Data Types (JavaScript),",
        link: "#primitive-data-types",
      },
      {
        name: "Undefined",
        link: "#undefined",
      },
    ],
  },
  {
    name: "Type Inference",
    target: "type-inference",
    definition:
      "The process of automatically determining the data type of a variable or expression based on its value. In other words, when you assign a value to a variable, TypeScript will automatically detect the data type of that value and assign it to the variable.",
    seeAlso: [
      {
        name: "Dynamic Typing,",
        link: "#dynamic-typing",
      },
      {
        name: "TypeScript",
        link: "#typescript",
      },
    ],
  },
  {
    name: "TypeScript",
    target: "typescript",
    definition:
      "TypeScript adds additional syntax to JavaScript to support a tighter integration with your editor. Catch errors early in your editor. TypeScript code converts to JavaScript, which runs anywhere JavaScript runs: In a browser, on Node.js or Deno and in your apps. TypeScript understands JavaScript and uses type inference to give you great tooling without additional code.",
    seeAlso: [
      {
        name: "JavaScript,",
        link: "#javascript",
      },
      {
        name: "Type Inference",
        link: "#type-inference",
      },
    ],
  },
  {
    name: "UI (User Interface)",
    target: "ui",
    definition:
      "The user interface is the point at which human users interact with a computer, website or application. The goal of effective UI is to make the user's experience easy and intuitive, requiring minimum effort on the user's part to receive the maximum desired outcome.",
    seeAlso: [
      {
        name: "UX",
        link: "#ux",
      },
    ],
  },
  {
    name: "Undefined",
    target: "undefined",
    definition:
      "Undefined is a primitive value automatically assigned to variables that have just been declared, or to formal arguments for which there are no actual arguments.",
    seeAlso: [
      {
        name: "BigInt,",
        link: "#bigint",
      },
      {
        name: "Boolean",
        link: "#boolean",
      },
      {
        name: "Falsy,",
        link: "#falsy",
      },
      {
        name: "Null,",
        link: "#null",
      },
      {
        name: "Number,",
        link: "#number",
      },
      {
        name: "Primitive Data Types (JavaScript),",
        link: "#primitive-data-types",
      },
      {
        name: "String,",
        link: "#string",
      },
      {
        name: "Symbol,",
        link: "#symbol",
      },
      {
        name: "Truthy,",
        link: "#truthy",
      },
    ],
  },
  {
    name: "URL (Uniform Resource Locator)",
    target: "url",
    definition:
      "A URL is nothing more than the address of a given unique resource on the Web. In theory, each valid URL points to a unique resource. Such resources can be an HTML page, a CSS document, an image, etc.",
    seeAlso: [
      {
        name: "Redirection,",
        link: "#redirection",
      },
      {
        name: "Slug",
        link: "#slug",
      },
    ],
  },
  {
    name: "Usability",
    target: "usability",
    definition:
      "Usability is a quality attribute that assesses how easy user interfaces are to use. The word 'usability' also refers to methods for improving ease-of-use during the design process.",
  },
  {
    name: "UX (User Experience)",
    target: "ux",
    definition:
      "Refers to the user's journey when interacting with a product or service. UX design is the process of creating products or services that provide meaningful experiences for users, involving many different areas of product development including branding, usability, function, and design.",
    seeAlso: [
      {
        name: "UI",
        link: "#ui",
      },
    ],
  },
  {
    name: "Variable",
    target: "variable",
    definition:
      "Variables are used to store information to be referenced and manipulated in a computer program. They also provide a way of labeling data with a descriptive name, so our programs can be understood more clearly by the reader and ourselves. It is helpful to think of variables as containers that hold information. Their sole purpose is to label and store data in memory. This data can then be used throughout your program.",
    seeAlso: [
      {
        name: "JavaScript",
        link: "#javascript",
      },
    ],
  },
  {
    name: "Version Control",
    target: "version-control",
    definition:
      "Version control, also known as source control, is the practice of tracking and managing changes to software code. Version control systems are software tools that help software teams manage changes to source code over time.",
    seeAlso: [
      {
        name: "Git,",
        link: "#git",
      },
      {
        name: "GitHub,",
        link: "#github",
      },
      {
        name: "GitHub Desktop",
        link: "#github-desktop",
      },
    ],
  },
  {
    name: "Viewport",
    target: "viewport",
    definition:
      "A viewport is the user's visible area of a webpage. It's a key ingredient of responsive web design and ensures your content is easy to view.",
    seeAlso: [
      {
        name: "Breakpoints",
        link: "#breakpoints",
      },
    ],
  },
  {
    name: "Virtual DOM (aka Shadow DOM)",
    target: "virtual-dom",
    definition:
      "A programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as React.",
    seeAlso: [
      {
        name: "DOM,",
        link: "#dom",
      },
      {
        name: "Node",
        link: "#node",
      },
    ],
  },
  {
    name: "Vite",
    target: "vite",
    definition:
      "A build tool that significantly improves the front-end development experience. You can use Vite to set up a development environment for frameworks like Vue and React, and even for a vanilla JavaScript app with a dev server and hot reloading in just three commands.",
    seeAlso: [
      {
        name: "JavaScript,",
        link: "#javascript",
      },
      {
        name: "React",
        link: "#react",
      },
    ],
  },
  {
    name: "WCAG",
    target: "wcag",
    definition:
      "Web Content Accessibility Guidelines (WCAG) are a recommendation published by the Web Accessibility Initiative group at the W3C. They outline a set of guidelines for making content accessible primarily for people with disabilities but also for limited-resource devices such as mobile phones.",
    seeAlso: [
      {
        name: "A11y,",
        link: "#ally",
      },
      {
        name: "Accessibility,",
        link: "#accessibility",
      },
      {
        name: "Screen Reader",
        link: "#screen-reader",
      },
    ],
  },
  {
    name: "Web Analytics",
    target: "web-analytics",
    definition:
      "Web analytics is the collection, reporting, and analysis of website data. The focus is on identifying measures based on your organizational and user goals and using the website data to determine the success or failure of those goals and to drive strategy and improve the user's experience.",
    seeAlso: [
      {
        name: "Bounce Rate,",
        link: "#bounce-rate",
      },
      {
        name: "Conversion Rate,",
        link: "#conversion-rate",
      },
      {
        name: "CTA,",
        link: "#cta",
      },
      {
        name: "CTR",
        link: "#ctr",
      },
    ],
  },
  {
    name: "Web Design",
    target: "web-design",
    definition:
      "Web designing is the process of planning, conceptualizing, and implementing the plan for designing a website in a way that is functional and offers a good user experience.",
    seeAlso: [
      {
        name: "Figma,",
        link: "#figma",
      },
      {
        name: "Prototype,",
        link: "#prototype",
      },
      {
        name: "UI,",
        link: "#ui",
      },
      {
        name: "UX,",
        link: "#ux",
      },
      {
        name: "Wireframe",
        link: "#wireframe",
      },
    ],
  },
  {
    name: "Webpack",
    target: "webpack",
    definition:
      "A free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included.",
    seeAlso: [
      {
        name: "Code Splitting",
        link: "#code-splitting",
      },
    ],
  },
  {
    name: "Whitespace (aka Negative Space)",
    target: "whitespace",
    definition:
      "The empty space around the content and elements on a web page. It's used to balance the page's design, organize the content and elements, and improve the visual experience for the user.",
    seeAlso: [
      {
        name: "Gutters",
        link: "#gutters",
      },
    ],
  },
  {
    name: "Wireframe",
    target: "wireframe",
    definition:
      "A wireframe is a two-dimensional illustration of a page's interface that specifically focuses on space allocation and prioritization of content, functionalities available, and intended behaviors. For these reasons, wireframes typically do not include any styling, color, or graphics.",
    seeAlso: [
      {
        name: "Figma,",
        link: "#figma",
      },
      {
        name: "Prototype,",
        link: "#prototype",
      },
      {
        name: "UI,",
        link: "#ui",
      },
      {
        name: "UX,",
        link: "#ux",
      },
      {
        name: "Web Design",
        link: "#web-design",
      },
    ],
  },
  {
    name: "WYSIWYG (What You See Is What You Get)",
    target: "wysiwyg",
    definition:
      "A type of editing software that allows users to see and edit content in a form that appears as it would when displayed on an interface, webpage, slide presentation or printed document.",
  },
  {
    name: "XML (Extensible Markup Language)",
    target: "xml",
    definition:
      "A markup language that provides rules to define any data. Unlike other programming languages, XML cannot perform computing operations by itself. Instead, any programming language or software can be implemented for structured data management.",
    seeAlso: [
      {
        name: "AJAX,",
        link: "#ajax",
      },
      {
        name: "CSS,",
        link: "#css",
      },
      {
        name: "DOM,",
        link: "#dom",
      },
      {
        name: "Element,",
        link: "#element",
      },
      {
        name: "JSX,",
        link: "#jsx",
      },
      {
        name: "SVG",
        link: "#svg",
      },
    ],
  },
  {
    name: "Yarn",
    target: "yarn",
    definition:
      "Yarn is a package manager for your code. It allows you to use and share (e.g. JavaScript) code with other developers from around the world.",
    seeAlso: [
      {
        name: "Bash,",
        link: "#bash",
      },
      {
        name: "NPM,",
        link: "#npm",
      },
      {
        name: "Terminal",
        link: "#terminal",
      },
    ],
  },
];

export const terms = [];

for (const key in termsWithoutId) {
  const obj = {
    id: Number(key),
    ...termsWithoutId[key],
  };

  terms.push(obj);
}

const tableOfContentsWithoutId = [
  {
    name: "304 Redirect",
    link: "#redirect",
  },
  {
    name: "A11y",
    link: "#ally",
  },
  {
    name: "Abstraction",
    link: "#abstraction",
  },
  {
    name: "Accessibility",
    link: "#accessibility",
  },
  {
    name: "Accordian",
    link: "#accordian",
  },
  {
    name: "Agile Methodology",
    link: "#agile",
  },
  {
    name: "AJAX",
    link: "#ajax",
  },
  {
    name: "Algorithm",
    link: "#algorithm",
  },
  {
    name: "Alt Attribute",
    link: "#alt",
  },
  {
    name: "API",
    link: "#api",
  },
  {
    name: "ARIA",
    link: "#aria",
  },
  {
    name: "ARIA Attributes",
    link: "#aria-attributes",
  },
  {
    name: "ARIA Roles",
    link: "#aria-roles",
  },
  {
    name: "Array",
    link: "#array",
  },
  {
    name: "ASCII",
    link: "#ascii",
  },
  {
    name: "Async/Await",
    link: "#async-await",
  },
  {
    name: "Asynchronous",
    link: "#asynchronous",
  },
  {
    name: "Attribute",
    link: "#attribute",
  },
  {
    name: "B2B SaaS",
    link: "#b2bsaas",
  },
  {
    name: "Base 64",
    link: "#base64",
  },
  {
    name: "Bash",
    link: "#bash",
  },

  {
    name: "Backend",
    link: "#backend",
  },
  {
    name: "Backlinks",
    link: "#backlinks",
  },
  {
    name: "Bandwidth",
    link: "#bandwidth",
  },
  {
    name: "BigInt",
    link: "#bigint",
  },
  {
    name: "Boolean",
    link: "#boolean",
  },
  {
    name: "Bootstrap",
    link: "#bootstrap",
  },
  {
    name: "Bounce Rate",
    link: "#bounce-rate",
  },
  {
    name: "Box Model",
    link: "#box-model",
  },
  {
    name: "Breadcrumbs",
    link: "#breadcrumbs",
  },
  {
    name: "Breakpoints",
    link: "#breakpoints",
  },
  {
    name: "Browser",
    link: "#browser",
  },
  {
    name: "Bug",
    link: "#bug",
  },
  {
    name: "Cache",
    link: "#cache",
  },
  {
    name: "Camel Case",
    link: "#camel-case",
  },
  {
    name: "Canvas",
    link: "#canvas",
  },
  {
    name: "Carousel",
    link: "#carousel",
  },
  {
    name: "CDN",
    link: "#cdn",
  },
  {
    name: "Character Encoding",
    link: "#character-encoding",
  },
  {
    name: "CI/CD",
    link: "#cicd",
  },
  {
    name: "Class Selector",
    link: "#class-selector",
  },
  {
    name: "Classes",
    link: "#classes",
  },
  {
    name: "Alt",
    link: "#alt",
  },
  {
    name: "Client",
    link: "#client",
  },
  {
    name: "Client Components",
    link: "#client-components",
  },
  {
    name: "Client-Side Rendering",
    link: "#client-side-rendering",
  },
  {
    name: "CMS",
    link: "#cms",
  },
  {
    name: "Code Splitting",
    link: "#code-splitting",
  },
  {
    name: "Compile",
    link: "#compile",
  },
  {
    name: "Constructor",
    link: "#constructor",
  },
  {
    name: "Continuous Deployment",
    link: "#continuous-deployment",
  },
  {
    name: "Continuous Integration",
    link: "#continuous-integration",
  },
  {
    name: "Control Flow",
    link: "#continuous-flow",
  },
  {
    name: "Conversion Rate",
    link: "#conversion-rate",
  },
  {
    name: "Cookies",
    link: "#cookies",
  },
  {
    name: "CORS",
    link: "#cors",
  },
  {
    name: "Crawler",
    link: "#crawler",
  },
  {
    name: "Cross-Site Scripting (XSS)",
    link: "#xss",
  },
  {
    name: "CSS",
    link: "#css",
  },
  {
    name: "CSS Flexbox",
    link: "#flexbox",
  },
  {
    name: "CSS Grid",
    link: "#grid",
  },
  {
    name: "CSS Modules",
    link: "#modules",
  },
  {
    name: "CSS Preprocessor",
    link: "#preprocessor",
  },
  {
    name: "CSS Variable",
    link: "#variable",
  },
  {
    name: "CSS-in-JS",
    link: "#css-in-js",
  },
  {
    name: "CTA",
    link: "#cta",
  },
  {
    name: "CTR (Click-Through Rate)",
    link: "#ctr",
  },
  {
    name: "Data Structure",
    link: "#data-structure",
  },
  {
    name: "Database",
    link: "#database",
  },
  {
    name: "Debugging",
    link: "#debugging",
  },
  {
    name: "Declarative Programming",
    link: "#declarative-programming",
  },
  {
    name: "Deploy",
    link: "#deploy",
  },
  {
    name: "Developer Tools",
    link: "#devtools",
  },
  {
    name: "DevOps",
    link: "#devops",
  },
  {
    name: "DDoS",
    link: "#ddos",
  },
  {
    name: "DNS",
    link: "#dns",
  },
  {
    name: "DOCTYPE",
    link: "#doctype",
  },
  {
    name: "Documentation",
    link: "#documentation",
  },
  {
    name: "DOM",
    link: "#dom",
  },
  {
    name: "DoS",
    link: "#dos",
  },
  {
    name: "Domain",
    link: "#domain",
  },
  {
    name: "Domain Name",
    link: "#domain-name",
  },
  {
    name: "Dynamic Typing",
    link: "#dynamic-typing",
  },
  {
    name: "E-Commerce",
    link: "#e-commerce",
  },
  {
    name: "ECMAScript",
    link: "#ecmascript",
  },
  {
    name: "Element",
    link: "#element",
  },
  {
    name: "Em",
    link: "#em",
  },
  {
    name: "Encapsulation",
    link: "#encapsulation",
  },
  {
    name: "End User",
    link: "#end-user",
  },
  {
    name: "Encryption",
    link: "#encryption",
  },
  {
    name: "Event",
    link: "#event",
  },
  {
    name: "Event Handler",
    link: "#event-handler",
  },
  {
    name: "Event Listener",
    link: "#event-listener",
  },
  {
    name: "Falsy",
    link: "#falsy",
  },
  {
    name: "Favicon",
    link: "favicon",
  },
  {
    name: "First-Contentful Paint",
    link: "#fcp",
  },
  {
    name: "Fetch API",
    link: "#fetchapi",
  },
  {
    name: "Figma",
    link: "#figma",
  },
  {
    name: "Firewall",
    link: "#firewall",
  },
  {
    name: "Fold",
    link: "#fold",
  },
  {
    name: "Footer",
    link: "#footer",
  },
  {
    name: "Framework",
    link: "#framework",
  },
  {
    name: "Frontend",
    link: "#frontend",
  },
  {
    name: "FTP (File Transfer Protocol)",
    link: "#ftp",
  },
  {
    name: "Fullstack",
    link: "#fullstack",
  },
  {
    name: "Function",
    link: "#function",
  },
  {
    name: "Gatsby",
    link: "#gatsby",
  },
  {
    name: "GIF",
    link: "#gif",
  },
  {
    name: "Git",
    link: "#git",
  },
  {
    name: "GitHub",
    link: "#github",
  },
  {
    name: "GitHub Desktop",
    link: "#github-desktop",
  },
  {
    name: "Global Scope",
    link: "#global-scope",
  },
  {
    name: "GUI",
    link: "#gui",
  },
  {
    name: "Gutters",
    link: "#gutters",
  },
  {
    name: "Header",
    link: "#header",
  },
  {
    name: "Hex Color",
    link: "#hex-color",
  },
  {
    name: "Hoisting",
    link: "#hoisting",
  },
  {
    name: "Hosting",
    link: "#hosting",
  },
  {
    name: "HSL",
    link: "#hsl",
  },
  {
    name: "HTML",
    link: "#html",
  },
  {
    name: "HTML Entity",
    link: "#entity",
  },
  {
    name: "HTTP",
    link: "#http",
  },
  {
    name: "HTTP Error 400",
    link: "#error400",
  },
  {
    name: "HTTP Error 401",
    link: "#error401",
  },
  {
    name: "HTTP Error 403",
    link: "#error403",
  },
  {
    name: "HTTP Error 404",
    link: "#error404",
  },
  {
    name: "HTTP Error 500",
    link: "#error500",
  },
  {
    name: "HTTP Error 502",
    link: "#error502",
  },
  {
    name: "HTTPS",
    link: "#https",
  },
  {
    name: "Hydration",
    link: "#hydration",
  },
  {
    name: "Hyperlink",
    link: "#hyperlink",
  },
  {
    name: "ICANN",
    link: "#icann",
  },
  {
    name: "ID",
    link: "#id",
  },
  {
    name: "IDE",
    link: "#ide",
  },
  {
    name: "IIFE",
    link: "#iife",
  },
  {
    name: "IMAP",
    link: "#imap",
  },
  {
    name: "Imperative Programming",
    link: "#imperative-programming",
  },
  {
    name: "Iterate",
    link: "#iterate",
  },
  {
    name: "Immutable",
    link: "#immutable",
  },
  {
    name: "Interpolation",
    link: "#interpolation",
  },
  {
    name: "Intersection Observer",
    link: "#intersection-observer",
  },
  {
    name: "IP Address",
    link: "#ip-address",
  },
  {
    name: "Iterate",
    link: "#iterate",
  },
  {
    name: "JavaScript",
    link: "#javascript",
  },
  {
    name: "JPEG",
    link: "#jpeg",
  },
  {
    name: "JSON",
    link: "#json",
  },
  {
    name: "JSX",
    link: "#jsx",
  },
  {
    name: "Kebab Case",
    link: "#kebab",
  },
  {
    name: "Key",
    link: "#key",
  },
  {
    name: "Landing Page",
    link: "#landing-page",
  },
  {
    name: "Largest Contentful Paint",
    link: "#lcp",
  },
  {
    name: "Latency",
    link: "#latency",
  },
  {
    name: "Lazy Loading",
    link: "#lazy-loading",
  },
  {
    name: "Local Scope",
    link: "#local-scope",
  },
  {
    name: "LocalHost",
    link: "#localhost",
  },
  {
    name: "Localization",
    link: "#localization",
  },
  {
    name: "Loop",
    link: "#loop",
  },
  {
    name: "Margin",
    link: "#margin",
  },
  {
    name: "Markup",
    link: "#markup",
  },
  {
    name: "MDN",
    link: "#mdn",
  },
  {
    name: "Media Query",
    link: "#media-query",
  },
  {
    name: "Metadata",
    link: "#metadata",
  },
  {
    name: "Meta Tags",
    link: "#meta-tags",
  },
  {
    name: "Method",
    link: "#method",
  },
  {
    name: "Middleware",
    link: "#middleware",
  },
  {
    name: "Minification",
    link: "#minification",
  },
  {
    name: "Mobile-First",
    link: "#mobile-first",
  },
  {
    name: "MongoDB",
    link: "#mongo",
  },
  {
    name: "Mutable",
    link: "#mutable",
  },
  {
    name: "MVP",
    link: "#mvp",
  },
  {
    name: "MySQL",
    link: "#mySql",
  },
  {
    name: "Namespace",
    link: "#namespace",
  },
  {
    name: "Navigation",
    link: "#navigation",
  },
  {
    name: "Next.js",
    link: "#nextjs",
  },
  {
    name: "Node",
    link: "#node",
  },
  {
    name: "Node.js",
    link: "#nodejs",
  },
  {
    name: "Non-Relational Database",
    link: "#non-relational-database",
  },
  {
    name: "NoSQL Database",
    link: "#noSql-database",
  },
  {
    name: "NPM",
    link: "#npm",
  },
  {
    name: "Number",
    link: "#number",
  },
  {
    name: "Null",
    link: "#null",
  },
  {
    name: "Object",
    link: "#object",
  },
  {
    name: "Object Literal",
    link: "#object-literal",
  },
  {
    name: "Object Model",
    link: "#object-model",
  },
  {
    name: "OOP",
    link: "#oop",
  },
  {
    name: "OOTB",
    link: "#ootb",
  },
  {
    name: "Open Source",
    link: "#open-source",
  },
  {
    name: "Operating System",
    link: "#operating-system",
  },
  {
    name: "Operator",
    link: "#operator",
  },
  {
    name: "Padding",
    link: "#padding",
  },
  {
    name: "Page Load Time",
    link: "#page-load-time",
  },
  {
    name: "Pagination",
    link: "#pagination",
  },
  {
    name: "Parameter",
    link: "#parameter",
  },
  {
    name: "Pascal Case",
    link: "#pascal",
  },
  {
    name: "PDF",
    link: "#pdf",
  },
  {
    name: "Perceived Performance",
    link: "#perceived-performance",
  },
  {
    name: "Pixel",
    link: "#pixel",
  },
  {
    name: "Plugin",
    link: "#plugin",
  },
  {
    name: "PNG",
    link: "#png",
  },
  {
    name: "Primitive Data Types",
    link: "#primitive-data-types",
  },
  {
    name: "Promise",
    link: "#promise",
  },
  {
    name: "Property (CSS)",
    link: "#property-css",
  },
  {
    name: "Property (JavaScript)",
    link: "#property-javascript",
  },
  {
    name: "Prototype",
    link: "#prototype",
  },
  {
    name: "Prototype (JavaScript)",
    link: "#prototype-javascript",
  },
  {
    name: "Proxy Server",
    link: "#proxy",
  },
  {
    name: "Pseudo-Element",
    link: "#pseudo",
  },
  {
    name: "Pseudocode",
    link: "#pseudocode",
  },
  {
    name: "PWA",
    link: "#pwa",
  },
  {
    name: "Quality Assurance",
    link: "#quality-assurance",
  },
  {
    name: "React",
    link: "#react",
  },
  {
    name: "React Server Components",
    link: "#server-components",
  },
  {
    name: "Recursion",
    link: "#recursion",
  },
  {
    name: "Redirection",
    link: "#redirection",
  },
  {
    name: "RegEx",
    link: "#regex",
  },
  {
    name: "Registrar",
    link: "#registrar",
  },
  {
    name: "Relational Database",
    link: "#relational-database",
  },
  {
    name: "REM",
    link: "#rem",
  },
  {
    name: "Render",
    link: "#render",
  },
  {
    name: "Repo (Repository)",
    link: "#repo",
  },
  {
    name: "Resolution",
    link: "#resolution",
  },
  {
    name: "Responsive Web Design",
    link: "#responsive-design",
  },
  {
    name: "REST",
    link: "#rest",
  },
  {
    name: "Rest API",
    link: "#rest-api",
  },
  {
    name: "RGB",
    link: "#rgb",
  },
  {
    name: "RGBa",
    link: "#rgba",
  },
  {
    name: "Robots.txt",
    link: "#robots",
  },
  {
    name: "Routers",
    link: "#routers",
  },
  {
    name: "RSS",
    link: "#rss",
  },
  {
    name: "SaaS",
    link: "#saas",
  },
  {
    name: "Sass",
    link: "#sass",
  },
  {
    name: "Scope",
    link: "#scope",
  },
  {
    name: "Screen Reader",
    link: "#screen-reader",
  },
  {
    name: "Scroll-Hijacking",
    link: "#scroll-hijacking",
  },
  {
    name: "Scrum",
    link: "#scrum",
  },
  {
    name: "SDK",
    link: "#sdk",
  },
  {
    name: "Search Engine",
    link: "#search-engine",
  },
  {
    name: "Selector",
    link: "#selector",
  },
  {
    name: "Semantic HTML",
    link: "#semantic",
  },
  {
    name: "SEO",
    link: "#seo",
  },
  {
    name: "Server (Web Server)",
    link: "#server",
  },
  {
    name: "Server-Side",
    link: "#server-side",
  },
  {
    name: "Server-Side Rendering",
    link: "#server-side-rendering",
  },
  {
    name: "Sitemap",
    link: "#sitemap",
  },
  {
    name: "Slider",
    link: "#slider",
  },
  {
    name: "Slug",
    link: "#slug",
  },
  {
    name: "SMTP",
    link: "#smtp",
  },
  {
    name: "Snake Case",
    link: "#snake",
  },
  {
    name: "SPA",
    link: "#spa",
  },
  {
    name: "SQL",
    link: "#sql",
  },
  {
    name: "SQL Injection",
    link: "#sql-injection",
  },
  {
    name: "SSL",
    link: "#ssl",
  },
  {
    name: "SSL Certificate",
    link: "#ssl-certificate",
  },
  {
    name: "Static Site",
    link: "#static-site",
  },
  {
    name: "Strict Mode",
    link: "#strict-mode",
  },
  {
    name: "String",
    link: "#string",
  },
  {
    name: "String Interpolation",
    link: "#string-interpolation",
  },
  {
    name: "Stylesheet",
    link: "#stylesheet",
  },
  {
    name: "SVG",
    link: "#svg",
  },
  {
    name: "Symbol",
    link: "#symbol",
  },
  {
    name: "Synchronous",
    link: "#synchronous",
  },
  {
    name: "Syntax",
    link: "#syntax",
  },
  {
    name: "Syntax Error",
    link: "#syntax-error",
  },
  {
    name: "Syntactic Sugar",
    link: "#syntactic-sugar",
  },
  {
    name: "Tag",
    link: "#tag",
  },
  {
    name: "Template Literal",
    link: "#template-literal",
  },
  {
    name: "Terminal",
    link: "#terminal",
  },
  {
    name: "Ternary Operator",
    link: "#ternary",
  },
  {
    name: "Truthy",
    link: "#truthy",
  },
  {
    name: "Type Inference",
    link: "#type-inference",
  },
  {
    name: "TypeScript",
    link: "#typescript",
  },
  {
    name: "UI (User Interface)",
    link: "#ui",
  },
  {
    name: "Undefined",
    link: "#undefined",
  },
  {
    name: "URL",
    link: "#url",
  },
  {
    name: "Usability",
    link: "#usability",
  },
  {
    name: "UX (User Experience)",
    link: "#ux",
  },
  {
    name: "Variable",
    link: "#variable",
  },
  {
    name: "Version Control",
    link: "#version-control",
  },
  {
    name: "Viewport",
    link: "#viewport",
  },
  {
    name: "Virtual DOM",
    link: "#virtual-dom",
  },
  {
    name: "Vite",
    link: "#vite",
  },
  {
    name: "WCAG",
    link: "#wcag",
  },
  {
    name: "Web Analytics",
    link: "#web-analytics",
  },
  {
    name: "Web Design",
    link: "#web-design",
  },
  {
    name: "Webpack",
    link: "#webpack",
  },
  {
    name: "Whitespace",
    link: "#whitespace",
  },
  {
    name: "Wireframe",
    link: "#wireframe",
  },
  {
    name: "WYSIWYG",
    link: "#wysiwyg",
  },
  {
    name: "XML",
    link: "#xml",
  },
  {
    name: "Yarn",
    link: "#yarn",
  },
];

export const tableOfContents = [];

for (const key in tableOfContentsWithoutId) {
  const obj = {
    id: Number(key),
    ...tableOfContentsWithoutId[key],
  };

  tableOfContents.push(obj);
}

// export { terms, tableOfContents };
