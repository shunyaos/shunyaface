---
id: 07-liquid_flow
title: Liquid Flow
sidebar_label: Liquid Flow
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## List of Supported Sensors

| **Sensor** | **Sensor Id** |
| ------ | ------ | 
| `YFS201`|   9 |

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
int liquidFlow = getLph();
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
/* Add this line to your main function 
 * to read data from the sensor */
int liquidFlow = getLph9();
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

