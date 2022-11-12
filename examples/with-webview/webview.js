/* global Deno */

import { Webview, SizeHint } from 'https://deno.land/x/webview@0.7.5/mod.ts'

const webview = new Webview(true, {
  width: 800,
  height: 600,
  hint: SizeHint.FIXED
})

webview.navigate('http://localhost:8000/')

export default webview
