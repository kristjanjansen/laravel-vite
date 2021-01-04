## Using Laravel 8.x with Vite 2.x

### About

This is an demo project how to use recently launched [Vite 2](https://vitejs.dev/) ESM-based development environment and production bundler with Laravel.

It relies on Vite's [backend integration](https://vitejs.dev/guide/backend-integration.html) support and configures Vite to support Laravel-specific file layout and naming conventions. It also removes the need for Webpack-based Laravel Mix.

The experiment provides a basic JS + CSS support but there is also a branch showing off a Tailwind support. See also other features of Vite, including full Typescript support, CSS preprocessors, asset pipelines etc.

### Notes

Vite's background integration provides _almost_ everyting to have a smooth integration between Laravel and Vite but there are some exceptions:

### Incompatible manifest

Vite's [manifest genration](https://vitejs.dev/config/#build-manifest) is not compatible with Laravel Mix manifest so you can not use Laravel's [mix()](https://laravel.com/docs/8.x/helpers#method-mix) helper.

To overcome this, this demo project relies on custom manifest parsing that has to be hardened and extracted to a separate utility in production sites:

```blade
@php

$manifest = json_decode(@file_get_contents(public_path('/dist/manifest.json')), true);

@endphp

<link href="dist/{{ $manifest['index.css']['file'] }}" rel="stylesheet" />
```

### No JS entrypoint

Vite detects the main entrypoint to the JS from the `<root>/index.html` file. There is also a [library mode](https://vitejs.dev/guide/build.html#library-mode), a way to specify a `.js` entrypoint instead of `.html`, but this mode is not preferrable for Laravel application.
