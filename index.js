
/**
 * Expose `load`.
 */

exports = module.exports = load;

/**
 * Queued callbacks.
 */

var callbacks = [];
var initialized = false;

/**
 * Facebook
 *
 * @param {String} id Facebook App Id
 * @param {Object} [opts] Options for `FB.init`
 * @param {Function} fn Callback function
 */

function load(id, opts, fn) {
  if (opts) {
    if ('function' === typeof opts) {
      fn = opts;
      opts = {};
    }
  } else {
    opts = {};
  }

  if (initialized) {
    if (fn) fn(FB);
    return;
  }

  if (fn) callbacks.push(fn);
  // waiting for it to finish.
  if (window.fbAsyncInit) return;

  window.fbAsyncInit = function(){
    opts.appId = id;
    FB.init(opts);
    initialized = true;
    delete window.fbAsyncInit;
    for (var i = 0, n = callbacks.length; i < n; i++) {
      callbacks[i](null, FB);
    }
    callbacks = undefined;
  };

  // Load the SDK asynchronously
  (function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/all.js";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
}