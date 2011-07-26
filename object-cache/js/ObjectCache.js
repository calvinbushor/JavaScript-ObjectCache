function ObjectCache() {}

ObjectCache.prototype.set = function(key, val) {    
    var keys   = key.split(','),
        target = this;

    for( var i=0; i<keys.length; i++) {
        key = keys[i];

        if ( i == keys.length-1 ) {
            target[key]=val;
            break;
        }
        
        if ( key in target ) {
            target = target[key];
            continue;
        } else {
            target[key] = {};
            target = target[key];
        }
    }
};

ObjectCache.prototype.get = function(key) {
    var keys   = key.split(','),
        target = this;

    for( var i=0; i<keys.length; i++ ) {
        key = keys[i];

        if ( i == keys.length-1 && target[key] ) {
            return target[key];
        } else if ( i == keys.length-1 ) { 
            return null;
        }

        if ( key in target ) {
            target = target[key];
            continue;
        } else {
            return null;
        }
    }
    
    return this[key];
};

ObjectCache.prototype.dump = function() {
    return this;
}

ObjectCache.prototype.remove = function(key) {
    var keys   = key.split(','),
        target = this;

    for( var i=0; i<keys.length; i++ ) {
        key = keys[i];

        if ( i == keys.length-1 ) {
            delete target[key];
            break;
        }

        if (key in target) {
            target = target[key];
            continue;
        } else {
            return null;
        }
    }
}