# WeFix-It Deployment Guide

## Core Environment Variables

These environment variables are **required** for the application to function correctly in any environment (Production, Staging, Development).

| Variable | Description | Example Value |
|_---|---|---|
| `NEXTAUTH_URL` | The canonical URL of your deployment. **CRITICAL**: This must match your actual domain. | `https://wefix-it.ie` |
| `NEXTAUTH_SECRET` | A standard random string used for signing cookies. | `your-random-secret-here` |
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase Project URL. | `https://xyz.supabase.co` |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase Anonymous Key. | `ey...` |

## Hostinger / VPS Configuration

If you are hosting on Hostinger or any VPS, you **must** manually set these variables in your deployment dashboard or `.env` file.

### ⚠️ Common Issues

#### Redirecting to `vercel.app`
If your application redirects to `vercel.app` after login, it means your `NEXTAUTH_URL` is configured incorrectly.

**Fix:**
1. Go to your Hostinger Dashboard / Settings.
2. Update `NEXTAUTH_URL` to your actual domain:
   - ❌ `https://wefix-it.vercel.app`
   - ✅ `https://wefix-it.ie`
3. **Redeploy** or **Restart** your application for changes to take effect.

## Supabase Configuration

Ensure your Supabase project URL and Anon Key are correctly set. These are `NEXT_PUBLIC_` variables, meaning they are exposed to the browser.

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
