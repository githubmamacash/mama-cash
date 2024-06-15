import { useState, type ReactElement } from "react";

export default function IssuesNav() {
  const [currentIssue, setCurrentIssue] = useState(0);

  const issuesNavItem = (issue: string, index: number) => {
    return (
      <article className="grid grid-cols-[auto_1fr] items-center">
        <button
          className={`relative my-auto mr-4 aspect-square w-8 rounded-full border-2 ${index < currentIssue ? "bg-[#750F3C] transition-[background-color] delay-150 duration-150" : "bg-white"} ${index <= currentIssue ? "border-[#750F3C]" : "border-[#FDB813]"}`}
          onClick={() => {
            setCurrentIssue(index);
          }}
        >
          <figure className="flex h-full w-full items-center justify-center">
            <div
              className={`overflow-hidden rounded-full bg-[#750F3C] transition-[width,height] duration-150 ${index <= currentIssue ? (index < currentIssue ? "h-full w-full" : "h-[10px] w-[10px]") : "h-0 w-0"}`}
            >
              <img
                className={`absolute inset-0 m-auto transition-opacity ${index < currentIssue ? "opacity-100" : "opacity-0"}`}
                src="/src/assets/check.svg"
                alt=""
              />
            </div>
          </figure>
          <figure
            className={
              index > 0 &&
              index !== 8 &&
              `absolute left-0 right-0 transition-colors -z-10 mx-auto h-16 w-[2px] -translate-y-full ${index <= currentIssue ? "bg-[#750F3C]" : "bg-[#FDB813]"}`
            }
          />
        </button>

        <h3
          className={`leading-none text-white ${currentIssue === index ? "font-extrabold" : "font-normal"}`}
        >
          {issue}
        </h3>
      </article>
    );
  };

  return (
    <div className="isolate grid h-svh max-h-fit grid-cols-[12fr_19fr]">
      <div className="relative isolate flex h-full flex-col gap-8 overflow-scroll rounded-l-3xl bg-[#E91E78] p-11 pr-2">
        <h2 className="max-w-[39ch] text-sm font-medium italic text-white">
          <b className="font-semibold">
            Responding to the world’s interconnected crises
          </b>{" "}
          (8 of many issues)
        </h2>
        {[
          "Lesbian, Bisexual and Queer Rights",
          "Reproductive Justice",
          "Countering Gender-Based Violence",
          "Sex Workers’ Rights",
          "Racial Justice",
          "Economic Justice",
          "Disability Justice",
          "Environmental Justice",
        ].map((issue, index) => issuesNavItem(issue, index))}

        <h2 className="mt-3 text-sm font-semibold italic text-white">
          Advocating for improved support to feminist funds
        </h2>
        {[
          "Relationships with Money",
          "Strengthening Feminist Funding Architectures",
        ].map((issue, index) => issuesNavItem(issue, index + 8))}
      </div>
      <div className="overflow-scroll rounded-r-3xl bg-[#FDB813] px-12 py-12">
        <p className="mb-12">
          These changes were propelled by rapidly growing feminist activism
          throughout the world, represented by increasing numbers of feminist
          activist groups, funds, and networks. It has always prioritised
          lesbian and Black woman’s leadership while also amplifying the voices
          of trans and intersex individuals and sex workers in its funding and
          advocacy efforts. Through short briefs, this study sheds light on ten
          of the many key issues and communities that have been central to
          feminist movements and Mama Cash’s grantmaking over the past four
          decades.
        </p>

        <article className="relative isolate mb-16">
          <img
            className="absolute -right-8 top-0 -z-10 w-96"
            src="/worldmap-grid.svg"
            alt=""
          />
          <h2 className="mb-4 font-display text-[95px] font-bold leading-[0.9em]">
            €17 million
          </h2>
          <p className="mb-7 max-w-[27ch] text-lg font-semibold uppercase tracking-[-1%]">
            PROVIDED TO REPRODUCTIVE JUSTICE ACTIVISM GROUPS AND MOVEMENTS OVER
            40 YEARS
          </p>

          <div className="flex gap-10 font-display text-xl font-medium text-[#141392]">
            <h3 className="flex items-center">
              <b className="mr-4 bg-[#E91E78] px-3 text-2xl text-white">922</b>{" "}
              Grants
            </h3>
            <h3 className="flex items-center">
              <b className="mr-4 bg-[#E91E78] px-3 text-xl text-white">100</b>{" "}
              Countries
            </h3>
          </div>
        </article>

        <p className="mb-14">
          These changes were propelled by rapidly growing feminist activism
          throughout the world, represented by increasing numbers of feminist
          activist groups, funds, and networks. It has always prioritised
          lesbian and Black woman’s leadership while also amplifying the voices
          of trans and intersex individuals and sex workers in its funding and
          advocacy efforts. Through short briefs, this study sheds light on ten
          of the many key issues and communities that have been central to
          feminist movements and Mama Cash’s grantmaking over the past four
          decades.
        </p>

        <div className="aspect-[860/270] overflow-hidden rounded-xl">
          <img
            className="h-full w-full object-cover object-[0%_70%]"
            src="/people.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
