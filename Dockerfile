FROM node:16

ENV REACT_NATIVE_PACKAGER_HOSTNAME=localhost
ENV EXPO_DEVTOOLS_LISTEN_ADDRESS=0.0.0.0

RUN npm install --global expo-cli

RUN expo init approyal

RUN cd approyal
CMD ["expo", "start"]
