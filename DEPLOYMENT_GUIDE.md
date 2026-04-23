# Vercel Deployment Guide

This document provides instructions for deploying the KNUST Network Operations Website to Vercel.

## Prerequisites

- GitHub account with repository pushed
- Vercel account (free tier available at https://vercel.com)
- pnpm installed globally (or use `npx pnpm`)

## Automatic Deployment (Recommended)

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to https://vercel.com/new
2. Select "Import Git Repository"
3. Connect your GitHub account and select this repository
4. Click "Import"

### Step 3: Configure Project
Vercel will auto-detect the settings:
- **Framework Preset**: Vite
- **Build Command**: `pnpm build` (automatically detected)
- **Output Directory**: `dist` (automatically detected)
- **Install Command**: `pnpm install` (automatically detected)

Click "Deploy" and wait for the build to complete.

## Manual Deployment (Advanced)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
From the project root:
```bash
vercel
```

Follow the prompts to link your project and deploy.

## Environment Variables

If you need environment variables:
1. Go to your Vercel project dashboard
2. Navigate to Settings → Environment Variables
3. Add your variables (e.g., API keys, URLs)
4. Redeploy for changes to take effect

## Post-Deployment

### Verify Build
- Check the Vercel dashboard for build logs
- Visit the deployment URL to verify everything works
- Check browser console for any errors

### Domain Setup
1. Go to your Vercel project's Settings
2. Navigate to Domains
3. Add your custom domain (knust-noc.edu.gh, etc.)
4. Follow DNS configuration instructions

### Performance Optimization Tips
- The project is already optimized with:
  - Vite's production build with minification
  - Modern JavaScript through esbuild
  - CSS minification via Tailwind CSS v4
  - Automatic code splitting
  
### Monitoring & Analytics
- Enable Vercel Analytics in your project dashboard
- Set up Web Vitals monitoring for performance tracking

## Troubleshooting

### Build Fails
1. Check the build logs in Vercel dashboard
2. Ensure all dependencies are installed: `pnpm install`
3. Verify pnpm-lock.yaml is committed to the repository

### Slow Performance
1. Check the Network tab in browser DevTools
2. Consider enabling Image Optimization in Vercel settings
3. Review bundle size: `npm run build` and check dist folder

### CORS Issues
If you're making requests to external APIs, configure CORS in Vercel's project settings or use a backend proxy.

## Rollback

To rollback to a previous deployment:
1. Go to the Vercel dashboard
2. Navigate to Deployments
3. Click on the previous deployment you want to restore
4. Click the three dots menu and select "Promote to Production"

## Additional Resources

- [Vercel Documentation](https://vercel.com/docs)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com)

## Support

For issues or questions:
1. Check Vercel's documentation and community
2. Review build logs in the Vercel dashboard
3. Test locally with `pnpm run dev` before pushing
