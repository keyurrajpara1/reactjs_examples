"use client";
export default function DarkTheme() {
  return (
    <>
      <style jsx global>{`
        :root{
          --background-color: #000;
          --text-color: #fff;
          --link-color: #ffa500;
        }
      `}</style>
    </>
  )
}
