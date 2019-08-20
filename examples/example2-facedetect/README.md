**Title : Detects faces via a folder of images and shows a bounding box on imshow whenever face is detected**

**Alert : Currently configured to detect minimum face size of 80 pixels**

### Description:

This code reads pictures from a folder named as images and plots a bounding box on the face in the images given and also plots points on the end-points of your lips and centre of the eyes. Currently it returns a bounding box on the 1st face detected but this can be customized too. 

**Note: Press any key to show the next image**

### Steps to test more pictures:

**If you want to add more images to test, you can add them to the images folder. The code will read all the images from that folder automatically when you run the code**

#### Pre-Requisites : 

cmake
face-rec

To install it use the following command

```
sudo opkg update
sudo opkg install cmake shunyaface
```

#### Steps to Run : 

```shell

./setup.sh
./build/facetest
```
