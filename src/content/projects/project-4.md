---
title: 'NeuroTrade'
description: 'An AI-powered cryptocurrency trading system leveraging dual AI models for automated market analysis and trading signals in a paper trading environment.'
image:
    url: '/think.webp'
    alt: 'NeuroTrade AI Trading System'
worksImage1:
    url: '/think.webp'
    alt: 'NeuroTrade Dashboard'
worksImage2:
    url: '/think.webp'
    alt: 'NeuroTrade Market Analysis'
platform: Web
stack: Go, Python, PostgreSQL, Redis, FastAPI, HTMX
website: https://neurotrade.virhanali.com
github: https://github.com/virhanali/neurotrade
---

Features

- **Dual AI Analysis**: Leverages DeepSeek R1 for technical analysis and Google Gemini 2.0 Flash for chart pattern recognition
- **Automated Market Scanning**: Configurable filters for continuous market monitoring
- **Intelligent Signal Generation**: AI-driven trading signals with confidence scoring for higher accuracy
- **Paper Trading Environment**: Virtual broker with realistic fee simulation and position monitoring
- **Smart Position Management**: Automatic closure at predefined profit/loss targets
- **Real-time Notifications**: Telegram integration for instant trading alerts
- **Secure Dashboard**: JWT authentication with role-based access control

Technical Details

NeuroTrade combines cutting-edge AI/ML technologies with robust backend architecture:

- **Backend**: Go 1.21+ with Echo framework, Python 3.11 with FastAPI
- **Database**: PostgreSQL 15 for data persistence, Redis 7 for caching
- **AI/ML Stack**: DeepSeek R1 API, Google Gemini 2.0 Flash, TA-Lib for technical indicators
- **Frontend**: HTMX for dynamic, interactive user interface
- **Infrastructure**: Docker containerization, Nginx reverse proxy, Let's Encrypt SSL
- **Security**: UFW firewall, Fail2Ban protection, JWT authentication

Implementation

The system architecture includes:

- **Market Scanner**: Scheduled services for automated market analysis
- **AI Engine**: Dual-model approach for comprehensive market insights
- **Trading Logic**: Position monitoring with automatic profit/loss management
- **Notification System**: Multi-channel alerts via Telegram
- **Performance Monitoring**: Automated auditing and reporting
- **Web Dashboard**: Real-time monitoring and control interface

Current Limitations

As an MVP (Minimum Viable Product):
- Paper trading only - no live order execution
- Single exchange support (Binance)
- No backtesting functionality yet
- Limited strategy customization options

Important Disclaimer

This project is for educational and research purposes. Cryptocurrency trading carries significant financial risk. Always conduct thorough research and never invest more than you can afford to lose.
