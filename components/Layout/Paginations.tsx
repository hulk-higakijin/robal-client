import Link from "next/link";

const Paginations = () => {
  return (
    <div className="paginations">
      <ul className="pager">
        <li>
          <a className="pager-prev" href="#" />
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="pager-number">1</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="pager-number">2</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="pager-number">3</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="pager-number">4</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="pager-number">5</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="pager-number active">6</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="#">
            <a className="pager-number">7</a>
          </Link>
        </li>
        <li>
          <a className="pager-next" href="#" />
        </li>
      </ul>
    </div>
  );
};

export default Paginations;
