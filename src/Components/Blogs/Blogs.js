import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div className='mt-5 p-3'>
            <div className='blog'>
                <h3>Q:Difference between javascript and nodejs</h3>
                <p>Javascript basically used on the client-side but Nodejs mostly used on the server-side. Javascript is the upgraded version of ECMA script that uses Chrome's V8 engine and written in C++ on the other hand Nodejs is written in C, C++ and Javascript.Javascript is capable enough to add HTML and play with the DOM but Nodejs does not have capability to add HTML tags.Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox but V8 is the Javascript engine inside of node.js that parses and runs Javascript. Some of the javascript frameworks are RamdaJS, TypedJS, etc and some of the Nodejs modules are Lodash, express etc. </p>
            </div>
            <div className='blog'>
                <h3>Q:When should you use nodejs and when should you use mongodb?</h3>
                <p>Node.js is a kind of Javascript-based environment that is easily understood by almost all of the browsers.Nodejs is definitely fast and it allows user to explore a dynamic range of data at real-time. Nodejs  allows code sharing. The most important reason for the rising popularity of nodejs is that the user can code the server-side as well as client-side using it. Node.js is an interpreted, familiar and flexible language. The main aim of using a non-structured database like nodejs is document-based data storage.MongoDB allows us  geospatial queries and is text-search enabled. MongoDB is a distributed database which allows ad-hoc queries, real-time integration, and indexing efficient. Moreover, MongoDB is open-source and perfect for frequently changing data. It also offers server-side data validation. </p>
            </div>
            <div className='blog'>
                <h3>Q:Differences between SQL and NoSQL databases</h3>
                <p>SQL database are types of database that have fixed or static or predefined schema but NoSQL have dynamic schema. SQL is primarily called RDBMS or Relational Databases and NoSQL is a Non-relational or Distributed Database. SQL are scalable vertically but NoSQL are scalable horizontally.Generally SQL Uses a powerful standard language called “Structured Query Language” (SQL) but NoSQL languages varies from database to database. If we compare the speed then SQL is generally slower  than NoSQL.NoSQL databases are mostly document-oriented, non-structured and distributed, unlike SQL databases.  Non-relational databases are more distributed and scattered in comparison to structured databases.  </p>
            </div>
            <div className='blog'>
                <h3>Q:What is the purpose of jwt and how does it work</h3>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties a client and a server. The purpose of  JWT can be define as a way to verify the owner of some JSON data. If a server receives a JWT it  defines that  the data it contains can be trusted because it's signed by the source.A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.Each of JWT token consist of a header,a payload and a signature.In short we can say that JWT are used as a secure way to authenticate users and share information.</p>
            </div>

        </div>
    );
};

export default Blogs;