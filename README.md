*This repository is a mirror of the [component](http://component.io) module [viatropos/facebook-script](http://github.com/viatropos/facebook-script). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/viatropos-facebook-script`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# Facebook Script Loader

## Installation

```bash
$ component install viatropos/facebook-script
```

## Example

```js
var facebook = require('facebook-script');

facebook('138567726170761', function(err, FB){
  FB // same as window.FB.
});
```

## License

MIT