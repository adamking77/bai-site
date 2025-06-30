#!/bin/bash

# BAI Site Troubleshooting Script
# Run this if you encounter issues

echo "🔧 BAI Site Troubleshooting..."
echo "================================"

# System info
echo "📋 System Information:"
echo "Date: $(date)"
echo "User: $(whoami)"
echo "Directory: $(pwd)"
echo "Node version: $(node --version 2>/dev/null || echo 'Node not found')"
echo "NPM version: $(npm --version 2>/dev/null || echo 'NPM not found')"
echo ""

# Project status
echo "📦 Project Status:"
if [ -f "package.json" ]; then
    echo "✅ package.json exists"
    echo "Project name: $(grep '"name"' package.json | cut -d'"' -f4)"
else
    echo "❌ package.json missing"
fi

if [ -d "node_modules" ]; then
    echo "✅ node_modules exists"
    echo "Modules count: $(ls node_modules | wc -l)"
else
    echo "❌ node_modules missing - run 'npm install'"
fi

if [ -f "src/pages/index.astro" ]; then
    echo "✅ Main page exists"
else
    echo "❌ Main page missing"
fi

echo ""

# Port check
echo "🔍 Port Check:"
if command -v lsof > /dev/null; then
    if lsof -i :4321 > /dev/null 2>&1; then
        echo "⚠️  Port 4321 is in use"
        echo "Process using port 4321:"
        lsof -i :4321
    else
        echo "✅ Port 4321 is available"
    fi
else
    echo "ℹ️  lsof not available, cannot check port"
fi

echo ""
echo "🎯 If issues persist:"
echo "1. Ensure Node.js 18+ is installed"
echo "2. Clear npm cache: npm cache clean --force"
echo "3. Delete node_modules and package-lock.json, then npm install"
echo "4. Check for port conflicts on 4321"