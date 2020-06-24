---
id: first-app
title: Build your first AI Face Application
sidebar_label: First App
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


Whether you are a Startup, Maker or a hobbyist 
you can use our API's to build AI Face products on Embedded Devices.

## So Lets start to build an AI application which counts number if faces in image.

## Step 1: Install Shunya OS

Shunya Face is built on top of Shunya OS and comes pre-installed with Shunya Face. 
Shunya OS is an linux-based OS that runs on your hardware, it light-weight and configurable.

### What will you need. 
1. Chosen board and its peripherals
2. microSD card Reader/Adapter and microSD card  
3. Laptop/PC 
4. A USB Camera

### Install Etcher 

Etcher allows you to Flash Shunya OS on the micro-SD card.

<Tabs
  defaultValue="nix"
  values={[
    { label: 'Windows', value: 'win', },
    { label: 'Ubuntu', value: 'nix', },
  ]
}>


<TabItem value="nix">

#### For Ubuntu 16.04 

Installing Etcher is Simple, just run few commands in the terminal

```bash
$ sudo apt update
$ sudo apt install balena-etcher-electron
```

</TabItem>
<TabItem value="win">

#### For Windows 10

Installing Etcher is Simple, download the executable file and Run.

1. Download [balenaEtcher](https://www.balena.io/etcher/) for Windows. 
2. Run balenaEtcherSetup-xxx.exe

</TabItem>
</Tabs>

### Flash Shunya OS  

1. Download [Shunya OS](http://releases.shunyaos.org/interfaces-images/)
1. Right click on the downloaded zip file.
1. Click Extract here.
1. Open Etcher.
1. Click Select Image.
1. You will find the Shunya OS `.img` file in the folder that we had extracted earlier. 
1. Select `shunya-aaaa-image-xxxx.img` file.
1. Insert SD card.
1. Click on Flash. 

<img alt="install-shunya-os-gif" src={useBaseUrl('img/install.gif')} />

This will load the micro-SD card with Shunya OS.

### Booting Up with Shunya OS 
1. Insert the micro-SD card into the board. 
1. Connect peripherals like Keyboard, Mouse, HDMI monitor and USB Camera. 
1. Connect Power Supply. 

The board should boot up with Shunya OS.

#### Login to Shunya
Login with these credentials:

- Username : shunya
- Password : shunya 

## Step 2: Write a program

Lets go through these APIs to understand which APIs are needed to make this
application.


Refer following code to understand it better.

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
/* Include header files */
#include <iostream>
#include <vector>
#include <opencv2/opencv.hpp>
#include <fstream>
#include <cstring>

#include <ai/shunyaface.h>
#define DATABASE "./db.txt" 

using namespace cv;
using namespace std;

int main(int argc, char *argv[])
{

        /* Variable to Store frame */
        Mat frame;
        VideoCapture cap;
        if(!cap.open(0))
            return 0;
        for(;;)
        {
            cap >> frame;
            if( frame.empty() ) break; // end of video stream
            if( waitKey(10) == 27 ) break; // stop capturing by pressing ESC 
            /* Initialize the variables */
            vector<FaceInfo> detFaces;

	    if(! frame.data )// Check for invalid input
	    {
		 cout <<  "Could not open or find the image" << std::endl ;
		 return -1;
	    }
            cout<<"img read!"<<endl;  
            /**
             * Detect the face 
             */

	     detFaces = detectFace(frame);

	     if (detFaces.size() > 0) {
		  cout<<"\nFace Detected!"<<endl;
                  cout<<"\nNumber of faces detected:"<<detFaces.size();
	      }
              else {
                cout<<"No Face Detected!!\n";       
	      }
            }
	return 0;
}
}
```

</TabItem>
<TabItem value="py">

```py
comingsoon = 1
```

</TabItem>
<TabItem value="js">

```js
var commingsoon = 1;
```

</TabItem>
</Tabs>

## Step 3: Run your program 

### Compile and Run

Compiling code is same as compiling C++ program with CMake file. CMake file is provided by us. 
You just need to make small changes in it to make it run. Lets look at current demo. 

We just need to specify the cpp file path in CMake (5th line) and done.
```sh
cmake_minimum_required(VERSION 3.8)
add_definitions(-DCPU_ONLY)
SET(SRC
	# Give path of the cpp file here 
         src/nooffaces.cpp
)

SET(INC_DIR /usr)
SET(Caffe_DIR /home/sneha/Desktop/caffe/distribute)
find_package(OpenMP)
if(OPENMP_FOUND)
	set(CMAKE_C_FLAGS "${CMAKE_C_FLAGS} ${OpenMP_C_FLAGS}")
	set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} ${OpenMP_CXX_FLAGS}")
endif()
find_package( OpenCV REQUIRED)

set(CMAKE_BUILD_TYPE release)
set(CMAKE_CXX_STANDARD 11)
add_definitions(-fPIC)
add_definitions(-Ofast)
add_definitions(-ffast-math)

include_directories(${OpenCV_DIR}/include)
include_directories(/usr/include/ai/)
include_directories(/usr/include/ai/models/)
include_directories(${Caffe_DIR}/include)
include_directories(${INC_DIR}/include)
add_executable(shunyafaceex ${SRC})
TARGET_LINK_LIBRARIES(shunyafaceex ${OpenCV_LIBS} -lboost_system -lshunyaface)
```

Compile the program. Run following commands where CMakeLists.txt file is
```bash
$ mkdir build
$ cd build && cmake ..
$ make -j4  
```
This will build the program and make it into a binary executable.

Now Lets run it.
```sh
# To get number of faces in frame
./shunyafaceex
```

Yaayy !! You have successfully build your first AI application. Lets see what more we can
do with these ShunyaFace APIs :)

Build such more application with ShunyaFace APIs. Check below.
