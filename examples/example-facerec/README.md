#### Description : 

This application is used to register and detect the person in the frame captured from the camera and gives a voice output saying **Welcome Person_name**. After running the program you will see a pop-up box which will ask you Detect, Register or Exit. Please choose Register
initially. After you choose Register, you will be prompted to enter the name of person on the commandline. After that it will take a frame from the camera and detect the face and store the person's name in the database. When you press Detect it will try to recognize the person and give a speech output saying '**Welcome Person_name**

#### Pre-Requisites : 

Face Recognition/Detection library, espeak and cmake should be installed. You can install it using the following commands:

```
sudo opkg update
sudo opkg install shunyaface cmake espeak
```

#### Steps to Run : 

```shell
./setup.sh
./build/facetest
```
