---
id: 502-relay
title: Relay
sidebar_label: Relay
---


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
 * to turn on the LED*/
setLed(pin, ON);

/* Add this line to your main function 
 * to turn on the LED*/
setLed(pin, OFF);
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
 * to turn on the LED*/
setRelay(pin, ON);

/* Add this line to your main function 
 * to turn on the LED*/
setRelay(pin, OFF);
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

:::tip Note:
`pin` - Represents the physical GPIO pin number where the Relay is connected.
:::

For Example:
To set Relay at **pin 40** on, use API,
```c
setRelay(40, ON);
```