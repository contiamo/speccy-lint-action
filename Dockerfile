FROM wework/speccy:0.11.0
COPY entrypoint.sh /
RUN apk --no-cache add bash
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]