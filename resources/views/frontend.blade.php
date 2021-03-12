<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name ="csrf-token" content="{{ csrf_token() }}">
        <title>Soho</title>


        <!-- Fonts -->

        <!-- Styles -->
        <link rel="stylesheet" href="css/app.css">


    </head>
    <body>
        <div id="root"></div>
        


        <script type="text/javascript" src="js/app.js"></script>
        <script type="text/javascript" src="js/index.js"></script>
    </body>
</html>
