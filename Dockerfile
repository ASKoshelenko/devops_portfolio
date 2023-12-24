# Используем официальный образ Node.js как базовый образ
FROM node:latest as build

# Устанавливаем рабочую директорию в контейнере
WORKDIR /app

# Копируем файлы package.json и package-lock.json в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем исходный код проекта в контейнер
COPY . .

# Собираем приложение для продакшн
RUN npm run build

# Используем nginx для раздачи собранного приложения
FROM nginx:alpine

# Копируем собранный код из стадии build в папку nginx для статической раздачи
COPY --from=build /app/build /usr/share/nginx/html

# Открываем 80 порт для доступа к приложению
EXPOSE 80

# Запускаем nginx
CMD ["nginx", "-g", "daemon off;"]
