# My App

## Framework7 CLI Options

Framework7 app created with following options:

```
{
  "type": [
    "web"
  ],
  "name": "My App",
  "framework": "core",
  "template": "single-view",
  "bundler": "webpack",
  "cssPreProcessor": false,
  "customColor": false,
  "iconFonts": true,
  "cwd": "C:\\Users\\arduino\\Desktop\\prova1"
}
```

## NPM Scripts

* `npm start` - run development server
* `npm run build-prod` - build web app for production
* `npm run build-dev` - build web app using development mode (faster build without minification and optimization)
## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 generate-assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 generate-assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)


* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi