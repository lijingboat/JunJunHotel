# Jun Jun Hotel - Versioned Deployment System

## Overview

This directory contains the versioned deployment structure for the Jun Jun Hotel application. It maintains both the current production build and historical archives for rollback capability.

## Directory Structure

```text
deployment/
├── Current/                              # Always contains the latest successful build
│   ├── browser/                         # Angular browser bundles
│   ├── server/                          # Node/Express server bundle (server.mjs)
│   ├── prerendered-routes.json          # SSR prerender configuration
│   └── 3rdpartylicenses.txt            # License information
│
└── Archived/                            # Historical timestamped backups
    └── junjun-app-YYYY-MM-DD_HH.mm.ss/  # Format: ISO date with time
        ├── browser/
        ├── server/
        ├── prerendered-routes.json
        └── 3rdpartylicenses.txt
```

## Usage

### Current Production Deployment

All production traffic should be served from:

```bash
deployment/Current/
```

### To Start SSR Server with Current Build

```bash
cd "deployment/Current"
node server/server.mjs
# Server will start on port 4000 (or configured port)
```

### To Restore from Archive

If you need to rollback to a previous version:

```bash
# List available archives
dir deployment\Archived\

# Copy archived version to Current
xcopy "deployment\Archived\junjun-app-2026-03-28_20.25.02\*" "deployment\Current\" /E /Y

# Restart SSR server
cd "deployment\Current"
node server/server.mjs
```

## Deployment Workflow

### On Each Successful Update

1. **Build Application**

```bash
cd junjun-app
npm run build
```

1. **Deploy to Current**

```bash
# Clear Current directory
Remove-Item "deployment\Current" -Recurse -Force

# Copy new build
Copy-Item "junjun-app\dist\junjun-app" -Destination "deployment\Current" -Recurse
```

1. **Create Archive Backup**

```bash
# Create timestamped archive
$timestamp = Get-Date -Format "yyyy-MM-dd_HH.mm.ss"
Copy-Item "deployment\Current" -Destination "deployment\Archived\junjun-app-$timestamp" -Recurse
```

1. **Restart Server**

```bash
cd "deployment\Current"
# Kill previous server process
# Start new server
node server/server.mjs
```

## Archive Naming Convention

Archives use ISO 8601 date format with 24-hour time:

- Format: `junjun-app-YYYY-MM-DD_HH.mm.ss`
- Example: `junjun-app-2026-03-28_20.25.02`
- Benefit: Chronologically sortable, easy to identify when each deployment was made

## Important Notes

### Current Build Contents

The `deployment/Current` folder should contain:

- `browser/` - Contains HTML, CSS, JS bundles for browser rendering
- `server/` - Contains server.mjs, the Node.js SSR server bundles
- `prerendered-routes.json` - Active page prerendering configuration
- `3rdpartylicenses.txt` - License compliance information

### Archive Retention

- Archives are never automatically deleted
- Recommend monthly cleanup of archives older than 30 days
- Keep at least the past 5 deployments for quick rollback
- Archive size: ~1-2 MB per deployment

### Server Configuration

- Server expects browser artifacts in a `browser/` subdirectory
- Server expects server bundle at `server/server.mjs`
- Default port: 4000 (configurable via environment variable)
- See `junjun-app/server.ts` for detailed configuration

### Build Output Path

The source of truth for builds remains:

```bash
junjun-app/dist/junjun-app/
```

This structure is what gets copied to `deployment/Current/`.

## Monitoring & Health Checks

### Verify Current Deployment

```bash
ls -la deployment/Current/
# Should show: browser/, server/, prerendered-routes.json, 3rdpartylicenses.txt
```

### Check Archive History

```bash
ls -la deployment/Archived/
# Shows all timestamped backups
```

### Latest Archive Created

When created, look for the most recent timestamp in the Archived folder.

## Support & Documentation

For full project documentation, see:

- `README.md` - Project overview
- `junjun-app/README.md` - Angular app documentation
- `copilot-instructions.md` - AI development guidelines
- `logs/` - Full changelog history

---

**Created**: 2026-03-28  
**System**: Versioned Deployment with Timestamped Archives  
**Status**: Active
