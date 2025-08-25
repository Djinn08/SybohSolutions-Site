import fs from 'fs';
import path from 'path';

interface LogEntry {
  timestamp: string;
  level: 'info' | 'error' | 'warn';
  message: string;
  details?: Record<string, unknown>;
  source?: string;
}

class Logger {
  private logDir: string;
  private logFile: string;
  private errorLogFile: string;

  constructor() {
    // Create logs directory in project root
    this.logDir = path.join(process.cwd(), 'logs');
    this.logFile = path.join(this.logDir, 'app.log');
    this.errorLogFile = path.join(this.logDir, 'errors.log');
    
    // Ensure logs directory exists
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  private writeLog(entry: LogEntry, isError: boolean = false) {
    const logString = JSON.stringify(entry) + '\n';
    const filePath = isError ? this.errorLogFile : this.logFile;
    
    try {
      fs.appendFileSync(filePath, logString);
    } catch (error) {
      // Fallback to console if file writing fails
      console.error('Failed to write to log file:', error);
      console.log('Log entry:', entry);
    }
  }

  info(message: string, details?: Record<string, unknown>, source?: string) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: 'info',
      message,
      details,
      source
    };
    this.writeLog(entry);
  }

  error(message: string, details?: Record<string, unknown>, source?: string) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: 'error',
      message,
      details,
      source
    };
    this.writeLog(entry, true);
  }

  warn(message: string, details?: Record<string, unknown>, source?: string) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: 'warn',
      message,
      details,
      source
    };
    this.writeLog(entry);
  }

  // Special method for contact form submissions
  contactForm(data: Record<string, unknown>, success: boolean, error?: string) {
    const entry: LogEntry = {
      timestamp: new Date().toISOString(),
      level: success ? 'info' : 'error',
      message: `Contact form ${success ? 'submission' : 'failed'}`,
      details: {
        name: data.name,
        email: data.email,
        company: data.company,
        messageLength: typeof data.message === 'string' ? data.message.length : 0,
        error: error || null
      },
      source: 'contact-form'
    };
    this.writeLog(entry, !success);
  }
}

export const logger = new Logger();
