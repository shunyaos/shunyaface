/**
****************************************************************************
* @file         facerec-test.cpp
* @author       Shunya Core Team
* @brief        This file provides the source code for a demo showing
*               the ability of face-recognition on Shunya-OS
*         
@verbatim
-----------------------------------------------------------------------------
                        ## Description ## 
-----------------------------------------------------------------------------
## Introduction
This file contains an example code for using face-recognition on 
Shunya-OS. After running the program you will see a pop-up box
which will ask you Detect, Register or Exit. Please choose Register
initially. After you choose Register, you will be prompted to enter
the name of person. After that it will take a frame from the camera
and generate embeddings and store the person's name in the database.
When you press Detect it will try to recognize the person.

## Flow of the program

Register -> Enter name of person on commandline -> Camera Input -> Detect -> Add name in Database
Detect -> Capture Frame Input ->  Find face -> Return Name of person
 
## Compile 
1. Open terminal in src folder
2. Run command `./setup.sh`

## Run 
1. Open terminal 
2. Run command `./build/facetest`
**/

// Header file for Face-Recognition
#include "shunyaface.h"
#include "opencv2/opencv.hpp"
#include <bits/stdc++.h>
#include "fstream"
using namespace std;
using namespace cv;
int main(int argc, char** argv){
	string name,person;
	// Create instance of class FaceRec
	FaceRec facerec;
	// Declare File pointer
	FILE *cmd;
	//result will be used to store the User selection(detection,register,etc.)
	char result[10];
	Mat frame;
	Mat frame2;
	while(1)
	{
		// Display a box so that user can choose whether he wants to register a face, detect a face or exit the program
		cmd = popen("ans=$(zenity --info --title 'Face-Rec' \
      		--text 'Choose Detect or Recognize or Exit' \
      		--ok-label Detect \
      		--extra-button Register --extra-button Exit); rc=$? && echo ${rc}-${ans}","r");
		//storing output in result variable		
		fgets(result,sizeof(result), cmd);
		// Stringcompare to check User's selection. Result will contain 0- if he/she selects Detect
		if(!strncmp(result,"0-",2))
		{	
			cout << "Detect Face"<<endl;
			// Capture a frame			
			VideoCapture cap(0);	
			cap >> frame;
			// Pass the frame to the find_face function which will return the name of the person
			name = facerec.find_face(frame);
			// Check if face is detected 
			if(name.length() > 0)
			{
				// Display the name of the person on the commandline
				cout << "The person found is:" <<name<<endl; 
				// Call the voice_output script which gives gives a speech output with the user's name
				string command = "./voice_output.sh";
				// Append the name of the person to the command variable. Basically for passing an argument to the script
				command = command + " "  + name;
				system(command.c_str());
				// Display the frame to the user
				imshow("User's Face",frame);
				waitKey(0);
				destroyWindow("User's Face");
			}	
			// Display face is not detected
			else
			{
				cout<<"Face not Detected"<<endl;
			}
		}
		// Stringcompare to check if user chose Register a face
		else if(!strncmp(result,"1-R",3))
		{	
			cout << "Enter name of person to register"<<endl;
			// Take person's name as input
			cin >> person;	
			// Capture a frame
			VideoCapture cap(0);	
			cap >> frame;
			// Call add_face function which will register the face and store in the database called database.txt
			facerec.add_face(frame,person);
			cout << "Face is Registered"<<endl;
		}
		// Exit the program
		else 
		{
			cout<< "Exit" << endl;
			return(0);
		}
	}
}
