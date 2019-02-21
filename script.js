TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "video": [
   {
    "posterURL": "media/media_9105D05F_1620_77B0_41B3_96D96273EA63_poster.jpg",
    "height": 1920,
    "framerate": 29.97,
    "bitrate": 15958,
    "type": "video/mp4",
    "width": 3840,
    "url": "media/media_9105D05F_1620_77B0_41B3_96D96273EA63.mp4",
    "class": "Video360Resource"
   },
   {
    "posterURL": "media/media_9105D05F_1620_77B0_41B3_96D96273EA63_poster.jpg",
    "height": 1584,
    "framerate": 29.97,
    "bitrate": 10914,
    "type": "video/mp4",
    "width": 3168,
    "url": "media/media_9105D05F_1620_77B0_41B3_96D96273EA63_ios.mp4",
    "class": "Video360Resource"
   }
  ],
  "hfov": 360,
  "loop": false,
  "id": "media_9105D05F_1620_77B0_41B3_96D96273EA63",
  "hfovMin": 60,
  "class": "Video360",
  "overlays": [
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "enabledInCardboard": true,
    "class": "HotspotPanoramaOverlay",
    "data": {
     "label": "Image"
    },
    "id": "overlay_681FF4F3_1621_9870_4149_C9968C0CB802",
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "playbackPositions": [
       {
        "yaw": -0.71,
        "pitch": -31.96,
        "opacity": 1,
        "roll": 0,
        "hfov": 20.55,
        "timestamp": 0,
        "class": "PanoramaOverlayPlaybackPosition"
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 77,
         "width": 200,
         "url": "media/media_9105D05F_1620_77B0_41B3_96D96273EA63_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ],
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": -0.71,
        "pitch": -31.96,
        "opacity": 1,
        "roll": 0,
        "hfov": 20.55,
        "timestamp": 0,
        "class": "PanoramaOverlayPlaybackPosition"
       }
      ],
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 512,
         "width": 1325,
         "url": "media/media_9105D05F_1620_77B0_41B3_96D96273EA63_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ]
   }
  ],
  "label": "Hallway",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "thumbnailUrl": "media/media_9105D05F_1620_77B0_41B3_96D96273EA63_t.jpg",
  "hfovMax": 120
 },
 {
  "preloadEnabled": false,
  "touchControlMode": "drag_rotation",
  "displayPlaybackBar": true,
  "buttonZoomOut": {
   "paddingBottom": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_0605F8DE_1BBD_FFA5_419C_F1F60A72C3EB",
   "borderSize": 0,
   "iconURL": "skin/IconButton_0605F8DE_1BBD_FFA5_419C_F1F60A72C3EB.png",
   "rollOverIconURL": "skin/IconButton_0605F8DE_1BBD_FFA5_419C_F1F60A72C3EB_rollover.png",
   "mode": "push",
   "paddingRight": 0,
   "minHeight": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0605F8DE_1BBD_FFA5_419C_F1F60A72C3EB_pressed.png",
   "minWidth": 0,
   "width": 40,
   "cursor": "hand",
   "height": 40,
   "data": {
    "name": "Button31984"
   },
   "transparencyActive": true,
   "borderRadius": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle"
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonPause": {
   "paddingBottom": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_060548E0_1BBD_FF9C_418B_B7F74909DDD4",
   "borderSize": 0,
   "iconURL": "skin/IconButton_060548E0_1BBD_FF9C_418B_B7F74909DDD4.png",
   "mode": "toggle",
   "paddingRight": 0,
   "minHeight": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_060548E0_1BBD_FF9C_418B_B7F74909DDD4_pressed.png",
   "minWidth": 0,
   "width": 40,
   "cursor": "hand",
   "height": 40,
   "data": {
    "name": "Button31990"
   },
   "transparencyActive": true,
   "borderRadius": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle"
  },
  "buttonRestart": {
   "paddingBottom": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_060598DF_1BBD_FFA4_41AE_0B8984741C06",
   "borderSize": 0,
   "iconURL": "skin/IconButton_060598DF_1BBD_FFA4_41AE_0B8984741C06.png",
   "rollOverIconURL": "skin/IconButton_060598DF_1BBD_FFA4_41AE_0B8984741C06_rollover.png",
   "mode": "push",
   "paddingRight": 0,
   "minHeight": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_060598DF_1BBD_FFA4_41AE_0B8984741C06_pressed.png",
   "minWidth": 0,
   "width": 40,
   "cursor": "hand",
   "height": 40,
   "data": {
    "name": "Button31985"
   },
   "transparencyActive": true,
   "borderRadius": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle"
  },
  "viewerArea": "this.MainViewer",
  "buttonZoomIn": {
   "paddingBottom": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "id": "IconButton_0602C8E1_1BBD_FF9C_41AF_1AA8702E2257",
   "borderSize": 0,
   "iconURL": "skin/IconButton_0602C8E1_1BBD_FF9C_41AF_1AA8702E2257.png",
   "rollOverIconURL": "skin/IconButton_0602C8E1_1BBD_FF9C_41AF_1AA8702E2257_rollover.png",
   "mode": "push",
   "paddingRight": 0,
   "minHeight": 0,
   "class": "IconButton",
   "shadow": false,
   "horizontalAlign": "center",
   "pressedIconURL": "skin/IconButton_0602C8E1_1BBD_FF9C_41AF_1AA8702E2257_pressed.png",
   "minWidth": 0,
   "width": 40,
   "cursor": "hand",
   "height": 40,
   "data": {
    "name": "Button31995"
   },
   "transparencyActive": true,
   "borderRadius": 0,
   "paddingLeft": 0,
   "verticalAlign": "middle"
  },
  "mouseControlMode": "drag_acceleration",
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer"
 },
 {
  "manualZoomSpeed": 1,
  "manualRotationSpeed": 400,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "hfov": 100,
   "yaw": 1.9,
   "pitch": -14.89
  },
  "id": "media_9105D05F_1620_77B0_41B3_96D96273EA63_camera",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "video": [
   {
    "posterURL": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6_poster.jpg",
    "height": 1920,
    "framerate": 29.97,
    "bitrate": 15064,
    "type": "video/mp4",
    "width": 3840,
    "url": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6.mp4",
    "class": "Video360Resource"
   },
   {
    "posterURL": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6_poster.jpg",
    "height": 1584,
    "framerate": 29.97,
    "bitrate": 10914,
    "type": "video/mp4",
    "width": 3168,
    "url": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6_ios.mp4",
    "class": "Video360Resource"
   }
  ],
  "hfov": 360,
  "loop": true,
  "id": "media_97D13150_1621_99B0_41B0_24781B3E27E6",
  "hfovMin": 60,
  "class": "Video360",
  "adjacentPanoramas": [
   {
    "panorama": {
     "video": [
      {
       "posterURL": "media/media_9FB3C396_1623_98B0_4195_A31D44A25526_poster.jpg",
       "height": 1920,
       "framerate": 29.97,
       "bitrate": 15155,
       "type": "video/mp4",
       "width": 3840,
       "url": "media/media_9FB3C396_1623_98B0_4195_A31D44A25526.mp4",
       "class": "Video360Resource"
      },
      {
       "posterURL": "media/media_9FB3C396_1623_98B0_4195_A31D44A25526_poster.jpg",
       "height": 1584,
       "framerate": 29.97,
       "bitrate": 10914,
       "type": "video/mp4",
       "width": 3168,
       "url": "media/media_9FB3C396_1623_98B0_4195_A31D44A25526_ios.mp4",
       "class": "Video360Resource"
      }
     ],
     "hfov": 360,
     "loop": true,
     "id": "media_9FB3C396_1623_98B0_4195_A31D44A25526",
     "hfovMin": 60,
     "class": "Video360",
     "adjacentPanoramas": [
      {
       "panorama": "this.media_97D13150_1621_99B0_41B0_24781B3E27E6",
       "backwardYaw": 72.03,
       "yaw": -10.59,
       "distance": 1,
       "class": "AdjacentPanorama"
      }
     ],
     "overlays": [
      {
       "useHandCursor": true,
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.startPanoramaWithCamera(this.media_97D13150_1621_99B0_41B0_24781B3E27E6, this.camera_0A02C373_1CBE_A36F_41BC_42BC5DA6B2B1); this.mainPlayList.set('selectedIndex', 1); this.MainViewerPanoramaPlayer.play()",
         "class": "HotspotPanoramaOverlayArea"
        }
       ],
       "rollOverDisplay": false,
       "enabledInCardboard": true,
       "items": [
        {
         "yaw": 0,
         "playbackPositions": [
          {
           "yaw": -10.59,
           "pitch": -32.26,
           "opacity": 1,
           "roll": 0,
           "hfov": 4.36,
           "timestamp": 0,
           "class": "PanoramaOverlayPlaybackPosition"
          }
         ],
         "class": "HotspotPanoramaOverlayImage",
         "image": {
          "levels": [
           {
            "height": 119,
            "width": 118,
            "url": "media/media_9FB3C396_1623_98B0_4195_A31D44A25526_HS_1_0.png",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "pitch": 0
        }
       ],
       "data": {
        "label": "Image"
       },
       "id": "overlay_365B9F62_1B67_7397_41A7_CA0CD31571F4",
       "maps": [
        {
         "class": "HotspotPanoramaOverlayMap",
         "playbackPositions": [
          {
           "yaw": -10.59,
           "pitch": -32.26,
           "opacity": 1,
           "roll": 0,
           "hfov": 4.36,
           "timestamp": 0,
           "class": "PanoramaOverlayPlaybackPosition"
          }
         ],
         "yaw": 0,
         "image": {
          "levels": [
           {
            "height": 59,
            "width": 59,
            "url": "media/media_9FB3C396_1623_98B0_4195_A31D44A25526_HS_1_0_0_map.gif",
            "class": "ImageResourceLevel"
           }
          ],
          "class": "ImageResource"
         },
         "pitch": 0
        }
       ],
       "class": "HotspotPanoramaOverlay"
      }
     ],
     "label": "Mentice Table",
     "partial": false,
     "vfov": 180,
     "pitch": 0,
     "thumbnailUrl": "media/media_9FB3C396_1623_98B0_4195_A31D44A25526_t.jpg",
     "hfovMax": 140
    },
    "backwardYaw": -10.59,
    "yaw": 72.03,
    "distance": 1,
    "class": "AdjacentPanorama"
   }
  ],
  "overlays": [
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "click": "this.showWindow(this.window_941F44B4_1620_B8F0_41AA_100EBFF46290, null, true); this.playList_0A3B8323_1CBE_BCEF_4177_ED8A793C4768.set('selectedIndex', 0); ; this.viewer_uid0A354324_1CBE_BCE9_41A0_9E84443ED3A1VideoPlayer.play(); ",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": -45.9,
        "pitch": 1.85,
        "opacity": 1,
        "roll": 0,
        "hfov": 4.69,
        "timestamp": 0,
        "class": "PanoramaOverlayPlaybackPosition"
       }
      ],
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 512,
         "width": 512,
         "url": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6_HS_0_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ],
    "data": {
     "label": "Image"
    },
    "id": "overlay_9E1E60D5_1620_98B0_419A_C43351BA7918",
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "playbackPositions": [
       {
        "yaw": -45.9,
        "pitch": 1.85,
        "opacity": 1,
        "roll": 0,
        "hfov": 4.69,
        "timestamp": 0,
        "class": "PanoramaOverlayPlaybackPosition"
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 200,
         "width": 200,
         "url": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6_HS_0_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay"
   },
   {
    "useHandCursor": true,
    "areas": [
     {
      "mapColor": "#FF0000",
      "click": "this.startPanoramaWithCamera(this.media_9FB3C396_1623_98B0_4195_A31D44A25526, this.camera_0A0CD361_1CBE_A36B_41A3_D443654C04FB); this.mainPlayList.set('selectedIndex', 2); this.MainViewerPanoramaPlayer.play()",
      "class": "HotspotPanoramaOverlayArea"
     }
    ],
    "rollOverDisplay": false,
    "enabledInCardboard": true,
    "items": [
     {
      "yaw": 0,
      "playbackPositions": [
       {
        "yaw": 72.03,
        "pitch": -22.44,
        "opacity": 1,
        "roll": 0,
        "hfov": 4.33,
        "timestamp": 0,
        "class": "PanoramaOverlayPlaybackPosition"
       }
      ],
      "class": "HotspotPanoramaOverlayImage",
      "image": {
       "levels": [
        {
         "height": 119,
         "width": 118,
         "url": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6_HS_2_0.png",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ],
    "data": {
     "label": "Image"
    },
    "id": "overlay_32817FAA_1B63_1296_41A8_F25BFC9F2A41",
    "maps": [
     {
      "class": "HotspotPanoramaOverlayMap",
      "playbackPositions": [
       {
        "yaw": 72.03,
        "pitch": -22.44,
        "opacity": 1,
        "roll": 0,
        "hfov": 4.33,
        "timestamp": 0,
        "class": "PanoramaOverlayPlaybackPosition"
       }
      ],
      "yaw": 0,
      "image": {
       "levels": [
        {
         "height": 59,
         "width": 59,
         "url": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6_HS_2_0_0_map.gif",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "pitch": 0
     }
    ],
    "class": "HotspotPanoramaOverlay"
   }
  ],
  "label": "Robotics Lab",
  "partial": false,
  "vfov": 180,
  "pitch": 0,
  "thumbnailUrl": "media/media_97D13150_1621_99B0_41B0_24781B3E27E6_t.jpg",
  "hfovMax": 140
 },
 {
  "manualZoomSpeed": 1,
  "manualRotationSpeed": 400,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "hfov": 93,
   "yaw": -39.15,
   "pitch": -10.18
  },
  "id": "media_97D13150_1621_99B0_41B0_24781B3E27E6_camera",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 "this.media_9FB3C396_1623_98B0_4195_A31D44A25526",
 {
  "manualZoomSpeed": 1,
  "manualRotationSpeed": 400,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "hfov": 110,
   "yaw": 171.92,
   "pitch": -14.69
  },
  "id": "media_9FB3C396_1623_98B0_4195_A31D44A25526_camera",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "playList": {
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "PhotoCamera"
     },
     "media": {
      "duration": 0,
      "id": "album_8A5BF923_1620_E997_4181_6724131EC896_0",
      "label": "Skills Training Lab",
      "width": 1785,
      "thumbnailUrl": "media/album_8A5BF923_1620_E997_4181_6724131EC896_0_t.jpg",
      "height": 1015,
      "image": {
       "levels": [
        {
         "url": "media/album_8A5BF923_1620_E997_4181_6724131EC896_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     }
    }
   ],
   "id": "album_8A5BF923_1620_E997_4181_6724131EC896_AlbumPlayList",
   "class": "PhotoPlayList"
  },
  "id": "album_8A5BF923_1620_E997_4181_6724131EC896",
  "thumbnailUrl": "media/album_8A5BF923_1620_E997_4181_6724131EC896_t.png",
  "label": "Skills Training Lab",
  "class": "PhotoAlbum"
 },
 {
  "buttonPause": "this.IconButton_060548E0_1BBD_FF9C_418B_B7F74909DDD4",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer",
  "buttonRestart": "this.IconButton_060598DF_1BBD_FFA4_41AE_0B8984741C06",
  "class": "PhotoAlbumPlayer"
 },
 "this.album_8A5BF923_1620_E997_4181_6724131EC896_0",
 {
  "playList": {
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "PhotoCamera"
     },
     "media": {
      "duration": 0,
      "id": "album_B2AE3742_1620_9990_41A0_9A8F3CAF536C_0",
      "label": "Resuscitation Room",
      "width": 1785,
      "thumbnailUrl": "media/album_B2AE3742_1620_9990_41A0_9A8F3CAF536C_0_t.jpg",
      "height": 1015,
      "image": {
       "levels": [
        {
         "url": "media/album_B2AE3742_1620_9990_41A0_9A8F3CAF536C_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     }
    }
   ],
   "id": "album_B2AE3742_1620_9990_41A0_9A8F3CAF536C_AlbumPlayList",
   "class": "PhotoPlayList"
  },
  "id": "album_B2AE3742_1620_9990_41A0_9A8F3CAF536C",
  "thumbnailUrl": "media/album_B2AE3742_1620_9990_41A0_9A8F3CAF536C_t.png",
  "label": "Resuscitation Room",
  "class": "PhotoAlbum"
 },
 "this.album_B2AE3742_1620_9990_41A0_9A8F3CAF536C_0",
 {
  "playList": {
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "PhotoCamera"
     },
     "media": {
      "duration": 0,
      "id": "album_B143D269_1623_9B90_41A8_79A351E5521F_0",
      "label": "Minimally Invasive Surgery Lab",
      "width": 1785,
      "thumbnailUrl": "media/album_B143D269_1623_9B90_41A8_79A351E5521F_0_t.jpg",
      "height": 1015,
      "image": {
       "levels": [
        {
         "url": "media/album_B143D269_1623_9B90_41A8_79A351E5521F_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     }
    }
   ],
   "id": "album_B143D269_1623_9B90_41A8_79A351E5521F_AlbumPlayList",
   "class": "PhotoPlayList"
  },
  "id": "album_B143D269_1623_9B90_41A8_79A351E5521F",
  "thumbnailUrl": "media/album_B143D269_1623_9B90_41A8_79A351E5521F_t.png",
  "label": "Minimally Invasive Surgery Lab",
  "class": "PhotoAlbum"
 },
 "this.album_B143D269_1623_9B90_41A8_79A351E5521F_0",
 {
  "playList": {
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_outside",
      "class": "PhotoCamera"
     },
     "media": {
      "duration": 0,
      "id": "album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B_0",
      "label": "Labor and Delivery Room",
      "width": 1785,
      "thumbnailUrl": "media/album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B_0_t.jpg",
      "height": 1015,
      "image": {
       "levels": [
        {
         "url": "media/album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B_0.jpg",
         "class": "ImageResourceLevel"
        }
       ],
       "class": "ImageResource"
      },
      "class": "Photo"
     }
    }
   ],
   "id": "album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B_AlbumPlayList",
   "class": "PhotoPlayList"
  },
  "id": "album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B",
  "thumbnailUrl": "media/album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B_t.png",
  "label": "Labor and Delivery Room",
  "class": "PhotoAlbum"
 },
 "this.album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B_0",
 {
  "items": [
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 0, this.media_9105D05F_1620_77B0_41B3_96D96273EA63)",
    "camera": "this.media_9105D05F_1620_77B0_41B3_96D96273EA63_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_9105D05F_1620_77B0_41B3_96D96273EA63",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_97D13150_1621_99B0_41B0_24781B3E27E6",
    "camera": "this.media_97D13150_1621_99B0_41B0_24781B3E27E6_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 1, this.media_97D13150_1621_99B0_41B0_24781B3E27E6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_9FB3C396_1623_98B0_4195_A31D44A25526",
    "camera": "this.media_9FB3C396_1623_98B0_4195_A31D44A25526_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 2, this.media_9FB3C396_1623_98B0_4195_A31D44A25526)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "Video360PlayListItem"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_8A5BF923_1620_E997_4181_6724131EC896"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_B2AE3742_1620_9990_41A0_9A8F3CAF536C"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_B143D269_1623_9B90_41A8_79A351E5521F"
   },
   {
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 0)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B",
    "end": "this.trigger('tourEnded')",
    "class": "PhotoAlbumPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 0, this.media_9105D05F_1620_77B0_41B3_96D96273EA63)",
    "camera": "this.media_9105D05F_1620_77B0_41B3_96D96273EA63_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer); this.setEndToItemIndex(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 0, 1)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.media_9105D05F_1620_77B0_41B3_96D96273EA63",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_97D13150_1621_99B0_41B0_24781B3E27E6",
    "camera": "this.media_97D13150_1621_99B0_41B0_24781B3E27E6_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 1, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 1, this.media_97D13150_1621_99B0_41B0_24781B3E27E6)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "Video360PlayListItem"
   },
   {
    "media": "this.media_9FB3C396_1623_98B0_4195_A31D44A25526",
    "camera": "this.media_9FB3C396_1623_98B0_4195_A31D44A25526_camera",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerPanoramaPlayer)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 2, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 2, this.media_9FB3C396_1623_98B0_4195_A31D44A25526)",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "Video360PlayListItem"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 3, 4)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_8A5BF923_1620_E997_4181_6724131EC896"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 4, 5)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_B2AE3742_1620_9990_41A0_9A8F3CAF536C"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 5, 6)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_B143D269_1623_9B90_41A8_79A351E5521F"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist, 6, 0)",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "media": "this.album_B0DBC2D7_1620_98B0_41B6_DD4AEFC29B4B"
   }
  ],
  "id": "DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist",
  "class": "PlayList"
 },
 {
  "video": {
   "mp4Url": "media/video_90DDE69E_1660_78B0_4184_5D3D9A44CD22.mp4",
   "height": 720,
   "width": 1280,
   "class": "VideoResource"
  },
  "label": "The da Vinci",
  "width": 1280,
  "loop": false,
  "id": "video_90DDE69E_1660_78B0_4184_5D3D9A44CD22",
  "height": 720,
  "thumbnailUrl": "media/video_90DDE69E_1660_78B0_4184_5D3D9A44CD22_t.jpg",
  "scaleMode": "fit_inside",
  "class": "Video"
 },
 {
  "items": [
   {
    "media": "this.video_90DDE69E_1660_78B0_4184_5D3D9A44CD22",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uid0A354324_1CBE_BCE9_41A0_9E84443ED3A1VideoPlayer)",
    "start": "this.viewer_uid0A354324_1CBE_BCE9_41A0_9E84443ED3A1VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.playList_0A3B8323_1CBE_BCEF_4177_ED8A793C4768, 0, '#000000')",
    "player": {
     "buttonRestart": "this.IconButton_060598DF_1BBD_FFA4_41AE_0B8984741C06",
     "viewerArea": {
      "paddingBottom": 0,
      "paddingTop": 0,
      "playbackBarHeadShadowVerticalLength": 0,
      "playbackBarLeft": 0,
      "playbackBarHeadShadowBlurRadius": 3,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadHeight": 15,
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "paddingRight": 0,
      "playbackBarHeadShadowHorizontalLength": 0,
      "progressBackgroundColorDirection": "vertical",
      "toolTipShadowSpread": 0,
      "playbackBarBottom": 0,
      "class": "ViewerArea",
      "shadow": false,
      "progressBorderColor": "#000000",
      "progressBarBorderColor": "#000000",
      "playbackBarHeadOpacity": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipFontWeight": "normal",
      "toolTipShadowOpacity": 1,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingBottom": 4,
      "toolTipPaddingRight": 6,
      "playbackBarHeight": 10,
      "playbackBarBackgroundColorDirection": "vertical",
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadWidth": 6,
      "playbackBarRight": 0,
      "height": "100%",
      "toolTipTextShadowOpacity": 0,
      "transitionDuration": 500,
      "playbackBarProgressBorderSize": 0,
      "progressBarBorderSize": 0,
      "toolTipFontFamily": "Arial",
      "width": "69%",
      "borderRadius": 0,
      "paddingLeft": 0,
      "progressBarBorderRadius": 0,
      "playbackBarProgressBorderRadius": 0,
      "toolTipDisplayTime": 0,
      "playbackBarBorderRadius": 0,
      "toolTipFontColor": "#606060",
      "toolTipShadowVerticalLength": 0,
      "toolTipPaddingLeft": 6,
      "transitionMode": "blending",
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadBorderRadius": 0,
      "id": "viewer_uid0A354324_1CBE_BCE9_41A0_9E84443ED3A1",
      "progressLeft": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "borderSize": 0,
      "playbackBarProgressOpacity": 0,
      "playbackBarBorderSize": 0,
      "toolTipOpacity": 1,
      "playbackBarHeadBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarBackgroundOpacity": 1,
      "toolTipBorderRadius": 3,
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "minHeight": 50,
      "playbackBarHeadShadowColor": "#000000",
      "toolTipBorderSize": 1,
      "toolTipTextShadowColor": "#000000",
      "progressOpacity": 1,
      "toolTipShadowBlurRadius": 3,
      "progressRight": 0,
      "progressHeight": 10,
      "progressBarBackgroundColorDirection": "vertical",
      "progressBottom": 2,
      "toolTipShadowColor": "#333333",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "minWidth": 100,
      "playbackBarHeadShadow": true,
      "playbackBarHeadShadowOpacity": 0,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "progressBackgroundOpacity": 1,
      "toolTipShadowHorizontalLength": 0,
      "progressBarOpacity": 1,
      "playbackBarBorderColor": "#FFFFFF",
      "toolTipPaddingTop": 4,
      "toolTipBorderColor": "#767676",
      "progressBorderSize": 0,
      "toolTipFontStyle": "normal",
      "playbackBarOpacity": 1,
      "toolTipFontSize": 12,
      "progressBorderRadius": 0,
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ]
     },
     "displayPlaybackBar": true,
     "buttonPause": "this.IconButton_060548E0_1BBD_FF9C_418B_B7F74909DDD4",
     "id": "viewer_uid0A354324_1CBE_BCE9_41A0_9E84443ED3A1VideoPlayer",
     "class": "VideoPlayer"
    },
    "class": "VideoPlayListItem"
   }
  ],
  "id": "playList_0A3B8323_1CBE_BCEF_4177_ED8A793C4768",
  "class": "PlayList"
 },
 {
  "paddingBottom": 0,
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "shadowSpread": 1,
  "paddingTop": 0,
  "shadowVerticalLength": 0,
  "contentOpaque": false,
  "backgroundColor": [],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "veilHideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "headerBorderSize": 0,
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "scrollBarColor": "#000000",
  "titleFontStyle": "normal",
  "modal": true,
  "shadowOpacity": 0.5,
  "paddingRight": 0,
  "showEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "gap": 5,
  "headerBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0.07
  ],
  "footerBorderColor": "#000000",
  "closeButtonIconColor": "#53565A",
  "titlePaddingLeft": 5,
  "footerBackgroundColorRatios": [
   0
  ],
  "class": "Window",
  "shadow": true,
  "titleTextDecoration": "none",
  "horizontalAlign": "center",
  "title": "da Vinci\u00ae Surgical System",
  "scrollBarVisible": "rollOver",
  "children": [
   {
    "paddingBottom": 10,
    "paddingTop": 10,
    "backgroundOpacity": 0,
    "id": "htmlText_uid0A3E731A_1CBE_BCD9_418C_82E4ED310A6A",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "paddingRight": 10,
    "minHeight": 0,
    "shadow": false,
    "class": "HTMLText",
    "scrollBarOpacity": 0.5,
    "minWidth": 0,
    "scrollBarVisible": "rollOver",
    "height": "100%",
    "html": "<div style=\"text-align:left; color:#000; \"><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#0098c3;font-size:18px;\"><B>The da Vinci System represents the latest in surgical and robotics technologies. </B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"> </SPAN></DIV><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#53565a;font-size:16px;\">With the da Vinci Surgical System, surgeons operate through just a few small incisions. The da Vinci System features a magnified 3D high-definition vision system and tiny wristed instruments that bend and rotate far greater than the human hand. As a result, da Vinci enables a surgeon to operate with enhanced vision, precision and control.</SPAN></SPAN></DIV><p STYLE=\"margin:0; line-height:12px;\"><BR STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"/></p><DIV STYLE=\"text-align:left;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"color:#53565a;font-size:16px;\">Get more info on da Vinci\u00ae Surgical System </SPAN><SPAN STYLE=\"color:#0000ff;\"><A TARGET=\"_blank\" HREF=\"https://www.intuitive.com/en/products-and-services/da-vinci/surgical-systems\" STYLE=\"text-decoration:none; color:inherit;\"><SPAN STYLE=\"color:#a40084;font-size:16px;\"><B><U>HERE</U></B></SPAN></A></SPAN></SPAN></DIV></div>",
    "scrollBarWidth": 10,
    "data": {
     "name": "HTMLText3721"
    },
    "scrollBarMargin": 2,
    "width": "30%",
    "borderRadius": 0,
    "paddingLeft": 10
   },
   "this.viewer_uid0A354324_1CBE_BCE9_41A0_9E84443ED3A1"
  ],
  "closeButtonBorderColor": "#000000",
  "headerBorderColor": "#FFFFFF",
  "closeButtonIconWidth": 12,
  "veilColorRatios": [
   0,
   1
  ],
  "creationPolicy": "inAdvance",
  "closeButtonBackgroundColor": [],
  "width": 960,
  "height": 540,
  "scrollBarWidth": 10,
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverIconColor": "#0098C3",
  "headerPaddingTop": 18,
  "hideEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeOutEffect"
  },
  "shadowColor": "#000000",
  "overflow": "scroll",
  "headerBackgroundColorRatios": [
   0
  ],
  "closeButtonRollOverBackgroundColor": [
   "#FFFFFF"
  ],
  "paddingLeft": 0,
  "veilOpacity": 0.4,
  "headerVerticalAlign": "middle",
  "footerHeight": 5,
  "borderRadius": 5,
  "closeButtonPaddingLeft": 0,
  "layout": "horizontal",
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "veilShowEffect": {
   "easing": "cubic_in_out",
   "duration": 500,
   "class": "FadeInEffect"
  },
  "titleFontWeight": "bold",
  "headerBackgroundColor": [
   "#FFFFFF"
  ],
  "closeButtonBorderSize": 0,
  "footerBackgroundOpacity": 1,
  "backgroundOpacity": 1,
  "id": "window_941F44B4_1620_B8F0_41AA_100EBFF46290",
  "bodyBorderSize": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "titlePaddingTop": 5,
  "borderSize": 0,
  "bodyBackgroundColorDirection": "vertical",
  "closeButtonPressedIconColor": "#FFFFFF",
  "headerBackgroundColorDirection": "vertical",
  "closeButtonPaddingRight": 14,
  "headerPaddingLeft": 10,
  "closeButtonPaddingBottom": 0,
  "minHeight": 20,
  "closeButtonIconHeight": 12,
  "veilColorDirection": "horizontal",
  "bodyPaddingBottom": 5,
  "backgroundColorRatios": [],
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "titleFontColor": "#0098C3",
  "titleFontFamily": "Arial",
  "bodyPaddingRight": 5,
  "shadowBlurRadius": 6,
  "titleFontSize": 40,
  "minWidth": 20,
  "footerBackgroundColorDirection": "vertical",
  "titlePaddingBottom": 5,
  "closeButtonBackgroundOpacity": 1,
  "scrollBarOpacity": 0.5,
  "bodyBackgroundOpacity": 1,
  "titlePaddingRight": 5,
  "backgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "close": "this.playList_0A3B8323_1CBE_BCEF_4177_ED8A793C4768.set('selectedIndex', -1);",
  "footerBorderSize": 0,
  "bodyPaddingTop": 5,
  "closeButtonBackgroundColorRatios": [],
  "closeButtonRollOverBorderColor": "#000000",
  "scrollBarMargin": 2,
  "data": {
   "name": "Window34583"
  },
  "closeButtonIconLineWidth": 3,
  "footerBackgroundColor": [
   "#A40084"
  ],
  "bodyBorderColor": "#000000",
  "closeButtonRollOverIconLineWidth": 3,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundOpacity": 1,
  "bodyPaddingLeft": 5,
  "headerPaddingRight": 10,
  "closeButtonPaddingTop": 0,
  "verticalAlign": "middle",
  "closeButtonRollOverBorderSize": 0,
  "headerPaddingBottom": 10
 },
 {
  "manualZoomSpeed": 1,
  "manualRotationSpeed": 400,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "hfov": 110,
   "yaw": 169.41,
   "pitch": 0
  },
  "id": "camera_0A0CD361_1CBE_A36B_41A3_D443654C04FB",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 },
 {
  "manualZoomSpeed": 1,
  "manualRotationSpeed": 400,
  "initialPosition": {
   "class": "RotationalCameraPosition",
   "hfov": 93,
   "yaw": -107.97,
   "pitch": 0
  },
  "id": "camera_0A02C373_1CBE_A36F_41BC_42BC5DA6B2B1",
  "automaticZoomSpeed": 10,
  "automaticRotationSpeed": 10,
  "class": "RotationalCamera"
 }
], "children": [
 {
  "paddingBottom": 0,
  "paddingTop": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarLeft": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadHeight": 15,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "paddingRight": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "toolTipShadowSpread": 0,
  "playbackBarBottom": 5,
  "class": "ViewerArea",
  "shadow": false,
  "progressBorderColor": "#000000",
  "progressBarBorderColor": "#000000",
  "playbackBarHeadOpacity": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipFontWeight": "normal",
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingBottom": 4,
  "toolTipPaddingRight": 6,
  "playbackBarHeight": 10,
  "playbackBarBackgroundColorDirection": "vertical",
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadWidth": 6,
  "playbackBarRight": 0,
  "height": "100%",
  "toolTipTextShadowOpacity": 0,
  "transitionDuration": 200,
  "playbackBarProgressBorderSize": 0,
  "progressBarBorderSize": 0,
  "toolTipFontFamily": "Arial",
  "width": "100%",
  "paddingLeft": 0,
  "progressBarBorderRadius": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipDisplayTime": 0,
  "borderRadius": 0,
  "playbackBarBorderRadius": 0,
  "toolTipFontColor": "#606060",
  "toolTipShadowVerticalLength": 0,
  "toolTipPaddingLeft": 6,
  "transitionMode": "blending",
  "playbackBarProgressBorderColor": "#000000",
  "top": 0,
  "playbackBarHeadBorderRadius": 0,
  "id": "MainViewer",
  "progressLeft": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "borderSize": 0,
  "playbackBarProgressOpacity": 0,
  "playbackBarBorderSize": 0,
  "toolTipOpacity": 1,
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarBackgroundOpacity": 0,
  "toolTipBorderRadius": 3,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minHeight": 50,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipBorderSize": 1,
  "toolTipTextShadowColor": "#000000",
  "progressOpacity": 1,
  "toolTipShadowBlurRadius": 3,
  "progressRight": 0,
  "progressHeight": 10,
  "progressBarBackgroundColorDirection": "vertical",
  "progressBottom": 0,
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "minWidth": 50,
  "playbackBarHeadShadow": true,
  "playbackBarHeadShadowOpacity": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressBackgroundOpacity": 0,
  "toolTipShadowHorizontalLength": 0,
  "progressBarOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "toolTipPaddingTop": 4,
  "toolTipBorderColor": "#FFFFFF",
  "progressBorderSize": 0,
  "toolTipFontStyle": "normal",
  "playbackBarOpacity": 1,
  "toolTipFontSize": 12,
  "left": 0,
  "progressBorderRadius": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ]
 },
 {
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "paddingTop": 0,
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "id": "Container_064DEB3B_1BBC_D2EC_41B8_03E1C0034947",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "gap": 79,
  "paddingRight": 0,
  "minHeight": 1,
  "shadow": false,
  "horizontalAlign": "center",
  "class": "Container",
  "children": [
   {
    "paddingBottom": 0,
    "paddingTop": 0,
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "id": "Container_0602F8E1_1BBD_FF9C_41A3_4218BA88F5FA",
    "scrollBarColor": "#000000",
    "borderSize": 0,
    "contentOpaque": false,
    "gap": 4,
    "paddingRight": 0,
    "minHeight": 20,
    "class": "Container",
    "shadow": false,
    "horizontalAlign": "center",
    "children": [
     "this.IconButton_0605F8DE_1BBD_FFA5_419C_F1F60A72C3EB",
     "this.IconButton_060598DF_1BBD_FFA4_41AE_0B8984741C06",
     {
      "paddingBottom": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "id": "Container_0605A8DF_1BBD_FFA4_417A_EE2136194B69",
      "scrollBarColor": "#000000",
      "borderSize": 0,
      "contentOpaque": false,
      "gap": 4,
      "paddingRight": 0,
      "minHeight": 20,
      "class": "Container",
      "shadow": false,
      "horizontalAlign": "center",
      "children": [
       "this.IconButton_060548E0_1BBD_FF9C_418B_B7F74909DDD4"
      ],
      "scrollBarOpacity": 0.5,
      "minWidth": 20,
      "scrollBarVisible": "rollOver",
      "creationPolicy": "inAdvance",
      "width": 40,
      "height": "100%",
      "scrollBarWidth": 10,
      "data": {
       "name": "Container31988"
      },
      "scrollBarMargin": 2,
      "borderRadius": 0,
      "paddingLeft": 0,
      "overflow": "hidden",
      "verticalAlign": "middle",
      "layout": "vertical"
     },
     {
      "paddingBottom": 0,
      "paddingTop": 0,
      "backgroundOpacity": 0,
      "id": "IconButton_060538E1_1BBD_FF9C_41B9_7ABC82675678",
      "borderSize": 0,
      "iconURL": "skin/IconButton_060538E1_1BBD_FF9C_41B9_7ABC82675678.png",
      "mode": "toggle",
      "paddingRight": 0,
      "minHeight": 0,
      "class": "IconButton",
      "shadow": false,
      "horizontalAlign": "center",
      "pressedIconURL": "skin/IconButton_060538E1_1BBD_FF9C_41B9_7ABC82675678_pressed.png",
      "minWidth": 0,
      "width": 40,
      "cursor": "hand",
      "height": 40,
      "data": {
       "name": "Button31994"
      },
      "transparencyActive": true,
      "borderRadius": 0,
      "paddingLeft": 0,
      "verticalAlign": "middle"
     },
     "this.IconButton_0602C8E1_1BBD_FF9C_41AF_1AA8702E2257"
    ],
    "scrollBarOpacity": 0.5,
    "minWidth": 20,
    "scrollBarVisible": "rollOver",
    "creationPolicy": "inAdvance",
    "height": 137,
    "scrollBarWidth": 10,
    "data": {
     "name": "Container31983"
    },
    "scrollBarMargin": 2,
    "borderRadius": 0,
    "paddingLeft": 0,
    "overflow": "hidden",
    "verticalAlign": "middle"
   }
  ],
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "creationPolicy": "inAdvance",
  "height": "99.605%",
  "width": "100%",
  "scrollBarWidth": 10,
  "data": {
   "name": "Container8165"
  },
  "borderRadius": 0,
  "paddingLeft": 0,
  "left": "0%",
  "overflow": "scroll",
  "verticalAlign": "bottom",
  "top": "0%"
 },
 {
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "paddingTop": 0,
  "layout": "absolute",
  "backgroundOpacity": 0,
  "id": "Container_7A205770_1C97_D17D_41AC_55D52E250D3E",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "gap": 10,
  "paddingRight": 0,
  "minHeight": 1,
  "shadow": false,
  "horizontalAlign": "left",
  "class": "Container",
  "children": [
   {
    "paddingBottom": 0,
    "maxWidth": 1467,
    "url": "skin/Image_7A550286_1C95_B3A4_41BC_12D667D45F34.png",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "id": "Image_7A550286_1C95_B3A4_41BC_12D667D45F34",
    "borderSize": 0,
    "maxHeight": 817,
    "paddingRight": 0,
    "minHeight": 1,
    "shadow": false,
    "horizontalAlign": "left",
    "class": "Image",
    "minWidth": 1,
    "height": "100%",
    "width": "11.79%",
    "data": {
     "name": "Image23910"
    },
    "scaleMode": "fit_inside",
    "borderRadius": 0,
    "paddingLeft": 0,
    "left": "0%",
    "verticalAlign": "middle",
    "top": "0%"
   }
  ],
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "creationPolicy": "inAdvance",
  "height": "15.627%",
  "width": "100%",
  "scrollBarWidth": 10,
  "data": {
   "name": "Container23805"
  },
  "borderRadius": 0,
  "paddingLeft": 10,
  "left": "0%",
  "overflow": "scroll",
  "verticalAlign": "top",
  "top": "0%"
 },
 {
  "paddingBottom": 0,
  "bottom": "0%",
  "paddingTop": 0,
  "backgroundOpacity": 0,
  "id": "Container_7DE7C404_1C8C_76A4_41A8_23FF3FD36BBC",
  "scrollBarColor": "#000000",
  "borderSize": 0,
  "contentOpaque": false,
  "gap": 10,
  "paddingRight": 0,
  "scrollBarMargin": 2,
  "minHeight": 1,
  "shadow": false,
  "horizontalAlign": "left",
  "class": "Container",
  "children": [
   {
    "paddingBottom": 0,
    "popUpBackgroundColor": "#FFFFFF",
    "popUpShadowColor": "#000000",
    "paddingTop": 0,
    "backgroundOpacity": 0.72,
    "id": "DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E",
    "fontColor": "#FFFFFF",
    "backgroundColor": [
     "#0098C3"
    ],
    "borderSize": 0,
    "rollOverPopUpFontColor": "#FFFFFF",
    "selectedPopUpBackgroundColor": "#0066FF",
    "rollOverArrowColor": "#FFFFFF",
    "paddingRight": 5,
    "popUpBorderRadius": 0,
    "gap": 0,
    "textDecoration": "none",
    "minHeight": 20,
    "popUpShadowBlurRadius": 6,
    "shadow": false,
    "playList": "this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist",
    "popUpFontColor": "#000000",
    "class": "DropDown",
    "backgroundColorRatios": [
     1
    ],
    "fontFamily": "Arial",
    "fontWeight": "normal",
    "prompt": "Locations",
    "popUpShadow": false,
    "minWidth": 200,
    "popUpShadowOpacity": 0,
    "fontSize": 16,
    "popUpShadowSpread": 1,
    "height": "6.781%",
    "backgroundColorDirection": "vertical",
    "width": "100%",
    "rollOverPopUpBackgroundColor": "#A40084",
    "data": {
     "name": "DropDown1204"
    },
    "fontStyle": "normal",
    "arrowColor": "#0066FF",
    "paddingLeft": 5,
    "left": "0%",
    "arrowBeforeLabel": false,
    "selectedPopUpFontColor": "#FFFFFF",
    "popUpBackgroundOpacity": 0.72,
    "borderRadius": 0,
    "top": "8.59%"
   },
   {
    "paddingBottom": 0,
    "maxWidth": 1496,
    "url": "skin/Image_79061AAE_1CB5_B3E4_418F_1B901984D3CB.png",
    "paddingTop": 0,
    "backgroundOpacity": 0,
    "id": "Image_79061AAE_1CB5_B3E4_418F_1B901984D3CB",
    "borderSize": 0,
    "maxHeight": 172,
    "paddingRight": 0,
    "minHeight": 1,
    "shadow": false,
    "horizontalAlign": "left",
    "class": "Image",
    "minWidth": 1,
    "height": "8.405%",
    "width": "98.402%",
    "data": {
     "name": "Image25168"
    },
    "scaleMode": "fit_outside",
    "borderRadius": 0,
    "paddingLeft": 0,
    "left": "0%",
    "verticalAlign": "top",
    "top": "0%"
   }
  ],
  "scrollBarOpacity": 0.5,
  "minWidth": 1,
  "scrollBarVisible": "rollOver",
  "creationPolicy": "inAdvance",
  "height": "82.636%",
  "width": "19.956%",
  "scrollBarWidth": 10,
  "data": {
   "name": "Container24397"
  },
  "borderRadius": 0,
  "paddingLeft": 7,
  "left": "0%",
  "overflow": "scroll",
  "verticalAlign": "top",
  "layout": "absolute"
 }
], 
 "start": "this.syncPlaylists([this.DropDown_7D62BB50_1C8C_72BC_41B1_5C2F90DDEA4E_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "paddingBottom": 0,
 "scrollBarMargin": 2,
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "id": "rootPlayer",
 "mouseWheelEnabled": true,
 "borderSize": 0,
 "contentOpaque": false,
 "paddingRight": 0,
 "scrollBarColor": "#000000",
 "mobileMipmappingEnabled": false,
 "minHeight": 20,
 "buttonToggleMute": "this.IconButton_060538E1_1BBD_FF9C_41B9_7ABC82675678",
 "gap": 10,
 "shadow": false,
 "horizontalAlign": "left",
 "class": "Player",
 "scrollBarOpacity": 0.5,
 "minWidth": 20,
 "scrollBarVisible": "rollOver",
 "creationPolicy": "inAdvance",
 "height": "100%",
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "pauseGlobalAudios": function(caller){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing') a.pause(); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { var restoreCameraOnStop = function(){ for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumeGlobalAudios": function(caller){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ audios[audio].play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getKey": function(key){  return window[key]; },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } }
 },
 "vrPolyfillScale": 0.5,
 "scrollBarWidth": 10,
 "data": {
  "name": "Player2167"
 },
 "width": "100%",
 "borderRadius": 0,
 "paddingLeft": 0,
 "overflow": "visible",
 "verticalAlign": "top",
 "layout": "absolute"
})