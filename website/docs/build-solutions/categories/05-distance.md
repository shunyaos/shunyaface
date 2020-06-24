---
id: 05-distance
title: Distance
sidebar_label: Distance
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## List of Supported Sensors

| **Sensor** | **Sensor Id** |
| ------ | ------ | 
| `HCSR04`| 7 |

:::note
Note the Sensor ID's of your chosen sensor, Sensor ID's needs to written into 
`config.yaml` while configuring Shunya Interfaces.
:::


## Simple API
One API for all distance sensors.

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
float distance = getCm();
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


## Advance API
Need more Advance features of the sensor, take a look at our Advance API's for 
sensor.

<details><summary> Advance API </summary>
<p>

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
float distance = getCm7();
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

:::caution Note
Advance API's are sensor specific, they are named: get`<quantity>` `<sensor-id>`.  
For example:
```
getCm7() // get <Distance in Cm> <from sensor 7> (i.e HC-SR07)
```
Using the wrong `sensor id` will cause the library to throw and error saying `No 
sensor found`.
:::

</p>
</details>