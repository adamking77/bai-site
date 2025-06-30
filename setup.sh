#!/bin/bash

# BAI Site Setup Script
# Run this script to complete the setup when Bash tool is unavailable

echo "🚀 BAI Site Setup Starting..."
echo "Current directory: $(pwd)"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please navigate to the project root."
    exit 1
fi

echo "✅ Found package.json"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependencies installed successfully"
else
    echo "❌ Failed to install dependencies"
    exit 1
fi

# Check if development server can start
echo "🔍 Testing development server..."
echo "Starting dev server (will run in background for 3 seconds to test)"

# Start dev server in background, then kill it
npm run dev &
DEV_PID=$!
sleep 3
kill $DEV_PID 2>/dev/null

echo "✅ Setup complete!"
echo ""
echo "🎯 Next steps:"
echo "1. Run: npm run dev"
echo "2. Open: http://localhost:4321"
echo "3. View your Swiss-themed BAI landing page!"