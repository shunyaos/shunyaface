---
id: apis
title: APIs Documentation
sidebar_label: APIs Documentation
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import useBaseUrl from '@docusaurus/useBaseUrl';


Understand APIs and their usage to make different face applications.

## ShunyaFace APIs

<img alt="install-shunya-os-gif" src={useBaseUrl('img/shunyaface.jpg')} /> 

## Face Recognition API

### Face Detection API

| **API** | **Description** | 
| ------ | ------ | 
| `detectFace()`| detects faces from given frame.|

### Face Recogntion API
| **API** | **Description** | 
| ------ | ------ |
|`alignFace()` | aligns the face with the FaceInfo given by detectFace API. | 
| `getEmbeddings()` | Returns embeddings for frame which is 128-D vector  | 
| `sameFace()` | returns 1 if two images belong to same person. |

### Database API

| **API** | **Description** | 
| ------ | ------ | 
| `storeFace()`| store face-embeddings to database. |
| `findFace()`| find face from database.| 
| `db_flush()`| flushes the database entries.| 




### Face Detection API

#### `detectFace()` 

**Description** : Detects a face and returns the FaceInfo for each face includes : Confidence score, X,Y Co-ordinates for Face rectangle, area, landmarks etc.

**Return-type** : `vector<FaceInfo>` . FaceInfo is a structure which declaration is given in shunyaface.h.
```cpp
    typedef struct FaceInfo {
        float score;
        int x[2];
        int y[2];
        float area;
        float regreCoord[4];
        int landmark[10];
    } FaceInfo;
```

**Usage** :
```cpp
           Define the structure given above.
            
           #include<ai/shunyaface.h>
       
           cv::Mat frame;

           vector<FaceInfo>faces = detectFace(frame); //call detectFace function
         //the frame above given is raw frame and not MTCNN cropped frame.
```
### Face Recogntion API

#### `alignFace()`

**Description** : aligns the face with the FaceInfo given by detectFace API, face is aligned and cropped.

**Return-type** : cv::Mat

**Usage**: 
```cpp
      FaceInfo faces;
      cv::Mat alignedFrame = alignFace(frame,FaceInfo faces[0]);  //call face_features using facerec instance
         //the frame above given MTCNN cropped frame.

```
---

#### `getEmbeddings()`

**Description** : returns vector of 128-D having unique face information.

**Return-type** : `vector<float>`

**Usage** : 
```cpp
        vector<float> features; 

        embedding = getEmbeddings(alignedFrame);  //call getEmbeddings function
```
---

#### `sameFace()`

**Description** : checks whether two face embeddings belong to same person or not

**Return-type** : int

**Returns** : 

          returns 1 , if two frames belong to same person

          returns 0, if two frames doesn't belong to same person

**Usage** : 
```cpp
          int val;

          val = sameFace(embedding1, embedding2);  //call sameFace() function
```

---

### Database API

#### `storeFace()`

**Description** : stores facial embeddings to database with name tag 


**Return-type** : int - 1 on success 
                  on error code exists by giving an error message.


**Usage** : 
```cpp
         num = storeFace(embeddings,name,"dbfile.txt");  //call storeFace() function

```
---

#### `findFace()`

**Description**: find name of face from the database 

**Return-type**: string 

**Returns** :
   returns name for the person if found in the database or returns "NULL" if no face is found.

**Usage**: 
```cpp
          string name;
          
          name = findFace(frame,"dbfile.txt");   // call findFace function
```
---


#### `dbFlush()`

**Description** : flushes the database entries 

**Return-type**: returns 1 on success

**usage** : 
```cpp
          int val = dbFlush(dbfilename);  //call dbflush() function
```

