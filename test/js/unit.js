test("Modernizrs on board", function() {

	ok(window.Modernizr, 'global Modernizr is present');

});

test("bug detects can be added via Modernizr.addTest", function() {

	var docEl = document.documentElement;

	Modernizr.addTest('nastybrowserbug',function(){
		return true;
	});

	ok(docEl.className.indexOf(' nastybrowserbug') >= 0,'bug detect class added');
	equal(Modernizr.nastybrowserbug,true,'bug detect prop added');

});