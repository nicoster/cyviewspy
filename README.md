# cyviewspy

I kept looking for a Spy++ equivalent on Mac before I write this util.

To dump the view hierarchy of an Cocoa application is trivial, just call something like [UIView recursiveDescription]. But you need to be within the target process. And I took advantage of Cycript for the heavy-lifting.

## Installation
So you need to install [Cycript](https://cydia.saurik.com/api/latest/3) to run this util. 


For v0.9.502 (the latest version when this writing), you better install it to /usr/local/ for less hassle.

    MacBook:~$ sudo cp -a Cycript.lib/*.dylib /usr/local/lib
    MacBook:~$ sudo cp -a Cycript.lib/cycript /usr/local/bin

And you may refer the [Cycript manual](http://www.cycript.org/manual/) if any problem.

## Usage

    ./cyviewspy ProcessNameOrPID [ViewClass]

ViewClass is the class name of your interest - a NSView subclass usually. If it's not specified, it enumerates [NSApplication sharedApplication].windows[].contentView. But this list doesn't hold all views in an application.

## Known Issues
* it's written for Mac only, but it's trivial to make it work for iOS.
  
  
