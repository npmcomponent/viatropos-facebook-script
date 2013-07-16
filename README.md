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