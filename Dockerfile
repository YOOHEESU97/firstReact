# 1단계: Node 환경에서 빌드
FROM node:22-alpine AS builder

WORKDIR /app

# 의존성 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스 복사 및 빌드
COPY . .
RUN npm run build

# 2단계: Nginx로 정적 파일 서빙
FROM nginx:alpine

# 빌드된 결과물을 Nginx로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 기본 포트
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
