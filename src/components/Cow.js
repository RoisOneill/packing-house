import React from 'react';
import '../stylesheets/cow.scss';

export default function Cow() {
  return (
    <div className="cow--section">
      <section className="cow--section__divider"></section>
      <section className="cow--section__background"></section>
      <article className="cow--section__main">
        <h2>Beef</h2>
        <h3>All of our beef is:</h3>
        <ul className="cow--section__list">
          <li>Hormone & antibiotic free</li>
          <li>Raised on small, family-run farms</li>
          <li>Humane transportation and slaughter</li>
          <li>Low carbon footprint, all beef sourced from southern Ontario farms</li>
        </ul>
      </article>
    </div>
  )
}
