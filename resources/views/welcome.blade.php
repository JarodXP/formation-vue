<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
       @vite(['resources/ts/app.ts'])
    </head>
    <body class="antialiased">
        <div id="app"></div>
    </body>
</html>
