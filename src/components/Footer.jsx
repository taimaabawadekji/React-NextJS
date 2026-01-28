// export default function Footer() {
//   return (
//     <footer className="bg-white text-black border-t py-4 px-6 mt-12">
//       <div className="max-w-5xl mx-auto text-center text-sm">
//         © {new Date().getFullYear()} Recipe Reach Nextjs App. All rights
//         reserved.
//       </div>
//     </footer>
//   );
// }
// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-amber-400 to-orange-400 text-white mt-12">
//       <div className="max-w-5xl mx-auto py-6 px-6 text-center text-sm">

//         <p className="opacity-90">
//           &copy; {new Date().getFullYear()} Recipe React Next.js App
//         </p>

//         <p className="mt-1 text-xs opacity-70">
//           Cook • Enjoy • Share
//         </p>

//       </div>
//     </footer>
//   );
// }

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-amber-400 to-orange-400 text-white">
      <div className="max-w-5xl mx-auto py-3 px-6 text-center">
        <p className="text-base font-medium">
          &copy; {new Date().getFullYear()} Midad Code Academy
        </p>

        <p className=" text-sm font-light opacity-90">Cook • Enjoy • Share</p>
      </div>
    </footer>
  );
}
