const Page2 = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <h1 className="section-title">Installing Backend Framework: Flask</h1>
        <section>
          <p>
            The process of installing Flask is quite straightforward, and best
            of all, system-indepdent. The steps below assume Python is already
            installed (preferably, Python 3 or later).
          </p>
        </section>

        <h2 className="section-sub-title">Pre Installation Steps [OPTIONAL]</h2>
        <section>
          <p>
            Python packages are installed globally on the system, meaning that
            once you install a package once, you'll be able to use it in ANY
            project. Sometimes this is nice, however, it's better practice to
            localize dependencies to per-project so you don't end up
            accidentally using a package locally that's available on your system
            and after deploying to an external server, end up finding you have
            dependency issues due to not including it in some dependency
            management definition. To solve this problem, Python virtual
            environments were created. There are a few different popular
            choices, some of which include venv and conda.
          </p>
        </section>

        <h3 className="section-sub-title">Installing venv</h3>
        <section>
          <p>
            This is a more straightforward approach. Documentation for venv can
            be found on https://docs.python.org/3/library/venv.html
          </p>
        </section>

        <h3 className="section-sub-title">Installing conda</h3>
        <section>
          <p>
            Installation steps can be found on
            https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html
          </p>
        </section>

        <h3 className="section-sub-title">Creating the environment</h3>
        <section>
          <p>
            Installation steps can be found on
            https://docs.conda.io/projects/conda/en/latest/user-guide/install/index.html
          </p>
        </section>

        <h4 className="section-sub-title">venv</h4>
        <section>
          <p className="cmd">python -m venv /path/to/env</p>
          <p>Activating venv (note that this is specific to *nix systems):</p>
          <p className="cmd">source /path/to/env/bin/activate</p>
        </section>
        <h4 className="section-sub-title">conda</h4>
        <section>
          <p className="cmd">conda create -n ENV_NAME [python=version] [any other dependencies]</p>
          <p>Example usage:</p>
          <p className="cmd">conda create -n testenv python=3.9</p>
          <p>Activating conda environment:</p>
          <p className="cmd">conda activate ENV_NAME</p>
          <p>For our example above, we can run:</p>
          <p className="cmd">conda activate testenv</p>
        </section>

        <h2 className="section-title">Installing Flask</h2>
        <section>
          <p className="cmd">pip install flask</p>
          <p>
            Note: if you have multiple major versions of Python installed (e.g.,
            Python 2 and Python 3), you may need to append a version to the pip
            command. For example, for Python 3, you would do:
          </p>
          <p className="cmd">pip3 install flask</p>
        </section>

        <h1 className="section-title">Installing Frontend Framework: React</h1>

        <h2 className="section-sub-title">Install Node</h2>
        <section>
          <ul>
            <li>
              Node is a JavaScript runtime environment and comes with the npm
              package manager.
            </li>
            <li>Download Node from: https://nodejs.org/en/</li>
          </ul>
        </section>

        <h2 className="section-sub-title">Create React App</h2>
        <section>

                <h3> Project directory</h3>
                <p className="cmd">cd my-project</p>
                <h3> Create app</h3>
                <p className="cmd">npx create-react-app my-app</p>
                <h3>Run App</h3>
                <p className="cmd">cd my-app</p>
                <p className="cmd">npm start</p>
                <p>React app should now be running on localhost:5000</p>
        </section>
      </div>
    </div>
  );
};

export default Page2;
