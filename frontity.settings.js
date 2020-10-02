const settings = {
  "name": "scienceburks",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Scienceburks",
      "description": "Helping students!",
      "subject": 999,
      "tag": [1520]
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            // [
            //   "Blog",
            //   "/blog/"
            // ],
            [
              "About",
              "/about/"
            ],
            [
              "Contact",
              "/contact/"
            ],
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://public-api.wordpress.com/wp/v2/sites/scienceburks.wordpress.com"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
