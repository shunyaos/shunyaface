
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  
{
  path: '/shunyaface/',
  component: ComponentCreator('/shunyaface/'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/:route',
  component: ComponentCreator('/shunyaface/docs/:route'),
  
  routes: [
{
  path: '/shunyaface/docs/apis/apis',
  component: ComponentCreator('/shunyaface/docs/apis/apis'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/01-intro',
  component: ComponentCreator('/shunyaface/docs/build-solutions/01-intro'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/04-define',
  component: ComponentCreator('/shunyaface/docs/build-solutions/04-define'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/05-design',
  component: ComponentCreator('/shunyaface/docs/build-solutions/05-design'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/01-temp',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/01-temp'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/02-pressure',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/02-pressure'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/03-humidity',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/03-humidity'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/04-altitude',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/04-altitude'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/05-distance',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/05-distance'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/06-light',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/06-light'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/07-liquid_flow',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/07-liquid_flow'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/08-analog_voltage',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/08-analog_voltage'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/09-current',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/09-current'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/501-led',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/501-led'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/build-solutions/categories/502-relay',
  component: ComponentCreator('/shunyaface/docs/build-solutions/categories/502-relay'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/demos/face-recognition',
  component: ComponentCreator('/shunyaface/docs/demos/face-recognition'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/get-started/first-app',
  component: ComponentCreator('/shunyaface/docs/get-started/first-app'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/actuators',
  component: ComponentCreator('/shunyaface/docs/overview/actuators'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/alerts',
  component: ComponentCreator('/shunyaface/docs/overview/alerts'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/boards',
  component: ComponentCreator('/shunyaface/docs/overview/boards'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/cloud',
  component: ComponentCreator('/shunyaface/docs/overview/cloud'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/connectivity',
  component: ComponentCreator('/shunyaface/docs/overview/connectivity'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/dashboards',
  component: ComponentCreator('/shunyaface/docs/overview/dashboards'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/introduction',
  component: ComponentCreator('/shunyaface/docs/overview/introduction'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/plc',
  component: ComponentCreator('/shunyaface/docs/overview/plc'),
  exact: true,
  
},
{
  path: '/shunyaface/docs/overview/sensors',
  component: ComponentCreator('/shunyaface/docs/overview/sensors'),
  exact: true,
  
}],
},
  
  {
    path: '*',
    component: ComponentCreator('*')
  }
];
