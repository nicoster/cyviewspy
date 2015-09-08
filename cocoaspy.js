
function rect2str(rect)
{
	return '{{' + rect.origin.x + ',' + rect.origin.y + '}, {' + rect.size.width + ', ' + rect.size.height + '}}';
}

function makeIndent(indent){
	var output = ''
	for (var i = 0; i < indent * 4; i ++){ output += ' ';}
	return output;
}

function subviews(view, indent = 0)
{
	// return view.description;
	var log = makeIndent(indent) + view.class + '	{' + view.title + '}	frame:' + rect2str(view.frame) + '\n';
	for(i in view.subviews){
		var v = view.subviews[i];
		log += subviews(v, indent + 1);
	}

	return log;
};

var wins = [NSApplication sharedApplication].windows;
var output = '';
for (var i in wins)
{
	var win = wins[i];
	output += subviews(win.contentView) + '\n';
}

[output writeToFile:"/tmp/cycript.log" atomically:NO encoding:4 error:NULL];
