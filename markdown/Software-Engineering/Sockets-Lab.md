# Sockets Lab

## Objectives
1. Use Python to create a UDP server/client
2. Use Python to create a TCP server/client
3. Form packets to send larger sets of information

## Vocabulary

| Vocabulary| Description |
| ----------- | ----------- |
| packet| | 
| IP address| | 
| port | | 
| server | |
| client | |
| `netcat` ||
| TCP | | 
| UDP | | 

## Your Task

**You will need a partner or a second machine to complete this lab.**

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

### Upgrading Your TCP Server/Client with Length-prefix Framing

1. Run your TCP server/client and try sending something much much longer than "hello over TCP!". Try printing out the message on the server end. 

<details>
<summary>What happens?</summary>

The way our server is set up, we can only receive 4096 bytes at a time. If you send a sufficiently long message, you should see only a chunk of it come through. You can also edit your `conn.recv(4096)` to a smaller value to see the issue with less character input.

</details>

TCP guarantees your bytes arrive in order and uncorrupted, but it does not guarantee they arrive grouped the way you sent them. It's a stream of bytes, not a stream of messages. A `sendall()` of 2 MB might be split into a hundred smaller pieces below the surface, and your one `recv(4096)` call on the other end just grabs whatever's arrived so far.

So the receiver needs to know two things it currently doesn't:

- How much total data is coming, so it knows when to stop reading.
- How to keep reading until it has that much, since one call won't do it.

Let's upgrade our TCP program to solve these issues!

2. We will need to use the `struct` library to convert our message with an unpredictable length to something with a fixed length both the sender and reciever agree on. Look up `struct.pack(...)` and `strucut.unpack(...)`
    - Specifically you want a format that means "unsigned integer, network byte order" and to figure out how many bytes the header takes up

3. Now on the server side, write a functionwrite a small `send_message(sock, data)` function that packs `len(data)` into that header and sends `header + data` in one `sendall()` call.

4. On the client side, we will now need some mechanism to call `recv()` over and over until we get the number of bytes we were expecting. Write `recv_exact(conn, num_bytes)` that returns once it's gathered exactly `num_bytes`, using repeated `recv()` calls of some fixed chunk size.

5. Now that we have `recv_exact`, create a new function `recv_message(conn)` that uses `recv_exact` twice: first, one the header, and second on the rest of the message, now that we know how big it is.

6. Test your program! You will need to generate some large files to validate they send correctly or make your chunks really small to test the chunking actually works.


## Extensions

1. Instead of sending large chunks of text over TCP, try sending and reconstructing an image. 

## Reflection Questions
1. What is the difference between UDP and TCP?
2. Why doesn't TCP itself guarantee that one `send()` on one end lines up with one `recv()` on the other?
3. UDP doesn't need this kind of framing the same way. Why not?

## How to Submit

Show your instructor your GitHub repository. Answer the reflection questions. When you are all done, upload your GitHub link to Google Classroom and hit submit.

## Rubric
- **20 points** - All required items are present.
- **0 points** - Task was not attempted to completion or student should reattempt.