const routes = [
  {
    path: '/',
    url: './index.html',
  },
  {
    path: '/list/',
    componentUrl: './pages/list.html',
  },
  {
    path: '/push/:objectId',
    componentUrl: './pages/form.html',
  },
  // Default route (404 page). MUST BE THE LAST
  {
    path: '(.*)',
    url: './pages/404.html',
  },
];
