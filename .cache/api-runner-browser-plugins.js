module.exports = [{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":800,"withWebp":true,"tracedSVG":{"color":"coral","turnPolicy":"majority","turdSize":100,"optCurve":true,"optTolerance":0.4,"threshold":-1,"blackOnWhite":true,"background":"transparent"},"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"backgroundColor":"white","quality":50,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Loner Reviews","short_name":"LonerR","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"standalone","icon":"src/images/icon.png","crossOrigin":"use-credentials","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","include_favicon":true,"cacheDigest":"3c5cc2383cb745b9a890210997fb4c0f"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
