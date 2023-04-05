// get the width and height of the screen in pixels
let screenWidth = screen.width;
let screenHeight = screen.height;

// get the color depth of the screen
let screenColorDepth = screen.colorDepth || screen.pixelDepth;

// display the results in the console
console.log("Screen size: " + screenWidth + " x " + screenHeight + " pixels");
console.log("Color depth: " + screenColorDepth + " bits per pixel");
