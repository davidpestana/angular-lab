docker build -t angular ./locals
docker run -p 4200:4200 -it --rm -v $(pwd):/app angular bash
