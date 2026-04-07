# NYC-Addiction-Services-Website

I left notes in each of my code files so that beginning coders can copy, or learn from, my code and follow along with the logic and steps. In addition, new learners should install and understand why we are using these below applications and their differences:

🟢 POINT OF NODE:

Node allows us to run JavaScript outside the browser, such as in our terminal or on a server. Our terminal reads information stored on our computer, and Node enables JavaScript to interact with that system. When used in a backend project, Node runs a server that can handle requests and communicate with databases and other services.
👉 Everything else below runs on top of Node.

🟡 POINT OF NODEMON:

So that we don’t need to restart our server every time we make a change, we use Nodemon. Nodemon is like Node, but it automatically watches for file changes and restarts the server for us.
👉 Relation to Node: Nodemon uses Node to run your app — it’s just a wrapper around Node for development convenience.

❓ Why install Node if we use Nodemon?

Nodemon is not a replacement for Node — it actually depends on Node to work. Node is the core runtime that executes JavaScript, while Nodemon simply automates restarting the Node process.
👉 Node is required — Nodemon cannot run without it.

🔵 POINT OF EXPRESS:

Express is a framework that helps us build a server and define routes. It allows our server to handle requests (like GET and POST) and send responses. It often connects to a database so that we can retrieve and send data over the internet.
👉 Relation to Node: Express runs on top of Node and uses Node’s HTTP capabilities to create a server more easily--it is a node framework downloaded through the node package manager (NPM)

🟣 POINT OF AXIOS:

Axios is used to make HTTP requests (like GET or POST) from the frontend or backend. It allows the frontend to communicate with a backend API so that data can be fetched and then displayed or used in response to user actions (like clicking a button).
👉 Relation to Node: Axios can run in the browser OR in Node — in a Node app, it’s used to call external APIs or other services.

⚫ POINT OF MORGAN:

Morgan is middleware that logs incoming HTTP requests to the server, which helps with debugging and monitoring what requests are being made.
👉 Relation to Node: Morgan runs inside an Express app, which itself runs on Node — so it depends on Node indirectly.

resources:
https://furmancenter.org/stateofthecity/view/citywide-and-borough-data
https://portal.311.nyc.gov/article/?kanumber=KA-02877
https://oasas.ny.gov/addiction-treatment-centers?page=0
