**Alert : Usually runs for only 6 seconds because it processes 100 frames with a face in each and it exhausts the trial api**

#### Description : 

This application captures the frame from the webcam and plots a bounding box on the face and also plot the facial landmarks(centre of the eyes and the ends of the lips). 

#### Pre-Requisites : 

**Shunyaface library and cmake** should be installed. You can install it using the following commands:

```
sudo opkg update
sudo opkg install shunyaface cmake
```

#### Steps to Run : 

```shell

./setup.sh
./build/facedetect
```
