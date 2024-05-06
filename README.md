# notebits Toolkit

## Overview

This library aims to provide some components useful in building note-taking apps of various sorts, building on the Angular Material library.
Currently, it includes one component for easily creating side panel layouts, i.e. apps with both left and right side panels.

### Demo

For a demo, please check out the [Maptio project](https://www.maptio.com/), where the side panels are used. I aim to add a demo to this library in the future.

### The notebits project

The library was first created as part of the notebits project, where I have been exploring how a digital platform for
note-taking could best support mental health, neurodiversity, and, in general,
support human minds to flourish. I hope to share more about the project in the future.

### Status

Currently, the library is used in production only in the [Maptio project](https://www.maptio.com/). It works well there, but suffers from being adjusted to the specific needs of that project. Over time, I hope to make it more generic and easier to use in other projects.

It is also worth noting that this codebase was extracted from the wider @notebit/notebits monorepo and so, for now, you may encounter some rough edges if you want to extend the library. My hope is that even in this current form it might be useful to others, even if just as code to be copied and pasted into your own project and amended there.

## Getting started

Install the library:

```sh
npm install @notebits/toolkit
```

Use it in your project:

```html
<nb-side-panel-layout>
  <p side-panel-start>
    Add left side panel content here
  </p>

  <div class="container">
    <router-outlet></router-outlet>
  </div>

  <p side-panel-end>
    Details side panel
  </p>
</nb-side-panel-layout>

```

For more details, check out how the library is used in the [Maptio project](https://github.com/maptio/maptio).
