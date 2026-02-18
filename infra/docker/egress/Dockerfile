FROM alpine:3.19
RUN apk add --no-cache squid
COPY squid.conf /etc/squid/squid.conf
COPY allowed-domains.txt /etc/squid/allowed-domains.txt
COPY allowed-ips.txt /etc/squid/allowed-ips.txt
COPY entrypoint.sh /entrypoint.sh
RUN mkdir -p /var/cache/squid /var/log/squid \
    && chown -R squid:squid /var/cache/squid /var/log/squid /etc/squid
EXPOSE 3128
USER squid
CMD ["/entrypoint.sh"]
