---
title: 'FinanceBroke'
description: 'A full-stack personal finance and bill reminder application with multi-channel notifications. Manage bills and never miss a payment with email and Telegram reminders.'
image:
    url: '/laptop.webp'
    alt: 'FinanceBroke Dashboard'
worksImage1:
    url: '/laptop.webp'
    alt: 'FinanceBroke Dashboard'
worksImage2:
    url: '/laptop.webp'
    alt: 'FinanceBroke Bill Management'
platform: Web
stack: Go, React, TypeScript, PostgreSQL, Tailwind CSS
website: https://github.com/virhanali/financebroke
github: https://github.com/virhanali/financebroke
---

Features

- **Bill Management**: Complete CRUD operations for managing bills with status tracking (paid/unpaid/overdue)
- **Smart Reminders**: Configurable reminder timing before due dates
- **Multi-Channel Notifications**: Email reminders via SMTP and Telegram bot integration
- **User Dashboard**: Bill statistics overview, upcoming bills display, and quick action buttons
- **Secure Authentication**: JWT-based authentication for secure access
- **Profile Management**: Comprehensive user profile management capabilities

Technical Details

The application is built with a modern tech stack focusing on performance and reliability:

- **Backend**: Go with Gin framework, PostgreSQL database, GORM for ORM
- **Frontend**: React with TypeScript for type-safe development
- **Styling**: Tailwind CSS for responsive and modern UI
- **Authentication**: JWT tokens for secure user sessions
- **Notifications**: Integrated Telegram Bot API and SMTP for reliable reminders

Implementation

FinanceBroke follows clean architecture principles with:

- RESTful API design for seamless frontend-backend communication
- Robust error handling and validation
- Efficient database queries with GORM
- Customizable notification preferences
- Scalable architecture for future enhancements

Roadmap

Phase 2 planned features include:
- Income and expense tracking
- Data visualization and analytics
- CSV export functionality
- Enhanced admin dashboard
- Advanced notification scheduling capabilities
