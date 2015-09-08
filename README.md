# cyviewspy

I kept looking for a Spy++ equivalent on Mac before I write this util.

To dump the view hierarchy of an Cocoa application is trivial, just call something like `[UIView recursiveDescription]`. But you need to be within the target process. And I took advantage of Cycript for the heavy-lifting.

## Installation
So you need to install [Cycript](https://cydia.saurik.com/api/latest/3) to run this util. 


For v0.9.502 (the latest version when this writing), you better install it to /usr/local/ for less hassle.

    MacBook:~$ sudo cp -a Cycript.lib/*.dylib /usr/local/lib
    MacBook:~$ sudo cp -a Cycript.lib/cycript /usr/local/bin

And you may refer the [Cycript manual](http://www.cycript.org/manual/) if any problem.

## Usage

    ./cyviewspy ProcessNameOrPID [ViewClass]

ViewClass is the class name of your interest - a NSView subclass usually. If it's not specified, it enumerates `[NSApplication sharedApplication].windows[].contentView`. But this list doesn't hold all views in an application.

Here is the example for Safari.app:

    cyviewspy $ ./cyviewspy Safari
    0
    NSView	frame:{{0,0}, {1440, 841}}
        BrowserWindowContentView	frame:{{0,0}, {1440, 841}}
            BarBackground	frame:{{0,0}, {1440, 16}}
                NSView	frame:{{0,0}, {1440, 16}}
                NSTextField	frame:{{10,0}, {1398, 14}}
            AutoLayoutCompatibleTabView	frame:{{0,16}, {1440, 825}}
                TabContentView	frame:{{0,0}, {1440, 825}}
                    ResizableContentContainer	frame:{{0,0}, {1440, 825}}
                        BrowserWKView	frame:{{0,0}, {1440, 825}}
                            WKFlippedView	frame:{{0,0}, {1440, 825}}
                    AutoLayoutCompatibleView [hidden]	frame:{{0,740}, {1440, 85}}
    
    
    NSView	frame:{{0,0}, {683, 123}}
        ButtonPlus	{AutoFill}	frame:{{148,81}, {37, 25}}
        ButtonPlus	{Home}	frame:{{115,81}, {37, 25}}
        ButtonPlus	{Print}	frame:{{635,81}, {37, 25}}
        ButtonPlus	{Open in Dashboard}	frame:{{237,81}, {37, 25}}
        NSSegmentedControl	frame:{{22,17}, {53, 25}}
        NSSegmentedControl	frame:{{181,81}, {53, 25}}
        NSSegmentedControl	frame:{{181,17}, {53, 25}}
        NSView	frame:{{271,82}, {343, 23}}
        NSView	frame:{{241,19}, {343, 23}}
            UnifiedField	frame:{{0,0}, {343, 23}}
                NSView	frame:{{0,1}, {343, 22}}
                TextFieldThatIgnoresClicks	frame:{{0,0}, {343, 23}}
                NSView	frame:{{0,0}, {0, 0}}
                    NSView	frame:{{0,0}, {0, 0}}
                        InteriorUnifiedField	frame:{{0,0}, {343, 23}}
                    TextFieldThatIgnoresClicks	frame:{{0,0}, {0, 0}}
                NSImageView [hidden]	frame:{{0,4}, {16, 16}}
        TopSitesButton	{Top Sites}	frame:{{81,81}, {37, 25}}
        ButtonPlus	{History}	frame:{{94,52}, {37, 25}}
        ButtonPlus	{Mail}	frame:{{130,52}, {37, 25}}
        ButtonPlus	{Web Inspector}	frame:{{202,52}, {37, 25}}
        ButtonPlus	{iCloud Tabs}	frame:{{342,52}, {37, 25}}
    ...

## Known Issues
* it's written for Mac only, but it's trivial to make it work for iOS.
  
  
