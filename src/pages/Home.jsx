const Home = () => {
  return (
    <div>
      <h2>Home page</h2>
      <label className="swap swap-flip text-9xl">
        {/* this hidden checkbox controls the state */}
        <input type="checkbox" />

        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>

      <div className="xl:grid xl:grid-cols-2 grid grid-cols-1">
        <p className="text-2xl px-4 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi,
          tempora nihil ipsa reprehenderit sed modi, reiciendis impedit
          doloremque magnam saepe, sequi similique consequuntur corporis iusto
          illo facere maiores eius. Velit numquam reprehenderit officia aperiam
          ipsa odit ipsam cum libero. Labore doloribus corrupti iste nemo in
          molestias quod eius. Accusamus, veniam! Cupiditate ullam minus est
          dolor debitis numquam dolorum deleniti. Sunt aspernatur tempore
          repudiandae laudantium laborum, cupiditate praesentium? Ipsam commodi,
          culpa nostrum soluta atque, architecto magnam amet rem, suscipit
          maiores dicta quos necessitatibus? Eos ducimus ut omnis reprehenderit,
          iure veniam!
        </p>
        <figure className="diff aspect-16/9" tabIndex={0}>
          <div className="diff-item-1" role="img">
            <img
              alt="daisy"
              src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.webp"
            />
          </div>
          <div className="diff-item-2" role="img" tabIndex={0}>
            <img
              alt="daisy"
              src="https://img.daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-blur.webp"
            />
          </div>
          <div className="diff-resizer"></div>
        </figure>
        <p className="text-2xl px-4 mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id animi,
          tempora nihil ipsa reprehenderit sed modi, reiciendis impedit
          doloremque magnam saepe, sequi similique consequuntur corporis iusto
          illo facere maiores eius. Velit numquam reprehenderit officia aperiam
          ipsa odit ipsam cum libero. Labore doloribus corrupti iste nemo in
          molestias quod eius. Accusamus, veniam! Cupiditate ullam minus est
          dolor debitis numquam dolorum deleniti. Sunt aspernatur tempore
          repudiandae laudantium laborum, cupiditate praesentium? Ipsam commodi,
          culpa nostrum soluta atque, architecto magnam amet rem, suscipit
          maiores dicta quos necessitatibus? Eos ducimus ut omnis reprehenderit,
          iure veniam!
        </p>
      </div>
      <button className="btn btn-neutral">Neutral</button>
      <button className="btn btn-primary">Primary</button>
      <button className="btn btn-secondary">Secondary</button>
      <button className="btn btn-accent">Accent</button>
      <button className="btn btn-info">Info</button>
      <button className="btn btn-success">Success</button>
      <button className="btn btn-warning">Warning</button>
      <button className="btn btn-error">Error</button>
    </div>
  );
};
export default Home;
