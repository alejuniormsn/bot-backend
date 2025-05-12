# Backend em Node - Bot

# - Banco de Dados via terminal (Linux) Docker Compose:

- Criar banco de dados: "docker compose up -d" via terminal na pasta que contem o arquivo docker-compose.yml.
- Fazer a conexão com um gerenciador de bancos e importar do backup que é gerado diariamente no server do Backend.

# - Backup do Banco via terminal (Linux):

  <!-- Postgresql 17 -->

sudo apt install curl ca-certificates
sudo install -d /usr/share/postgresql-common/pgdg
sudo curl -o /usr/share/postgresql-common/pgdg/apt.postgresql.org.asc --fail https://www.postgresql.org/media/keys/ACCC4CF8.asc
sudo sh -c 'echo "deb [signed-by=/usr/share/postgresql-common/pgdg/apt.postgresql.org.asc] https://apt.postgresql.org/pub/repos/apt noble-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
sudo apt update
sudo apt-get install postgresql-client -y
PGPASSWORD="PASSWORD@2024" pg_dump -U botdb -h 192.168.0.27 -p 5432 botdb > /home/dev/Backup_db_bot/$(date +%Y%m%d-%H%M%S)-botdb.sql

# - Aplicação servida pelo PM2:

    https://pm2.keymetrics.io/docs/usage/quick-start/

- Comando via terminal Linux do server de backend:
  Server start: pm2 start build/server.js -i 2 --name Bot
  Server stop: pm2 stop all
  Server status: pm2 list
  Server restart: pm2 restart all
