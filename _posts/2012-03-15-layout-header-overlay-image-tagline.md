---
title: 'Layout: Header Image Overlay with Custom Tagline'
date: 2012-03-15 00:00:00 Z
categories:
- Layout
- Uncategorized
tags:
- edge case
- image
- layout
tagline: This is a custom tagline content which overrides the *default* page excerpt.
header:
  overlay_image: "/assets/images/unsplash-image-1.jpg"
  caption: 'Photo credit: [**Unsplash**](https://unsplash.com)'
last_modified_at: 2020-01-07 18:05:25 Z
---

This post should display a **header with an overlay image** and **custom tagline**, if the theme supports it.

Non-square images can provide some unique styling issues.

This post tests overlay header images with custom `page.tagline`.

```yaml
tagline: "This is a custom tagline content which overrides the default page excerpt."
header:
  overlay_image: /assets/images/unsplash-image-1.jpg
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
```