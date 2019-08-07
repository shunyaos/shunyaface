/**
****************************************************************************
* @file         facedetect-test.cpp
* @author       Shunya Core Team
* @brief        This file provides the source code for a demo showing
*               the ability of face-detection on Shunya-OS
*         
@verbatim
-----------------------------------------------------------------------------
                        ## Description ## 
-----------------------------------------------------------------------------
## Introduction
This file contains an example code for using face-detection on 
Shunya-OS. This code plots a bounding box on your face and also
plots points on the end-points of your lips and centre of the 
eyes.

## Compile 
1. Open terminal in src folder
2. Run command `./setup.sh`

## Run 
1. Open terminal 
2. Run command `./build/facedetect`
**/

// Header file for Face-Recognition/Detection
#include "shunyaface.h"
#include "opencv2/opencv.hpp"
#include <bits/stdc++.h>
#include "fstream"
using namespace std;
using namespace cv;
int main(int argc, char** argv){
	// Create instance of class FaceRec
	FaceRec facerec;
	Mat frame;
	Mat frame2;
	clock_t start, end; //This will hold the start and end-time
	int count = 0; //Variable which hold the number of frames elapsed
	VideoCapture cap(0);
	time(&start);
	while(1)
	{
		// Capture a frame			
		cap >> frame;
// Pass the frame to the detect function which will return the frame with a bounding-box on the face and points on the lips and eyes
		frame2 = facerec.detect(frame); 
		count++; //Increment count
		// Display the frame to the user
		imshow("face-detect", frame2);
		if(waitKey(1) == 'q')
			break;
	}
	time(&end); // Stop the time
	cout<< "Output FPS is:"<<count/(end-start)<<endl; //Display Output-FPS
	return 0;
}
