---
id: 08-analog_voltage
title: Analog Voltage
sidebar_label: Analog Voltage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## List of Supported Sensors

| **Sensor** | **Sensor Id** |
| ------ | ------ | 
| `PCF8591`|   6 |

:::note
Note the Sensor ID's of your chosen sensor, Sensor ID's needs to written into 
`config.yaml` while configuring Shunya Interfaces.
:::


<Tabs
  defaultValue="simp"
  values={[
    { label: 'Simple API', value: 'simp', },
    { label: 'Advance API', value: 'adv', },
  ]
}>

<TabItem value="simp">

## Simple API

  <Tabs
    defaultValue="c"
    values={[
      { label: 'C/CPP', value: 'c', },
    ]
  }>

  <TabItem value="c">

```c
/* Add this line to your main function 
 * to read data from the sensor */
int voltage = getAdc(channel);
```

  </TabItem>
  <TabItem value="py">

```py
import commingsoon 
```

  </TabItem>
  <TabItem value="js">

```js
var commingsoon = 1;
```

  </TabItem>
  </Tabs>

</TabItem>

<TabItem value="adv">

## Advance API

  <Tabs
    defaultValue="c"
    values={[
      { label: 'C/CPP', value: 'c', },
    ]
  }>

  <TabItem value="c">

```c
struct pcf8591Settings set = {.def=1};
/* Add this line to your main function 
 * to read data from the sensor */
int voltage = getAdc6(set, channel);
```

  </TabItem>
  <TabItem value="py">

```py
import commingsoon 
```

  </TabItem>
  <TabItem value="js">

```js
var commingsoon = 1;
```

  </TabItem>
  </Tabs>

</TabItem>
</Tabs>

:::tip Note
`channel` - Denotes the ADC Input channel number. Typically ADC's have the ability
to sense voltages from multiple sources via multiple channels. User needs to enter
which channel of the ADC they have connected the voltage source.  
:::