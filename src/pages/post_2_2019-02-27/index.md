---
path: "blog-two"
date: "2019-02-27"
title: "Portfolio v2.0 with React and Gatsby (with in-site blog functionality!)"
author: "Nikhil Asrani"
---

As an aspiring front-end web developer, It is important that I have a unique/memorable portfolio as it would be the first impression I would be creating on potential clients/companies.

The first portfolio I made was made following some basic HTML and CSS tutorials. It did look good but the problem was that it was very simple, something that everyone could make. I had now reached a skill-level in React where I feel like I could utilisesome creativity and put in some personalised effort into my site. This portfolio v2.0 is a result of some of the skills I haveacquired so far.

### What frameworks/libraries did I use?

![React + Gatsby](https://cdn-images-1.medium.com/max/2000/1*mll0qbSnMy8-oVbNYrPO6g.png)_React + Gatsby_

I ended up going with React and Gatsby for implementing this. Gatsby is somewhat of a go-to tool for people building static webpages on React and Gatsby has been on my learning backlog for a while now.

The reasons I chose Gatsby are because:

1. Gatsby is a static website generator that uses React. Since I’ve been learning React, this would be a good way to apply theknowledge acquired so far and keep building on it with further iterations.

2. Gatsby is super-fast and responsive. It’s built keeping optimisation of static sites in mind which would give me really good performance.

3. Gatsby makes it really easy to host your own blog on your website. (which is something I was interested in trying out)

### Gatsby plugins used

Gatsby plugins can be installed using the Node Package Manager(npm). Whenever we add a new plugin, we need to update the gatsby-config.js file with the new plugin so Gatsby recognises and uses it. We use **_back-ticks_**. Below is the list of plugins that I used for this project.

    plugins: [

    `gatsby-plugin-react-helmet`,

    "gatsby-transformer-remark",

    "gatsby-plugin-catch-links",

    {resolve: "gatsby-source-filesystem",options: {name: "pages",

    path: `${__dirname}/src/pages`,},},

    {resolve: `gatsby-source-filesystem`,options: {name: `images`,

    path: `${__dirname}/src/images`,},},

    `gatsby-transformer-sharp`,

    `gatsby-plugin-sharp`,

    {resolve: `gatsby-plugin-manifest`,options: {name: `gatsby-starter-default`,short_name: `starter`,start_url: `/`,background_color: `#663399`,theme_color: `#663399`,display: `minimal-ui`,icon: `src/images/gatsby-icon.png`, // This path is relative tothe root of the site.},},

    {resolve: `gatsby-plugin-prefetch-google-fonts`,options: {fonts: [{family: `Nunito`,subsets: [`latin`],},{family:`Open Sans`,variants: [`400`, `700`],}
    ,],},},]

- gatsby-plugin-react-helmet: allows for modification of the head tags.

- gatsby-plugin-catch-links**: **Intercepts local links from markdown and other non-react pages, and does a client-side pushState to avoid the browser having to refresh the page.

- gatsby-source-filesystem: sources data about files from your computer’s file system.

- gatsby-transformer-remark: this transforms blog posts written in markdown .md files on the local disk into HTML for rendering.

- gatsby-plugin-prefetch-google-fonts: A Gatsby plugin to download and prefetch [Google Fonts](https://fonts.google.com/). Canincrease performance as opposed to loading webfonts from Google’s external stylesheet.

The site is currently live at [https://www.nikhil.live/](https://www.nikhil.live/). There clearly is a lot of work left to do.I will keep updating this article and periodically document different aspects of my progress.
Nikhils-MacBook-Pro:blog nikhilasrani\$
