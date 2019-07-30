# <img src="public/favicon.ico" width="32" height="32"> react-ssr

This is a simle boilerplate template for React that is based on [Razzle](https://github.com/jaredpalmer/razzle).  
My main goal was to wire up **React, TS, PWA (SW), i18n** that will be ready to use in production.
For example, [getpass](https://github.com/stellarbear/getpass) is based on this boilerplate.  

### content
0. React  
1. I18next  
2. Markdown  
3. Typescript  
4. Local fonts  
5. SSR (Razzle)  
6. React helmet (hreflangs)  
7. Mobile friendly navigation  
8. Material UI + notifications + local font  
9. PWA (serviceworker bundled and notifies users)  
10. React router v4 (smooth transitions, 404, language routing and switching)  

### Quick start:  
> yarn install && yarn start

### Deploy ready:
> yarn deploy

### Important note:
There is *build:sw* command that triggers *populate.js* which manipulates *serviceworker* after build is done. I agree on every your thought about it, but that is what it is. Feel free to make a PR or may be i will change it some day

The last thing worth mentioning is that I would like to go through a minimum of dependencies, hope I succeeded
