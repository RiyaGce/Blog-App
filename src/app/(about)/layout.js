import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
    "20+ Projects Completed",
    "2+ Years of Practice",
    "Experience in problem solving",
    "300+ solved problems",
    "Authored In-Depth Course on Educative",
    "Contributed as a Technical Course Reviewer 📝",
    "Recipient of the Hackernoon Noonies Award 🏆",
  ];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
