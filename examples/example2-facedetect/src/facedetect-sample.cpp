/**
****************************************************************************
* @file         facedetect-sample.cpp
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
Shunya-OS. This code reads the images from the images folder and
plots a bounding box on the face in the images given and also plots
points on the end-points of your lips and centre of the eyes.

## Compile 
1. Open terminal in src folder
2. Run command `./setup.sh`

## Run 
1. Open terminal 
2. Run command `./build/facedetect`
**/

// Header file for Shunyaface(Face-Detection/Recognition)
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
	std::string fileName;
	char str[255];
	system("ls images > index.txt");
    	std::ifstream index("index.txt");
	while (std::getline(index, fileName)) {
   		snprintf(str, 255, "images/%s", fileName.c_str());
    		// Read the image using OpenCV
    		frame = cv::imread(str);
	// Pass the frame to the detect function which will return the frame with a bounding-box on the face and points on the lips and eyes
		frame2 = facerec.detect(frame); 
		// Display the frame to the user
		imshow("face-detect", frame2);
		waitKey(0);
	}
	return(0);
}
