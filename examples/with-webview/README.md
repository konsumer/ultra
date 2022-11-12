# with-webview

This will give you a basic ukltra app, that runs in a webview. You can think of it as a very light electron app.

## usage

### dev

You can start a local server to dev liek this:

```
deno task dev
```

It will start the webview-wrapper (in webview.js) and the frontend/backend.

### build

You can build it all into an app, but I didn't really work out any proper packaging.

```
npm run build
```

This will output the app in .ultra/ run like this:

```
cd .ultra
./demo
```
