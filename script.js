TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Panorama",
  "audios": [
   {
    "data": {
     "label": "Crack The Code"
    },
    "class": "PanoramaAudio",
    "id": "audio_A3C651B1_AEE6_C791_41CD_F4596766A655",
    "loop": true,
    "audio": {
     "class": "AudioResource",
     "mp3Url": "media/audio_A3C651B1_AEE6_C791_41CD_F4596766A655.mp3",
     "oggUrl": "media/audio_A3C651B1_AEE6_C791_41CD_F4596766A655.ogg"
    },
    "autoplay": true
   }
  ],
  "id": "panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644",
  "hfovMax": 90,
  "pitch": 0,
  "partial": false,
  "hfov": 360,
  "adjacentPanoramas": [
   {
    "class": "AdjacentPanorama",
    "backwardYaw": 168.07,
    "panorama": {
     "class": "Panorama",
     "audios": [
      {
       "data": {
        "label": "Ground Squad"
       },
       "class": "PanoramaAudio",
       "id": "audio_BE74552C_AF22_CCB0_41E4_D645F620F751",
       "loop": true,
       "audio": {
        "class": "AudioResource",
        "mp3Url": "media/audio_BE74552C_AF22_CCB0_41E4_D645F620F751.mp3",
        "oggUrl": "media/audio_BE74552C_AF22_CCB0_41E4_D645F620F751.ogg"
       },
       "autoplay": true
      }
     ],
     "id": "panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D",
     "hfovMax": 90,
     "pitch": 0,
     "partial": false,
     "hfov": 360,
     "adjacentPanoramas": [
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 26.49,
       "panorama": {
        "class": "Panorama",
        "id": "panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98",
        "hfovMax": 90,
        "partial": false,
        "pitch": 0,
        "hfov": 360,
        "adjacentPanoramas": [
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 77.95,
          "panorama": {
           "class": "Panorama",
           "id": "panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A",
           "hfovMax": 90,
           "partial": false,
           "pitch": 0,
           "hfov": 360,
           "adjacentPanoramas": [
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 83.8,
             "panorama": "this.panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98",
             "yaw": 77.95,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 22.48,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F",
              "hfovMax": 90,
              "partial": false,
              "pitch": 0,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 21.87,
                "panorama": "this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A",
                "yaw": 22.48,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -98.46,
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75",
                 "hfovMax": 90,
                 "partial": false,
                 "pitch": 0,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -6.43,
                   "panorama": "this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A",
                   "yaw": -5.96,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 91.87,
                   "panorama": "this.panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F",
                   "yaw": -98.46,
                   "distance": 1
                  }
                 ],
                 "hfovMin": 50,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2000,
                      "class": "ImageResourceLevel",
                      "width": 4000,
                      "url": "media/panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_hq.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_9699D0A3_9D6B_4EAF_41D9_D689CD7BC514",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F, this.camera_A999F5C1_B0B2_EEF0_41E3_FCEB29AAFB24); this.mainPlayList.set('selectedIndex', 4)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.15,
                       "yaw": -98.46,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 24,
                          "class": "ImageResourceLevel",
                          "width": 24,
                          "url": "media/panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -22.67
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -98.46,
                       "hfov": 4.15,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 49,
                          "class": "ImageResourceLevel",
                          "width": 49,
                          "url": "media/panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -22.67
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_9699C0A3_9D6B_4EAF_41E1_DA2E67E5C50C",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A, this.camera_A9A855B1_B0B2_EE93_41C1_334289A346CB); this.mainPlayList.set('selectedIndex', 2)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.4,
                       "yaw": -5.96,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 24,
                          "class": "ImageResourceLevel",
                          "width": 24,
                          "url": "media/panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -12.08
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -5.96,
                       "hfov": 4.4,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 49,
                          "class": "ImageResourceLevel",
                          "width": 49,
                          "url": "media/panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -12.08
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "vfov": 180,
                 "label": "1-Scene 4",
                 "thumbnailUrl": "media/panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_t.jpg"
                },
                "yaw": 91.87,
                "distance": 1
               }
              ],
              "hfovMin": 50,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2000,
                   "class": "ImageResourceLevel",
                   "width": 4000,
                   "url": "media/panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_hq.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_96945EDA_9D6B_5299_41B1_5006BAC8B37A",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75, this.camera_A8E4941B_B0B2_ED90_41C2_8F69A360B7FE); this.mainPlayList.set('selectedIndex', 3)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.17,
                    "yaw": 91.87,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 24,
                       "class": "ImageResourceLevel",
                       "width": 24,
                       "url": "media/panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -22.17
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 91.87,
                    "hfov": 4.17,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 49,
                       "class": "ImageResourceLevel",
                       "width": 49,
                       "url": "media/panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -22.17
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_96943EDA_9D6B_5299_419E_98D71346AC66",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A, this.camera_A8EF640B_B0B2_ED77_4186_22AF16770052); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.39,
                    "yaw": 22.48,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 24,
                       "class": "ImageResourceLevel",
                       "width": 24,
                       "url": "media/panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -12.58
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 22.48,
                    "hfov": 4.39,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 49,
                       "class": "ImageResourceLevel",
                       "width": 49,
                       "url": "media/panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -12.58
                   }
                  ]
                 }
                ]
               }
              ],
              "vfov": 180,
              "label": "1-Scene 5",
              "thumbnailUrl": "media/panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_t.jpg"
             },
             "yaw": 21.87,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -6.43,
             "panorama": "this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D",
             "yaw": 171.25,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": 138.83,
             "panorama": {
              "class": "Panorama",
              "id": "panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE",
              "hfovMax": 90,
              "partial": false,
              "pitch": 0,
              "hfov": 360,
              "adjacentPanoramas": [
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -3.31,
                "panorama": "this.panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98",
                "yaw": -178.81,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 142.74,
                "panorama": "this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A",
                "yaw": 138.83,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": -176.8,
                "panorama": {
                 "class": "Panorama",
                 "id": "panorama_9163C5E4_9D65_56A9_41BD_903B707B4857",
                 "hfovMax": 90,
                 "partial": false,
                 "pitch": 0,
                 "hfov": 360,
                 "adjacentPanoramas": [
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": 78.41,
                   "panorama": "this.panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644",
                   "yaw": 99.1,
                   "distance": 1
                  },
                  {
                   "class": "AdjacentPanorama",
                   "backwardYaw": -0.89,
                   "panorama": "this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE",
                   "yaw": -176.8,
                   "distance": 1
                  }
                 ],
                 "hfovMin": 50,
                 "frames": [
                  {
                   "thumbnailUrl": "media/panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_t.jpg",
                   "class": "SphericPanoramaFrame",
                   "sphere": {
                    "class": "ImageResource",
                    "levels": [
                     {
                      "height": 2000,
                      "class": "ImageResourceLevel",
                      "width": 4000,
                      "url": "media/panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_hq.jpeg"
                     }
                    ]
                   },
                   "overlays": [
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_9163F5E4_9D65_56A9_41BA_7F6211778087",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644, this.camera_A8FA73EC_B0B2_EAB0_41BC_C1DA43D44BF3); this.mainPlayList.set('selectedIndex', 0)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.14,
                       "yaw": 99.1,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 24,
                          "class": "ImageResourceLevel",
                          "width": 24,
                          "url": "media/panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_0_HS_0_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -23.18
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": 99.1,
                       "hfov": 4.14,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 49,
                          "class": "ImageResourceLevel",
                          "width": 49,
                          "url": "media/panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_0_HS_0_0.png"
                         }
                        ]
                       },
                       "pitch": -23.18
                      }
                     ]
                    },
                    {
                     "class": "HotspotPanoramaOverlay",
                     "enabledInCardboard": true,
                     "id": "overlay_916395E4_9D65_56A9_41D6_2CBD88D228C9",
                     "rollOverDisplay": false,
                     "useHandCursor": true,
                     "areas": [
                      {
                       "class": "HotspotPanoramaOverlayArea",
                       "click": "this.startPanoramaWithCamera(this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE, this.camera_A8F193FC_B0B2_EA90_41D0_9EA94B3A45AF); this.mainPlayList.set('selectedIndex', 6)",
                       "mapColor": "#FF0000"
                      }
                     ],
                     "data": {
                      "label": "Image"
                     },
                     "maps": [
                      {
                       "class": "HotspotPanoramaOverlayMap",
                       "hfov": 4.3,
                       "yaw": -176.8,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 24,
                          "class": "ImageResourceLevel",
                          "width": 24,
                          "url": "media/panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_0_HS_1_0_0_map.gif"
                         }
                        ]
                       },
                       "pitch": -16.98
                      }
                     ],
                     "items": [
                      {
                       "class": "HotspotPanoramaOverlayImage",
                       "yaw": -176.8,
                       "hfov": 4.3,
                       "image": {
                        "class": "ImageResource",
                        "levels": [
                         {
                          "height": 49,
                          "class": "ImageResourceLevel",
                          "width": 49,
                          "url": "media/panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_0_HS_1_0.png"
                         }
                        ]
                       },
                       "pitch": -16.98
                      }
                     ]
                    }
                   ]
                  }
                 ],
                 "vfov": 180,
                 "label": "1-Scene 8",
                 "thumbnailUrl": "media/panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_t.jpg"
                },
                "yaw": -0.89,
                "distance": 1
               },
               {
                "class": "AdjacentPanorama",
                "backwardYaw": 70.83,
                "panorama": "this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D",
                "yaw": 67.39,
                "distance": 1
               }
              ],
              "hfovMin": 50,
              "frames": [
               {
                "thumbnailUrl": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_t.jpg",
                "class": "SphericPanoramaFrame",
                "sphere": {
                 "class": "ImageResource",
                 "levels": [
                  {
                   "height": 2000,
                   "class": "ImageResourceLevel",
                   "width": 4000,
                   "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_hq.jpeg"
                  }
                 ]
                },
                "overlays": [
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_91627730_9D6A_D3AA_41DE_C907D7C5A376",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9163C5E4_9D65_56A9_41BD_903B707B4857, this.camera_A944D563_B0B2_EFB0_41D4_1A77E0E38B24); this.mainPlayList.set('selectedIndex', 7)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.39,
                    "yaw": -0.89,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -12.91
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -0.89,
                    "hfov": 4.39,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -12.91
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_91625730_9D6A_D3AA_41C4_933E15111287",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D, this.camera_A9BA7592_B0B2_EE90_41E2_7FADB89896B5); this.mainPlayList.set('selectedIndex', 1)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.19,
                    "yaw": 67.39,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -21.37
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 67.39,
                    "hfov": 4.19,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -21.37
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_9162B730_9D6A_D3AA_41AF_06ED7A273FE8",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A, this.camera_A951D534_B0B2_EF91_41DB_AE0D507C126F); this.mainPlayList.set('selectedIndex', 2)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.33,
                    "yaw": 138.83,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_0_HS_2_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -15.81
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 138.83,
                    "hfov": 4.33,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_0_HS_2_0.png"
                      }
                     ]
                    },
                    "pitch": -15.81
                   }
                  ]
                 },
                 {
                  "class": "HotspotPanoramaOverlay",
                  "enabledInCardboard": true,
                  "id": "overlay_9162E730_9D6A_D3AA_41D8_B1048C7EC670",
                  "rollOverDisplay": false,
                  "useHandCursor": true,
                  "areas": [
                   {
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98, this.camera_A9636515_B0B2_EF90_41E4_41084457A232); this.mainPlayList.set('selectedIndex', 5)",
                    "mapColor": "#FF0000"
                   }
                  ],
                  "data": {
                   "label": "Image"
                  },
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 4.23,
                    "yaw": -178.81,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 25,
                       "class": "ImageResourceLevel",
                       "width": 25,
                       "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_0_HS_3_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -19.96
                   }
                  ],
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": -178.81,
                    "hfov": 4.23,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 50,
                       "class": "ImageResourceLevel",
                       "width": 50,
                       "url": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_0_HS_3_0.png"
                      }
                     ]
                    },
                    "pitch": -19.96
                   }
                  ]
                 }
                ]
               }
              ],
              "vfov": 180,
              "label": "1-Scene 7",
              "thumbnailUrl": "media/panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_t.jpg"
             },
             "yaw": 142.74,
             "distance": 1
            },
            {
             "class": "AdjacentPanorama",
             "backwardYaw": -5.96,
             "panorama": "this.panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75",
             "yaw": -6.43,
             "distance": 1
            }
           ],
           "hfovMin": 50,
           "frames": [
            {
             "thumbnailUrl": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_t.jpg",
             "class": "SphericPanoramaFrame",
             "sphere": {
              "class": "ImageResource",
              "levels": [
               {
                "height": 2000,
                "class": "ImageResourceLevel",
                "width": 4000,
                "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_hq.jpeg"
               }
              ]
             },
             "overlays": [
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_9697FD6A_9D6B_D7BE_41C4_60304E0BB7EB",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75, this.camera_A96C34E6_B0B2_EEB0_41E4_CADD752C43D5); this.mainPlayList.set('selectedIndex', 3)",
                 "mapColor": "#FF0000"
                }
               ],
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.36,
                 "yaw": -6.43,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 24,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -14.27
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -6.43,
                 "hfov": 4.36,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 49,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -14.27
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_9697DD6A_9D6B_D7BE_41C3_0CAC35423F3B",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F, this.camera_A9129498_B0B2_EE90_41DD_A8E56718333C); this.mainPlayList.set('selectedIndex', 4)",
                 "mapColor": "#FF0000"
                }
               ],
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.38,
                 "yaw": 21.87,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 24,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -13.07
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 21.87,
                 "hfov": 4.38,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 49,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -13.07
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_96973D6A_9D6B_D7BE_41CE_876A6E9934A4",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98, this.camera_A919E498_B0B2_EE90_41CE_CFA84B1CA4AD); this.mainPlayList.set('selectedIndex', 5)",
                 "mapColor": "#FF0000"
                }
               ],
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.19,
                 "yaw": 77.95,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 24,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -21.53
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 77.95,
                 "hfov": 4.19,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 49,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -21.53
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_96976D6A_9D6B_D7BE_418E_76C8E862EF16",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE, this.camera_A97B34B7_B0B2_EE9F_41C7_3032DF5F6120); this.mainPlayList.set('selectedIndex', 6)",
                 "mapColor": "#FF0000"
                }
               ],
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.4,
                 "yaw": 142.74,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 24,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_3_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -12.09
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 142.74,
                 "hfov": 4.4,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 49,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_3_0.png"
                   }
                  ]
                 },
                 "pitch": -12.09
                }
               ]
              },
              {
               "class": "HotspotPanoramaOverlay",
               "enabledInCardboard": true,
               "id": "overlay_9690AD6A_9D6B_D7BE_41DE_9C23BBE6C166",
               "rollOverDisplay": false,
               "useHandCursor": true,
               "areas": [
                {
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D, this.camera_A907A4A7_B0B2_EEBF_41E1_B918C695DFAF); this.mainPlayList.set('selectedIndex', 1)",
                 "mapColor": "#FF0000"
                }
               ],
               "data": {
                "label": "Image"
               },
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 4.37,
                 "yaw": 171.25,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 24,
                    "class": "ImageResourceLevel",
                    "width": 24,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_4_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -13.63
                }
               ],
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 171.25,
                 "hfov": 4.37,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 49,
                    "class": "ImageResourceLevel",
                    "width": 49,
                    "url": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_0_HS_4_0.png"
                   }
                  ]
                 },
                 "pitch": -13.63
                }
               ]
              }
             ]
            }
           ],
           "vfov": 180,
           "label": "1-Scene 3",
           "thumbnailUrl": "media/panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_t.jpg"
          },
          "yaw": 83.8,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": 26.01,
          "panorama": "this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D",
          "yaw": 26.49,
          "distance": 1
         },
         {
          "class": "AdjacentPanorama",
          "backwardYaw": -178.81,
          "panorama": "this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE",
          "yaw": -3.31,
          "distance": 1
         }
        ],
        "hfovMin": 50,
        "frames": [
         {
          "thumbnailUrl": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_t.jpg",
          "class": "SphericPanoramaFrame",
          "sphere": {
           "class": "ImageResource",
           "levels": [
            {
             "height": 2000,
             "class": "ImageResourceLevel",
             "width": 4000,
             "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_hq.jpeg"
            }
           ]
          },
          "overlays": [
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_9691987C_9D6A_DD9A_41D1_84D3983D5AC7",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A, this.camera_A93EF469_B0B2_EDB0_41B8_A300219CF646); this.mainPlayList.set('selectedIndex', 2)",
              "mapColor": "#FF0000"
             }
            ],
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.15,
              "yaw": 83.8,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 24,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -22.71
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 83.8,
              "hfov": 4.15,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 49,
                 "class": "ImageResourceLevel",
                 "width": 49,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -22.71
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_9691B87C_9D6A_DD9A_41E1_391BC422A200",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE, this.camera_A9243479_B0B2_ED90_41D3_40126BFE0454); this.mainPlayList.set('selectedIndex', 6)",
              "mapColor": "#FF0000"
             }
            ],
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.45,
              "yaw": -3.31,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 24,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -8.89
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -3.31,
              "hfov": 4.45,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 49,
                 "class": "ImageResourceLevel",
                 "width": 49,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -8.89
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_9691E87C_9D6A_DD9A_41B5_3C9173FAA800",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D, this.camera_A9334479_B0B2_ED90_41BA_418A1D686690); this.mainPlayList.set('selectedIndex', 1)",
              "mapColor": "#FF0000"
             }
            ],
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 4.46,
              "yaw": 26.49,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 24,
                 "class": "ImageResourceLevel",
                 "width": 24,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.47
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 26.49,
              "hfov": 4.46,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 49,
                 "class": "ImageResourceLevel",
                 "width": 49,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -7.47
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_9690187C_9D6A_DD9A_41D0_E2A64F976436",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 3)",
              "mapColor": "#FF0000"
             }
            ],
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.45,
              "yaw": 149.09,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 19,
                 "class": "ImageResourceLevel",
                 "width": 19,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -16.32
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 149.09,
              "hfov": 3.45,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "class": "ImageResourceLevel",
                 "width": 39,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -16.32
             }
            ]
           },
           {
            "class": "HotspotPanoramaOverlay",
            "enabledInCardboard": true,
            "id": "overlay_9690387C_9D6A_DD9A_41CF_E107470C655B",
            "rollOverDisplay": false,
            "useHandCursor": true,
            "areas": [
             {
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 4)",
              "mapColor": "#FF0000"
             }
            ],
            "data": {
             "label": "Image"
            },
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 3.38,
              "yaw": 176.64,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 19,
                 "class": "ImageResourceLevel",
                 "width": 19,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_4_0_0_map.gif"
                }
               ]
              },
              "pitch": -18.81
             }
            ],
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 176.64,
              "hfov": 3.38,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 39,
                 "class": "ImageResourceLevel",
                 "width": 39,
                 "url": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_0_HS_4_0.png"
                }
               ]
              },
              "pitch": -18.81
             }
            ]
           }
          ]
         }
        ],
        "vfov": 180,
        "label": "1-Scene 6",
        "thumbnailUrl": "media/panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_t.jpg"
       },
       "yaw": 26.01,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 171.25,
       "panorama": "this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A",
       "yaw": -6.43,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": -5.92,
       "panorama": "this.panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644",
       "yaw": 168.07,
       "distance": 1
      },
      {
       "class": "AdjacentPanorama",
       "backwardYaw": 67.39,
       "panorama": "this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE",
       "yaw": 70.83,
       "distance": 1
      }
     ],
     "hfovMin": 50,
     "frames": [
      {
       "thumbnailUrl": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_t.jpg",
       "class": "SphericPanoramaFrame",
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 2000,
          "class": "ImageResourceLevel",
          "width": 4000,
          "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_hq.jpeg"
         }
        ]
       },
       "overlays": [
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_969438BB_9D6B_DE9E_41DA_3CA3EF1FFD61",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644, this.camera_A8D3F44A_B0B2_EDF0_41B1_C2F08B277158); this.mainPlayList.set('selectedIndex', 0)",
           "mapColor": "#FF0000"
          }
         ],
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.33,
           "yaw": 168.07,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 24,
              "class": "ImageResourceLevel",
              "width": 24,
              "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.72
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 168.07,
           "hfov": 4.33,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "class": "ImageResourceLevel",
              "width": 49,
              "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -15.72
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_969448BB_9D6B_DE9E_41E1_29CCAA93C41E",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE, this.camera_A8C4A459_B0B2_ED93_41C0_E59FA667C33C); this.mainPlayList.set('selectedIndex', 6)",
           "mapColor": "#FF0000"
          }
         ],
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.11,
           "yaw": 70.83,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 24,
              "class": "ImageResourceLevel",
              "width": 24,
              "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -23.88
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 70.83,
           "hfov": 4.11,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "class": "ImageResourceLevel",
              "width": 49,
              "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -23.88
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_969468BB_9D6B_DE9E_41C9_B87D769A8F02",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A, this.camera_A8D8643A_B0B2_ED91_41B4_97F261DC0AF9); this.mainPlayList.set('selectedIndex', 2)",
           "mapColor": "#FF0000"
          }
         ],
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.34,
           "yaw": -6.43,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 24,
              "class": "ImageResourceLevel",
              "width": 24,
              "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -15.17
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -6.43,
           "hfov": 4.34,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "class": "ImageResourceLevel",
              "width": 49,
              "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -15.17
          }
         ]
        },
        {
         "class": "HotspotPanoramaOverlay",
         "enabledInCardboard": true,
         "id": "overlay_969598BB_9D6B_DE9E_41C3_C3CB1BE77B90",
         "rollOverDisplay": false,
         "useHandCursor": true,
         "areas": [
          {
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98, this.camera_A8E3042A_B0B2_EDB1_41E0_8F0BAF1A4AFC); this.mainPlayList.set('selectedIndex', 5)",
           "mapColor": "#FF0000"
          }
         ],
         "data": {
          "label": "Image"
         },
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 4.38,
           "yaw": 26.01,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 24,
              "class": "ImageResourceLevel",
              "width": 24,
              "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -13.37
          }
         ],
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 26.01,
           "hfov": 4.38,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 49,
              "class": "ImageResourceLevel",
              "width": 49,
              "url": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -13.37
          }
         ]
        }
       ]
      }
     ],
     "vfov": 180,
     "label": "1-Scene 2",
     "thumbnailUrl": "media/panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_t.jpg"
    },
    "yaw": -5.92,
    "distance": 1
   },
   {
    "class": "AdjacentPanorama",
    "backwardYaw": 99.1,
    "panorama": "this.panorama_9163C5E4_9D65_56A9_41BD_903B707B4857",
    "yaw": 78.41,
    "distance": 1
   }
  ],
  "hfovMin": 50,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 2000,
       "class": "ImageResourceLevel",
       "width": 4000,
       "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_hq.jpeg"
      }
     ]
    },
    "overlays": [
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_96DC498A_9D6B_5F7E_41D8_CD3C9DBBB998",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D, this.camera_A88313CD_B0B2_EAF0_41E3_2023C573B93E); this.mainPlayList.set('selectedIndex', 1)",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.37,
        "yaw": -5.92,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -13.55
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -5.92,
        "hfov": 4.37,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 50,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -13.55
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_96DC198A_9D6B_5F7E_41D4_15951446B073",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_9163C5E4_9D65_56A9_41BD_903B707B4857, this.camera_A8FFE3DC_B0B2_EA91_41E3_2166688DF0A6); this.mainPlayList.set('selectedIndex', 7)",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 4.2,
        "yaw": 78.41,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 25,
           "class": "ImageResourceLevel",
           "width": 25,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -21.22
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 78.41,
        "hfov": 4.2,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 50,
           "class": "ImageResourceLevel",
           "width": 50,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -21.22
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_96DCE98A_9D6B_5F7E_41D8_F69517574930",
      "rollOverDisplay": true,
      "useHandCursor": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupMedia(this.window_84AD0936_95FD_1173_41BA_DFB76BF7D610, this.album_84124731_95FD_1171_41DC_F340AAA92926, this.playList_A24C81E4_AFB1_A6B0_41E0_B0EF7232312F, '80%', '80%', false, false); this.playList_A24C81E4_AFB1_A6B0_41E0_B0EF7232312F.set('selectedIndex', 0); ",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 34.35,
        "yaw": 53.25,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 102,
           "class": "ImageResourceLevel",
           "width": 196,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_2_1_0_map.gif"
          }
         ]
        },
        "pitch": 6.35
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_96DCD98A_9D6B_5F7E_41CF_A2AE5D2EC464",
      "rollOverDisplay": true,
      "useHandCursor": false,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "if(this.isCardboardViewMode()) { this.showPopupPanoramaVideoOverlay(this.popup_8B6744DD_8494_90B6_41DD_22F8537A3F31, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundOpacity':0.3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedIconHeight':20,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':20,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}) } else { this.showPopupMedia(this.window_A5A38935_AFAE_E790_41B1_E8D3C83C757E, this.video_8500D0C9_95F5_2F11_41D6_B86D008F7570, this.PlayList_A1A6E222_AFB1_A5B1_41E1_EB862E36C1F3, '70%', '70%', true, true); this.PlayList_A1A6E222_AFB1_A5B1_41E1_EB862E36C1F3.set('selectedIndex', 0); ; this.viewer_uidA1B4F1F3_AFB1_A697_41E3_2D8D1C0C33D7VideoPlayer.play();  }",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 70.21,
        "yaw": -44.34,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 155,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_3_1_0_map.gif"
          }
         ]
        },
        "pitch": -24.55
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_96DC898A_9D6B_5F7E_41C6_E720C8B7274D",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showPopupPanoramaOverlay(this.popup_94AA8C7A_84AB_B073_41D8_CE6828885046, {'backgroundColorDirection':'vertical','pressedIconLineWidth':5,'iconWidth':20,'borderColor':'#000000','backgroundOpacity':0.3,'pressedBorderSize':0,'pressedBackgroundColorRatios':[0,0.09803921568627451,1],'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'iconLineWidth':5,'pressedBorderColor':'#000000','iconColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedBackgroundOpacity':0.3,'paddingRight':5,'iconHeight':20,'paddingLeft':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','pressedIconHeight':30,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','paddingTop':5,'rollOverBorderColor':'#000000','rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'pressedIconWidth':30,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'paddingBottom':5,'rollOverIconHeight':20,'rollOverIconWidth':20,'rollOverBackgroundOpacity':0.3,'borderSize':0,'rollOverIconLineWidth':5,'rollOverBackgroundColorDirection':'vertical','rollOverBorderSize':0}, null, null, null, null, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 9.54,
        "yaw": -22.46,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 84,
           "class": "ImageResourceLevel",
           "width": 53,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_4_1_0_map.gif"
          }
         ]
        },
        "pitch": 2.96
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_96DD698A_9D6B_5F7E_41C2_9657F44F76CB",
      "rollOverDisplay": true,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.showWindow(this.window_9427296B_84BC_F192_41C4_0F6884138A48, null, false)",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Polygon"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 40.58,
        "yaw": 21.34,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 135,
           "class": "ImageResourceLevel",
           "width": 200,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_5_1_0_map.gif"
          }
         ]
        },
        "pitch": -19.43
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_96DD598A_9D6B_5F7E_41C9_842AA7F2E4FF",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.48,
        "yaw": 14.6,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_7_0_0_map.gif"
          }
         ]
        },
        "pitch": -14.94
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 14.6,
        "hfov": 3.48,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_7_0.png"
          }
         ]
        },
        "pitch": -14.94
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_96DD398A_9D6B_5F7E_41D9_44139928AF74",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.6,
        "yaw": -67.14,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_10_0_0_map.gif"
          }
         ]
        },
        "pitch": 2.29
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -67.14,
        "hfov": 3.6,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_10_0.png"
          }
         ]
        },
        "pitch": 2.29
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_96DD098A_9D6B_5F7E_41DF_2BF1031E655D",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.56,
        "yaw": -25.98,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_11_0_0_map.gif"
          }
         ]
        },
        "pitch": 9
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -25.98,
        "hfov": 3.56,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_11_0.png"
          }
         ]
        },
        "pitch": 9
       }
      ]
     },
     {
      "class": "HotspotPanoramaOverlay",
      "enabledInCardboard": true,
      "id": "overlay_96DDE98A_9D6B_5F7E_41B9_B37CD477B70C",
      "rollOverDisplay": false,
      "useHandCursor": true,
      "areas": [
       {
        "class": "HotspotPanoramaOverlayArea",
        "mapColor": "#FF0000"
       }
      ],
      "data": {
       "label": "Image"
      },
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 3.55,
        "yaw": 37.26,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 20,
           "class": "ImageResourceLevel",
           "width": 20,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_12_0_0_map.gif"
          }
         ]
        },
        "pitch": 9.94
       }
      ],
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 37.26,
        "hfov": 3.55,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 40,
           "class": "ImageResourceLevel",
           "width": 40,
           "url": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_0_HS_12_0.png"
          }
         ]
        },
        "pitch": 9.94
       }
      ]
     },
     {
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "yaw": -44.34,
      "hideEasing": "cubic_out",
      "pitch": -24.55,
      "hfov": 60.1,
      "showDuration": 500,
      "video": {
       "mp4Url": "media/video_8500D0C9_95F5_2F11_41D6_B86D008F7570.mp4",
       "class": "VideoResource",
       "width": 852,
       "height": 480
      },
      "autoplay": true,
      "showEasing": "cubic_in",
      "id": "popup_8B6744DD_8494_90B6_41DD_22F8537A3F31",
      "loop": false,
      "rotationX": 0,
      "popupMaxWidth": "70%",
      "hideDuration": 500,
      "rotationY": 0,
      "popupMaxHeight": "70%"
     },
     {
      "class": "PopupPanoramaOverlay",
      "rotationZ": 0,
      "yaw": -22.46,
      "hideEasing": "cubic_out",
      "pitch": 2.96,
      "hfov": 8.67,
      "showDuration": 500,
      "hideDuration": 500,
      "showEasing": "cubic_in",
      "id": "popup_94AA8C7A_84AB_B073_41D8_CE6828885046",
      "rotationX": 0,
      "popupMaxWidth": "70%",
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "height": 554,
         "class": "ImageResourceLevel",
         "width": 554,
         "url": "media/popup_94AA8C7A_84AB_B073_41D8_CE6828885046_0_0.png"
        },
        {
         "height": 512,
         "class": "ImageResourceLevel",
         "width": 512,
         "url": "media/popup_94AA8C7A_84AB_B073_41D8_CE6828885046_0_1.png"
        }
       ]
      },
      "rotationY": 0,
      "popupMaxHeight": "70%"
     }
    ]
   }
  ],
  "vfov": 180,
  "label": "1-Scene 1",
  "thumbnailUrl": "media/panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_t.jpg"
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_acceleration",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_A10D880F_B056_A58F_41E0_9561AB4B05E4"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -4.88,
   "pitch": -0.74
  }
 },
 "this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D",
 {
  "class": "PanoramaCamera",
  "id": "panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A",
 {
  "class": "PanoramaCamera",
  "id": "panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75",
 {
  "class": "PanoramaCamera",
  "id": "panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98",
 {
  "class": "PanoramaCamera",
  "id": "panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE",
 {
  "class": "PanoramaCamera",
  "id": "panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 0,
   "pitch": 0
  }
 },
 "this.panorama_9163C5E4_9D65_56A9_41BD_903B707B4857",
 {
  "class": "PanoramaCamera",
  "id": "panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_camera",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "class": "Video",
  "thumbnailUrl": "media/video_8500D0C9_95F5_2F11_41D6_B86D008F7570_t.jpg",
  "label": "video_362E4151_24CD_2C5B_41BB_0F610A19A7E4",
  "video": {
   "mp4Url": "media/video_8500D0C9_95F5_2F11_41D6_B86D008F7570.mp4",
   "class": "VideoResource",
   "width": 852,
   "height": 480
  },
  "width": 852,
  "id": "video_8500D0C9_95F5_2F11_41D6_B86D008F7570",
  "loop": false,
  "height": 480,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer"
 },
 {
  "class": "PhotoAlbum",
  "label": "Photo Album tv 2",
  "id": "album_84124731_95FD_1171_41DC_F340AAA92926",
  "playList": {
   "class": "PhotoPlayList",
   "id": "album_84124731_95FD_1171_41DC_F340AAA92926_AlbumPlayList",
   "items": [
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "tv1",
      "thumbnailUrl": "media/album_84124731_95FD_1171_41DC_F340AAA92926_2_t.png",
      "width": 701,
      "id": "album_84124731_95FD_1171_41DC_F340AAA92926_2",
      "height": 416,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_84124731_95FD_1171_41DC_F340AAA92926_2.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "tv 2",
      "thumbnailUrl": "media/album_84124731_95FD_1171_41DC_F340AAA92926_0_t.png",
      "width": 714,
      "id": "album_84124731_95FD_1171_41DC_F340AAA92926_0",
      "height": 426,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_84124731_95FD_1171_41DC_F340AAA92926_0.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    },
    {
     "class": "PhotoPlayListItem",
     "camera": {
      "scaleMode": "fit_inside",
      "class": "PhotoCamera"
     },
     "media": {
      "class": "Photo",
      "duration": 5000,
      "label": "tv 3",
      "thumbnailUrl": "media/album_84124731_95FD_1171_41DC_F340AAA92926_1_t.png",
      "width": 648,
      "id": "album_84124731_95FD_1171_41DC_F340AAA92926_1",
      "height": 588,
      "image": {
       "class": "ImageResource",
       "levels": [
        {
         "url": "media/album_84124731_95FD_1171_41DC_F340AAA92926_1.png",
         "class": "ImageResourceLevel"
        }
       ]
      }
     }
    }
   ]
  },
  "thumbnailUrl": "media/album_84124731_95FD_1171_41DC_F340AAA92926_t.png"
 },
 {
  "class": "PhotoAlbumPlayer",
  "id": "MainViewerPhotoAlbumPlayer",
  "viewerArea": "this.MainViewer"
 },
 "this.album_84124731_95FD_1171_41DC_F340AAA92926_2",
 "this.album_84124731_95FD_1171_41DC_F340AAA92926_0",
 "this.album_84124731_95FD_1171_41DC_F340AAA92926_1",
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_96DC798A_9D6B_5F7E_41D7_280557D9F644_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "media": "this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_969418BB_9D6B_DE9E_41DC_9B436F63CF2D_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "media": "this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9697ED6A_9D6B_D7BE_41C5_5AD7AE7EE85A_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "media": "this.panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_969830A3_9D6B_4EAF_41DF_EFE75D133D75_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "media": "this.panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_96944EDA_9D6B_5299_41D3_4472BFB40F3F_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "media": "this.panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9691787C_9D6A_DD9A_41CB_86ED7F325C98_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "media": "this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_91626730_9D6A_D3AA_41D8_FA6ADB669ACE_camera"
   },
   {
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "media": "this.panorama_9163C5E4_9D65_56A9_41BD_903B707B4857",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_9163C5E4_9D65_56A9_41BD_903B707B4857_camera"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_8500D0C9_95F5_2F11_41D6_B86D008F7570",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 8, this.video_8500D0C9_95F5_2F11_41D6_B86D008F7570)"
   },
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)",
    "media": "this.album_84124731_95FD_1171_41DC_F340AAA92926",
    "player": "this.MainViewerPhotoAlbumPlayer",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "change": "this.showComponentsWhileMouseOver(this.container_A898739E_B0B2_EA90_41C9_6FE468F9C999, [this.htmltext_A89A439E_B0B2_EA90_41E0_140350BF412D,this.component_A896839E_B0B2_EA90_4184_B7C253B811F7,this.component_A896939E_B0B2_EA90_41C7_0A0E485E234C], 2000)",
  "class": "PlayList",
  "id": "playList_A24C81E4_AFB1_A6B0_41E0_B0EF7232312F",
  "items": [
   {
    "class": "PhotoAlbumPlayListItem",
    "begin": "this.updateMediaLabelFromPlayList(this.album_84124731_95FD_1171_41DC_F340AAA92926_AlbumPlayList, this.htmltext_A89A439E_B0B2_EA90_41E0_140350BF412D, this.albumitem_A1B141E4_AFB1_A6B0_41AD_D467FD10A85E); this.loopAlbum(this.playList_A24C81E4_AFB1_A6B0_41E0_B0EF7232312F, 0)",
    "media": "this.album_84124731_95FD_1171_41DC_F340AAA92926",
    "id": "albumitem_A1B141E4_AFB1_A6B0_41AD_D467FD10A85E",
    "player": {
     "class": "PhotoAlbumPlayer",
     "id": "viewer_uidA24E31E4_AFB1_A6B0_41D5_61D5B63BEA8APhotoAlbumPlayer",
     "viewerArea": {
      "class": "ViewerArea",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "playbackBarBackgroundOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderRadius": 0,
      "toolTipShadowColor": "#333333",
      "toolTipFontSize": 12,
      "progressBorderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "shadow": false,
      "playbackBarBottom": 0,
      "progressLeft": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontColor": "#606060",
      "progressBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadBorderRadius": 0,
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingBottom": 4,
      "progressBarOpacity": 1,
      "toolTipBorderSize": 1,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadBorderColor": "#000000",
      "toolTipDisplayTime": 600,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowColor": "#000000",
      "paddingLeft": 0,
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "height": "100%",
      "toolTipFontWeight": "normal",
      "playbackBarLeft": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadHeight": 15,
      "playbackBarHeadShadowHorizontalLength": 0,
      "width": "100%",
      "transitionDuration": 500,
      "playbackBarRight": 0,
      "progressBottom": 2,
      "toolTipPaddingLeft": 6,
      "toolTipOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "minHeight": 50,
      "playbackBarBorderRadius": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipShadowSpread": 0,
      "progressBarBorderColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "minWidth": 100,
      "playbackBarHeadOpacity": 1,
      "id": "viewer_uidA898439E_B0B2_EA90_41D9_F0B2A1B4C658",
      "toolTipShadowOpacity": 1,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "progressHeight": 10,
      "progressRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingTop": 4,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressOpacity": 1,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarHeadShadow": true,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBorderSize": 0
     }
    }
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "PlayList_A1A6E222_AFB1_A5B1_41E1_EB862E36C1F3",
  "items": [
   {
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.viewer_uidA1B4F1F3_AFB1_A697_41E3_2D8D1C0C33D7VideoPlayer)",
    "media": "this.video_8500D0C9_95F5_2F11_41D6_B86D008F7570",
    "player": {
     "class": "VideoPlayer",
     "displayPlaybackBar": true,
     "id": "viewer_uidA1B4F1F3_AFB1_A697_41E3_2D8D1C0C33D7VideoPlayer",
     "viewerArea": {
      "class": "ViewerArea",
      "borderSize": 0,
      "borderRadius": 0,
      "paddingRight": 0,
      "playbackBarBackgroundOpacity": 1,
      "progressBackgroundColorDirection": "vertical",
      "playbackBarProgressBackgroundColor": [
       "#3399FF"
      ],
      "progressBorderRadius": 0,
      "toolTipShadowColor": "#333333",
      "toolTipFontSize": 12,
      "progressBorderSize": 0,
      "playbackBarProgressBorderSize": 0,
      "shadow": false,
      "playbackBarBottom": 0,
      "progressLeft": 0,
      "playbackBarProgressBackgroundColorDirection": "vertical",
      "toolTipBorderRadius": 3,
      "playbackBarProgressBorderColor": "#000000",
      "playbackBarHeadShadowVerticalLength": 0,
      "toolTipFontStyle": "normal",
      "toolTipBorderColor": "#767676",
      "progressBarBackgroundColorDirection": "vertical",
      "playbackBarOpacity": 1,
      "playbackBarProgressOpacity": 1,
      "progressBackgroundOpacity": 1,
      "playbackBarProgressBorderRadius": 0,
      "progressBarBorderRadius": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipPaddingRight": 6,
      "toolTipShadowBlurRadius": 3,
      "playbackBarHeadShadowOpacity": 0.7,
      "toolTipFontColor": "#606060",
      "progressBorderColor": "#000000",
      "playbackBarHeadBorderSize": 0,
      "playbackBarHeadBorderRadius": 0,
      "paddingBottom": 0,
      "toolTipShadowVerticalLength": 0,
      "playbackBarHeight": 10,
      "playbackBarBackgroundColor": [
       "#FFFFFF"
      ],
      "toolTipPaddingBottom": 4,
      "progressBarOpacity": 1,
      "toolTipBorderSize": 1,
      "progressBackgroundColor": [
       "#FFFFFF"
      ],
      "playbackBarHeadBorderColor": "#000000",
      "toolTipDisplayTime": 600,
      "toolTipShadowHorizontalLength": 0,
      "playbackBarHeadShadowColor": "#000000",
      "paddingLeft": 0,
      "toolTipFontFamily": "Arial",
      "paddingTop": 0,
      "progressBackgroundColorRatios": [
       0
      ],
      "playbackBarHeadBackgroundColor": [
       "#111111",
       "#666666"
      ],
      "height": "100%",
      "toolTipFontWeight": "normal",
      "playbackBarLeft": 0,
      "playbackBarHeadWidth": 6,
      "playbackBarBackgroundColorDirection": "vertical",
      "playbackBarHeadHeight": 15,
      "playbackBarHeadShadowHorizontalLength": 0,
      "width": "100%",
      "transitionDuration": 500,
      "playbackBarRight": 0,
      "progressBottom": 2,
      "toolTipPaddingLeft": 6,
      "toolTipOpacity": 1,
      "playbackBarHeadShadowBlurRadius": 3,
      "minHeight": 50,
      "playbackBarBorderRadius": 0,
      "progressBarBackgroundColorRatios": [
       0
      ],
      "toolTipShadowSpread": 0,
      "progressBarBorderColor": "#000000",
      "toolTipTextShadowBlurRadius": 3,
      "playbackBarProgressBackgroundColorRatios": [
       0
      ],
      "progressBarBackgroundColor": [
       "#3399FF"
      ],
      "minWidth": 100,
      "playbackBarHeadOpacity": 1,
      "id": "viewer_uidA896539E_B0B2_EA90_41E3_D1C1FFD7606D",
      "toolTipShadowOpacity": 1,
      "progressBarBorderSize": 0,
      "transitionMode": "blending",
      "progressHeight": 10,
      "progressRight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipPaddingTop": 4,
      "playbackBarHeadBackgroundColorDirection": "vertical",
      "playbackBarHeadBackgroundColorRatios": [
       0,
       1
      ],
      "progressOpacity": 1,
      "playbackBarBorderColor": "#FFFFFF",
      "playbackBarHeadShadow": true,
      "toolTipTextShadowOpacity": 0,
      "playbackBarBorderSize": 0
     }
    },
    "start": "this.viewer_uidA1B4F1F3_AFB1_A697_41E3_2D8D1C0C33D7VideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.PlayList_A1A6E222_AFB1_A5B1_41E1_EB862E36C1F3, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.PlayList_A1A6E222_AFB1_A5B1_41E1_EB862E36C1F3, 0, this.video_8500D0C9_95F5_2F11_41D6_B86D008F7570)"
   }
  ]
 },
 {
  "class": "Window",
  "titleFontColor": "#000000",
  "borderSize": 0,
  "borderRadius": 5,
  "closeButtonPaddingRight": 0,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "closeButtonIconColor": "#B2B2B2",
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyPaddingRight": 0,
  "closeButtonBackgroundColor": [],
  "closeButtonPaddingBottom": 0,
  "headerPaddingRight": 0,
  "closeButtonPressedBackgroundColor": [],
  "gap": 10,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "horizontalAlign": "center",
  "closeButtonIconWidth": 40,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "headerBorderColor": "#000000",
  "headerBackgroundOpacity": 0,
  "title": "",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadow": true,
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColorDirection": "horizontal",
  "closeButtonRollOverBackgroundOpacity": 1,
  "closeButtonIconHeight": 40,
  "closeButtonPressedIconLineWidth": 3,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPressedBorderSize": 0,
  "creationPolicy": "delayed",
  "headerPaddingTop": 10,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilOpacity": 0.61,
  "paddingBottom": 0,
  "closeButtonBorderRadius": 11,
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#FFFFFF",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPaddingLeft": 0,
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "Container",
    "borderRadius": 0,
    "backgroundColorDirection": "vertical",
    "paddingRight": 0,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "backgroundColorRatios": [],
    "verticalAlign": "top",
    "paddingLeft": 0,
    "contentOpaque": false,
    "paddingTop": 0,
    "height": "100%",
    "width": "100%",
    "backgroundColor": [],
    "gap": 10,
    "horizontalAlign": "left",
    "scrollBarWidth": 10,
    "shadow": false,
    "minHeight": 20,
    "scrollBarMargin": 2,
    "creationPolicy": "delayed",
    "layout": "absolute",
    "minWidth": 20,
    "id": "container_A898739E_B0B2_EA90_41C9_6FE468F9C999",
    "data": {
     "name": "Container11784"
    },
    "paddingBottom": 0,
    "scrollBarOpacity": 0.5,
    "children": [
     "this.viewer_uidA898439E_B0B2_EA90_41D9_F0B2A1B4C658",
     {
      "class": "Container",
      "borderRadius": 0,
      "backgroundColorDirection": "vertical",
      "backgroundColor": [],
      "borderSize": 0,
      "scrollBarColor": "#FFFFFF",
      "backgroundColorRatios": [],
      "verticalAlign": "bottom",
      "paddingRight": 0,
      "paddingLeft": 0,
      "contentOpaque": true,
      "paddingTop": 0,
      "height": "30%",
      "gap": 10,
      "horizontalAlign": "left",
      "scrollBarWidth": 7,
      "minHeight": 20,
      "shadow": false,
      "scrollBarMargin": 2,
      "creationPolicy": "delayed",
      "layout": "vertical",
      "minWidth": 20,
      "bottom": 0,
      "data": {
       "name": "Container11785"
      },
      "paddingBottom": 0,
      "left": 0,
      "right": 0,
      "children": [
       {
        "class": "HTMLText",
        "borderRadius": 0,
        "backgroundColorDirection": "vertical",
        "paddingRight": 10,
        "borderSize": 0,
        "scrollBarColor": "#000000",
        "backgroundColorRatios": [
         0
        ],
        "paddingLeft": 10,
        "paddingTop": 5,
        "width": "100%",
        "backgroundColor": [
         "#000000"
        ],
        "hideEffect": {
         "class": "FadeOutEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "scrollBarWidth": 10,
        "shadow": false,
        "minHeight": 0,
        "scrollBarMargin": 2,
        "visible": false,
        "html": "",
        "minWidth": 0,
        "id": "htmltext_A89A439E_B0B2_EA90_41E0_140350BF412D",
        "data": {
         "name": "HTMLText11786"
        },
        "paddingBottom": 5,
        "showEffect": {
         "class": "FadeInEffect",
         "easing": "cubic_in_out",
         "duration": 250
        },
        "scrollBarOpacity": 0.5,
        "scrollBarVisible": "rollOver",
        "backgroundOpacity": 0.7
       }
      ],
      "scrollBarVisible": "rollOver",
      "scrollBarOpacity": 0.5,
      "backgroundOpacity": 0.3,
      "overflow": "scroll"
     },
     {
      "class": "IconButton",
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "mode": "push",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "iconURL": "skin/album_left.png",
      "shadow": false,
      "minHeight": 0,
      "top": "45%",
      "click": "this.loadFromCurrentMediaPlayList(this.album_84124731_95FD_1171_41DC_F340AAA92926_AlbumPlayList, -1)",
      "visible": false,
      "minWidth": 0,
      "cursor": "hand",
      "id": "component_A896839E_B0B2_EA90_4184_B7C253B811F7",
      "data": {
       "name": "IconButton11787"
      },
      "transparencyActive": false,
      "paddingBottom": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "left": 10,
      "backgroundOpacity": 0
     },
     {
      "class": "IconButton",
      "borderRadius": 0,
      "paddingRight": 0,
      "borderSize": 0,
      "hideEffect": {
       "class": "FadeOutEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "mode": "push",
      "verticalAlign": "middle",
      "paddingLeft": 0,
      "paddingTop": 0,
      "horizontalAlign": "center",
      "iconURL": "skin/album_right.png",
      "minHeight": 0,
      "shadow": false,
      "top": "45%",
      "click": "this.loadFromCurrentMediaPlayList(this.album_84124731_95FD_1171_41DC_F340AAA92926_AlbumPlayList, 1)",
      "visible": false,
      "minWidth": 0,
      "cursor": "hand",
      "id": "component_A896939E_B0B2_EA90_41C7_0A0E485E234C",
      "data": {
       "name": "IconButton11788"
      },
      "transparencyActive": false,
      "paddingBottom": 0,
      "showEffect": {
       "class": "FadeInEffect",
       "easing": "cubic_in_out",
       "duration": 250
      },
      "right": 10,
      "backgroundOpacity": 0
     }
    ],
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0.3,
    "overflow": "scroll"
   }
  ],
  "backgroundOpacity": 1,
  "overflow": "scroll",
  "contentOpaque": false,
  "closeButtonPressedBackgroundOpacity": 1,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titleFontStyle": "normal",
  "shadowVerticalLength": 0,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 0,
  "width": 400,
  "closeButtonBorderSize": 0,
  "paddingLeft": 0,
  "height": 600,
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 10,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundOpacity": 1,
  "shadowHorizontalLength": 3,
  "titlePaddingBottom": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarWidth": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "titlePaddingRight": 5,
  "minHeight": 20,
  "scrollBarMargin": 2,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 2,
  "closeButtonBackgroundColorDirection": "vertical",
  "bodyBackgroundColorDirection": "vertical",
  "close": "this.playList_A24C81E4_AFB1_A6B0_41E0_B0EF7232312F.set('selectedIndex', -1);",
  "bodyBackgroundOpacity": 0,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_84AD0936_95FD_1173_41BA_DFB76BF7D610",
  "minWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBorderColor": "#000000",
  "headerBorderSize": 0,
  "shadowSpread": 1,
  "shadowOpacity": 0.5,
  "closeButtonPaddingTop": 0,
  "titleFontWeight": "normal",
  "data": {
   "name": "Window5610"
  },
  "shadowBlurRadius": 6,
  "footerBackgroundOpacity": 0,
  "bodyPaddingBottom": 0,
  "closeButtonRollOverIconLineWidth": 1,
  "closeButtonRollOverBackgroundColor": [],
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "closeButtonRollOverBorderColor": "#000000",
  "veilColorRatios": [
   0,
   1
  ],
  "scrollBarVisible": "rollOver",
  "footerHeight": 5,
  "titleTextDecoration": "none"
 },
 {
  "class": "Window",
  "borderSize": 0,
  "borderRadius": 5,
  "closeButtonPaddingRight": 5,
  "backgroundColorDirection": "vertical",
  "closeButtonIconColor": "#000000",
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "paddingRight": 0,
  "modal": true,
  "titlePaddingTop": 5,
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "backgroundColor": [],
  "bodyPaddingRight": 0,
  "closeButtonBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "closeButtonPaddingBottom": 5,
  "headerPaddingRight": 0,
  "closeButtonPressedBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "gap": 10,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "horizontalAlign": "center",
  "closeButtonIconWidth": 20,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "closeButtonRollOverBackgroundColorDirection": "vertical",
  "headerBackgroundOpacity": 0,
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadow": true,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "closeButtonRollOverBackgroundOpacity": 0.3,
  "closeButtonIconHeight": 20,
  "closeButtonPressedIconLineWidth": 5,
  "titlePaddingLeft": 5,
  "bodyPaddingLeft": 0,
  "closeButtonPressedBorderSize": 0,
  "creationPolicy": "delayed",
  "headerPaddingTop": 10,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "closeButtonBorderRadius": 0,
  "closeButtonRollOverBorderSize": 0,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedBackgroundColorDirection": "vertical",
  "closeButtonRollOverIconColor": "#666666",
  "closeButtonPressedBorderColor": "#000000",
  "closeButtonPaddingLeft": 5,
  "titleFontFamily": "Arial",
  "children": [
   "this.viewer_uidA896539E_B0B2_EA90_41E3_D1C1FFD7606D"
  ],
  "backgroundOpacity": 1,
  "overflow": "scroll",
  "contentOpaque": false,
  "closeButtonPressedBackgroundOpacity": 0.3,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "shadowVerticalLength": 0,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 0,
  "closeButtonBorderSize": 0,
  "paddingLeft": 0,
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonPressedIconColor": "#888888",
  "headerPaddingLeft": 10,
  "shadowHorizontalLength": 3,
  "footerBackgroundColorDirection": "vertical",
  "closeButtonBackgroundOpacity": 0.3,
  "titlePaddingBottom": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "scrollBarWidth": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "titlePaddingRight": 5,
  "minHeight": 20,
  "scrollBarMargin": 2,
  "headerPaddingBottom": 5,
  "closeButtonIconLineWidth": 5,
  "closeButtonRollOverBorderColor": "#000000",
  "bodyBackgroundColorDirection": "vertical",
  "close": "this.PlayList_A1A6E222_AFB1_A5B1_41E1_EB862E36C1F3.set('selectedIndex', -1);",
  "bodyBackgroundOpacity": 0,
  "closeButtonBackgroundColorDirection": "vertical",
  "closeButtonRollOverBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_A5A38935_AFAE_E790_41B1_E8D3C83C757E",
  "shadowSpread": 1,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "closeButtonBorderColor": "#000000",
  "closeButtonPaddingTop": 5,
  "minWidth": 20,
  "shadowOpacity": 0.5,
  "closeButtonRollOverIconLineWidth": 5,
  "data": {
   "name": "Window336"
  },
  "shadowBlurRadius": 6,
  "footerBackgroundOpacity": 0,
  "bodyPaddingBottom": 0,
  "closeButtonRollOverBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titleFontSize": 14,
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "scrollBarVisible": "rollOver",
  "footerHeight": 5
 },
 "this.popup_8B6744DD_8494_90B6_41DD_22F8537A3F31",
 "this.popup_94AA8C7A_84AB_B073_41D8_CE6828885046",
 {
  "class": "Window",
  "bodyBorderSize": 0,
  "borderSize": 0,
  "borderRadius": 5,
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "titlePaddingTop": 5,
  "backgroundColorRatios": [],
  "verticalAlign": "middle",
  "paddingRight": 0,
  "modal": true,
  "closeButtonIconColor": "#000000",
  "hideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "bodyPaddingRight": 5,
  "closeButtonBackgroundColor": [],
  "headerPaddingRight": 30,
  "closeButtonPressedBackgroundColor": [
   "#3A1D1F"
  ],
  "gap": 10,
  "veilShowEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "horizontalAlign": "center",
  "closeButtonIconWidth": 12,
  "veilColor": [
   "#000000",
   "#000000"
  ],
  "titleFontColor": "#000000",
  "headerBorderColor": "#000000",
  "headerBackgroundOpacity": 1,
  "title": "TITLE: TABLE",
  "veilHideEffect": {
   "class": "FadeOutEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "shadow": true,
  "bodyBackgroundColor": [
   "#FFFFFF",
   "#DDDDDD",
   "#FFFFFF"
  ],
  "veilColorDirection": "horizontal",
  "creationPolicy": "delayed",
  "closeButtonIconHeight": 12,
  "bodyPaddingLeft": 5,
  "titlePaddingLeft": 5,
  "headerPaddingTop": 20,
  "shadowColor": "#000000",
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 500
  },
  "veilOpacity": 0.4,
  "paddingBottom": 0,
  "closeButtonBorderRadius": 11,
  "headerBackgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "closeButtonRollOverIconColor": "#FFFFFF",
  "titleFontFamily": "Arial",
  "children": [
   {
    "class": "HTMLText",
    "borderRadius": 0,
    "paddingRight": 10,
    "borderSize": 0,
    "scrollBarColor": "#000000",
    "paddingLeft": 10,
    "width": "100%",
    "paddingTop": 10,
    "height": "100%",
    "scrollBarWidth": 10,
    "shadow": false,
    "minHeight": 0,
    "scrollBarMargin": 2,
    "html": "<div style=\"text-align:left; color:#000; \"><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Adobe Caslon Pro Bold';\"><B>DESCRIPTION:</B></SPAN></SPAN></DIV><DIV STYLE=\"text-align:center;\"><SPAN STYLE=\"letter-spacing:0px;color:#000000;font-size:12px;font-family:Arial, Helvetica, sans-serif;\"><SPAN STYLE=\"font-size:30px;font-family:'Adobe Caslon Pro Bold';\"><B>Fancy Glass And Metal Table</B></SPAN></SPAN></DIV></div>",
    "minWidth": 0,
    "id": "htmlText_uidA896039E_B0B2_EA90_41CD_BAD432E70F1D",
    "data": {
     "name": "HTMLText11790"
    },
    "paddingBottom": 10,
    "scrollBarOpacity": 0.5,
    "scrollBarVisible": "rollOver",
    "backgroundOpacity": 0
   }
  ],
  "backgroundOpacity": 1,
  "overflow": "scroll",
  "contentOpaque": false,
  "headerBackgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "titleFontStyle": "normal",
  "shadowVerticalLength": 0,
  "scrollBarColor": "#000000",
  "bodyPaddingTop": 5,
  "width": 500,
  "paddingLeft": 0,
  "height": 200,
  "paddingTop": 0,
  "footerBackgroundColorRatios": [
   0,
   0.9,
   1
  ],
  "closeButtonPressedBackgroundColorRatios": [
   0
  ],
  "headerPaddingLeft": 30,
  "footerBackgroundColorDirection": "vertical",
  "shadowHorizontalLength": 3,
  "titlePaddingBottom": 5,
  "footerBackgroundColor": [
   "#FFFFFF",
   "#EEEEEE",
   "#DDDDDD"
  ],
  "closeButtonPressedIconColor": "#FFFFFF",
  "scrollBarWidth": 10,
  "layout": "vertical",
  "closeButtonBackgroundColorRatios": [],
  "titlePaddingRight": 5,
  "minHeight": 20,
  "scrollBarMargin": 2,
  "headerPaddingBottom": 30,
  "closeButtonIconLineWidth": 2,
  "bodyBackgroundColorDirection": "vertical",
  "bodyBorderColor": "#000000",
  "bodyBackgroundOpacity": 1,
  "closeButtonRollOverBackgroundColorRatios": [
   0
  ],
  "bodyBackgroundColorRatios": [
   0,
   0.5,
   1
  ],
  "id": "window_9427296B_84BC_F192_41C4_0F6884138A48",
  "minWidth": 20,
  "headerBackgroundColorDirection": "vertical",
  "headerVerticalAlign": "middle",
  "headerBorderSize": 0,
  "shadowSpread": 1,
  "shadowOpacity": 0.5,
  "titleFontWeight": "bold",
  "data": {
   "name": "Window6285"
  },
  "shadowBlurRadius": 6,
  "titleTextDecoration": "none",
  "bodyPaddingBottom": 5,
  "closeButtonRollOverBackgroundColor": [
   "#C13535"
  ],
  "titleFontSize": 30,
  "scrollBarOpacity": 0.5,
  "veilColorRatios": [
   0,
   1
  ],
  "scrollBarVisible": "rollOver",
  "footerHeight": 5
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A88313CD_B0B2_EAF0_41E3_2023C573B93E",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -11.93,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8FFE3DC_B0B2_EA91_41E3_2166688DF0A6",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -80.9,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8FA73EC_B0B2_EAB0_41BC_C1DA43D44BF3",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_A8FA03EC_B0B2_EAB0_41A1_138D9473F075"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -101.59,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8F193FC_B0B2_EA90_41D0_9EA94B3A45AF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 179.11,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8EF640B_B0B2_ED77_4186_22AF16770052",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -158.13,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8E4941B_B0B2_ED90_41C2_8F69A360B7FE",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 81.54,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8E3042A_B0B2_EDB1_41E0_8F0BAF1A4AFC",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -153.51,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8D8643A_B0B2_ED91_41B4_97F261DC0AF9",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -8.75,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8D3F44A_B0B2_EDF0_41B1_C2F08B277158",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "id": "sequence_A8D3944A_B0B2_EDF0_41E5_D92F54A87F77"
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 174.08,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A8C4A459_B0B2_ED93_41C0_E59FA667C33C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -112.61,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A93EF469_B0B2_EDB0_41B8_A300219CF646",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -102.05,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A9334479_B0B2_ED90_41BA_418A1D686690",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -153.99,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A9243479_B0B2_ED90_41D3_40126BFE0454",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 1.19,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A919E498_B0B2_EE90_41CE_CFA84B1CA4AD",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -96.2,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A9129498_B0B2_EE90_41DD_A8E56718333C",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -157.52,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A907A4A7_B0B2_EEBF_41E1_B918C695DFAF",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 173.57,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A97B34B7_B0B2_EE9F_41C7_3032DF5F6120",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -41.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A96C34E6_B0B2_EEB0_41E4_CADD752C43D5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 174.04,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A9636515_B0B2_EF90_41E4_41084457A232",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 176.69,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A951D534_B0B2_EF91_41DB_AE0D507C126F",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -37.26,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A944D563_B0B2_EFB0_41D4_1A77E0E38B24",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 3.2,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A9BA7592_B0B2_EE90_41E2_7FADB89896B5",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -109.17,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A9A855B1_B0B2_EE93_41C1_334289A346CB",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": 173.57,
   "pitch": 0
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_A999F5C1_B0B2_EEF0_41E3_FCEB29AAFB24",
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323000,
     "yawSpeed": 7.96
    },
    {
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5,
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 70,
   "yaw": -88.13,
   "pitch": 0
  }
 },
 {
  "data": {
   "label": "Bodies Of Evidence"
  },
  "class": "MediaAudio",
  "id": "audio_BB378B78_AF62_449F_41CF_09F1024B301E",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_BB378B78_AF62_449F_41CF_09F1024B301E.mp3",
   "oggUrl": "media/audio_BB378B78_AF62_449F_41CF_09F1024B301E.ogg"
  },
  "autoplay": true
 },
 "this.audio_BE74552C_AF22_CCB0_41E4_D645F620F751",
 "this.audio_A3C651B1_AEE6_C791_41CD_F4596766A655"
], "children": [
 {
  "class": "ViewerArea",
  "borderSize": 0,
  "borderRadius": 0,
  "paddingRight": 0,
  "playbackBarBackgroundOpacity": 1,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "progressBorderRadius": 0,
  "toolTipShadowColor": "#333333",
  "toolTipFontSize": 12,
  "progressBorderSize": 0,
  "playbackBarProgressBorderSize": 0,
  "shadow": false,
  "playbackBarBottom": 5,
  "progressLeft": 0,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipBorderRadius": 3,
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderColor": "#767676",
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarOpacity": 1,
  "playbackBarProgressOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarProgressBorderRadius": 0,
  "progressBarBorderRadius": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipPaddingRight": 6,
  "toolTipShadowBlurRadius": 3,
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipFontColor": "#606060",
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadBorderRadius": 0,
  "paddingBottom": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarHeight": 10,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "toolTipPaddingBottom": 4,
  "progressBarOpacity": 1,
  "toolTipBorderSize": 1,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadBorderColor": "#000000",
  "toolTipDisplayTime": 600,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadShadowColor": "#000000",
  "paddingLeft": 0,
  "toolTipFontFamily": "Arial",
  "paddingTop": 0,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "height": "100%",
  "toolTipFontWeight": "normal",
  "playbackBarLeft": 0,
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadHeight": 15,
  "playbackBarHeadShadowHorizontalLength": 0,
  "width": "100%",
  "transitionDuration": 500,
  "playbackBarRight": 0,
  "progressBottom": 0,
  "toolTipPaddingLeft": 6,
  "toolTipOpacity": 1,
  "playbackBarHeadShadowBlurRadius": 3,
  "minHeight": 50,
  "playbackBarBorderRadius": 0,
  "progressBarBackgroundColorRatios": [
   0
  ],
  "toolTipShadowSpread": 0,
  "progressBarBorderColor": "#000000",
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "minWidth": 100,
  "playbackBarHeadOpacity": 1,
  "id": "MainViewer",
  "toolTipShadowOpacity": 1,
  "progressBarBorderSize": 0,
  "transitionMode": "blending",
  "progressHeight": 10,
  "progressRight": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipPaddingTop": 4,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressOpacity": 1,
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadShadow": true,
  "toolTipTextShadowOpacity": 0,
  "playbackBarBorderSize": 0
 },
 {
  "class": "UIComponent",
  "backgroundColorDirection": "vertical",
  "backgroundColor": [
   "#000000"
  ],
  "borderSize": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [
   0
  ],
  "paddingRight": 0,
  "paddingLeft": 0,
  "paddingTop": 0,
  "minHeight": 0,
  "shadow": false,
  "top": 0,
  "visible": false,
  "minWidth": 0,
  "bottom": 0,
  "id": "veilPopupPanorama",
  "data": {
   "name": "UIComponent11791"
  },
  "paddingBottom": 0,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "left": 0,
  "right": 0,
  "backgroundOpacity": 0.55
 },
 {
  "class": "ZoomImage",
  "backgroundColorDirection": "vertical",
  "backgroundColor": [],
  "borderSize": 0,
  "borderRadius": 0,
  "backgroundColorRatios": [],
  "paddingRight": 0,
  "paddingLeft": 0,
  "paddingTop": 0,
  "scaleMode": "custom",
  "minHeight": 0,
  "shadow": false,
  "top": 0,
  "visible": false,
  "minWidth": 0,
  "bottom": 0,
  "id": "zoomImagePopupPanorama",
  "data": {
   "name": "ZoomImage11792"
  },
  "paddingBottom": 0,
  "left": 0,
  "right": 0,
  "backgroundOpacity": 1
 },
 {
  "class": "CloseButton",
  "borderRadius": 0,
  "backgroundColorDirection": "vertical",
  "paddingRight": 5,
  "borderSize": 0,
  "backgroundColorRatios": [
   0,
   0.1,
   1
  ],
  "verticalAlign": "middle",
  "backgroundColor": [
   "#DDDDDD",
   "#EEEEEE",
   "#FFFFFF"
  ],
  "iconHeight": 20,
  "paddingLeft": 5,
  "mode": "push",
  "paddingTop": 5,
  "iconWidth": 20,
  "gap": 5,
  "fontSize": 12,
  "horizontalAlign": "center",
  "iconColor": "#000000",
  "textDecoration": "none",
  "minHeight": 0,
  "shadow": false,
  "fontFamily": "Arial",
  "top": 10,
  "fontWeight": "normal",
  "rollOverIconColor": "#666666",
  "visible": false,
  "borderColor": "#000000",
  "minWidth": 0,
  "cursor": "hand",
  "fontColor": "#FFFFFF",
  "id": "closeButtonPopupPanorama",
  "fontStyle": "normal",
  "data": {
   "name": "CloseButton11793"
  },
  "shadowBlurRadius": 6,
  "shadowColor": "#000000",
  "paddingBottom": 5,
  "iconLineWidth": 5,
  "showEffect": {
   "class": "FadeInEffect",
   "easing": "cubic_in_out",
   "duration": 350
  },
  "iconBeforeLabel": true,
  "shadowSpread": 1,
  "pressedIconColor": "#888888",
  "label": "",
  "right": 10,
  "backgroundOpacity": 0.3,
  "layout": "horizontal"
 }
], 
 "class": "Player",
 "borderRadius": 0,
 "paddingRight": 0,
 "borderSize": 0,
 "scrollBarColor": "#000000",
 "verticalAlign": "top",
 "vrPolyfillScale": 0.5,
 "paddingLeft": 0,
 "contentOpaque": false,
 "paddingTop": 0,
 "height": "100%",
 "mouseWheelEnabled": true,
 "width": "100%",
 "gap": 10,
 "horizontalAlign": "left",
 "mobileMipmappingEnabled": false,
 "scrollBarWidth": 10,
 "shadow": false,
 "minHeight": 20,
 "scrollBarMargin": 2,
 "creationPolicy": "delayed",
 "layout": "absolute",
 "minWidth": 20,
 "scripts": {
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "registerKey": function(key, value){  window[key] = value; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "existsKey": function(key){  return key in window; },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; }
 },
 "id": "rootPlayer",
 "data": {
  "name": "Player431"
 },
 "paddingBottom": 0,
 "backgroundPreloadEnabled": true,
 "start": "this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarOpacity": 0.5,
 "scrollBarVisible": "rollOver",
 "overflow": "visible"
})