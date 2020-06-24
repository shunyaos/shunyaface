---
id: 05-design
title: Build your Prototype
sidebar_label: Build
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

## Step 1: Select Sensors, Actuators and Insight tools   

Start with basic structure of Shunya Interfaces, and keep adding the API's to 
this structure.

<Tabs
  defaultValue="c"
  values={[
    { label: 'C/CPP', value: 'c', },
  ]
}>

<TabItem value="c">

```c
/*Include this header file into your program */
#include <shunyaInterfaces.h>

/* Main Function */
int main(void) {
        /* initialize the Library*/
        initLib();
        return 0;
}
```

</TabItem>
<TabItem value="py">

```py
import shunyaInterfaces 
```

</TabItem>
<TabItem value="js">

```js
var commingsoon = 1;
```

</TabItem>
</Tabs>

### Choose Sensors (Gather data)

1. [Voltage](categories/08-analog_voltage.md) 
1. [Distance](categories/05-distance.md)
1. [Light Intensity](categories/06-light.md)
1. [Current](categories/09-current.md)
1. [Liquid Flow](categories/07-liquid_flow.md)
1. Gas (coming soon)    
1. Pressure (coming soon)
1. Humidity (coming soon)
1. Motion (coming soon)
1. Temperature (coming soon)

### Choose Insight tools

1. Send Data to Cloud (AWS) 
2. Send Data to Dashboard (coming soon) 

### Choose to send Alerts

1. Send Alerts via Mail (coming soon) 
1. Send Alerts via Messages (coming soon) 
1. Send Alerts via WhatsApp messages (coming soon)  

#### Choose Actuators (Hardware Actions)

1. [LED's](categories/501-led.md)
2. [Relay](categories/502-relay.md) 
3. Pumps(coming soon)
4. Fan(coming soon)

## Step 2: Connect peripherals & Configure Shunya Interfaces

### Choose a dev Board  

Shunya Interfaces supports these development boards, you can choose any one of them
to work with.

1. RockPi-S-V10  
1. Raspberry Pi 4 
1. Raspberry Pi 3
1. OrangePi 2G IOT

### Connect peripherals

Connect all your hardware peripherals to the board. 

To help you with the connections use the links in the excel to easily find 
pinouts for the development boards.

1. **[Dev Board pinouts](https://docs.google.com/spreadsheets/d/1in0_qqWc5r-ngrlRduTemxfzUY_cOrZYDOE2uZ5Woqc/edit?usp=sharing)**  

### Configure Shunya Interfaces

Tell Shunya Interfaces what peripheral you have connected and where it is connected.

Copy the template into your projects folder. 

Fill the templates with the sensor IDs against the pin that you have connected the 
sensor. The config file follows the YAML format.

> Example YAML file snippet :  

```yaml {3,5}
pin 1: null  # null for no connections on the pin  
pin 2: null 
pin 3: 1.1   # Sensor ID for BME280 is 1 while the pin is SDA hence the .1
pin 4: null 
pin 5: 1.2   # Sensor ID for BME280 is 1 while the pin is SCL hence the .2
pin 6: null 
```

## Step 3: Install Shunya OS

### What will you need. 
1. [Shunya OS Supported board](http://releases.shunyaos.org/interfaces-images/)
2. microSD card reader/adapter 
3. microSD card 
4. Laptop/PC 

### Step 3.1 : Install Etcher 

<Tabs
  defaultValue="nix"
  values={[
    { label: 'Windows', value: 'win', },
    { label: 'Ubuntu', value: 'nix', },
  ]
}>


<TabItem value="nix">

#### For Ubuntu 16.04 
1. Run this command in the Terminal 

```bash
$ sudo apt update
$ sudo apt install balena-etcher-electron
```

</TabItem>
<TabItem value="win">

#### For Windows
1. Download [balenaEtcher](https://www.balena.io/etcher/) for Windows. 
2. Run balenaEtcherSetup-xxx.exe

</TabItem>
</Tabs>

### Step 3.2 : Flash Shunya OS  

1. Download [Shunya OS](http://releases.shunyaos.org/interfaces-images/)
1. Right click on the downloaded zip file.
1. Click Extract here.
1. Open Etcher.
1. Click Select Image.
1. You will find the Shunya OS `.img` file in the folder that we had extracted earlier. 
1. Select `shunya-aaaa-image-xxxx.img` file.
1. Insert SD card.
1. Click on Flash. 

<img alt="Oops!, No Image to display." src={useBaseUrl('img/install.gif')} />

This will start loading the SD-card with Shunya OS.

### Step 3.3 : Booting Up with Shunya OS 
1. Insert the SD card into the board. 
2. Connect Keyboard and Mouse. 
3. Connect Monitor (if available). 
4. Connect Power Supply. 

The board should boot up with Shunya OS.

#### Login 
Login with these credentials:

- Username : shunya
- Password : shunya 


## Step 4: Run your program 

Compile code and Run the program.

<Tabs
  defaultValue="c"
  values={[
    { label: 'C/CPP', value: 'c', },
  ]
}>

<TabItem value="c">

```bash
$ gcc -o myapp program.c -lshunyaInterfaces_user -lshunyaInterfaces_core
$ sudo ./myapp  
```

</TabItem>
<TabItem value="py">

```bash
$ sudo python3 blink.py
```

</TabItem>
<TabItem value="js">

```bash
$ sudo node blink.js
```

</TabItem>
</Tabs>

