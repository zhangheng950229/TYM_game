echo off

set zip="%FIS3_ZIP%"
if %zip%=="" (
    echo "no zip command..."
    pause & exit
)

set ready="false"
set err=""
if not exist %FIS3_TMP%\assets (
    set err="assets"
    goto error
)
if not exist %FIS3_TMP%\index.html (
    set err="index.html"
    goto error
)
if not exist %FIS3_TMP%\game.css (
    set err="game.css"
    goto error
)
if not exist %FIS3_TMP%\game.js (
    set err="game.js"
    goto error
)
if not exist %FIS3_TMP%\mainfest.json (
    set err="mainfest.json"
    goto error
)
set ready="true"

set name="tymgame"
for %%i in ("%cd%") do set name=%%~ni

set output="%FIS3_OUTPUT%"
if %output%=="" (
    set filePath=%name%
) else (
    set filePath=%output%\%name%
)

if %ready%=="true" (
    if exist dist rmdir /S/Q dist
    md dist\assets
    xcopy %FIS3_TMP%\assets dist\assets
    copy %FIS3_TMP%\index.html dist
    copy %FIS3_TMP%\game.css dist
    copy %FIS3_TMP%\game.js dist
    copy %FIS3_TMP%\mainfest.json dist
    if exist %filePath%.zip del /Q %filePath%.zip
    %zip% a -tzip %filePath%.zip dist
)

:error
if %ready%=="false" (
    echo lose %err% ...
    pause & exit
)