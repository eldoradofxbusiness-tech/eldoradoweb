import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const hostname = context.url.hostname;
  const pathname = url.pathname;

  
  const parts = hostname.split('.');
  const subdomain = parts.length >= 3 ? parts[0] : null;
  const validSubdomains = ['bot', 'free', 'freex1', 'vip', 'vipx1'];

 
  if (
    pathname.startsWith('/_astro') || 
    pathname.includes('favicon') ||
    (subdomain && pathname.startsWith(`/${subdomain}`)) ||
    (subdomain && pathname.startsWith(`/es/${subdomain}`))
  ) {
    return next();
  }

 
  if (subdomain && validSubdomains.includes(subdomain)) {
    
    if (pathname.startsWith('/es')) {
      const pathWithoutEs = pathname.replace('/es', '');
      const cleanPath = pathWithoutEs === '' || pathWithoutEs === '/' ? '/' : pathWithoutEs;
      
     
      return context.rewrite(`/es/${subdomain}${cleanPath}`);
    }

   
    return context.rewrite(`/${subdomain}${pathname}`);
  }

  return next();
});