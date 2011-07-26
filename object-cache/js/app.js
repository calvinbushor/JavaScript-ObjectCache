var oc = new ObjectCache();

oc.set('Author', 'Calvin');
oc.set('Twitter', 'twitter.com/CalvinBushor');

for ( var i=0; i<9; i++ ) {
    oc.set('people,person' + i, 'p'+i);
}
