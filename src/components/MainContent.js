import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

function MainContent({ children }) {
  return (
    <main className="container mx-auto px-4 py-8 sm:py-12 md:py-16 lg:py-24 animate-fade-in">
      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <article className="p-6 sm:p-10 md:p-12 lg:p-16 markdown">
          <ReactMarkdown>{children}</ReactMarkdown>
        </article>
      </section>
    </main>
  );
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainContent;
