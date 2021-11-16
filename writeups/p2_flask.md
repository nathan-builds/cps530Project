# Installing Backend Framework: Flask

The process of installing Flask is quite straightforward, and best of all, system-indepdent. The steps below assume
Python is already installed (preferably, Python 3 or later).

## Pre Installation Steps [OPTIONAL]

Python packages are installed globally on the system, meaning that once you install a package once, you'll be able to
use it in ANY project. Sometimes this is nice, however, it's better practice to localize dependencies to per-project so
you don't end up accidentally using a package locally that's available on your system and after deploying to an external
server, end up finding you have dependency issues due to not including it in some dependency management definition.

To solve this problem, Python virtual environments were created. There are a few different popular choices, some of
which include `venv` and `conda`. 

### Installing venv

This is a more straightforward approach. Documentation for venv can be found on
https://docs.python.org/3/library/venv.html

### Installing conda

Installation steps can be found on https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html

### Creating the environment

#### venv
```
python -m venv /path/to/env
```

Activating venv (note that this is specific to \*nix systems):
```
source /path/to/env/bin/activate
```

#### conda
```
conda create -n <env_name> [python=<version>] [any other dependecies]
```

Example usage:
```
conda create -n testenv python=3.9
```

Activating conda environment:
```
conda activate <env_name>
```

For our example above, we can run:
```
conda activate testenv
```

## Installing Flask

```
pip install flask
```

Note: if you have multiple major versions of Python installed (e.g., Python 2 and Python 3), you may need to append a
version to the `pip` command. For example, for Python 3, you would do:
```
pip3 install flask
```

`pip` for if you have Python 2 installed (and would like to use it) should default to the Python 2 version.


**That's all, you're done!** See the next page for a tutorial on how to use React and Flask.

