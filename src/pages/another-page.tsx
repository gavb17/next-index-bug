import Link from "next/link";

export default function Home(props) {
  console.log({ props });

  return (
    <main>
      <Link href="/">test {props.pageName}</Link>
    </main>
  );
}

export const getServerSideProps = () => {
  return {
    props: {
      pageName: "page 2",
    },
  };
};
