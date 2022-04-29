import Link from 'next/link';
import {Fragment, fragment} from 'react';

function NewsPage(){
    return (
      <Fragment>
        <h1>News page</h1>
        <ul>
          <li>
            <Link href="/news/welcome-article-with-the-best">
            Welcome article the best part
            </Link>
          </li>
          <li>
            <Link href="/news/another-one">
            Another one!
            </Link>
          </li>
        </ul>
      </Fragment>
    );
  }
 
  export default NewsPage;