# 🚀 Quick Start - Coolify Deployment via Git

## The Simplest Way to Deploy

### 1️⃣ Push to Git (If not already done)
```bash
cd c:\Users\serig\OneDrive\Masaüstü\development\portfolio-website
git add .
git commit -m "Ready for Coolify deployment"
git push origin main
```

### 2️⃣ In Coolify Dashboard

**Create New Application:**
1. Click **"+ New Resource"**
2. Select **"Application"**
3. Choose your repository type (Public/Private)

**Configure:**
```
Repository URL: [Your Git URL]
Branch: main
Build Pack: Docker
Port: 80
Health Check: /health
```

**Environment:**
- No environment variables needed at runtime
- API keys are build-time only (already in .env.local, excluded from Docker)

**Domain (Optional):**
- Add your domain
- Coolify auto-configures SSL

### 3️⃣ Deploy
Click **"Deploy"** - Done! ✅

Coolify will:
- ✅ Clone your repository
- ✅ Build Docker image (2 stages)
- ✅ Deploy container on port 80
- ✅ Configure reverse proxy
- ✅ Issue SSL certificate
- ✅ Start health monitoring

### 4️⃣ Enable Auto-Deploy (Optional)
- Turn on **"Auto Deploy"** in Coolify
- Every `git push` → automatic deployment
- Zero-touch deployment! 🎉

---

## 🔍 What Coolify Does Behind the Scenes

```
Git Push → Coolify Webhook → Build:
  Stage 1: npm install + npm run build (Node 20 Alpine)
  Stage 2: Copy dist/ to Nginx Alpine
→ Deploy Container (Port 80)
→ Reverse Proxy (Caddy/Traefik)
→ SSL (Let's Encrypt)
→ Health Check (/health endpoint)
→ Your site is LIVE! 🌐
```

---

## 📊 Expected Build Time
- First build: ~3-5 minutes
- Subsequent builds: ~2-3 minutes (cached layers)

---

## ✅ Verify Deployment

After deployment completes:

```bash
# Check health
curl https://your-domain.com/health
# Should return: healthy

# Check homepage
curl https://your-domain.com/
# Should return HTML
```

Or just visit your domain in a browser! 🎨

---

## 🔧 If You Need to Rebuild

In Coolify:
1. Go to your application
2. Click **"Redeploy"**
3. Done!

Or push any change to Git (if auto-deploy enabled).

---

## 📝 Important Notes

✅ **No manual Docker commands needed** - Coolify handles everything  
✅ **No nginx installation needed** - Included in Docker image  
✅ **No SSL certificate setup** - Automatic via Let's Encrypt  
✅ **No port configuration** - Coolify's reverse proxy handles it  
✅ **No environment variables at runtime** - Static SPA  

---

## 🎯 TL;DR

```bash
# 1. Push to Git
git push origin main

# 2. In Coolify: + New Resource → Application → Your Repo → Deploy
# 3. Done! Your site is live with HTTPS 🚀
```

**That's it!** Coolify does all the heavy lifting.

---

## 🆘 Troubleshooting

**Build fails?**
- Check Coolify logs tab
- Verify package.json is committed
- Ensure Dockerfile is in root

**Site shows blank page?**
- Check browser console
- Verify build completed successfully
- Check nginx logs in Coolify

**404 on page refresh?**
- nginx.conf should have `try_files` directive
- Should be automatic with our config

**Need help?**
- Check `DEPLOYMENT.md` for full checklist
- Check `README.md` for detailed guides

---

✨ **Enjoy your deployed portfolio!** ✨
