import "./page.css";

const Page1 = () => {
  return (
    <div className="outer-container">
      <div className="container">
        <h1 className="section-title">Backend: Flask</h1>
        <section>
          <p>
            Flask is one of the most popular Python web frameworks, with over
            55K GitHub stars. The main advantage of using Flask over other
            frameworks is that it is relatively lightweight (compared to other
            frameworks, namely Django); it does not require any other tools or
            libraries, does not contain database abstraction layers, form
            validation, etc. This can be considered an advantage (less bloat,
            libraries/tools not being used don't increase runtime requirements,
            etc.), and also a disadvantage (if anything more complex needs to be
            done, e.g., working with databases, external libraries will be
            required, which may or may not add to the learning curve). With that
            being said, more strengths and weaknesses of the framework are
            listed below:{" "}
          </p>
        </section>

        <h2 className="section-sub-title">Strengths:</h2>
        <section>
          <ul>
            <li>
              Very flexible: Flask lets the developer control almost as much as
              they desire due to how minimalist the framework is. In particular,
              due to the limited tooling Flask provides, developers can choose
              to either implement their own versions or find something someone
              else already implemented
            </li>
            <li>
              Easy to understand, learn, and work with: Due to how simple and
              minimalistic the framework is, a new developer is able to pick up
              the framework relatively quickly. Furthermore, since you're not
              working with a bunch of tools to do one simple thing unlike other
              frameworks, you are able to more quickly create something that
              works and does something useful.
            </li>
            <li>
              Facilitates easy and quick testing: Flask provides various
              built-in support to do unit testing with relative ease.
            </li>
            <li>
              Allows for experimentation: Since the framework is simple and
              minimalistic, getting a quick web app up and running to experiment
              with something new is easy with Flask.z
            </li>
            <li>
              Open-source: Flask is open-source, meaning you can go in and
              change what you'd like, create issues, submit pull requests to fix
              issues, etc.
            </li>
            <li>
              Community: Following from the previous point, there is a big
              open-source community around Flask, so there will (usually) always
              be someone that can help you out with any issues.
            </li>
          </ul>
        </section>
        <h2 className="section-sub-title">Weaknesses:</h2>
        <section>
          <ul>
            <li>
              Possible scaling issues: As traffic grows to a website, the web
              app needs to be able to scale as well. Flask is able to scale,
              though a lot more manual work would be involved to get to that
              point.
            </li>
            <li>
              Modules: One of the strengths mentioned above is being able to
              implement your own tooling or using something someone else has
              already made. In both cases (though, the latter case is more
              obvious), there could be security issues. In particular, if you
              decide to use a module provided by someone else, you may not be
              completely aware of the implementation and could open yourself up
              to security breaches. Similarly, if you decide to implement your
              own solution, it is important to ensure that the code you write is
              secure and can't be exploited, which is especially so for more
              crticial components of your application. With that being said, the
              more eyes that are on a module/the code, the less of a chance for
              a security issue to go unnoticed.
            </li>
          </ul>
        </section>

        <h1 className="section-title">
          Which developers use Flask, and what do they use it for?
        </h1>
        <section>
          <p>
            Primarily developers who are already familiar with Python or new
            developers who want to create a web app relatively quickly. Flask
            can be used to create any web app, though most use cases include,
            but are not limited to, blog websites, content websites,
            experimenting with a new web app idea before investing more
            time/money/etc. with a more full framework (e.g., Django).
          </p>
        </section>


        <h1 className="section-title">Front End: React</h1>
        <section>
          <p>
            React is a JavaScript library used to create dynamic and responsive
            single page applications. It was created by Jordan Walke and
            initially released in 2013. Today, it is listed as the most used web
            framework among developers. React abstracts a lot of the complex
            coding that was originally needed to create dynamic web pages which
            is what makes it a powerfull and popular library.
          </p>
        </section>

        <h2 className="section-sub-title">Strengths:</h2>
        <section>
          <ul>
            <li>
              Easy to learn: React is an open source library which means there
              are numerous tutorials and how-to videos on using the framework.
              JavaScript is also an extremely popular language among developers
              and anyone with a bakground in the language can pickup React
              fairly quickly.
            </li>
            <li>
              Reusability: React is based on building reusable components to
              create a webpage. This enables developers to create basic building
              block components that can then be reused as needed.
            </li>
            <li>
              Facilitates easy and quick testing: Flask provides various
              built-in support to do unit testing with relative ease.
            </li>
            <li>
              Allows for experimentation: Since the framework is simple and
              minimalistic, getting a quick web app up and running to experiment
              with something new is easy with Flask.z
            </li>
            <li>
              Mobile Design: A version of React known as React Native can be
              used to build cross platform mobile applications. Once a developer
              knows React they can use the same skills for mobile development.
            </li>
            <li>
              -Efficiency: React uses a virtual DOM which means it only
              re-renders components that require re-evaluation. This feautre
              improves the ovearall performance of the webpage.
            </li>
          </ul>
        </section>
        <h2 className="section-sub-title">Weaknesses:</h2>
        <section>
          <ul>
            <li>
              JSX: While the React library and concepts are fairly easy to learn
              , the JSX syntax can take some time to grasp. JSX stands for
              JavaScriptHTML and is what enables developers to write HTML
              alongside JavaScript
            </li>
            <li>
              Pace of development: This can be seen as both a pro and a con. The
              react library is constantly growing at a rapid pace and this
              allows developers to use new and evolving technologies. However,
              due to the this rapid growth, the documentation for certain things
              can be lacking
            </li>
          </ul>
        </section>

        <h1 className="section-title">
          What developers are using React, and what are they using it for?
        </h1>
        <section>
          <p>
            Developers who are comfortable with JavaScript and want dynamic
            single page applications are most commonly using React. React can
            easily be installed in a matter of minutes which makes it an
            excellent choice for frontend web development. Some websites that
            are currently using React include Netflix, Facebook, Airbnb and
            Reddit.
          </p>
        </section>

        <h1 className="section-title">References</h1>
        <section>
          <ul>
            <li>https://www.statista.com/statistics/1124699/worldwide-developer-survey-most-used-frameworks-web/</li>
            <li>https://www.simform.com/blog/websites-use-react/</li>
            <li>https://dev.to/detimo/python-flask-pros-and-cons-1mlo</li>
            <li>https://www.stxnext.com/blog/flask-vs-django-comparison/</li>
            <li>https://www.javatpoint.com/pros-and-cons-of-react</li>
            <li>https://github.com/pallets/flask</li>
            <li>https://github.com/django/django</li>
            <li>https://dev.to/detimo/python-flask-pros-and-cons-1mlo</li>
            <li>https://www.stxnext.com/blog/flask-vs-django-comparison/</li>
            <li>https://dev.to/amigosmaker/what-is-flask-used-for-2do5</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Page1;
