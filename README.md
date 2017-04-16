vue-visible
===
vue.js v-visible directive

### install
```shell
npm install vue-mini-visible --save
```
### usage

```javascript
var VueVisible = require('vue-visible')
Vue.use(VueVisible)
```
### example
```html
<template v-visible="show">
  ...
</template>
```
```javascript
var vm = new Vue({
    data: {
        show : true,
    }
});
```
