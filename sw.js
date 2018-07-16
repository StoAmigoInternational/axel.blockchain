/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["about.html","7db335f6882594c5d58575c3ce530f3a"],["access.html","794068b2c51b5314efdf798704510363"],["android-chrome-192x192.png","1331aac1b7f1fa12cc2a818d70353b26"],["android-chrome-512x512.png","2b13eee41a918d63806a5ebedc69e424"],["apple-touch-icon.png","af58b28e76b62b2effc00f68f87093ee"],["assets/backgrounds/pattern-01.svg","0b939a9ebd8e5acff5a6fe9e51cb7909"],["assets/backgrounds/pattern-pixel-transparent.png","a4b23b386c55733d7beaf2f4448580db"],["assets/backgrounds/pattern-pixel-white.png","6635f0f885cd4696d5c8331d98c10cf0"],["assets/error.gif","6f851662ad2fe92e38d93dbf1e31b84a"],["assets/icons-nav.svg","fb68440bd3e4f83e4b51bbc893917701"],["assets/logo.png","f0bc1ac95ffd5e67aadcfc680097f6e3"],["assets/modal-blockchain.png","42b83815c10d637f5c10971a72aa26dc"],["assets/social/profile.png","75ce931f9632a9adcd3bf08215652ea3"],["assets/social/social.png","c753b77121695abee5fe42574a8270a0"],["assets/ui-generic-laptop-template-1400.png","5c316e998f67acecd167994de89dee00"],["assets/ui-generic-laptop-template.png","58f03ec77f615828e5fbfd1503b138f8"],["assets/ui-generic-mobile-template.png","3153135baa0c5b624144887af5e3d510"],["assets/ui-generic-tablet-template.png","73babf7102def64898a868e656bd323a"],["careers.html","31eb62e0030bd29d413501ad6f4238a0"],["contact.html","2a94c4f9a746e5c63717dbd8ae3f55ca"],["copyright.html","dd792be60d54cdf95ac7199b99ce3004"],["download.html","5ae59e4a08e577671f9a6ac160b7d845"],["error.html","c05fa287a3acb801e3434478389cdd8e"],["eula.html","d15b93967e87d8f068eac1f4723ca969"],["faq.html","d974a79e9d5994aec3c434e4c5a60d86"],["favicon-16x16.png","a77bb99b102bbcbbcfac2aa669af53e7"],["favicon-32x32.png","487f4e87b66ed3e51bdff8c365baf736"],["fonts/FontAwesome.otf","0d2717cd5d853e5c765ca032dfd41a4d"],["fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["fonts/fontawesome-webfont.svg","760bd83ee04dff470e0277f3eb7deebe"],["fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["icon.png","b2474bb2fc73c7fd0f0f14e52f7f9eed"],["index.html","3ee3c8fca991d69fa02e1bac578d5c3f"],["integration.html","402a6fd121e9071c36339706431d0411"],["mstile-150x150.png","194e6791d231e321deedad4d4326151b"],["pages/home/01.jpg","43f5729e635900d32e6d60e5f2a539c2"],["pages/home/02.jpg","4d2746a09dd2ad2cf31ae37cc8ac090a"],["pages/home/03.jpg","85bd47445f2725ab0638a368ed096f26"],["pages/home/hero-alt.png","ab5da314deed4dee316443495adc01ee"],["pages/home/hero.png","52fab66e2f110e79de04932f73ce116a"],["pages/home/people.jpg","f3058e80e0a6a6f055bb6113d06af400"],["pages/home/test-01.jpg","85bd47445f2725ab0638a368ed096f26"],["pages/home/test-02.jpg","85bd47445f2725ab0638a368ed096f26"],["pages/team/large-ben-ow.jpg","481cca2f1bec6671b5c400696306fea0"],["pages/team/large-dave-kaplan.jpg","4f610f8ae262c5bb51014e3d198f6c13"],["pages/team/large-diana-zhang.jpg","19420b2775a42f1c6118b49046cd2277"],["pages/team/large-dmitry-kogosov.jpg","38aa0f5d90936fa797c5a8e2eba0ca6b"],["pages/team/large-dmytro-ashkinazi.jpg","60342c8d5e294f43b496f8ffd0fdc95c"],["pages/team/large-jeremy-forsberg.jpg","478de0d660439a899ddfec464c6b4ef2"],["pages/team/large-rick-stiles.jpg","8ecfa4566614602bf83d33233770615e"],["pages/team/large-sandy-zhou.jpg","ec33fae0cc322dd4bcc1a383cd6ccbc9"],["pages/team/large-tony-tan.jpg","16cda7fe4368c902c0f5aa13d93c9c58"],["pages/team/profiles.json","9e7b1af5bc8300277faef4209719e87a"],["pages/team/small-ben-ow.jpg","a5d166c6ec24605b0e521fdc52498f25"],["pages/team/small-dave-kaplan.jpg","851425606099f2c8beb76c99c393b1f2"],["pages/team/small-diana-zhang.jpg","328080bf939d1fa40d189940a60558c8"],["pages/team/small-dmitry-kogosov.jpg","6ab3618fdbd6311e79c199dab5d570e1"],["pages/team/small-dmytro-ashkinazi.jpg","769fb7adfa0c49145930b4041ed0dc73"],["pages/team/small-jeremy-forsberg.jpg","bddffff4fb22b68c2f0647dc5cbd71fa"],["pages/team/small-rick-stiles.jpg","6425f34b045d4b16cb69ad1fb4f727d7"],["pages/team/small-sandy-zhou.jpg","b6c0659a133b9978ad2b7727f525b969"],["pages/team/small-tony-tan.jpg","7e57542b0bb1c4b464f5cc1925a718d4"],["plans.html","1115f67f41ce17c23f70f29e4eda2a1c"],["press.html","5612348401224922c16032e91e0f6208"],["privacy-bill-of-rights.html","29037287a9f1783ceeb328068c4fc393"],["privacy-policy.html","b2b283245e30d2fd8f78c9db0948515c"],["safari-pinned-tab.svg","1cf7b1375f175a75981ffcb39e63b7cb"],["scripts/app.css","21e2d564496d57f666f8039f69b74cac"],["scripts/app.js","949c7af0b4cf7d3a4130a005580ee73f"],["security.html","65375717fcddfdf234021c72242486fe"],["sharing.html","04368ed2dda99f1f1b3d9b004ba92481"],["streaming.html","11d371875a28a6c523d7b0f55b9171a4"],["team.html","5ef7f4ad21775d6f48fdff6979aa1e14"],["transfer.html","2d2e3a85664701b657a3aef971cbe501"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/index.html';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







