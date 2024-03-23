<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Niuq.io - Platform for News Validation</title>

        {{--Custom styles--}}
        <link rel="icon" href="{{asset('images/niuq_bluepng.ico')}}">
        {{-- <link href="{{asset('css/app.css')}}" rel="stylesheet" type="text/css"> --}}
        <link href="{{ mix('css/app.css') }}" rel="stylesheet">
        <link href="{{asset('css/style.css')}}" rel="stylesheet" type="text/css">
        <style type="text/css">
            #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:600px;}
            /* Add your own Mailchimp form style overrides in your site stylesheet or in this style block.
               We recommend moving this block and the preceding CSS link to the HEAD of your HTML file. */
        </style>

        {{-- ads --}}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4622260386453148"
        crossorigin="anonymous"></script>
    </head>

    <body>
        <div id="root"></div>
    </body>

    {{-- Main JavaScript --}}
    {{-- <script src="{{asset('js/app.js?v='.time())}}" ></script> --}}
    <script src="{{ mix('js/app.js') }}"></script>
    {{-- Small icons --}}
    <script src="https://kit.fontawesome.com/27acfcf812.js" crossorigin="anonymous"></script>
    {{-- Google Analytics --}}
    {{-- Global site tag (gtag.js) - Google Analytics --}}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-M8SGXQX23H"></script>
    
    {{-- Used for filtering dates --}}
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-M8SGXQX23H');
    </script>

    {{-- Begin Mailchimp Signup Form 訂閱電子郵件 --}}
    <script type='text/javascript' src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
    {{--End mc_embed_signup--}}

    <script async="async" data-cfasync="false" src="//pl19948447.highrevenuegate.com/9057d2d5f33075eccec4f256bb905e1c/invoke.js"></script>
</html>
