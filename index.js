```javascript
//pages/about.js
import {useRouter} from 'next/router';
export default function About(){
    const router = useRouter();
    // Access router properties safely using optional chaining
    console.log(router.pathname);
    console.log(router.query);
    // Check if properties are defined before use
    if(router.isReady){
        return(
            <div>About Page. {router.query.id}</div>
        );
    } else {
        return(
            <div>Loading...</div>
        );
    }
}
```
```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>      
      <Link href='/about/123'>
        <a>Go to About Page with ID</a>
      </Link>
    </div>
  );
}
```