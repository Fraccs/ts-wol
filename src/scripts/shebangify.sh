#!/bin/sh

# Inserts the nodejs shebang in build/index.js after compilation

sed -i '1  i #!/usr/bin/env node' build/index.js
