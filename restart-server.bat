@echo off
echo ========================================
echo Restarting Development Server
echo ========================================
echo.

echo Stopping existing Node processes...
taskkill /F /IM node.exe 2>nul

echo.
echo Starting development server...
echo.

npm run dev

pause
