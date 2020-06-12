# 自動澆水系統

## Step 1

設定變數用來泥土的濕度。

```block
let Moisture = 0
basic.forever(function () {
    Moisture = 0
})
```

## Step 2

從濕度感應器經 P0 接口收集數據，並記錄於變數"Moisture"中 (數值取至最接近的整數)。

```block
let Moisture = 0
basic.forever(function () {
    Moisture = Math.round(pins.analogReadPin(AnalogPin.P0))
})
```

## Step 3

於Micro:bit顯示屏顯示濕度的數值。

```block
let Moisture = 0
basic.forever(function () {
    Moisture = Math.round(pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(Moisture)
})
```

## Step 4

利用邏輯，設定澆水的條件。
例如:當濕度小於某數值(eg:520)，澆水器便會澆水

```block
let Moisture = 0
basic.forever(function () {
    Moisture = Math.round(pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(0)
    if (Moisture < 520) {
    	
    }
})
```

## Step 5

設定澆水器澆水時轉動的角度停留的時間

let Moisture = 0
basic.forever(function () {
    Moisture = Math.round(pins.analogReadPin(AnalogPin.P0))
    basic.showNumber(0)
    if (Moisture < 520) {
        pins.servoWritePin(AnalogPin.P0, 180)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(2000)
    }
})

