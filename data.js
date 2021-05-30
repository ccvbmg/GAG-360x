var APP_DATA = {
  "scenes": [
    {
      "id": "0-haupteingang",
      "name": "Haupteingang",
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
        "yaw": -0.45004804520668173,
        "pitch": -0.12467855960355934,
        "fov": 1.1313704520441656
      },
      "linkHotspots": [
        {
          "yaw": -0.8455953431444279,
          "pitch": -0.0038980727313777663,
          "rotation": 0,
          "target": "1-auenansicht-biologie"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.4407120116584089,
          "pitch": 0.20255675635175052,
          "title": "HERZLICH WILLKOMMEN",
          "text": "Genießen Sie Ihren virtuellen Rundgang GAG 360°!"
        }
      ]
    },
    {
      "id": "1-auenansicht-biologie",
      "name": "Außenansicht Biologie",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6840710351908115,
          "pitch": -0.07308855939047021,
          "rotation": 0,
          "target": "0-haupteingang"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7207513608009286,
          "pitch": 0.13023429607975245,
          "title": "Außenansicht Biologie",
          "text": "Hier sehen Sie die Außenansicht unserer neu gestalteten Biologie."
        }
      ]
    }
  ],
  "name": "GAG 360°",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
