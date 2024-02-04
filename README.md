# PharmLink +
The future of secure healthcare, our blockchain-powered system is revolutionizing medical prescription management, eliminating fraud and ensuring patient safety with unparalleled transparency and accountability.

<i>(This project has been written and developed as part of the "Hackdata" hackathon, organized by the ACM Student chapter of Shiv Nadar University, on 3rd,4th February, 2024)</i>

## The Team
1. <b>Kunal Passan</b> ([@kazekunal](https://github.com/kazekunal)): 
   Frontend Dev; Prop management, Building states, Frontend design
2. <b>Mudit Gupta</b> ([@mudit-51](https://github.com/mudit-51)): 
   Backend Dev; API development, CI/CD management, Deployment middleware
3. <b>Nimansh Endlay</b> ([@nimanshe](https://github.com/nimanshe)): 
   Frontend Dev; Frontend design, Auth building
4. <b>Raj Rajeshwar Singh Bisen</b> ([@AnarchistHoneybun](https://github.com/AnarchistHoneybun)): 
   Backend Dev; Smart Contract build, Compiler middleware

## Our Tech
We utilise Next.js, Tailwind and Slint for our frontend, with a backend in Express.js and MongoDB. Our smart contracts are done in Solidity, and we interact with them through infrastructure provided by [Infura](https://docs.infura.io/getting-started).

## What we solve
Our project aims to address a pressing issue within the healthcare industry: medical prescription fraud. With the increasing reliance on digital records and prescriptions, the vulnerability to fraudulent activities has become a significant concern. To combat this, we are leveraging blockchain technology to create a secure and transparent system for managing medical prescriptions.

Traditional prescription systems are susceptible to various forms of fraud, including unauthorized alterations, duplicate prescriptions, and even counterfeit medications. These fraudulent activities not only jeopardize patient safety but also strain healthcare resources and erode trust in the system.

By harnessing the immutable and decentralized nature of blockchain, our solution provides a comprehensive defense against prescription fraud. Each prescription is securely recorded on the blockchain, creating a tamper-proof and transparent audit trail. This ensures the integrity of the prescription data from the moment it is issued by the healthcare provider to the point of fulfillment by the pharmacy.

## Where to use

## We are up and running!

## Code Intricacies
We take prescriptions from medical personnel and hash it, storing it both on a personal database and as a smart contract on the blockchain (That's our PresVerify.sol!). When patients arrive at pharmacists to get their prescribed meds, the pharma employee can verify the hashes on the database against the ones on the blockchain to ensure the prescription has not been tampered with, or is fraudulent. 

The middleware interactions we have built are the most critical parts of our codebase, providing a secure pipeline for prescriptions to be logged on the blockchain, ensuring zero SPII leak and maintaning a user experience that's not tedious or more complicated than earlier.

## The Team, again!
1. <b>Kunal Passan</b>: Aspirational webdeveloper, looking for opportunities in the same. Has worked with a lot of teams, huge fan of problem solving and learning from his experiences on the go.
2. <b>Mudit Gupta</b>: Budding DevOps engineer. Loathe Java.
3. <b>Nimansh Endlay</b>: Dev of Frontend. Believes html is a programming language.
4. Raj Rajeshwar Singh Bisen: Born to do systems programming, forced to work with the web. Programming polyglot of sorts and avid hater of abstraction.
