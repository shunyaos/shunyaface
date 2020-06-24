---
id: face-recognition
title: Face Recognition
sidebar_label: Demo - Face Recognition
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';

The demo can be used to register and recognize a face of a person on edge device with ShunyaFace APIs.

<img alt="face-recog-png" align="center" src={useBaseUrl('img/face-recog.png')} /> 

<a href="https://mobidev.biz/blog/custom-face-detection-recognition-software-development?utm_source=towardsds&utm_medium=bigb&utm_campaign=source"> <h4 align="center"> Source </h4> </a>


## What will you need? 
1. Raspberry Pi 3/4 (or any variant of these)
1. micro-SD card and micro-SD card Reader/Adapter.
1. USB Camera
1. Laptop


## Steps 

Make your own Face-Recognition Application following these steps.

1. Install Shunya OS 
1. Write Code
1. Connect Camera to Hardware 
1. Compile and Run


## Step 1: Install Shunya OS
Shunya Face is built on top of Shunya OS and comes pre-installed with Shunya Face package. 
Shunya OS is an linux-based OS that runs on your hardware, it light-weight and configurable.

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
1. Connect peripherals like Keyboard, Mouse and HDMI monitor. 
1. Connect Power Supply. 

The board should boot up with Shunya OS.

#### Login to Shunya
Login with these credentials:

- Username : shunya
- Password : shunya 


## Step 2: Lets code!

Open up your editor on Shunya OS and lets start coding.

Our application must be able to  

1. Capture a face from camera feed
2. Detect Face from the frame
3. Get Embeddings of a detected Face
4. Store Embeddings in the database
5. Take different frame of same person and recognize the face
6. Display Recognized Person name in the terminal

### Basic structure of Shunya Face

Use the basic structure as a reference and Paste code into the structure as per 
your app logic.

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
/*Include this header file into your program */
#include <ai/shunyaface.h>

using namespace cv;
using namespace std;

/* Main Function */
int main(int argc, char *argv[]) {


/*####################################
 *       PASTE CODE HERE
 *####################################*/


        return 0;
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


### Lets read frame with opencv  

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
/* Add opencv headerfile */
#include <opencv2/opencv.hpp>
/* Add this line to your main function 
 * to read continuos frames from camera */

   Mat frame;
   VideoCapture cap;
   if(!cap.open(0))
        return 0;
   for(;;)
   {
        cap >> frame;
        if( frame.empty() ) break; // end of video stream
        if( waitKey(10) == 27 ) break; // stop capturing by pressing ESC 
   }
```

</TabItem>
<TabItem value="py">

```py
commingsoon = 1
```

</TabItem>
<TabItem value="js">

```js
var commingsoon = 1;
```

</TabItem>
</Tabs>


### API to detect faces from the given frame  

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
/* Add this line to your main function inside for loop
 * to detect a face captured from opencv */
vector<FaceInfo> detFaces;
detFaces = detectFace(frame);
if (detFaces.size() > 0) {
      cout<<"Face Detected!"<<endl;
}
else {
      cout<<"No face detected!"<<endl
}
``` 

</TabItem>
<TabItem value="py">

```py
commingsoon = 1 
```

</TabItem>
<TabItem value="js">

```js
var commingsoon = 1;
```

</TabItem>
</Tabs>

### API to align the detected face  

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
/* Add these line to your main function if the number of detected faces > 1 */
/* We are passing first detected face to alignFace function i.e. detFaces[0] */
face = alignFace(frame, detFaces[0]);

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

### API to get embeddings for aligned face  

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
/* Add these line to your main function which gives 128D array of embeddings for a face */
vector<float> embeddings;
embeddings = getEmbeddings(face);
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

### API to store the face embeddings with the person name in database

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
#define DATABASE "./db.txt" 
/* Add these line to your main function if you want to store a face in database*/
string name;
int a = storeFace(embeddings,name,DATABASE);
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

### API to find the person name from his face embeddings

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
/* Add these line to your main function*/
string name;
name = findFace(embeddings, DATABASE );
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


### Summary
Your Code should look something like this. 

<Tabs
  defaultValue="c++"
  values={[
    { label: 'CPP', value: 'c++', },
  ]
}>

<TabItem value="c++">

```cpp
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
      vector<float> embeddings;
      Mat face;
      string name;
      if(! frame.data )// Check for invalid input
      {
	  cout <<"Could not open or find the image" << std::endl ;
	  return -1;
      }
      cout<<"img read!"<<endl;  
      /**
       * Detect the face 
       */
      detFaces = detectFace(frame);
      /* Check if faces are detected or not */
      if (detFaces.size() > 0) {
         cout<<"Face Detected!"<<endl;
	 /**
          * Align Face
          */
	 face = alignFace(frame, detFaces[0]);

         /*Get embeddings from face*/
	 embeddings = getEmbeddings(face);
                    
         /* Store face in database */
         /* IMP NOTE : You can either store a face in database of recognize it i.e.
          * at the time, run either storeFace() or findFace() function */
         /* User enters his name from command line while running program */
         /*if(argc > 1){
                name = argv[1];
	        int a = storeFace(embeddings,name,DATABASE);
                if(a==1){
                    cout<<"Face is stored successfully";
                    break;
                }
                else{
                    cout<<"There is some problem with storing face";
                    break;
                }   
           }*/
           else {
                cout<<"\nPlease enter your name as first argument.";
                break;
           }
           /**
            * Find face from the database. If you don't have embeddings in 
            * database, please store your face first with storeFace() by uncommenting it.
            */
           name = findFace(embeddings, DATABASE );
           if (name.compare("NULL") != 0) {      
		cout<<"Face Recognized: "<<name<<endl;
           } 
           else {
                cout<<"No Face Recognized!"<<endl;
           }
       }
       else {
           cout<<"No Face Detected!!\n";       
       }
            }
    return 0;
}
```

</TabItem>
<TabItem value="py">

```py
commingsoon = 1
```

</TabItem>
<TabItem value="js">

```js
var commingsoon = 1;
```

</TabItem>
</Tabs>


## Step 3: Connect USB camera to RPI

<img alt="Oops!, No Image to display." src={useBaseUrl('img/cam.png')} />


## Step 4: Compile and Run

### Compile and Run

Compiling code is same as compiling C program with CMake file. CMake file is provided by us. 
You just need to make small changes in it to make it run. Lets look at current demo. 

We just need to specify the cpp file path in CMake (5th line) and done.
```sh
cmake_minimum_required(VERSION 3.8)
add_definitions(-DCPU_ONLY)
SET(SRC
	# Give path of the cpp file here 
         Recognize-Face/recognizeface.cpp
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
# To recognize a face
./shunyafaceex
# To store a face
# ./shunyafaceex "Sneha"
```

You will see "Face Recognized: YourName" if your face embeddings are in database, 
else it will say "No face recognized".

# Want to Build your own Application?

Click on the Next button, below.
