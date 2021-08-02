FROM postgres:13.3

RUN localedef -i en_US -c -f UTF-8 -A /usr/share/locale/locale.alias en_US.UTF-8
ENV LANG en_US.UTF-8

COPY initdb /docker-entrypoint-initdb.d