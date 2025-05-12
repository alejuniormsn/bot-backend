echo Iniciando backup do bando de dados... \
&& PGPASSWORD="Ett@2024" pg_dump -U botdbett -h 192.168.0.27 -p 5432 botdbett > /home/dev/Backup_db_bot/$(date +%Y%m%d-%H%M%S)-botdbett.sql \
&& echo Pronto!

