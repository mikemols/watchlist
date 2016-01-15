/**
 * Watchlist model events
 */

'use strict';

import {EventEmitter} from 'events';
var Watchlist = require('./watchlist.model');
var WatchlistEvents = new EventEmitter();

// Set max event listeners (0 == unlimited)
WatchlistEvents.setMaxListeners(0);

// Model events
var events = {
  'save': 'save',
  'remove': 'remove'
};

// Register the event emitter to the model events
for (var e in events) {
  var event = events[e];
  Watchlist.schema.post(e, emitEvent(event));
}

function emitEvent(event) {
  return function(doc) {
    WatchlistEvents.emit(event + ':' + doc._id, doc);
    WatchlistEvents.emit(event, doc);
  }
}

export default WatchlistEvents;
