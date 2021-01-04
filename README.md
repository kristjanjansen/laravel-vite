## Using Laravel 8.x with Vite 2.x

### About

This is a demo project showing off how to use recently launched [Vite 2](https://vitejs.dev/), super-fast ESM-based development environment, and production bundler with Laravel.

It relies on Vite's [backend integration](https://vitejs.dev/guide/backend-integration.html) support and configures Vite to support Laravel-specific file layout and naming conventions. It also removes the need for Webpack-based Laravel Mix.

> This experiment provides a basic JS + Vue + CSS support with hot reload, but there is also a [draft PR with Tailwind support](https://github.com/kristjanjansen/laravel-vite/pull/1).

### Getting started

#### Development

Using Valet

```
composer install
npm install
npm run dev
```

#### Production

```
npm run build
```

To test production build, change the `.env` file as follows and refresh the page.

```env
APP_ENV=production
```

### Implementation

The key code snippet to get Vite running both in development and production mode is in [./resources/views/welcome.blade.php](./resources/views/welcome.blade.php):

```blade
@php

$manifest = json_decode(@file_get_contents(public_path('/dist/manifest.json')), true);

@endphp

@if (env('APP_ENV') == 'local')
    <script type="module" src="http://localhost:3000/@vite/client"></script>
    <script type="module" src="http://localhost:3000/index.js"></script>
@else
    <script type="module" src="dist/{{ $manifest['index.js']['file'] }}"></script>
    <link href="dist/{{ $manifest['index.css']['file'] }}" rel="stylesheet" />
@endif
```

In the local environment, we include Vite's hot reloader and our main entrypoint (note that `http://localhost:3000/index.js`) refers to `/resources/js/index.js`)

In the production environment, we include the JS and CSS based on the JSON manifest entries.

### Notes

Vite's backend integration provides most of the features for a smooth integration between Laravel and Vite, but there are some exceptions:

### Incompatible manifest

Vite's [manifest generation](https://vitejs.dev/config/#build-manifest) is not compatible with Laravel Mix manifest, so you can not use Laravel's [mix()](https://laravel.com/docs/8.x/helpers#method-mix) helper.

To overcome this, this demo project relies on custom manifest parsing that has to be hardened and extracted to a separate utility in production sites.

### No JS entrypoint

Vite detects the main Javascript entrypoint from the `/index.html` file. There is also a [library mode](https://vitejs.dev/guide/build.html#library-mode), a way to specify a `.js` entrypoint instead of `.html,` but this mode is not preferrable for Laravel application.

To overcome this, this project includes a dummy `resources/js/index.html` file just for Vite to pick up the right entrypoint `resources/js/index.js`

### Conflicting /public directory

Vite copies all the contents of `/public` to the production `dist` directory.

In this project the production production directory is set at `/public/dist`.

As Laravel has an existing `/public` directory and copying its contents to its subdirectory leads to an infinite copying loop, the Vite is configured to have project root at `/resources/js`.

### Missing template compiler

By default, VueJS does not include an inline template compiler in the ESM module. This becomes problematic when one wants to "sprinkle" globally registered Vue components into a Blade template (vs. going full-on SPA).

In this project, Vite is configured to import a full VueJS build that also includes a template compiler.
