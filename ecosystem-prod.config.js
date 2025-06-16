module.exports = {
  apps : [{
    name: 'spasm-slides-3006',
    script: 'http-server',
    args: './slides -p 3006',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '128M',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
