import css from './default.module.css';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <ul className={css.menuList}>
      <li className={css.menuItem}>
        <Link href={`/filter/All`} className={css.menuLink}>
          All notes
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link href={`/filter/Todo`} className={css.menuLink}>
          Todo
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link href={`/filter/Work`} className={css.menuLink}>
          Work
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link href={`/filter/Personal`} className={css.menuLink}>
          Personal
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link href={`/filter/Meeting`} className={css.menuLink}>
          Meeting
        </Link>
      </li>
      <li className={css.menuItem}>
        <Link href={`/filter/Shopping`} className={css.menuLink}>
          Shopping
        </Link>
      </li>
    </ul>
  );
}
