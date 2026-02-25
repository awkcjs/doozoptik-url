@echo off
echo ========================================
echo Installing Supabase Package
echo ========================================
echo.

npm install @supabase/supabase-js

echo.
echo ========================================
echo Installation Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Setup your Supabase account at https://supabase.com
echo 2. Edit .env file with your API keys
echo 3. Run the SQL schema in Supabase Dashboard
echo 4. Run: npm run dev
echo.
echo Read PANDUAN_SUPABASE.md for detailed instructions
echo.
pause
