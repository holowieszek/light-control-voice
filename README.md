# Light Control Voice

Control light with your voice, Raspberry and Javascript!

## Scheme 
<p align="center">
    <img src="https://i.imgur.com/jS6vGKz.png">
</p>

Before you're gonna plug your lamp to the relay just check is relay working

```
sudo python
import RPi.GPIO as GPIO
GPIO.setmode(GPIO.BOARD)
GPIO.setup(18, GPIO.OUT) // green led should light up
GPIO.setup(18, GPIO.IN) // green led should go out
GPIO.cleanup()
```

1. git clone
2. npm install
3. npm run dev

4. set endpoint in client/voice.js
5. run client/index.js

## Youtube
[![demo - youtube](https://img.youtube.com/vi/N1DaYdtqpoY/maxresdefault.jpg)](https://www.youtube.com/watch?v=N1DaYdtqpoY "demo - youtube")