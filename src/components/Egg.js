import React from 'react';
import '../stylesheets/cow.scss';

export default function Egg() {
  return (
    <div className="cow--section">
      <section className="cow--section__divider"></section>
      <section className="egg--section__background"></section>
      <article className="cow--section__main">
        <h2>Eggs</h2>
        <h3>We carry <u>zero</u> inventory meaning that our eggs are as fresh as they come. They go from the farm, to the grading station, to the customer. Season-driven, yolk colour ranges from deep yellow to orange (always naturally derived without use of synthetic yolk colouring agents).</h3>
        <ul className="cow--section__list">
          <li>Cage free & free run</li>
          <li>Pasture raised in warmer months</li>
        </ul>
      </article>
    </div>
  )
}