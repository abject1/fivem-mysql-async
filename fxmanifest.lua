fx_version 'adamant'
game 'common'

name 'ABCore-sql'
description 'Script sql pour vos server FiveM.'
author 'Lucas Wurtz // Many // Abject'
version '1.0.0'
url 'https://github.com/brouznouf/fivem-ABCore-sql'

server_script 'ABCore-sql.js'
client_script 'ABCore-sql.lua'

files {
  'interface/ABCore-sql.html',
  'interface/js/*.js',
  'interface/css/*.css',
  'interface/fonts/*.woff',
  'interface/fonts/*.woff2',
  'interface/fonts/*.eot',
  'interface/fonts/*.ttf',
}

ui_page 'interface/ABCore-sql.html'
