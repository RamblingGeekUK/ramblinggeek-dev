---
title: "Babbage Bot"
publishDate: "2023-05-17"
author: Wayne
tags: 
  - "raspberry"
  - "pico"
  - "micropython"
image: "~/assets/images/BabbageBot03.png"
excerpt: "It's Alive, It's Alive!  I decided to bring Raspberry Pi's Babbage Teddy alive"
---

A little while back, I was looking at Babbage Bear and figured it would be awesome if he could move!

If you are not familiar with [Babbage](https://www.raspberrypi.com/news/meet-babbage-the-bear) [Bear](https://www.raspberrypi.com/news/meet-babbage-the-bear), he is the mascot for the Raspberry Pi Foundation and he's named after [Charles Babbage](https://en.wikipedia.org/wiki/Charles_Babbage), you can pick up your own from the [Raspberry Pi Store](https://thepihut.com/products/babbage-bear-official-raspberry-pi-mascot).

## Making him move

I have never attempted anything like this before. So I figured I needed two servos and something for them to push against. I ended up designing a basic block for the servos to sit in and have something to push against.

Then we needed some arms, so I designed them also to fit on the end of the servo, which I could also screw in place, so they didn't move as they needed to push his arms up, so they needed not to slip. In the first iteration, the arms worked but stopped around the servo fixing end, I made the area around here wider to add more strength.

Then the scary part and that part my Son didn't want me to do and that was opening his back up, thankfully this was much easier than I anticipated, I took a knife, stretched the material to expose the stitches on his back, and cut them and the back opened nice, then I remove some of the stuffing and inserted the block.

Pushing the arms in and the block wasn't going to happen, so I pushed the arms attached to the block and then pushed the servos into the block, and then push the block into the back of Babbage.

## The Code

The code isn't anything special and the Raspberry Pi Pico is managing to power both servos just fine at the same time, which was a little concerning.

```micropython
import utime
from servo import Servo
 
s0 = Servo(0)       # Servo pin is connected to GP0
s1 = Servo(1)       # Servo pin is connected to GP0
 
def servo_Map(x, in_min, in_max, out_min, out_max):
    return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
 
def servo_Angle(angle):
    if angle < 0:
        angle = 0
    if angle > 180:
        angle = 180
    s0.goto(round(servo_Map(angle,0,180,0,1024))) # Convert range value to angle value
    s1.goto(round(servo_Map(angle,0,180,0,1024))) # Convert range value to angle value
    
    
if __name__ == '__main__':
    while True:
        print("Right Arm Down")
        for i in range(0,100,10):
            servo_Angle(i)
            utime.sleep(0.05)
        print("Right Arm Up")
        for i in range(100,0,-10):
            servo_Angle(i)
            utime.sleep(0.05)
```

## What's Next

Improve the code.  Maybe have an API, with Left and Right arm calls that allows for the amount of arm movement.

Adding another servo and moving the head left/right, up/down would be awesome but not sure how to achieve this.

Using hardware control for the servos rather than PWM for more control.

Adding a speaker so he can talk and connect to ChatGPT?
