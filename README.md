A client-side implementation designed to work with PyWeb backend that enables real-time communication through WebSockets.

## Description

PyWebClient is a Next.js application that provides a seamless interface to interact with PyWeb backend services. The client establishes WebSocket connections with the server to execute and monitor background tasks such as network scans and ping operations.

## Features

- Real-time WebSocket communication with PyWeb backend
- Execute and manage multiple concurrent tasks
- Task control with start/stop functionality
- Live data streaming from server to client
- Auto-scrolling console output displays
- Clean, responsive user interface
- Error handling and connection management

## Getting Started

### Prerequisites

- Node.js (14.x or higher)
- npm or yarn
- A running PyWeb backend server

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/pywebclient.git
cd pywebclient
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Usage

The interface provides controls for two example tasks:

1. **NMAP Network Scanning**
   - Start the scan with the "start task1" button
   - View real-time results in the output console
   - Stop the scan with the "stop task1" button

2. **Ping Operations**
   - Start the ping operation with the "start task2" button
   - View real-time results in the second output console
   - Stop the operation with the "stop task2" button

## WebSocket Implementation

The application uses a custom WebSocket client implementation that handles:
- Connection establishment and management
- Message sending and receiving
- Data type-based message routing
- Automatic disconnection on component unmount

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Submit a pull request

## License

MIT License

## Author

Md Habibor Rahman Hira