---
title: "RGB Matrix Display"
publishDate: "2023-07-22"
author: Wayne
tags: 
  - "raspberry"
  - "pico"
  - "micropython"
image: "~/assets/images/MatrixDisplay.jpg"
excerpt: "RGB Matrix easy hardware, software not so much"
---

What you will need

[Interstate75 - Driver Board](https://shop.pimoroni.com/products/interstate-75-w?variant=40453881299027)

[RGB Matrix Display](https://thepihut.com/products/rgb-full-colour-led-matrix-panel-4mm-pitch-64x32-pixels
)

The Interstate 75 Driver board makes it simple to get the screen up and running. Without one of these, you would have to manually wire up each pin on a Raspberry Pi Pico, ask me how I know. 😜

Connecting up is very easy, push the Interstate 75 Driver board into the back of the Matrix display, it's keyed. As the Matrix displays can be daisy-chained there are two connectors on the back of the screen an "in" and "out". Connect the Interstate 75 to the "in" connector.

On the Edge of the Interstate75 board are two screw terminals, connect the Matrix Display Power cable (supplied with the screen) to the screw terminals and then push into the 4-pin power connector on the back of the screen.

Now connect to the PC via USB C. As the Internet 75 Driver board is a Raspberry Pico, you can then flash with MicroPython or CircuitPython.

It's really simple to do and doesn't take more than 10 mins to get up and running.

Full details here: https://learn.pimoroni.com/article/getting-started-with-interstate-75

The trickest part is working out the code to display what you want to display on it.

I would like to display animated gifs, not sure if this is possible.

Happy Hacking.
