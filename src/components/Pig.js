import React from 'react';
import '../stylesheets/cow.scss';

export default function Pig() {
  return (
    <div className="cow--section">
      <section className="cow--section__divider"></section>
      <section className="pig--section__background"></section>
      <article className="cow--section__main">
        <h2>Pork</h2>
        <h3>All of our pork is:</h3>
        <ul className="cow--section__list">
          <li>Hormone, ractopamine & antibiotic free</li>
          <li>GMO free</li>
          <li>Raised on small, family-run farms</li>
          <li>Humane transportation and slaughter:</li>
        </ul>
        <ul className="pig--section__indented-list">
          <li>Maximum of 5 animals per trailer</li>
          <li>Maximum 15 minutes transportation time to abattoir </li>
        </ul>
      </article>
    </div>
  )
}