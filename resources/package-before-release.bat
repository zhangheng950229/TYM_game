echo off
call fis3 server stop
echo "server stop..."
rd /s /q %FIS3_TMP%
md %FIS3_TMP%
echo "clean cache"
call fis3 release prod -d %FIS3_TMP%
echo "release..."
call package-after-release.bat
echo "package..."