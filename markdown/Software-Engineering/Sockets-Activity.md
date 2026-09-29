# Sockets Activity

## Objectives
1. Use Python to create a UDP server/client
2. Use Python to create a TCP server/client
3. Form packets to send larger sets of information

## Vocabulary

| Vocabulary | Description |
| ----------- | ----------- |
| packet | A small chunk of data sent across a network, made up of a header (source/destination, protocol, sequence number) and a payload (the actual data). Large transfers are split into many packets and reassembled by the receiver. |
| IP address | A unique numeric address identifying a computer on a network, so other computers know where to send data. |
| port | A numbered "door" on a computer that a specific program or service listens on, so multiple programs can use the network at once without colliding. |
| server | A program that listens for and responds to incoming requests (e.g., a website's computer). |
| client | A program that initiates a request to a server and waits for a response (e.g., a web browser). |
| `netcat` | A command-line tool (`nc`) for reading and writing data directly over TCP or UDP connections, useful for testing and learning networking basics. |
| TCP | Transmission Control Protocol — a connection-oriented transport protocol that sets up a connection with a 3-way handshake and guarantees reliable, ordered delivery of data. |
| UDP | User Datagram Protocol — a connectionless transport protocol that sends data without setup or delivery guarantees, trading reliability for speed. |

## Your Task

1. Review the [notes on sockets](#Software-Engineering/Sockets-Notes).

### UDP and TCP Server/Client

|Step | Partner A | Partner B |
| - | - | - |
| 1 | Make sure you are on the CS WiFi. Then find your IP address. | Make sure you are on the CS WiFi. Then find your IP address. | 
| 2 | `ping` Partner B's IP to assure you can communicate. | `ping` Partner A's IP to assure you can communicate. |
| 3 | Create a new file `udp_server.py` and add the code listed below. | Create a new file `udp_client.py` and add the code listed below. | 
| 4 | Add comments to the server code to explain the program.  | Add comments to the server code to explain the program. |
| 5 | Create a new file `tcp_client.py`and add the code listed below. |Create a new file `tcp_server.py`and add the code listed below.|

<details>
<summary>udp_server.py</summary>

```
import socket
import sys

HOST = "0.0.0.0" 
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 9000

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.bind((HOST, PORT))

hostname = socket.gethostname()
try:
    local_ip = socket.gethostbyname(hostname)
except socket.gaierror:
    local_ip = "<check with `ip addr` / `ifconfig`>"

print(f"UDP server listening on port {PORT}")
print(f"Give your partner this address: {local_ip}:{PORT}")
print("(Ctrl+C to stop)")

try:
    while True:
        data, addr = sock.recvfrom(4096)
        message = data.decode()
        print(f"Received from {addr}: {message}")

        reply = f"Server got your message: {message!r}"
        sock.sendto(reply.encode(), addr)
except KeyboardInterrupt:
    print("\nShutting down.")
finally:
    sock.close()
```

</details>

<details>
<summary>udp_client.py</summary>

```
import socket
import sys

if len(sys.argv) < 2:
    print("Usage: python3 udp_client_2person.py <partner_ip> [port]")
    sys.exit(1)

HOST = sys.argv[1]
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 9000

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
sock.settimeout(5)  # don't hang forever if the partner's server isn't up

message = "hello over UDP!"
print(f"Sending to {HOST}:{PORT}: {message!r}")
sock.sendto(message.encode(), (HOST, PORT))

try:
    data, addr = sock.recvfrom(4096)
    print(f"Received from {addr}: {data.decode()}")
except socket.timeout:
    print("No reply received (server may be unreachable, or the message got lost - that's UDP for you)")
finally:
    sock.close()
```

</details>

<details>
<summary>tcp_server.py</summary>

```
import socket
import sys

HOST = "0.0.0.0"
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 9000

server_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server_sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server_sock.bind((HOST, PORT))
server_sock.listen(1)

hostname = socket.gethostname()
try:
    local_ip = socket.gethostbyname(hostname)
except socket.gaierror:
    local_ip = "<check with `ip addr` / `ifconfig`>"

print(f"TCP server listening on port {PORT}")
print(f"Give your partner this address: {local_ip}:{PORT}")
print("(Ctrl+C to stop)")

try:
    while True:
        conn, addr = server_sock.accept()
        with conn:
            print(f"Connection from {addr}")

            data = conn.recv(4096)
            message = data.decode()
            print(f"Received: {message}")

            reply = f"Server got your message: {message!r}"
            conn.sendall(reply.encode())
        print(f"Connection with {addr} closed")
except KeyboardInterrupt:
    print("\nShutting down.")
finally:
    server_sock.close()
```

</details>

<details>
<summary>tcp_client.py</summary>

```
import socket
import sys

if len(sys.argv) < 2:
    print("Usage: python3 tcp_client_2person.py <partner_ip> [port]")
    sys.exit(1)

HOST = sys.argv[1]
PORT = int(sys.argv[2]) if len(sys.argv) > 2 else 9000

with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as sock:
    sock.settimeout(5)
    try:
        sock.connect((HOST, PORT))
    except (socket.timeout, ConnectionRefusedError, OSError) as e:
        print(f"Could not connect to {HOST}:{PORT} - {e}")
        sys.exit(1)

    message = "hello over TCP!"
    print(f"Sending: {message!r}")
    sock.sendall(message.encode())

    data = sock.recv(4096)
    print(f"Received: {data.decode()}")
```

</details>

