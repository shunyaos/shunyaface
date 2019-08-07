#### Description : 

This application captures the frame from the webcam and plots a bounding box on the face and also plot the facial landmarks(centre of the eyes and the ends of the lips). As the API limits the current usage to 100 faces the demo will quickly finish if the video remains on for more than 5-7 secs so be careful.

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
