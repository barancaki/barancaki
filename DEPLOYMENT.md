# 🚀 Deployment Checklist

## Pre-Deployment
- [ ] All features tested locally (`npm run dev`)
- [ ] Build succeeds without errors (`npm run build`)
- [ ] Production build tested (`npm run preview`)
- [ ] No console errors in browser
- [ ] All routes work correctly
- [ ] Dark/Light mode toggle works
- [ ] Mobile responsive design verified
- [ ] All images load correctly
- [ ] All links work (LinkedIn, email)

## Code Quality
- [ ] No TypeScript errors (`tsc --noEmit`)
- [ ] No linting errors
- [ ] Removed debug console.logs
- [ ] Removed test/dummy data
- [ ] Updated contact information
- [ ] Verified API keys are build-time only

## Git Repository
- [ ] All changes committed
- [ ] `.gitignore` excludes sensitive files
- [ ] `.env.local` is in `.gitignore`
- [ ] Pushed to remote repository
- [ ] Repository is accessible from server

## Docker Setup
- [ ] `Dockerfile` created
- [ ] `nginx.conf` created
- [ ] `.dockerignore` created
- [ ] `docker-compose.yml` created
- [ ] Local Docker build tested (`docker build -t portfolio .`)
- [ ] Local Docker run tested (`docker-compose up`)
- [ ] Accessed locally at `http://localhost:8080`
- [ ] Health check works (`http://localhost:8080/health`)

## Coolify Configuration
- [ ] Coolify instance accessible
- [ ] Application created in Coolify
- [ ] Git repository connected
- [ ] Branch selected (main/master)
- [ ] Build pack set to Docker
- [ ] Port set to 80
- [ ] Health check path: `/health`
- [ ] Domain configured (optional)
- [ ] SSL enabled (auto via Let's Encrypt)

## Post-Deployment
- [ ] Application deployed successfully
- [ ] Website loads at production URL
- [ ] SSL certificate active (HTTPS)
- [ ] All pages accessible
- [ ] No 404 errors on page refresh
- [ ] Dark/Light mode works
- [ ] Mobile view correct
- [ ] Performance is good (Lighthouse)
- [ ] SEO meta tags present
- [ ] Social media preview works

## Monitoring
- [ ] Coolify logs checked
- [ ] No nginx errors
- [ ] Health check passing
- [ ] CPU/Memory usage normal
- [ ] Auto-deploy configured (optional)
- [ ] Backup/snapshot created (optional)

## DNS & Domain (if using custom domain)
- [ ] A record points to server IP
- [ ] DNS propagated (check with `nslookup`)
- [ ] SSL certificate issued
- [ ] HTTPS redirect works
- [ ] WWW redirect configured (if needed)

## Final Verification
- [ ] Test from different devices
- [ ] Test from different browsers
- [ ] Test from different networks
- [ ] Share link with friend for feedback
- [ ] Update LinkedIn/portfolio links

---

## Quick Deploy Commands

### Test Build Locally
```bash
npm run build
npm run preview
```

### Test Docker Locally
```bash
docker build -t portfolio .
docker run -p 8080:80 portfolio
# Visit: http://localhost:8080
```

### Test with Docker Compose
```bash
docker-compose up
# Visit: http://localhost:8080
```

### Push to Git
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

---

## Rollback Plan

If deployment fails:
1. Check Coolify logs
2. Revert to previous Git commit
3. Trigger re-deployment
4. Or: Use Coolify's built-in rollback feature

---

✅ **All checked?** You're ready to deploy! 🚀
