import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);
  const hostname = context.url.hostname; 

  
  const parts = hostname.split('.');
  
  const subdomain = parts.length >= 3 ? parts[0] : null;

  
  const validSubdomains = ['bot', 'free', 'freex1', 'vip', 'vipx1'];

  
  if (subdomain && validSubdomains.includes(subdomain)) {
    const pathname = url.pathname;

  
    if (pathname.startsWith('/es')) {
      
      const pathWithoutEs = pathname.replace('/es', '');
     
      const cleanPath = pathWithoutEs === '' || pathWithoutEs === '/' ? '/' : pathWithoutEs;
      
     
      return context.rewrite(`/es/${subdomain}${cleanPath}`);
    }

    return context.rewrite(`/${subdomain}${pathname}`);
  }

  // Si no es un subdominio (ej: eldoradofx.co.uk), que siga normal
  return next();
});