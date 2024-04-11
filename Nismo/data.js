var APP_DATA = {
  "scenes": [
    {
      "id": "0-nismo",
      "name": "Nismo",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 1.0767056574355607,
        "pitch": -0.07618193982579591,
        "fov": 1.032591565028022
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-r34-z-tune",
      "name": "R34 Z-Tune",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1408,
      "initialViewParameters": {
        "yaw": 0.028495171461131008,
        "pitch": 0.3689178461390732,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 2.8288193493835703,
          "pitch": 0.11508103074851483,
          "rotation": 5.497787143782138,
          "target": "0-nismo"
        },
        {
          "yaw": 0.09096939885506572,
          "pitch": 0.2572605077052046,
          "rotation": 0,
          "target": "2-r390"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.008848953741369,
          "pitch": 0.08111329403132927,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "2-r390",
      "name": "R390",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 1.780550442068873,
          "pitch": 0.10352552232756373,
          "rotation": 0,
          "target": "3-wall"
        },
        {
          "yaw": -2.025432701122231,
          "pitch": 0.11518385002582221,
          "rotation": 0,
          "target": "1-r34-z-tune"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.08370092612191904,
          "pitch": -0.21209230101692356,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-wall",
      "name": "Wall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.015684339071960096,
        "pitch": 0.10452892250712686,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
