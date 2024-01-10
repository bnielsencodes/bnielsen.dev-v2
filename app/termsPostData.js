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
      { id: 6, name: "Error 502", link: "#error502" },
    ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "A11y",
    target: "ally",
    definition: "A11y stands for accessibility.",
    seeAlso: [
      { name: "Accessibility,", link: "#accessibility" },
      { name: "WCAG", link: "#wcag" },
    ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Abstraction",
    target: "abstraction",
    definition:
      "Through the process of abstraction, a programmer hides all but the relevant data about an object in order to reduce complexity and increase efficiency. In the same way that abstraction sometimes works in art, the object that remains is a representation of the original, with unwanted detail omitted.",
    // seeAlso: [""],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Accessibility",
    target: "accessibility",
    definition:
      "Web accessibility is the practice of making websites usable for all visitors, including those with disabilities, impairments, and limitations.",
    seeAlso: [
      { name: "A11y,", link: "#ally" },
      { name: "WCAG", link: "#wcag" },
    ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Accordian",
    target: "accordian",
    definition:
      "A type of menu that displays a list of headers stacked on top of one another. When clicked on (or triggered by a keyboard interaction or screen reader), these headers will either reveal or hide associated content. This list of web terms is an accordian. As one header opens, the previous opened header closes.",
    // seeAlso: [""],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Agile Methodology",
    target: "agile",
    definition:
      "The Agile methodology is a project management approach that involves breaking the project into phases and emphasizes continuous collaboration and improvement. Teams follow a cycle of planning, executing, and evaluating.",
    seeAlso: [{ name: "Scrum", link: "#scrum" }],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Algorithm",
    target: "algorithm",
    definition:
      "An algorithm is a single, specific way of performing a complex task efficiently and repeatedly. The algorithm works by performing all of the smaller steps you need to do to perform the complex task.",
    seeAlso: [{ name: "Data Structures", link: "#data-structures" }],
    // tags: ["javascript", "css", "etc."],
    examples: [
      "sort algorithms",
      "search algorithms",
      "hashing",
      "dynamic programming",
      "and more",
    ],
  },
  {
    name: "AJAX (Asynchronous JavaScript and XML)",
    target: "ajax",
    definition:
      "Ajax enables a web application user to interact with a web page without the interruption of constant web page reloading. Website interaction happens quickly with only portions of the page reloading and refreshing.",
    seeAlso: [{ name: "XML", link: "#xml" }],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Alt Attribute",
    target: "alt",
    definition:
      "The required alt attribute specifies an alternate text for an image, if the image cannot be displayed. The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).",
    // seeAlso: [{ term: "XML", link: "#xml" }],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "API",
    target: "api",
    definition:
      "An application programming interface (API) is a way for two or more computer programs to communicate with each other.",
    seeAlso: [
      { name: "Fetch API,", link: "#fetch-api" },
      { name: "REST API", link: "#rest-api" },
    ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Async/Await",
    target: "async-await",
    definition:
      "In computer programming, the async/await pattern is a syntactic feature of many programming languages that allows an asynchronous, non-blocking function to be structured in a way similar to an ordinary synchronous function. Async makes a function return a Promise, and await makes a function wait for a Promise.",
    seeAlso: [
      { name: "Asynchronous,", link: "#asynchronous" },
      { name: "Synchronous", link: "#synchronous" },
    ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Attribute",
    target: "attribute",
    definition:
      "In programming, attributes are properties or characteristics that you can assign to different elements, like variables, objects, or classes. They provide additional information or behavior to these elements, helping you define their specific traits.",
    seeAlso: [{ name: "Property", link: "#property" }],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Base 64",
    target: "base64",
    definition:
      "In computer programming, Base64 is a group of tetrasexagesimal binary-to-text encoding schemes that represent binary data (more specifically, a sequence of 8-bit bytes) in sequences of 24 bits that can be represented by four 6-bit Base64 digits.",
    seeAlso: [{ name: "Character Encoding", link: "#character-encoding" }],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "B2B SaaS (Business-to-Business Software-as-a-Service)",
    target: "b2bsass",
    definition:
      "Encompasses cloud-based software used by businesses for various tasks, such as accounting, office productivity, customer relationship management (CRM), and other work-related activities. Companies often subscribe to B2B SaaS solutions and pay on a recurring basis, usually monthly or yearly.",
    // seeAlso: [
    //   { term: "NPM", link: "#npm" },
    // ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Backlinks",
    target: "backlinks",
    definition:
      "Backlinks (aka inbound links, incoming links) are links from a page on one website to another. Search engines like Google use backlinks as votes of confidence in ranking pages.",
    // seeAlso: [
    //   { term: "Frontend", link: "#frontend" },
    // ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Bandwidth",
    target: "bandwidth",
    definition: "the rate of data transfer, bit rate or throughput.",
    // seeAlso: [
    //   { term: "Frontend", link: "#frontend" },
    // ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Boolean",
    target: "boolean",
    definition:
      "A logical data type that can have only the values true or false.",
    seeAlso: [
      {
        name: "Primitive Data Types (JavaScript)",
        link: "#primitive-data-types",
      },
    ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
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
        name: "Web Analytics",
        link: "#web-analytics",
      },
    ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Breadcrumbs",
    target: "breadcrumbs",
    definition:
      "A 'breadcrumb' (or 'breadcrumb trail') is a type of secondary navigation scheme that reveals the user’s location in a website or Web application. The term comes from the Hansel and Gretel fairy tale in which the two title children drop breadcrumbs to form a trail back to their home. Just like in the tale, breadcrumbs in real-world applications offer users a way to trace the path back to their original landing point.",
    // seeAlso: [
    //   {
    //     term: "Margin",
    //     link: "#margin",
    //   },
    // ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Breakpoints",
    target: "breakpoints",
    definition:
      "Breakpoints in web design refer to the predetermined screen sizes where the website's content and layout automatically adjust to ensure readability and usability on different devices.",
    seeAlso: [
      {
        name: "Media Query",
        link: "#media-query",
      },
    ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Browser",
    target: "browser",
    definition:
      "A web browser is an application for accessing websites and the Internet. When a user requests a web page from a particular website, the browser retrieves its files from a web server and then displays the page on the user's screen. Browsers are used on a range of devices, including desktops, laptops, tablets, and smartphones.",
    // seeAlso: [
    //   {
    //     term: "Media Query",
    //     link: "#media-query",
    //   },
    // ],
    // tags: ["javascript", "css", "etc."],
    examples: [
      "Brave",
      "Firefox",
      "Firefox Developer Edition",
      "Google Chrome",
      "Internet Explorer (retired)",
      "Microsoft Edge",
      "Opera",
      "Safari",
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Cache",
    target: "cache",
    definition:
      "In computing, a cache (pronounced 'cash') is a hardware or software component that stores data so that future requests for that data can be served faster; the data stored in a cache might be the result of an earlier computation or a copy of data stored elsewhere.",
    seeAlso: [
      {
        name: "Cache",
        link: "#cache",
      },
    ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Camel Case",
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Canvas",
    target: "canvas",
    definition:
      "<canvas> is an HTML element which can be used to draw graphics via scripting (usually JavaScript). This can, for instance, be used to draw graphs, combine photos, or create simple animations.",
    // seeAlso: [
    //   {
    //     term: "Kebab Case",
    //     link: "#kebab-case",
    //   },
    // ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Carousel",
    target: "carousel",
    definition:
      "In Web Development, a carousel is a feature that displays a collection of different items (usually images) in a slideshow-like manner. They usually include a couple of arrow buttons that control back and forth navigation through this collection. When the end of the collection or last item is reached it circles back around to the beginning, hence the term carousel. Some common use cases are image galleries, news headlines, or featured articles on the homepage of a website.",
    // seeAlso: [
    //   {
    //     term: "Kebab Case",
    //     link: "#kebab-case",
    //   },
    // ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "CDN",
    target: "cdn",
    definition:
      "A content delivery network, or content distribution network (CDN), is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end users. CDNs came into existence in the late 1990s as a means for alleviating the performance bottlenecks of the Internet as the Internet was starting to become a mission-critical medium for people and enterprises. Since then, CDNs have grown to serve a large portion of the Internet content today, including web objects (text, graphics and scripts), downloadable objects (media files, software, documents), applications (e-commerce, portals), live streaming media, on-demand streaming media, and social media sites.",
    // seeAlso: [
    //   {
    //     term: "Kebab Case",
    //     link: "#kebab-case",
    //   },
    // ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "CI/CD",
    target: "ci-cd",
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Class Selector",
    target: "class-selector",
    definition:
      "The CSS class selector matches elements based on the contents of their class attribute.",
    seeAlso: [
      {
        name: "ID Selector",
        link: "#id-selector",
      },
    ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Classes",
    target: "classes-javascript",
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Client",
    target: "client",
    definition:
      "A client is a computer or a program that, as part of its operation, relies on sending a request to another program or a computer hardware or software that accesses a service made available by a server (which may or may not be located on another computer). For example, web browsers are clients that connect to web servers and retrieve web pages for display.[2] Email clients retrieve email from mail servers. Online chat uses a variety of clients, which vary on the chat protocol being used. Multiplayer video games or online video games may run as a client on each computer. The term 'client' may also be applied to computers or devices that run the client software or users that use the client software.",
    seeAlso: [
      {
        name: "Client-Side Rendering,",
        link: "#client-side-rendering",
      },
      {
        name: "Client Components,",
        link: "#client-components",
      },
      {
        name: "Server",
        link: "#server",
      },
    ],
    // tags: ["javascript", "css", "etc."],
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
        name: "Client-Side Rendering",
        link: "#client-side-rendering",
      },
    ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "CMS (Content Management System)",
    target: "cms",
    definition:
      "A content management system (CMS) is computer software used to manage the creation and modification of digital content (content management). A CMS is typically used for enterprise content management (ECM) and web content management (WCM). ECM typically supports multiple users in a collaborative environment by integrating document management, digital asset management, and record retention.",
    // seeAlso: [
    //   {
    //     term: "Client",
    //     link: "#client",
    //   },
    // ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Compile",
    target: "compile",
    definition:
      "Compiling is the process of transforming a computer program written in a given language into a set of instructions in another format or language. A compiler is a computer program to execute that task.",
    // seeAlso: [
    //   {
    //     term: "Webpack",
    //     link: "#webpack",
    //   },
    // ],
    // tags: ["javascript", "css", "etc."],
  },
  {
    name: "Conditional (Ternary) Operator",
    target: "conditional",
    definition:
      "The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. This operator is frequently used as an alternative to an if...else statement.",
    // seeAlso: [
    //   {
    //     term: "Webpack",
    //     link: "#webpack",
    //   },
    // ],
    // tags: ["javascript", "css", "etc."],
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
    // tags: ["javascript", "css", "etc."],
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
    name: "304 Redirect",
    link: "#redirect",
  },
  {
    name: "304 Redirect",
    link: "#redirect",
  },
  {
    name: "304 Redirect",
    link: "#redirect",
  },
  {
    name: "304 Redirect",
    link: "#redirect",
  },
  {
    name: "304 Redirect",
    link: "#redirect",
  },
  {
    name: "304 Redirect",
    link: "#redirect",
  },
  {
    name: "304 Redirect",
    link: "#redirect",
  },
  {
    name: "304 Redirect",
    link: "#redirect",
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
