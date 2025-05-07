# Simple node-red installation

## _Set up for custom nodes creation_

> Working folder _customnodes_
> for nodes creation

## Installation of custom nodes

> In the installation folder (windows= "C:\Users\windowsuser\\.node-red") run install with the path to the custom node:  
> This is for "Testing a node module locally" only

```sh
npm install C:\work\nodered\customnodes\lower-case\
```

Location of the core nodes are in the project folder:

> C:\work\nodered\node_modules\@node-red\nodes\core

Password protect the Node-RED editor:  
locate the directory Node-RED has been installed to and use the command:

```sh
node -e "console.log(require('bcryptjs').hashSync(process.argv[1], 8));" your-password-here
```

passwd stored in settings.js in "C:\Users\windowsuser\\.node-red" folder, adminAuth
