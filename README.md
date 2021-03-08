# vscode-pxplus
PXPlus Language Extension for VSCode

I am not affilated with [PVX Plus Technologies Ltd](https://home.pvxplus.com) or Sage Software.

# Version 0.0.1
Initial Release 
- Basic usage of snippits 
- Highlighting 
- Help text
- Signature Help

# Installation
Make sure you have Node.js installed. Then run:

`npm install -g yarn vsce`

# Usage
To compile the app, run the following commands in the terminal:
```nodejs
--To install the needed libraries.
yarn 
```

```nodejs
--To compile the extension, run the below command.
cd vscode-pxplus
CTRL+SHIFT+B
```

You can use vsce to easily package the extension:


```nodejs
vsce package
pxplus-{version}.vsix generated
```

In Visual Studio Code
Click on "Extensions"
Click the "..." in the extension marketplace.
Click "Install from VSIX..."

Point it to the file and click install.

Once the library becomes a bit more mature I will publish it to the Marketplace.

# Future Development
Development on this will be driven by the community, if you need a feature please start a discussion topic or contact me.  