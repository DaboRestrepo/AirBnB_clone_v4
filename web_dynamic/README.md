# 0x06. AirBnB clone - Web dynamic

<html>
<div class="panel panel-default" id="project-description">
 <div class="panel-body">
  <h2>
   Resources
  </h2>
  <p>
   <strong>
    Read or watch
   </strong>
   :
  </p>
  <ul>
   <li>
    <a href="https://jquery-tutorial.net/selectors/using-elements-ids-and-classes/" target="_blank" title="Selector">
     Selector
    </a>
   </li>
   <li>
    <a href="https://jquery-tutorial.net/dom-manipulation/getting-and-setting-content/" target="_blank" title="Get and set content">
     Get and set content
    </a>
   </li>
   <li>
    <a href="https://jquery-tutorial.net/dom-manipulation/getting-and-setting-css-classes/" target="_blank" title="Manipulate CSS classes">
     Manipulate CSS classes
    </a>
   </li>
   <li>
    <a href="https://jquery-tutorial.net/dom-manipulation/the-append-and-prepend-methods/" target="_blank" title="Manipulate DOM elements">
     Manipulate DOM elements
    </a>
   </li>
   <li>
    <a href="https://learn.jquery.com/using-jquery-core/document-ready/" target="_blank" title="Document ready">
     Document ready
    </a>
   </li>
   <li>
    <a href="https://jquery-tutorial.net/ajax/introduction/" target="_blank" title="Introduction">
     Introduction
    </a>
   </li>
   <li>
    <a href="https://jquery-tutorial.net/ajax/the-get-and-post-methods/" target="_blank" title="GET &amp; POST request">
     GET &amp; POST request
    </a>
   </li>
   <li>
    <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS" target="_blank" title="HTTP access control (CORS)">
     HTTP access control (CORS)
    </a>
   </li>
  </ul>
  <h2>
   Learning Objectives
  </h2>
  <p>
   At the end of this project, you are expected to be able to
   <a href="https://fs.blog/feynman-learning-technique/" target="_blank" title="explain to anyone">
    explain to anyone
   </a>
   ,
   <strong>
    without the help of Google
   </strong>
   :
  </p>
  <h3>
   General
  </h3>
  <ul>
   <li>
    How cool it is to request your own API
   </li>
   <li>
    How to modify an HTML element style
   </li>
   <li>
    How to get and update an HTML element content
   </li>
   <li>
    How to modify the DOM
   </li>
   <li>
    How to make a
    <code>
     GET
    </code>
    request with JQuery Ajax
   </li>
   <li>
    How to make a
    <code>
     POST
    </code>
    request with JQuery Ajax
   </li>
   <li>
    How to listen/bind to DOM events
   </li>
   <li>
    How to listen/bind to user events
   </li>
  </ul>
  <h2>
   More Info
  </h2>
  <h3>
   Import JQuery
  </h3>
  <pre><code>&lt;head&gt;
    &lt;script src="https://code.jquery.com/jquery-3.2.1.min.js"&gt;&lt;/script&gt;
&lt;/head&gt;
</code></pre>
  <h3>
   Before starting the project…
  </h3>
  <p>
   You will work on a codebase using
   <a href="https://github.com/flasgger/flasgger" target="_blank" title="Flasgger">
    Flasgger
   </a>
   , you will need to install it locally first before starting the RestAPI:
  </p>
  <pre><code>$ sudo apt-get install -y python3-lxml
$ sudo pip3 install flask_cors # if it was not installed yet
$ sudo pip3 install flasgger
</code></pre>
  <p>
   If the RestAPI is not starting, please read the error message. 
Based on the(ses) error message(s), you will have to troubleshoot potential dependencies issues.
  </p>
  <p>
   Here some solutions:
  </p>
  <h4>
   <code>
    jsonschema
   </code>
   exception
  </h4>
  <pre><code>$ sudo pip3 uninstall -y jsonschema 
$ sudo pip3 install jsonschema==3.0.1
</code></pre>
  <h4>
   <code>
    No module named 'pathlib2'
   </code>
  </h4>
  <pre><code>$ sudo pip3 install pathlib2
</code></pre>
  <h3>
   Expose ports from your Vagrant
  </h3>
  <p>
   In your
   <code>
    Vagrantfile
   </code>
   , add this line for each port forwarded
  </p>
  <pre><code># I expose the port 5001 of my vm to the port 5001 on my computer
config.vm.network :forwarded_port, guest: 5001, host: 5001 
</code></pre>
  <p>
   if you need to expose other ports, same line but you will need to replace the “guest port” (inside your vagrant) and your “host port” (outside your vagrant, used from your browser for example)
  </p>
  <p>
   It’s important in your project, to use the AirBnB API with the port
   <code>
    5001
   </code>
  </p>
  <p>
   <br/>
   <br/>
   <img alt="" src="https://s3.amazonaws.com/intranet-projects-files/concepts/74/hbnb_step5.png" style=""/>
  </p>
  <h3>
   Manual QA Review
  </h3>
  <p>
   <strong>
    It is your responsibility to request a review for this project from a peer before the project’s deadline. If no peers have been reviewed, you should request a review from a TA or staff member.
   </strong>
  </p>
 </div>
</div>

[--LINK PROJECT--](https://intranet.hbtn.io/projects/309)
</html>