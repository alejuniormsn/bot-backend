echo Iniciando backup do bando de dados... \
&& PGPASSWORD="PGPASSWORD" pg_dump -U botdb -h 192.168.0.27 -p 5432 botdb > /home/dev/Backup_db_bot/$(date +%Y%m%d-%H%M%S)-botdbett.sql \
&& echo Pronto!

