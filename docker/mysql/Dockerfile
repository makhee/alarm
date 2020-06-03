FROM mysql:8.0

ADD init/create_table.sql /docker-entrypoint-initdb.d

EXPOSE 3306 33060
CMD ["mysqld"]