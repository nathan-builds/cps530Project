# Flask

Flask is one of the most popular Python web frameworks, with over 55K GitHub stars. The main advantage of using Flask
over other frameworks is that it is relatively lightweight (compared to other frameworks, namely Django); it does not
require any other tools or libraries, does not contain database abstraction layers, form validation, etc. This can be
considered an advantage (less bloat, libraries/tools not being used don't increase runtime requirements, etc.), and
also a disadvantage (if anything more complex needs to be done, e.g., working with databases, external libraries will be
required, which may or may not add to the learning curve). With that being said, more strengths and weaknesses of the
framework are listed below:

**Strengths**:
- Very flexible: Flask lets the developer control almost as much as they desire due to how minimalist the framework is.
  In particular, due to the limited tooling Flask provides, developers can choose to either implement their own versions
  or find something someone else already implemented.
- Easy to understand, learn, and work with: Due to how simple and minimalistic the framework is, a new developer is able
  to pick up the framework relatively quickly. Furthermore, since you're not working with a bunch of tools to do one
  simple thing unlike other frameworks, you are able to more quickly create something that works and does something
  useful.
- Facilitates easy and quick testing: Flask provides various built-in support to do unit testing with relative ease. 
- Allows for experimentation: Since the framework is simple and minimalistic, getting a quick web app up and running to
  experiment with something new is easy with Flask.
- Open-source: Flask is open-source, meaning you can go in and change what you'd like, create issues, submit pull
  requests to fix issues, etc.
- Community: Following from the previous point, there is a big open-source community around Flask, so there will
  (usually) always be someone that can help you out with any issues.

**Weaknesses**:
- Possible scaling issues: As traffic grows to a website, the web app needs to be able to scale as well. Flask *is* able
  to scale, though a lot more manual work would be involved to get to that point. 
- Modules: One of the strengths mentioned above is being able to implement your own tooling or using something someone
  else has already made. In both cases (though, the latter case is more obvious), there could be security issues. In
  particular, if you decide to use a module provided by someone else, you may not be completely aware of the
  implementation and could open yourself up to security breaches. Similarly, if you decide to implement your own
  solution, it is important to ensure that the code you write is secure and can't be exploited, which is especially so
  for more crticial components of your application. With that being said, the more eyes that are on a module/the code,
  the less of a chance for a security issue to go unnoticed.

## Which developers use Flask, and what do they use it for?

## References:
- https://github.com/pallets/flask
- https://github.com/django/django
- https://dev.to/detimo/python-flask-pros-and-cons-1mlo
- https://www.stxnext.com/blog/flask-vs-django-comparison/
