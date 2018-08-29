HyperText Markup Language (HTML)
--------------------------------

### In the Beginning, There Was SGML

-   Markup - It is traditional practice in publishing to mark up a
    manuscript to indicate what typeface, style, and size should be used
    for each part
-   A markup has a start tag, and most have content and an end tag
-   Standardized General Markup Language (SGML)
-   Uses tags enclosed by angle brackets to markup text
    -   Example:
        `<quote author="guess_who">Able was I ere I saw Elba</quote>`
    -   The example above is a markup element
    -   The (start) tag name is `quote`
    -   The tag contains an attribute `author`, and its value is
        `guess_who`
    -   The content in the tag is `Able was I ere I saw Elba`
    -   The element has a closing tag: `</quote>`
-   The significance of SGML: it "solves" the hard problem of computer
    understanding documents. That is, the meaning of things and
    interpretation of markups can be determined.

### HyperText Markup Language (HTML)

-   Created by Tim Berners-Lee (now at MIT) in 1991; inspired by SGML
-   The idea: determines document appearance and behavior
-   Initially, it had only a fixed set of tags
-   Lax syntax rules
-   Lax enforcement of the syntax rules on browsers
-   It is not really code in the traditional sense (i.e., no variables
    or loops)
-   Most whitespace is insignificant in HTML. That is, if you have a
    long run of whitespace, it is all collapsed into a single space.
-   Current and latest standard: version 5.0 (2014)

### Structure of an HTML Page

>     <html>
>
>     <!-- This is a comment. It doesn't appear in the rendered document on the browser. -->
>     <!-- This part of the document contains HTML -->
>
>     <head>
>     <!-- Information about the page (e.g., title, abstract, stylesheet declarations, keywords) goes here... -->
>     <!-- ...Does not appear in the rendered document. -->
>     </head>
>
>     <body>
>     <!-- Content of the page goes here.  So many ways to create content. -->
>     </body>
>
>     </html>

### Basic Elements

-   `<title>``</title>` - Page title; must be placed within the head of
    the page! Page title is displayed on title bar of web browser and it
    is used as the name of your bookmark.
-   Block-level elements: contains an entire large region of text:
    -   `<p>``</p>` - Paragraph
    -   `<h#>``</h#>` - Header
    -   `<hr/>` - Horizontal rule; a long horizontal line
    -   `<ul>``</ul>` and `<li>``</li>` - Unordered list; `<ul>``</ul>`
        is a single block of bulleted-list items; each `<li>``</li>`
        inside the `<ul>` is an item of the list
    -   `<ol>``</ol>` and `<li>``</li>` - Ordered list; `<ol>``</ol>` is
        a single block of ordered-list items; each `<li>``</li>` inside
        the `<ol>` is an item of the list
    -   `<dl>``</dl>`, `<dt>``</dt>`, and `<dd>``</dd>` - Definition
        list; `<dl>``<dl>` is a single block of definition items; each
        `<dt>``</dt>` is a term; each `<dd>` is its definition`</dd>`
    -   `<blockquote>``</blockquote>` - A block of quotation
    -   `<pre>``</pre>` - Preformatted text in a fixed-width font
        (Courier). Ideal to display a chunk of source code on a web
        page.
    -   `<div>``</div>` - Division; generic block element (more on this
        in CSS)
    -   `<table>``</table>` - Table
    -   `<form>``</form>` - Web form
-   Inline-level elements: affects a small region of text; must be
    nested inside a block-level element:
    -   `<br/>` - A forced line break
    -   `<code>``</code>` - Display text in a fixed-width font
        (Courier). Makes text look like source code.
    -   `<a>``</a>` - Anchor; a link to another page. Use `href`
        attribute to specify the destination URL
    -   `<img />` - Image
    -   `<b>``</b>` - Presentation: bold (old)
    -   `<strong>``</strong>` - Presentation: strongly emphasized text
        (bold)
    -   `<i>``</i>` - Presentation: italics (old)
    -   `<em>``</em>` - Presentation: emphasized text (italics)
    -   `<u>``</u>` - Presentation: underline
    -   `<sub>``</sub>` - Presentation: subscript
    -   `<sup>``</sup>` - Presentation: superscript
    -   `<font>``</font>` - Presentation: specifies font to use (old)
    -   `<span>``</span>` - Generic inline element (more on this in CSS)

### More on HTML Tags and Attributes

-   Most inline-level elements stay on the same line, and most
    block-level automatically create new lines.
-   Some tags can contain (multiple) attributes. You can place the
    attributes in any order. Example:
    `<a href="http://www.google.com" target="_blank">Click here</a>`
-   Some tags can be open and closed in one tag (i.e., no matching end
    tag). Examples: `<br/>`,
    `<img src="krusty.jpg" width="200" height="200" alt="Krusty the Clown" />`
-   Nesting tags: very important to nest tags correctly
    -   Closing tag must match the most recently opened tag
    -   Example:
        `<p>Remember folks, there is <em>no class</em> on <strong>Thursday, February 21st</strong> but there was class on  <strong><em>Thursday, January 24th</em></strong>!</p>`

### Links and Anchors

-   Types of URL: absolute and relative
-   Absolute - To another website. Example:
    `<a href="http://www.google.com/">The Google</a>`
-   Relative - To another page on current website or domain. Example:
    `<a href="../resources.php">Resources</a>`
-   To a section in a document, specify name in document, then link to
    it using `#` in value of `href`
-   Example:
    `<a href="../resources.html#software">Software Resources</a>`; make
    sure there is a `<a name="software" />` or `<a id="software" />`in
    the `resources.html` page
-   To open a link in a new browser window, use the attribute
    `target="_blank"`

### Images

-   `<img />`
-   The `src` attribute specifies the image URL
-   If image is placed inside of an anchor tag, image will become a
    link. To remove the link border, user the `border` attribute with
    value 0
-   Example:
    `<a href="http://www.google.com/" target="_blank"><img src="http://www.google.com/intl/en_ALL/images/logo.gif" border="0" alt="Google" /></a>`,
    Try it:
    [![Google](http://www.google.com/intl/en_ALL/images/logo.gif)](http://www.google.com/)

### Lists

-   A list can contain other lists
-   Example 1:

        <ul>
        <li>Tom</li>
        <li>Dick</li>
        <li>Harry</li>
        </ul>

-   Example 2:

        <ul>
        <li>Donald
        <ul>
        <li>Huey</li>
        <li>Dewey</li>
        <li>Louie</li>
        </ul>
        </li>
        </ul>

-   Example 3:

        <ul>
        <li>Marvel
        <ul>
        <li>Spider-Man</li>
        <li>Captain America</li>
        <li>Iron Man</li>
        </ul>
        </li>
        <li>Capcom
        <ul>
        <li>Ryu</li>
        <li>Mega Man</li>
        <li>Strider</li>
        </ul>
        </li>
        </ul>

### Special HTML Entities (Characters)

-   `&nbsp;` - Non-breaking space; create a few in a row to create the
    illusion of a tab
-   & - `&amp;`
-   \> - `&gt;`
-   \< - `&lt;`
-   All special HTML entities start with & and end with ;
-   [Reference](http://en.wikipedia.org/wiki/List_of_XML_and_HTML_character_entity_references)

### metadata

-   Information about your web page
-   `<meta />`
-   Placed in the header (`<head>`) section
-   Attributes: `name` or `http-equiv` with `content`
-   Significance: search engine optimization (SEO) --i.e., ranking your
    page or website to the top
-   Names
    -   `author`
    -   `revised` - version; last modification date
    -   `generator` - the software used to generate the web page (e.g.,
        Dreamweaver)
    -   `description` - keep it concise
    -   `keywords` - words separated by a comma; best: 10 - 20 keywords
    -   `abstract` - Similar to description
    -   `robots` - Controls whether or not search engine spiders are
        allowed to index a page and/or follow links from a page
    -   `language`
    -   `viewport` - Necessary for displaying web pages nicely on mobile
        devices
-   Refreshing your page every n seconds, use
    `<meta http-equiv="refresh" content="n " />`
-   Redirecting your page after n seconds, use
    `<meta http-equiv="refresh" content="n;A URL HERE" />`
-   Example 1: what will the following do?

    >     <html>
    >
    >     <head>
    >     <title>Web Programming</title>
    >     <meta http-equiv="refresh" content="5;https://www.facebook.com/srmdsc" />
    >     </head>
    >
    >     <body>
    >     <h2>Sorry, your page was not found.  You will be redirected to a page where I think you wanted to go...</h2>
    >     </body>
    >
    >     </html>

-   Example 2, to make your page viewable on a mobile browser (so the
    text is not tiny):
    `<meta name="viewport" content="width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;" /> `

### Tables

-   Then: used to arrange information in space, and controlling layout
-   Now: best for presenting records, structured data sets
-   Allows specification of arrangement of cells
-   `<table>...</table>`. Attributes:
    -   `border` - Make a border around the table and its cells (0 = no
        border)
    -   `cellspacing` - Specify the distance between cells in a table
    -   `cellpadding` - Specify the spacing between the content of a
        cell and the inner walls of the cell
    -   `width` - Specify the width of the table (e.g., in pixels or
        percentage)
-   `<caption>...</caption>` - Caption for table
-   `<tr>...</tr>`. Table row
-   Cells. Must be inside of a table row `<tr>...</tr>`:
    -   `<td>...</td>` - Normal Cell
    -   `<th>...</th>` - Header cell; content will be bold
    -   Attributes:
        -   `colspan` - Column span; take up n columns (e.g., merge two
            cells together)
        -   `rowspan` - Row span: take up n columns
        -   `width` - Specify width of cell (e.g., in pixels or
            percentage)
        -   `align` - Specify alignment of content in cell (left,
            center, right)
    -   Content inside cells can use HTML
    -   Use `&nbsp;` to create a blank cell

### Internet Media Types and the `<link>` Tag

-   "MIME" (Multipurpose Internet Mail Extensions) type
-   `content-type` attribute
-   A content type has two parts: type and sub-type.
-   Example: `application/pdf` (with document extension `pdf`)
-   List:
    [http://en.wikipedia.org/wiki/Internet\_media\_type](http://en.wikipedia.org/wiki/Internet_media_type)
-   `<link />` - Describes the relationship from the current document to
    the anchor specified by the href attribute. Three attributes: `rel`,
    `type` (one of the MIME types), and `href` (location). Ordering of
    the attributes is not important. Generally placed in the header
    (`<head>`) section.
-   Example 1: the `shortcut icon` relationship is the "favorite icon".
    This icon is an image by the filename `favicon.ico` stored in the
    root directory of the web server
    -   `<link rel="shortcut icon" href="favicon.ico" />`
-   Example 2: the `stylesheet` relationship is for stylesheets (CSS)
    -   `<link type="text/css" rel="stylesheet" href="https://s-static.ak.facebook.com/rsrc.php/zD9IG/hash/3fmceog4.css" />`

### Common Errors in HTML

-   Not closing a tag
-   Not closing a list
-   Improper nesting (document will likely still be rendered, but ugly)
-   Forgetting to put double-quotes around values of attributes
-   Forgetting important attributes for tags (e.g., `alt` for an image)
-   Using upper-case / lower-case tag names interchangeably
-   Hardly anything is enforced in HTML. Even if there is an error, the
    page will most likely still render!

### The Extensible Markup Language (XML)

-   Not just a file format, but a technology
-   Not as general as SGML
-   Extensible: can add new tags and tag hierarchies by embedding
    document type definitions (DTD's) into a document:
    -   DTD - Contains a set of rules that can be used to validate an
        XML file
    -   Create declarations that define elements, attributes, entities,
        and notations for any XML files that reference the DTD file
    -   Establish constraints for how each element, attribute, entity,
        and notation may be used within any XML files that reference the
        DTD file
-   Markups encode meaning
-   Easy to parse (e.g., using PHP, Ruby, etc.)
-   Requirements:
    -   Every tag closes
    -   Every attribute is quoted
    -   Element names are cAsE sEnSiTiVe
-   Example: `<pattern></PATTERN>` is bad!

### Wide Uses of XML

-   Configuration files (e.g., for servers, for web application)
-   Graphics and drawings
-   Game files
-   Data sets
-   Web services
-   RSS feeds

### So What Does the Current Version of HTML, HTML5, Provide?

-   [Infographic](http://thumbnails-visually.netdna-ssl.com/what-is-html5--infographic_50291cafad518_w1500.jpg)
-   The three aspects of HTML5:
    1.  Content (HTML + XML)
    2.  Presentation of content (CSS)
    3.  Interaction with content (JavaScript)
-   XML-based but no longer SGML-based
-   Originally coined as Web Applications 1.0
-   Backing from Google and of course Apple
-   Many incompatibilities (still) exist
-   Flexible with error handling (i.e., incorrect syntax, deprecated
    elements --see below). Older browsers will safely ignore the new
    HTML5 syntax.
-   Validating HTML5 pages:
    [http://validator.w3.org/](http://validator.w3.org/)
    -   Validate this page (WARNING! many errors):
        [http://validator.w3.org/check?uri=http%3A%2F%2Ftuftsdev.github.com%2FWebProgramming%2Fnotes%2Fhtml.html&charset=%28detect+automatically%29&doctype=Inline&group=0](http://validator.w3.org/check?uri=http%3A%2F%2Ftuftsdev.github.com%2FWebProgramming%2Fnotes%2Fhtml.html&charset=%28detect+automatically%29&doctype=Inline&group=0)

### Deprecated Tags in HTML5

-   The presentation elements: `font`, `center`, `b`, `i`, `u`
-   `frame`, `frameset`
-   `applet`
-   Old special effects: `marquee`, `bgsound`
-   `noscript`
-   Reference:
    [http://www.html-5.com/changes/deprecated/](http://www.html-5.com/changes/deprecated/)

### Deprecated Attributes in HTML5

-   `align`
-   `border`
-   Reference:
    [http://www.html-5.com/changes/deprecated/](http://www.html-5.com/changes/deprecated/)

### HTML5: What is In

-   New tags, including `button`, `video`, `audio`, `article`, `footer`,
    `nav`
-   New media events
-   New `canvas` tag for 2D rendering
-   New form controls for date and time
-   Geolocation
-   Local storage
-   New selectors

### Structure of an HTML5 Document

    <!DOCTYPE html>
    <html>
            <head>
                    <title>An HTML Document</title>
                    ...
                    ...
                    ...
            </head>

            <body>
                    ...
                    ...
                    ...
            </body>
    </html>

-   Example (source: [A Preview of HTML5 by Lachlan Hunt,
    http://www.alistapart.com/articles/previewofhtml5/](http://www.alistapart.com/articles/previewofhtml5/)):
-   <!DOCTYPE html>
        <html>
                <head>
                        <title>An HTML Document</title>
                </head>
                <body>
                        <header>
                                <h1>A Preview of HTML5</h1>
                        </header>
                        <nav>
                          <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/about">About</a></li>
                          </ul>
                        </nav>
                        <article>
                                <section>
                                  <h1>Chapter 1: The Period</h1>
                                  <p>It was the best of times, it was the worst of times,
                                         it was the age of wisdom, it was the age of foolishness,
                                         it was the epoch of belief, it was the epoch of incredulity,
                                         it was the season of Light, it was the season of Darkness,...</p>
                                </section>
                        </article>
                        <aside>
                          <h1>Archives</h1>
                          <ul>
                            <li><a href="/2007/09/">September 2007</a></li>
                            <li><a href="/2007/08/">August 2007</a></li>
                            <li><a href="/2007/07/">July 2007</a></li>
                          </ul>
                        </aside>
                </body>
        </html>

-   NOTE: Many new elements such as `aside`, `header`, `footer`,
    `article`, `section`, and `nav` have no effect. That is, the tag
    exists, the meaning of the tag exists, but the effect is undefined!

### Questions

1.  Why should you almost always use relative URLs for your website?
2.  Give an example where you should use an absolute URL.
3.  In HTML5, the `border` attribute is prohibited for images. Why?
4.  It is good practice to also set `height` and `width` attributes for
    image. Why?
5.  Compliance with the [Section 508 Amendment to the Rehabilitation Act
    of 1973](http://www.section508.gov/) requires the `alt` attribute to
    describe the image (alternative text). Why?

