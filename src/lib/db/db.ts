import { Pool } from 'pg';

let pool: Pool | null = null;

function createPool() {
  const isDevelopment = process.env.NODE_ENV === 'development';

  return new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: parseInt(process.env.DB_PORT || '5432', 10),
    ssl: isDevelopment && process.env.DB_SSL === 'true' ? {
      rejectUnauthorized: false // Allow self-signed certificates in development
    } : undefined // Use default settings for other environments
  });
}

export function getPool() {
  if (!pool) {
    pool = createPool();
  }

  return pool;
}
